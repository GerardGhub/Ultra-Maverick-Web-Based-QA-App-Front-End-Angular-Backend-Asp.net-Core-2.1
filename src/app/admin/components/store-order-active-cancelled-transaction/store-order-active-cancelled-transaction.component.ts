import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AllowablePercentage } from 'src/app/models/allowable-percentage';
import { CancelledPOTransactionStatus } from 'src/app/models/cancelled-potransaction-status';
import { ClientLocation } from 'src/app/models/client-location';
import { DryWhStoreOrders } from 'src/app/models/dry-wh-store-orders';
import { Project } from 'src/app/models/project';
import { RejectedStatus } from 'src/app/models/rejected-status';
import { TblNearlyExpiryMgmt } from 'src/app/models/tbl-nearly-expiry-mgmt';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { AllowablePercentageService } from 'src/app/services/allowable-percentage.service';
import { CancelledPOTransactionStatusService } from 'src/app/services/cancelled-potransaction-status.service';
import { ClientLocationsService } from 'src/app/services/client-locations.service';
import { LoginService } from 'src/app/services/login.service';
import { ProjectsPartialPoService } from 'src/app/services/projects-partial-po.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { RejectedStatusService } from 'src/app/services/rejected-status.service';
import { TblDryPartialReceivingRejectionService } from 'src/app/services/tbl-dry-partial-receiving-rejection.service';
import { TblNearlyExpiryMgmtService } from 'src/app/services/tbl-nearly-expiry-mgmt.service';
import { WhCheckerDashboardService } from 'src/app/services/wh-checker-dashboard.service';
import * as $ from "jquery";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-store-order-active-cancelled-transaction',
  templateUrl: './store-order-active-cancelled-transaction.component.html',
  styleUrls: ['./store-order-active-cancelled-transaction.component.scss']
})
export class StoreOrderActiveCancelledTransactionComponent implements OnInit {
  projects: DryWhStoreOrders[] = [];
  clientLocations: Observable<ClientLocation[]>;
  showLoading: boolean = true;

  allowableqty: number = null;
  actualqty: number = null;
  expirable_material: string = null;
  ApprovedPreparationDate: string = "";
  FoxStoreCode: number = 0;

  newProject: Project = new Project();
  editProject: DryWhStoreOrders = new DryWhStoreOrders();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;
  searchBy: string = "po_number";
  searchByItems: string = "store_name";
  searchText: string = "";
  ToDay: Date;
  ToDayforMaxDate: Date;

  activeUser: string = "";
  PartialEntry: string = "";
  PartialComment: string = "";
  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 7;



  pageSizeItemList: number = 2;
  pagesItemList: any[] = [];
  currentPageIndexItem: number = 0;

  totalPoRowCount: number = null;
  totalPartial: number = null;

  totalPartialReceivingCancel: number = null;

  totalItemsPrepared: string = "";

  @ViewChild("newForm") newForm: NgForm;
  @ViewChild("editForm") editForm: NgForm;
  @ViewChild("cancelForm") cancelForm: NgForm;

  PoNumberBinding: string = "";
  //sample
  msgrejectremarksno1: number = 0;
  msgrejectremarksno2: number = 0;
  msgrejectremarksno3: number = 0;
  //Calculator for Reject

  secondInput: number = 10;
  Deactivator: string = "0";
  StringNone: string = "None";
  Activator: string = "1";
  ActualRemaining: number = 0;
  totalPoPartialReceiving: number = 0;
  RandomNumber: number = 0;

  //date-picker

  // minDate: Date = new Date("2021-05-01");
  minDate = moment(new Date()).format('YYYY-MM-DD');
  maxDate = moment(new Date()).format('YYYY-MM-DD');

  // maxDate: Date = new Date("2010-12-31");


  dateHint: string = "Choose date of birth";
  startDate: Date = new Date("2002-01-01");

  //Sorting
  sortBy: string = "po_number";
  sortOrder: string = "ASC"; //ASC | DESC

  //Sample for Testing Status
  RejectStatuses: Observable<RejectedStatus[]>;

  CancelPoSummary: Observable<CancelledPOTransactionStatus[]>;
  //Objects for Holding Model Data


  AllowableNearlyExpiryDays: Observable<TblNearlyExpiryMgmt[]>;

  AllowablePercentages: Observable<AllowablePercentage[]>;
  //New 10/19/2021 for Canceel Partial
  ProjectsAllowableQty: Observable<Project[]>;
  WhRejectRemarks: Observable<DryWhStoreOrders[]>;

  constructor(private projectsService: ProjectsService, private clientLocationsService: ClientLocationsService, private toastr: ToastrService, public loginService: LoginService,
    private rejectedStatusService: RejectedStatusService, private allowablePercentageService: AllowablePercentageService, private cancelledPOTransactionStatusService: CancelledPOTransactionStatusService,
    private projectsPartialPoService: ProjectsPartialPoService, private tblNearlyExpiryMgmtService: TblNearlyExpiryMgmtService,
    private formBuilder: FormBuilder, private whCheckerDashboardService: WhCheckerDashboardService, private tblDryPartialReceivingRejectionService: TblDryPartialReceivingRejectionService) {

  }

  ngOnInit(): void {
    this.loginService.detectIfAlreadyLoggedIn(); //detect already Login
    this.ToDay = new Date();
    this.activeUser = this.loginService.currentUserName;
    // debugger;
    this.whCheckerDashboardService.getDistinctPreparedStoreOrderHasPartialCancel()
      .subscribe(
        (response: DryWhStoreOrders[]) => {
          // debugger;

          this.projects = response;

          this.showLoading = false;
          this.calculateNoOfPages();
          this.totalPoRowCount = response.length;
        }
      );

    this.clientLocations = this.clientLocationsService.getClientLocations();

    //

    // Here 
    this.RejectStatuses = this.rejectedStatusService.getListOfStatusOfReject();
    // Here 
    this.CancelPoSummary = this.cancelledPOTransactionStatusService.getListOfStatusOfData();
    //

    this.HideRejectRowUsingJquery();


    //Call the PercentaGE aLLOWABLE
    this.AllowablePercentages = this.allowablePercentageService.getAllAlowablePercentage();

    //Call The active Allowable Percentage Dynamic Entry
    this.AllowableNearlyExpiryDays = this.tblNearlyExpiryMgmtService.getAllExpiryDaysData();

  }

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  @ViewChild("prjID") prjID: ElementRef;
  @ViewChild("IsActivated") IsActivated: ElementRef;
  @ViewChild("received_by") received_by: ElementRef;
  //Rejection Children
  @ViewChild("rejectNo1") rejectNo1: ElementRef;
  @ViewChild("rejectNo2") rejectNo2: ElementRef;
  @ViewChild("rejectNo3") rejectNo3: ElementRef;
  @ViewChild("confirmReject") confirmReject: ElementRef;
  @ViewChild("rejectIsnotMactchSpanTag") rejectIsnotMactchSpanTag: ElementRef;
  @ViewChild("totalofReject") totalofReject: ElementRef;
  @ViewChild("rejectedStatusElementNo3") rejectedStatusElementNo3: ElementRef;
  //Percentage Computation
  @ViewChild("ActiveAllowablePercentage") ActiveAllowablePercentage: ElementRef;
  @ViewChild("TotalAllowablePercentage") TotalAllowablePercentage: ElementRef;
  @ViewChild("ExpectedDeliveryActual") ExpectedDeliveryActual: ElementRef;
  //Expiry Date
  @ViewChild("ExpiryDateChild") ExpiryDateChild: ElementRef;
  //Actual Delivery
  @ViewChild("ActualDeliveryChild") ActualDeliveryChild: ElementRef;
  //Rejected Status Remarks
  @ViewChild("RejectedStatus1") RejectedStatus1: ElementRef;
  @ViewChild("RejectedStatus2") RejectedStatus2: ElementRef;
  @ViewChild("RejectedStatus3") RejectedStatus3: ElementRef;
  //Remaing Computation
  @ViewChild("ActualRemainingReceiving") ActualRemainingReceiving: ElementRef;
  @ViewChild("QtyOrdered") QtyOrdered: ElementRef;
  //Allowable Expiration Days Set Point Binding
  @ViewChild("ActiveNearlyExpirySetpoint") ActiveNearlyExpirySetpoint: ElementRef;
  //Item Description
  @ViewChild("ItemDescription") ItemDescription: ElementRef;
  //PO Number
  @ViewChild("PONumber") PONumber: ElementRef;
  @ViewChild("ServeQuantity") ServeQuantity: ElementRef;
  //Active Partial Receiving Set Point
  @ViewChild("ActivePartialReceiving") ActivePartialReceiving: ElementRef;

  @ViewChild("ItemCountArrayPreparedItem") ItemCountArrayPreparedItem: ElementRef;


  //Selection of Compliation ViewChild In And Out
  @ViewChild("remarksSectionA1") remarksSectionA1: ElementRef;
  @ViewChild("remarksSectionA2") remarksSectionA2: ElementRef;
  @ViewChild("remarksSectionA3") remarksSectionA3: ElementRef;
  @ViewChild("remarksSectionA4") remarksSectionA4: ElementRef;
  @ViewChild("remarksSectionA5") remarksSectionA5: ElementRef;
  //Additional Entry ViewChild In And Out
  @ViewChild("remarksSectionB1") remarksSectionB1: ElementRef;
  @ViewChild("remarksSectionB2") remarksSectionB2: ElementRef;
  @ViewChild("remarksSectionB3") remarksSectionB3: ElementRef;
  @ViewChild("remarksSectionB4") remarksSectionB4: ElementRef;
  @ViewChild("remarksSectionB5") remarksSectionB5: ElementRef;
  @ViewChild("remarksSectionB6") remarksSectionB6: ElementRef;
  //Additional Entry ViewChild In And Out
  @ViewChild("remarksSectionC1") remarksSectionC1: ElementRef;
  @ViewChild("remarksSectionC2") remarksSectionC2: ElementRef;
  @ViewChild("remarksSectionC3") remarksSectionC3: ElementRef;
  @ViewChild("remarksSectionC4") remarksSectionC4: ElementRef;
  //Additional Entry ViewChild In And Out
  @ViewChild("remarksSectionD1") remarksSectionD1: ElementRef;
  @ViewChild("remarksSectionD2") remarksSectionD2: ElementRef;
  @ViewChild("remarksSectionD3") remarksSectionD3: ElementRef;
  @ViewChild("remarksSectionD4") remarksSectionD4: ElementRef;
  //Additional Entry ViewChild In And Out
  @ViewChild("remarksSectionE1") remarksSectionE1: ElementRef;
  @ViewChild("remarksSectionE2") remarksSectionE2: ElementRef;
  @ViewChild("remarksSectionE3") remarksSectionE3: ElementRef;
  @ViewChild("remarksSectionE4") remarksSectionE4: ElementRef;
  @ViewChild("remarksSectionE5") remarksSectionE5: ElementRef;
  @ViewChild("remarksSectionE6") remarksSectionE6: ElementRef;
  @ViewChild("remarksSectionE7") remarksSectionE7: ElementRef;
  @ViewChild("remarksSectionE8") remarksSectionE8: ElementRef;

  HideRejectRowUsingJquery() {
    //Number 1
    $("#rejectionrow1").hide();
    $("#rejectionrow12").hide();
    // Number 2
    $("#rejectionrow2").hide();
    $("#rejectionrow22").hide();
    //Number 3
    $("#rejectionrow3").hide();
    $("#rejectionrow32").hide();

    //Button for Removing a Remarks
    $("#remove-remarks-button").hide();

    //total reject & confirmation of reject
    $("#total-reject").hide();
    $("#total-confirm-reject").hide();
  }

  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
    var noOfPages = Math.ceil(resultProjects.length / this.pageSize);

    // var noOfPages = Math.ceil(filterPipe.transform(this.projects, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];




    //Generate Pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({ pageIndex: i });
    }
    this.currentPageIndex = 0;
  }


  onSearchTextKeyup(event) {
    // this.editForm.resetForm();

    //Recall the calculateNoOfPages
    if ($('#txtSearchText').is(":empty")) {
      // this.ngOnInit();

    }



    this.calculateNoOfPages();

  }


  onUpdateClick() {

    var gridTable = (<HTMLTableElement>document.getElementById("GridView2"));
    // document.getElementById("GridView2");
    var result = "";
    if (gridTable) {
      for (var i = 0; i < gridTable.rows.length; i++) {
        if (gridTable.rows[i].cells[5]) {
          // console.log(gridTable.rows[i].cells[5].innerText);
          result = gridTable.rows[i].cells[5].innerText;

          // result = result + "   "+ gridTable.rows[i].cells[5].innerText;
        }
      }
    }



    // alert(this.totalItemsPrepared);


    if (parseFloat(result).toString() == parseFloat(this.totalItemsPrepared).toString()) {


    }
    else {

      this.CannotApprovedDataCancelled();
      return;

    }








    var StoreName = this.ItemDescription.nativeElement.value;



    if (this.editForm.valid) {

      //Start of Questioning in Non Expirable Raw Mater Validation with Else

      //Start
      Swal.fire({

        title: 'Are you sure you want to approve ?',
        text: StoreName,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {

          if (this.editForm.valid) {
            this.UpdateClickDetails();
          }
          else {
            this.FieldOutRequiredField();

          }


        }
      })


      //End 

    }

    else {
      this.FieldOutRequiredField();
    }





  }

  CannotApprovedDataCancelled() {
    this.toastr.warning('Cannot approved, you have a rejected items!', 'Notifications');
  }

  FieldOutRequiredField() {
    this.toastr.warning('Field out the required fields!', 'Notifications');
  }

  HideSearchBtn(event: any) {
    $("#SearchBtnDetailed").show();

  }

  UpdateClickDetails() {


    if (this.editForm.valid) {


      //End of Variable
      this.whCheckerDashboardService.updateProject(this.editProject).subscribe((response: DryWhStoreOrders) => {
        var p: DryWhStoreOrders = new DryWhStoreOrders();
        p.is_approved_prepa_date = response.is_approved_prepa_date;
        p.category = response.category;
        p.route = response.route;
        p.area = response.area;
        p.store_name = response.store_name;
        p.is_wh_approved = response.is_wh_approved;
        p.is_wh_approved_by = response.is_wh_approved_by;

        this.projects[this.editIndex] = p;

        this.editProject.is_approved_prepa_date = null;
        this.editProject.category = null;
        this.editProject.route = null;
        this.editProject.area = null;
        this.editProject.store_name = null;
        this.editProject.is_wh_approved = null;
        this.editProject.is_wh_approved_by = null;
        this.editProject.is_wh_approved_date = null;

        this.showApprovedSuccess();
        this.closeAddExpenseModal.nativeElement.click();
        this.ngOnInit();
        $("#editFormCancel").trigger("click");
      },
        (error) => {
          console.log(error);
        });
    }
  }

  showApprovedSuccess() {
    this.toastr.success('Successfully Approve!', 'Notifications');
  }

  onSaveClick() {
    ///No Content Here !
  }


  onPageIndexClicked(pageIndex: number) {
    // this.currentPageIndex = pageIndex;
    //Set currentPageIndex
    if (pageIndex >= 0 && pageIndex < this.pages.length) {
      this.currentPageIndex = pageIndex;
    }
  }

  CancelledPoDetails() {


    if (this.cancelForm.valid) {


      var Item = this.ItemDescription.nativeElement.value;
      var AllocatedQuantity = this.ServeQuantity.nativeElement.value;

      Swal.fire({
        title: 'Are you sure you want to cancel the serving of ' + Item + '?',
        text: AllocatedQuantity,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {


          // this.UpdateCancelItemClickDetailsOverAll();
          this.UpdateCancelItemClickDetails();



        }
      })

    }
    else {
      this.FieldOutRequiredField();
      return;
    }




  }

  UpdateCancelItemClickDetails() {

    // alert("Plano na naman");

    if (this.editForm.valid) {


      //End of Variable
      this.whCheckerDashboardService.updateStoreOrderPerItem(this.editProject).subscribe((response: DryWhStoreOrders) => {
        var p: DryWhStoreOrders = new DryWhStoreOrders();
        p.is_approved_prepa_date = response.is_approved_prepa_date;
        p.primary_id = response.primary_id;
        p.is_wh_checker_cancel = response.is_wh_checker_cancel;
        p.is_wh_checker_cancel_by = response.is_wh_checker_cancel_by;
        p.is_wh_checker_cancel_date = response.is_wh_checker_cancel_date;
        p.is_wh_checker_cancel_reason = response.is_wh_checker_cancel_reason;





        // this.received_by.nativeElement.value = this.loginService.currentUserName;
        this.projects[this.editIndex] = p;
        // 01/14/2022  GerardSingian
        this.editProject.is_approved_prepa_date = null;
        this.editProject.primary_id = null;
        this.editProject.is_wh_checker_cancel = null;
        this.editProject.is_wh_checker_cancel_by = null;
        this.editProject.is_wh_checker_cancel_date = null;
        this.editProject.is_wh_checker_cancel_reason = null;


        this.showCancelledSuccess();
        this.closeAddExpenseModal.nativeElement.click();
        this.ngOnInit();
        $("#editFormCancel").trigger("click");
      },
        (error) => {
          console.log(error);
        });
    }
  }
  showCancelledSuccess() {
    this.toastr.success('Successfully Cancelled!', 'Notifications');
  }

  
  onDeleteConfirmClick() {
    Swal.fire({
      title: 'Are you sure the you to delete the selected data?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.OnDeleteDetails();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.showDeletedSuccess();
      }
    })

  }

  showDeletedSuccess() {
    this.toastr.success('Successfully Deleted!', 'Notifications');
  }

  OnDeleteDetails() {

    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.teamSize = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.supplier = null;
        this.deleteProject.item_code = null;
        this.deleteProject.item_description = null;
        this.deleteProject.po_number = null;
        this.deleteProject.po_date = null;
        this.deleteProject.pr_number = null;
        this.deleteProject.pr_date = null;
        this.deleteProject.qty_order = null;
        this.deleteProject.qty_uom = null;
        this.deleteProject.mfg_date = null;
        this.deleteProject.expiration_date = null;
        this.deleteProject.expected_delivery = null;
        this.deleteProject.actual_delivery = null;
        this.deleteProject.actual_remaining_receiving = null;
        this.deleteProject.received_by_QA = null;
        this.deleteProject.c_inner_walls_desc = null;
        this.deleteProject.c_compliance = null;
        this.deleteProject.c_remarks = null;
        this.deleteProject.d_plastic_curtains_desc = null;
        this.deleteProject.d_compliance = null;
        this.deleteProject.d_remarks = null;
        this.deleteProject.e_thereno_pest_desc = null;
        this.deleteProject.e_compliance = null;
        this.deleteProject.e_remarks = null;
        //Section 2
        //A
        this.deleteProject.a_clean_company_dos = null;
        this.deleteProject.a_compliance_dos = null;
        this.deleteProject.a_remarks_dos = null;
        //B
        this.deleteProject.b_delivery_staff_symptoms_dos = null;
        this.deleteProject.b_compliance_dos = null;
        this.deleteProject.b_remarks_dos = null;
        //C
        this.deleteProject.c_inner_walls_clean_dos = null;
        this.deleteProject.c_compliance_dos = null;
        this.deleteProject.c_remarks_dos = null;
        //D
        this.deleteProject.d_plastic_curtains_dos = null;
        this.deleteProject.d_compliance_dos = null;
        this.deleteProject.d_remarks_dos = null;
        //E
        this.deleteProject.e_no_accessories_dos = null;
        this.deleteProject.e_compliance_dos = null;
        this.deleteProject.e_remarks_dos = null;
        //F
        this.deleteProject.f_compliance_dos = null;
        this.deleteProject.f_no_pests_sightings_dos = null;
        this.deleteProject.f_remarks_dos = null;
        //Section 3
        //A
        this.deleteProject.a_pallet_crates_tres = null;
        this.deleteProject.a_compliance_tres = null;
        this.deleteProject.a_remarks_tres = null;
        //B
        this.deleteProject.b_product_contamination_tres = null;
        this.deleteProject.b_compliance_tres = null;
        this.deleteProject.b_remarks_tres = null;
        //C
        this.deleteProject.c_uncessary_items_tres = null;
        this.deleteProject.c_compliance_tres = null;
        this.deleteProject.c_remarks_tres = null;
        //D
        this.deleteProject.d_products_cover_tres = null;
        this.deleteProject.d_compliance_tres = null;
        this.deleteProject.d_remarks_tres = null;

        //Section 4
        //A
        this.deleteProject.a_certificate_coa_kwatro_desc = null;
        this.deleteProject.a_compliance_kwatro = null;
        this.deleteProject.a_remarks_kwatro = null;
        //B
        this.deleteProject.b_po_kwatro_desc = null;
        this.deleteProject.b_compliance_kwatro = null;
        this.deleteProject.b_remarks_kwatro = null;
        //C
        this.deleteProject.c_msds_kwatro_desc = null;
        this.deleteProject.c_compliance_kwatro = null;
        this.deleteProject.c_remarks_kwatro = null;
        //D
        this.deleteProject.d_food_grade_desc = null;
        this.deleteProject.d_compliance_kwatro = null;
        this.deleteProject.d_remarks_kwatro = null;
        //Section 5
        //A
        this.deleteProject.a_qty_received_singko_singko = null;
        this.deleteProject.a_compliance_singko = null;
        this.deleteProject.a_remarks_singko = null;
        //B
        this.deleteProject.b_mfg_date_desc_singko = null;
        this.deleteProject.b_compliance_singko = null;
        this.deleteProject.b_remarks_singko = null;
        //C
        this.deleteProject.c_expirydate_desc_singko = null;
        this.deleteProject.c_compliance_singko = null;
        this.deleteProject.c_remarks_singko = null;;
        //D
        this.deleteProject.d_packaging_desc_singko = null;
        this.deleteProject.d_compliance_singko = null;
        this.deleteProject.d_remarks_singko = null;
        //E
        this.deleteProject.e_no_contaminants_desc_singko = null;
        this.deleteProject.e_compliance_singko = null;
        this.deleteProject.e_remarks_singko = null;
        //F
        this.deleteProject.f_qtyrejected_desc_singko = null;
        this.deleteProject.f_compliance_singko = null;
        this.deleteProject.f_remarks_singko = null;
        //G
        this.deleteProject.g_rejected_reason_desc_singko = null;
        this.deleteProject.g_compliance_singko = null;
        this.deleteProject.g_remarks_singko = null;
        //H
        this.deleteProject.h_lab_sample_desc_singko = null;
        this.deleteProject.h_compliance_singko = null;
        this.deleteProject.h_remarks_singko = null;

        this.calculateNoOfPages();
      },
      (error) => {
        console.log(error);
      });
  }

  onEditClick(event, index: number) {



    setTimeout(() => {



      this.editProject.primary_id = this.projects[index].primary_id;


      // this.editProject.projectID = Math.floor((Math.random() * 1000000) + 1);
      // this.editProject.projectName = this.projects[index].projectName;
      // this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
      // this.editProject.teamSize = 40;
      this.editProject.is_approved_prepa_date = this.projects[index].is_approved_prepa_date;
      this.editProject.category = this.projects[index].category;
      this.editProject.store_name = this.projects[index].store_name;
      this.editProject.route = this.projects[index].route;
      this.editProject.area = this.projects[index].area;
      this.editProject.fox = this.projects[index].fox;

      //Binding of Item Information
      this.editProject.item_code = this.projects[index].item_code;
      this.editProject.description = this.projects[index].description;

      //Binding Quantity
      this.editProject.prepared_allocated_qty = this.projects[index].prepared_allocated_qty;


      //Warehouse Checker Fucking Process
      this.editProject.is_wh_approved_date = this.ToDay;
      this.editProject.is_wh_approved_by = this.activeUser;
      this.editProject.is_wh_approved = "1";






      this.ApprovedPreparationDate = this.projects[index].is_approved_prepa_date;
      this.FoxStoreCode = this.projects[index].fox;

      this.totalItemsPrepared = this.projects[index].total_state_repack;



      this.WhRejectRemarks = this.whCheckerDashboardService.SearchPartialCancelled("store_name", this.ApprovedPreparationDate, this.FoxStoreCode);
      // this.calculateNoOfPagesItems();
      this.editIndex = index;

    }, 100);

  


  }




}
