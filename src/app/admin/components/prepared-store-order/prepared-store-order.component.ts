import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import * as moment from 'moment';
import * as $ from "jquery";
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AllowablePercentage } from 'src/app/models/allowable-percentage';
import { CancelledPOTransactionStatus } from 'src/app/models/cancelled-potransaction-status';
import { ClientLocation } from 'src/app/models/client-location';
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
import { TblNearlyExpiryMgmtService } from 'src/app/services/tbl-nearly-expiry-mgmt.service';
import { ProjectComponent } from '../project/project.component';
import Swal from 'sweetalert2';
import { DryWhStoreOrders } from 'src/app/models/dry-wh-store-orders';
import { WhCheckerDashboardService } from 'src/app/services/wh-checker-dashboard.service';
import { TblDryPartialReceivingRejectionService } from 'src/app/services/tbl-dry-partial-receiving-rejection.service';

@Component({
  selector: 'app-prepared-store-order',
  templateUrl: './prepared-store-order.component.html',
  styleUrls: ['./prepared-store-order.component.scss']
})
export class PreparedStoreOrderComponent implements OnInit {
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
  searchText: string = "";
  ToDay: Date;
  ToDayforMaxDate: Date;

  activeUser: string = "";
  PartialEntry: string = "";
  PartialComment: string = "";
  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 7;

  totalPoRowCount: number = null;
  totalPartial: number = null;

  totalPartialReceivingCancel: number = null;

  @ViewChild("newForm") newForm: NgForm;
  @ViewChild("editForm") editForm: NgForm;

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
  //FormGroup
  // ReceivijkForm: FormGroup;
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

  ngOnInit() {
    this.loginService.detectIfAlreadyLoggedIn(); //detect already Login
    this.ToDay = new Date();
    this.activeUser = this.loginService.currentUserName;
    // debugger;
    this.whCheckerDashboardService.getDistinctPreparedStoreOrders()
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

  ConfirmNoofReject(event: any) {
    // alert("You Press a key in the Keyboard");
    this.InitialComputation();

    if (this.confirmReject.nativeElement.value == "") {
      this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "";
    }
    else {
      if (this.totalofReject.nativeElement.value == this.confirmReject.nativeElement.value) {
        // this.rejectNo3.nativeElement.value="0";
        // console.warn("Empty Quantity in the textInput! ")
        // this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "Pexa Marian";
        this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "";
      }
      else {
        this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "No. of total reject is not match";
      }
    }

  }


  onChangeEventReject2(event: any) {

    if (this.rejectNo2.nativeElement.value == "") {
      this.rejectNo2.nativeElement.value = "0";
      console.warn("Empty Quantity in the textInput! ")
    }

    console.log(event.target.value);
    // this.totalofReject.nativeElement.value = this.rejectNo2.nativeElement.value + this.totalofReject.nativeElement.value; 
    const a = this.rejectNo1.nativeElement.value;
    const b = this.rejectNo2.nativeElement.value;
    const c = this.rejectNo3.nativeElement.value;
    const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
    const TotalReject = this.totalofReject.nativeElement.value;
    const summary = +a + +b + +c;
    console.log(summary);
    this.totalofReject.nativeElement.value = summary;
    // alert("You change a value 2");

    // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
    if (ActualDelivered > TotalReject) {
      // alert("A");
    }
    else {
      this.RejectionGreaterThanReceiving();
    }

  }


  onChangeEventReject1(event: any) {

    if (this.rejectNo1.nativeElement.value == "") {
      this.rejectNo1.nativeElement.value = "0";
      // console.warn("Empty Quantity in the textInput! ")
    }

    console.log(event.target.value);
    // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value; 
    const a = this.rejectNo1.nativeElement.value;
    const b = this.rejectNo2.nativeElement.value;
    const c = this.rejectNo3.nativeElement.value;
    const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
    const TotalReject = this.totalofReject.nativeElement.value;
    const summary = +a + +b + +c;
    // console.log(summary);
    this.totalofReject.nativeElement.value = summary;
    // alert("You change a value 1");

    // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
    if (ActualDelivered > TotalReject) {
      // alert("A");
    }
    else {
      this.RejectionGreaterThanReceiving();
    }

  }


  onEditClick(event, index: number) {
    //Additional Binding of Searching
    // if ($('#txtSearchText').is(":visible")) {
    //Show Visibilit
    //   this.whCheckerDashboardService.SearchPreparedItems("is_approved_prepa_date", this.searchText)
    //     .subscribe(
    //       (response: DryWhStoreOrders[]) => {
    //         // debugger;

    //         this.projects = response;

    //         this.showLoading = false;
    //         this.calculateNoOfPages();
    //         this.totalPoRowCount = response.length;
    //         alert("A");
    //       }
    //     );
    // }
    // else {
    //   alert("B");
    //   this.whCheckerDashboardService.getDistinctPreparedStoreOrders()
    //     .subscribe(
    //       (response: DryWhStoreOrders[]) => {
    //         // debugger;

    //         this.projects = response;


    //       }
    //     );


    //   if (this.currentPageIndex == 1) {
    //     if (index == 0) {
    //       index = 7;
    //     }
    //     if (index == 1) {
    //       index = 8;
    //     }
    //     if (index == 2) {
    //       index = 9;
    //     }
    //     if (index == 3) {
    //       index = 10;
    //     }
    //     if (index == 4) {
    //       index = 11;
    //     }
    //     if (index == 5) {
    //       index = 12;
    //     }
    //     if (index == 6) {
    //       index = 13;
    //     }
    //   }
    //   else if (this.currentPageIndex == 2) {
    //     if (index == 0) {
    //       index = 14;
    //     }
    //     if (index == 1) {
    //       index = 15;
    //     }
    //     if (index == 2) {
    //       index = 16;
    //     }
    //     if (index == 3) {
    //       index = 17;
    //     }
    //     if (index == 4) {
    //       index = 18;
    //     }
    //     if (index == 5) {
    //       index = 19;
    //     }
    //     if (index == 6) {
    //       index = 20;
    //     }
    //   }
    //   else if (this.currentPageIndex == 3) {
    //     if (index == 0) {
    //       index = 21;
    //     }
    //     if (index == 1) {
    //       index = 22;
    //     }
    //     if (index == 2) {
    //       index = 23;
    //     }
    //     if (index == 3) {
    //       index = 24;
    //     }
    //     if (index == 4) {
    //       index = 25;
    //     }
    //     if (index == 5) {
    //       index = 26;
    //     }
    //     if (index == 6) {
    //       index = 27;
    //     }
    //   }
    //   else if (this.currentPageIndex == 4) {
    //     if (index == 0) {
    //       index = 28;
    //     }
    //     if (index == 1) {
    //       index = 29;
    //     }
    //     if (index == 2) {
    //       index = 30;
    //     }
    //     if (index == 3) {
    //       index = 31;
    //     }
    //     if (index == 4) {
    //       index = 32;
    //     }
    //     if (index == 5) {
    //       index = 33;
    //     }
    //     if (index == 6) {
    //       index = 34;
    //     }
    //   }
    //   else {

    //   }

    // }

    // this.editForm.resetForm();
    // this.received_by.nativeElement.value = this.loginService.currentUserName;
    // this.resetValueS();
    // //first
    // this.RandomNumber = Math.floor((Math.random() * 1000000) + 1);

    // alert(this.ToDay);
    //Last

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


      //Warehouse Checker Fucking Process
      this.editProject.is_wh_approved_date = this.ToDay;
      this.editProject.is_wh_approved_by = this.activeUser;
      this.editProject.is_wh_approved = "1";


      // this.editProject.received_by_QA = this.activeUser;
      // // this.editProject.total_of_reject_mat = this.totalofReject.nativeElement.
      // this.editProject.qcReceivingDate = this.ToDay;


      this.ApprovedPreparationDate = this.projects[index].is_approved_prepa_date;
      this.FoxStoreCode = this.projects[index].fox;




      this.WhRejectRemarks = this.whCheckerDashboardService.SearchRejectStatus("store_name", this.ApprovedPreparationDate, this.FoxStoreCode);
      this.editIndex = index;

    }, 100);

  }


  validateRejectedStatus(event: any) {

    // const Reject1 = this.RejectedStatus1.nativeElement.value;
    // const Reject2 = this.RejectedStatus2.nativeElement.value;
    // const Reject3 = this.RejectedStatus3.nativeElement.value;
    // if(Reject1 == Reject2)
    // {

    //   this.MultipleSelectionOfRejectionStatus();
    // }


  }

  resetValueS() {
    this.rejectNo1.nativeElement.value = "0";
    this.rejectNo2.nativeElement.value = "0";
    this.rejectNo3.nativeElement.value = "0";
    this.confirmReject.nativeElement.value = "0";
    this.totalofReject.nativeElement.value = "0";

  }


  onAddAdditionalRejectRow(event: any) {


    if ($("#rejectionrow1").is(":visible")) {
      // alert("The paragraph  is visible.");

      if ($("#rejectionrow2").is(":visible")) {
        // alert("The paragraph  is visible.");
        if ($("#rejectionrow3").is(":visible")) {
          // alert("The paragraph  is visible.");
          // alert("Limit  is exceed!");
          this.showLimitonAddingRejection();
        }
        else {
          // alert("The paragraph  is hidden.");
          $("#rejectionrow3").show();
          $("#rejectionrow32").show();
          $("#total-reject").show();
          $("#total-confirm-reject").show();
          $("#AddRejectBtn").hide();
        }


      }
      else {
        // alert("The paragraph  is hidden.");
        $("#rejectionrow2").show();
        $("#rejectionrow22").show();
        $("#total-reject").show();
        $("#total-confirm-reject").show()

      }



    }
    else {
      // alert("The paragraph  is hidden.");
      $("#rejectionrow1").show();
      $("#rejectionrow12").show();
      $("#remove-remarks-button").show();
      $("#total-reject").show();
      $("#total-confirm-reject").show()
    }






  }


  ActualDeliveryComputation(event: any) {
    // Allowable Percentage Computation
    var TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
    var ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
    var QtyOrder = this.QtyOrdered.nativeElement.value;
    var ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;


    this.ActualRemaining = QtyOrder - ActualDelivered;


    //Add Ons
    //Allowable Percentage
    var aplenght = $('#Allowable_Percentage_id').val().length;
    $('#characters').text(aplenght);
    //Actual Delivery Functionalioty
    var adlength = $('#actual_delivery_output').val().length;
    $('#characters').text(adlength);


    if (aplenght > adlength) {
      //Do Something programmble
      if (Number(TotalAllowablePercentage) >= Number(ActualDelivered)) {
        // alert($('#Allowable_Percentage_id').val());


      }
      else {

        this.AllowablePercentageExceed();

        $('#actual_delivery_output').val("");
      }

    }
    else {
      if (Number(TotalAllowablePercentage) >= Number(ActualDelivered)) {
        // alert($('#Allowable_Percentage_id').val());
        // alert("hahaha");
      }
      else {
        // alert("Error 2");
        this.AllowablePercentageExceed();

        $('#actual_delivery_output').val("");
      }

    }//End Point add Ons

  }

  onSearchTextKeyup(event) {
    // this.editForm.resetForm();

    //Recall the calculateNoOfPages
    if ($('#txtSearchText').is(":empty")) {
      // this.ngOnInit();

    }



    this.calculateNoOfPages();

  }

  selectExpiryDate(event: any) {
    // JavaScript program to illustrate 
    // calculation of no. of days between two date 

    // To set two dates to two variables
    var date1 = new Date($('#txtEditReceivingDate').val());
    var date2 = new Date($('#txtEditexpiration_date').val());

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    //To display the final no. of days (result)
    // document.write("Total number of days between dates  <br>"
    //                + date1 + "<br> and <br>" 
    //                + date2 + " is: <br> " 
    //                + Difference_In_Days);

    var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;
    var ItemDesc = this.ItemDescription.nativeElement.value;

    if (Difference_In_Days == ExpiryDaysActivated) {
      // alert("ssasa kaba Hahha");
      Swal.fire({
        title: 'Below Standard Expiration ' + Difference_In_Days + ' Days?',
        text: ItemDesc,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {


        }
      })
    }
    else {
      this.ExpiryDateChild.nativeElement.value = ' ';
      this.ExpiryDateChild.nativeElement.focus();
    }


    if (Difference_In_Days < ExpiryDaysActivated) {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Below Standards Expiration Days  ' + Difference_In_Days + ' Days?',
        text: ItemDesc,
        showConfirmButton: false,
        timer: 3500
      })

    }
    else {
      this.ExpiryDateChild.nativeElement.value = ' ';
      this.ExpiryDateChild.nativeElement.focus();
    }


  }

  //Singian Clan
  onDeleteClick(event, index: number) {
    // this.deleteIndex = index;
    // this.deleteProject.projectID = this.projects[index].projectID;
    // this.deleteProject.projectName = this.projects[index].projectName;
    // this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    // this.deleteProject.teamSize = this.projects[index].teamSize;
    // this.deleteProject.supplier = this.projects[index].supplier;
    // this.deleteProject.item_code = this.projects[index].item_code;
    // this.deleteProject.item_description = this.projects[index].item_description;
    // this.deleteProject.po_number = this.projects[index].po_number;
    // this.deleteProject.po_date = this.projects[index].po_date;
    // this.deleteProject.pr_number = this.projects[index].pr_number;
    // this.deleteProject.pr_date = this.projects[index].pr_date;
    // this.deleteProject.qty_uom = this.projects[index].qty_uom;
    // this.deleteProject.qty_order = this.projects[index].qty_order;
    // this.deleteProject.mfg_date = this.projects[index].mfg_date;
    // this.deleteProject.expiration_date = this.projects[index].expiration_date;
    // this.deleteProject.expected_delivery = this.projects[index].expected_delivery;
    // this.deleteProject.actual_delivery = this.projects[index].actual_delivery;
    // this.deleteProject.actual_remaining_receiving = this.projects[index].actual_remaining_receiving;
    // this.deleteProject.received_by_QA = this.projects[index].received_by_QA;
    // this.deleteProject.status_of_reject_one = this.projects[index].status_of_reject_one;
    // this.deleteProject.status_of_reject_two = this.projects[index].status_of_reject_two;
    // this.deleteProject.status_of_reject_three = this.projects[index].status_of_reject_three;
    // this.deleteProject.count_of_reject_one = this.projects[index].count_of_reject_one;
    // this.deleteProject.count_of_reject_two = this.projects[index].count_of_reject_two;
    // this.deleteProject.count_of_reject_three = this.projects[index].count_of_reject_three;
    // this.deleteProject.total_of_reject_mat = this.projects[index].total_of_reject_mat;
    // //SECTION 1
    // //A
    // this.deleteProject.a_delivery_van_desc = this.projects[index].a_delivery_van_desc;
    // this.deleteProject.a_compliance = this.projects[index].a_compliance;
    // this.deleteProject.a_remarks = this.projects[index].a_remarks;
    // //B
    // this.deleteProject.b_cooling_system_desc = this.projects[index].b_cooling_system_desc;
    // this.deleteProject.b_compliance = this.projects[index].b_compliance;
    // this.deleteProject.b_remarks = this.projects[index].b_remarks;
    // //C
    // this.deleteProject.c_inner_walls_desc = this.projects[index].c_inner_walls_desc;
    // this.deleteProject.c_compliance = this.projects[index].c_compliance;
    // this.deleteProject.c_remarks = this.projects[index].c_remarks;
    // //D
    // this.deleteProject.d_plastic_curtains_desc = this.projects[index].d_plastic_curtains_desc;
    // this.deleteProject.d_compliance = this.projects[index].d_compliance;
    // this.deleteProject.d_remarks = this.projects[index].d_remarks;
    // //E
    // this.deleteProject.e_thereno_pest_desc = this.projects[index].e_thereno_pest_desc;
    // this.deleteProject.e_compliance = this.projects[index].e_compliance;
    // this.deleteProject.e_remarks = this.projects[index].e_remarks;
    // //Section2
    // //A
    // this.deleteProject.a_clean_company_dos = this.projects[index].a_clean_company_dos;
    // this.deleteProject.a_compliance_dos = this.projects[index].a_compliance_dos;
    // this.deleteProject.a_remarks_dos = this.projects[index].a_remarks_dos;
    // //B
    // this.deleteProject.b_delivery_staff_symptoms_dos = this.projects[index].b_delivery_staff_symptoms_dos;
    // this.deleteProject.b_compliance_dos = this.projects[index].b_compliance_dos;
    // this.deleteProject.b_remarks_dos = this.projects[index].b_remarks_dos;
    // //C
    // this.deleteProject.c_inner_walls_clean_dos = this.projects[index].c_inner_walls_clean_dos;
    // this.deleteProject.c_compliance_dos = this.projects[index].c_compliance_dos;
    // this.deleteProject.c_remarks_dos = this.projects[index].c_remarks_dos;
    // //D
    // this.deleteProject.d_plastic_curtains_dos = this.projects[index].d_plastic_curtains_dos;
    // this.deleteProject.d_compliance_dos = this.projects[index].d_compliance_dos;
    // this.deleteProject.d_remarks_dos = this.projects[index].d_remarks_dos;
    // //E
    // this.deleteProject.e_no_accessories_dos = this.projects[index].e_no_accessories_dos;
    // this.deleteProject.e_compliance_dos = this.projects[index].e_compliance_dos;
    // this.deleteProject.e_remarks_dos = this.projects[index].e_remarks_dos;
    // //Section 4
    // //A
    // this.deleteProject.a_certificate_coa_kwatro_desc = this.projects[index].a_certificate_coa_kwatro_desc;
    // this.deleteProject.a_compliance_kwatro = this.projects[index].a_compliance_kwatro;
    // this.deleteProject.a_remarks_kwatro = this.projects[index].a_remarks_kwatro;
    // //B
    // this.deleteProject.b_po_kwatro_desc = this.projects[index].b_po_kwatro_desc;
    // this.deleteProject.b_compliance_kwatro = this.projects[index].b_compliance_kwatro;
    // this.deleteProject.b_remarks_kwatro = this.projects[index].b_remarks_kwatro;
    // //C
    // this.deleteProject.c_msds_kwatro_desc = this.projects[index].c_msds_kwatro_desc;
    // this.deleteProject.c_compliance_kwatro = this.projects[index].c_compliance_kwatro;
    // this.deleteProject.c_remarks_kwatro = this.projects[index].c_remarks_kwatro;
    // //D
    // this.deleteProject.d_food_grade_desc = this.projects[index].d_food_grade_desc;
    // this.deleteProject.d_compliance_kwatro = this.projects[index].d_compliance_kwatro;
    // this.deleteProject.d_remarks_kwatro = this.projects[index].d_remarks_kwatro;
    // //Section 5
    // //A
    // this.deleteProject.a_qty_received_singko_singko = this.projects[index].a_qty_received_singko_singko;
    // this.deleteProject.a_compliance_singko = this.projects[index].a_compliance_singko;
    // this.deleteProject.a_remarks_singko = this.projects[index].a_remarks_singko;
    // //B
    // this.deleteProject.b_mfg_date_desc_singko = this.projects[index].b_mfg_date_desc_singko;
    // this.deleteProject.b_compliance_singko = this.projects[index].b_compliance_singko;
    // this.deleteProject.b_remarks_singko = this.projects[index].b_remarks_singko;
    // //C
    // this.deleteProject.c_expirydate_desc_singko = this.projects[index].c_expirydate_desc_singko;
    // this.deleteProject.c_compliance_singko = this.projects[index].c_compliance_singko;
    // this.deleteProject.c_remarks_singko = this.projects[index].c_remarks_singko;
    // //D
    // this.deleteProject.d_packaging_desc_singko = this.projects[index].d_packaging_desc_singko;
    // this.deleteProject.d_compliance_singko = this.projects[index].d_compliance_singko;
    // this.deleteProject.d_remarks_singko = this.projects[index].d_remarks_singko;
    // //E
    // this.deleteProject.e_no_contaminants_desc_singko = this.projects[index].e_no_contaminants_desc_singko;
    // this.deleteProject.e_compliance_singko = this.projects[index].e_compliance_singko;
    // this.deleteProject.e_remarks_singko = this.projects[index].e_remarks_singko;
    // //F
    // this.deleteProject.f_qtyrejected_desc_singko = this.projects[index].f_qtyrejected_desc_singko;
    // this.deleteProject.f_compliance_singko = this.projects[index].f_compliance_singko;
    // this.deleteProject.f_remarks_singko = this.projects[index].f_remarks_singko;
    // //G
    // this.deleteProject.g_rejected_reason_desc_singko = this.projects[index].g_rejected_reason_desc_singko;
    // this.deleteProject.g_compliance_singko = this.projects[index].g_compliance_singko;
    // this.deleteProject.g_remarks_singko = this.projects[index].g_remarks_singko;
    // //H
    // this.deleteProject.h_lab_sample_desc_singko = this.projects[index].h_lab_sample_desc_singko;
    // this.deleteProject.h_compliance_singko = this.projects[index].h_compliance_singko;
    // this.deleteProject.h_remarks_singko = this.projects[index].h_remarks_singko;

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


  CancelledPoDetails() {
    var Item = this.ItemDescription.nativeElement.value;
    var PoNumero = this.PONumber.nativeElement.value;



    if ($("#ActivePartialReceiving").is(":visible")) {
      // alert("1");
      // return;
      this.PartialReceivingCheckingonCancellation();
      return;
    }
    else {

    }




    Swal.fire({
      title: 'Are you sure you want to cancel the PO Number ' + PoNumero + '?',
      text: Item,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {


        this.UpdateDeactivatedTransactions();



      }
    })


  }

  UpdateDeactivatedTransactions() {

    // this.projectsService.updateProject(this.editProject).subscribe((response: Project) => {

    //   var p: Project = new Project();
    //   p.projectID = response.projectID;
    //   p.projectName = response.projectName;
    //   p.dateOfStart = response.dateOfStart;
    //   p.teamSize = response.teamSize;
    //   p.clientLocation = response.clientLocation;
    //   p.active = response.active;
    //   // p.is_activated = response.is_activated;
    //   p.clientLocationID = response.clientLocationID;
    //   p.status = response.status;
    //   p.supplier = response.supplier;
    //   p.item_code = response.item_code;
    //   p.item_description = response.item_description;
    //   p.po_number = response.po_number;
    //   p.po_date = response.po_date;
    //   p.pr_number = response.pr_number;
    //   p.pr_date = response.pr_date;
    //   p.qty_order = response.qty_order;
    //   p.qty_uom = response.qty_uom;
    //   p.mfg_date = response.mfg_date;
    //   p.expiration_date = response.expiration_date;
    //   p.expected_delivery = response.expected_delivery;
    //   p.actual_delivery = response.actual_delivery;
    //   p.expected_delivery = response.expected_delivery;
    //   p.actual_remaining_receiving = response.actual_remaining_receiving;
    //   // p.received_by_QA = response.received_by_QA;
    //   // // this.activeUser = response.received_by_QA;
    //   p.status_of_reject_one = response.status_of_reject_one;
    //   p.status_of_reject_two = response.status_of_reject_two;
    //   p.status_of_reject_three = response.status_of_reject_three;
    //   p.count_of_reject_one = response.count_of_reject_one;
    //   p.count_of_reject_two = response.count_of_reject_two;
    //   p.count_of_reject_three = response.count_of_reject_three;
    //   p.total_of_reject_mat = response.total_of_reject_mat;
    //   //Section 1

    //   // this.received_by.nativeElement.value = this.loginService.currentUserName;
    //   this.projects[this.editIndex] = p;

    //   this.editProject.projectID = null;
    //   this.editProject.projectName = null;
    //   this.editProject.dateOfStart = null;
    //   this.editProject.teamSize = null;
    //   this.editProject.supplier = null;
    //   this.editProject.teamSize = null;
    //   this.editProject.unit_price = null;
    //   this.editProject.active = false;
    //   this.editProject.clientLocationID = null;
    //   this.editProject.status = null;
    //   this.editProject.item_code = null;
    //   this.editProject.item_description = null;
    //   this.editProject.po_number = null;
    //   this.editProject.po_date = null;
    //   this.editProject.pr_number = null;
    //   this.editProject.pr_date = null;
    //   this.editProject.qty_order = null;
    //   this.editProject.qty_uom = null;
    //   this.editProject.mfg_date = null;
    //   this.editProject.expiration_date = null;
    //   this.editProject.expected_delivery = null;
    //   this.editProject.actual_delivery = null;
    //   this.editProject.actual_remaining_receiving = null;
    //   this.editProject.received_by_QA = null;
    //   this.editProject.is_activated = null;
    //   this.editProject.status_of_reject_one = null;
    //   this.editProject.status_of_reject_two = null;
    //   this.editProject.status_of_reject_three = null;
    //   this.editProject.count_of_reject_one = null;
    //   this.editProject.count_of_reject_two = null;
    //   this.editProject.count_of_reject_three = null;
    //   this.editProject.total_of_reject_mat = null;


    //   this.showCancelledPOSuccess();
    //   this.ngOnInit();
    //   $("#editFormCancel").trigger("click");
    // },
    //   (error) => {
    //     console.log(error);
    //   });

  }

  onUpdateClick() {
    //Computation Start Simang
    // this.allowableqty = this.TotalAllowablePercentage.nativeElement.value;
    // this.actualqty = this.ActualDeliveryChild.nativeElement.value;

    // var TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
    // var ActualDelivered = this.ActualDeliveryChild.nativeElement.value;

    // var aplenght = $('#Allowable_Percentage_id').val().length;
    // $('#characters').text(aplenght);

    // var adlength = $('#actual_delivery_output').val().length;
    // $('#characters').text(adlength);


    // if (aplenght > adlength) {

    //   ///This is the minimun qty set pin for 10, 100, 999
    //   if (Number(TotalAllowablePercentage) >= Number(ActualDelivered)) {



    //   }
    //   else {

    //     this.AllowablePercentageExceed();
    //     // alert("Pekwangs");
    //     $('#actual_delivery_output').val("");  ///LLL
    //     return;



    //   }

    // }
    // else {
    //   // alert("MINs ");
    //   //This is for large scale validation for thousand's qty 
    //   if (this.allowableqty < this.actualqty) {

    //     this.AllowablePercentageExceed();
    //     $('#actual_delivery_output').val("");  //Additional Data on 12/6/2021
    //     return;

    //   }

    // }






    //End of Computation Summary


    // JavaScript program to illustrate 
    // calculation of no. of days between two date 

    // To set two dates to two variables
    // var date1 = new Date($('#txtEditReceivingDate').val());
    // var date2 = new Date($('#txtEditexpiration_date').val());

    // // To calculate the time difference of two dates
    // var Difference_In_Time = date2.getTime() - date1.getTime();

    // // To calculate the no. of days between two dates
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    // //To display the final no. of days (result)
    // // document.write("Total number of days between dates  <br>"
    // //                + date1 + "<br> and <br>" 
    // //                + date2 + " is: <br> " 
    // //                + Difference_In_Days);
    // var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;




    // //Laarnie
    // if (this.totalofReject.nativeElement.value == this.confirmReject.nativeElement.value) {

    // }
    // else {
    //   this.totalRejectConfirmationField();
    //   this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "No. of reject is not match";
    //   this.confirmReject.nativeElement.focus();
    //   return;
    // }
    var StoreName = this.ItemDescription.nativeElement.value;
    // // totalRejectConfirmationField();


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

  UpdateClickDetails() {

    // alert("Plano na naman");

    if (this.editForm.valid) {

      // //Additional Parse Data Master
      // // this.ActualRemaining = 450;
      // this.ComputeRemainingQty();
      // this.editProject.actual_remaining_receiving = this.ActualRemaining;
      // //Variable
      // var totalRejection = this.confirmReject.nativeElement.value;
      // var ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
      // if (totalRejection == 0) {

      // }
      // else {
      //   totalRejection = ActualDelivered - totalRejection;
      //   this.editProject.actual_delivery = totalRejection;
      // }


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
        // p.is_wh_approved_date = response.is_wh_approved_date;




        // this.received_by.nativeElement.value = this.loginService.currentUserName;
        this.projects[this.editIndex] = p;
        // this.InsertANewPartialReceiving();
        // this.InsertPartialDatainMasterTable();
        // 01/14/2022  GerardSingian
        this.editProject.is_approved_prepa_date = null;
        this.editProject.category = null;
        this.editProject.route = null;
        this.editProject.area = null;
        this.editProject.store_name = null;
        this.editProject.is_wh_approved = null;
        this.editProject.is_wh_approved_by = null;
        this.editProject.is_wh_approved_date = null;

        //  this.InsertANewPartialReceiving();
        // this.showUpdatingSuccess();
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
    // if (this.newForm.valid) {
    //   this.newProject.clientLocation.clientLocationID = 0;
    //   this.newProject.is_activated = "1";
    //   this.projectsService.insertProject(this.newProject).subscribe((response) => {

    //     //Add Project to Grid
    //     var p: Project = new Project();
    //     p.projectID = response.projectID;
    //     p.projectName = response.projectName;
    //     p.dateOfStart = response.dateOfStart;
    //     p.teamSize = response.teamSize;
    //     p.clientLocation = response.clientLocation;
    //     p.active = response.active;
    //     p.clientLocationID = response.clientLocationID;
    //     p.status = response.status;
    //     p.is_activated = response.is_activated;
    //     p.supplier = response.supplier;
    //     p.item_code = response.item_code;
    //     p.po_number = response.po_number;
    //     p.po_date = response.po_date;
    //     p.pr_number = response.pr_number;
    //     p.pr_date = response.pr_date;
    //     p.qty_order = response.qty_order;
    //     p.qty_uom = response.qty_uom;
    //     p.mfg_date = response.mfg_date;
    //     p.expiration_date = response.expiration_date;
    //     p.expected_delivery = response.expected_delivery;
    //     p.actual_delivery = response.actual_delivery;
    //     p.actual_remaining_receiving = response.actual_remaining_receiving;
    //     p.received_by_QA = response.received_by_QA;
    //     p.status_of_reject_one = response.status_of_reject_one;
    //     p.status_of_reject_two = response.status_of_reject_two;
    //     p.status_of_reject_three = response.status_of_reject_three;
    //     p.count_of_reject_one = response.count_of_reject_one;
    //     p.count_of_reject_two = response.count_of_reject_two;
    //     p.count_of_reject_three = response.count_of_reject_three;
    //     p.total_of_reject_mat = response.total_of_reject_mat;
    //     p.a_compliance = response.a_compliance;
    //     p.a_remarks = response.a_remarks;
    //     this.projects.push(p);

    //     //Clear New Project Dialog - TextBoxes

    //     this.newProject.projectName = null;
    //     this.newProject.dateOfStart = null;
    //     this.newProject.teamSize = null;
    //     this.newProject.active = false;
    //     this.newProject.clientLocationID = null;
    //     this.newProject.status = null;
    //     this.newProject.is_activated = null;
    //     this.newProject.supplier = null;
    //     this.newProject.item_code = null;
    //     this.newProject.po_number = null;
    //     this.newProject.po_date = null;
    //     this.newProject.pr_number = null;
    //     this.newProject.pr_date = null;
    //     this.newProject.qty_uom = null;
    //     this.newProject.qty_order = null;
    //     this.newProject.mfg_date = null;
    //     this.newProject.expiration_date = null;
    //     this.newProject.expected_delivery = null;
    //     this.newProject.actual_delivery = null;
    //     this.newProject.actual_remaining_receiving = null;
    //     this.newProject.received_by_QA = null;
    //     this.newProject.status_of_reject_one = null;
    //     this.newProject.status_of_reject_two = null;
    //     this.newProject.status_of_reject_three = null;
    //     this.newProject.count_of_reject_one = null;
    //     this.newProject.count_of_reject_two = null;
    //     this.newProject.count_of_reject_three = null;
    //     this.newProject.total_of_reject_mat = null;
    //     this.newProject.a_compliance = null;
    //     this.newProject.a_remarks = null;


    //     $("#newFormCancel").trigger("click");
    //     // this.ngOnInit();
    //     this.calculateNoOfPages();
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }
  }

  ComputeRemainingQty() {
    const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
    const QtyOrder = this.QtyOrdered.nativeElement.value;

    const ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;
    const totalRejection = this.confirmReject.nativeElement.value;


    if (QtyOrder == ActualRemainingReceiving) {

      // this.ActualRemaining = QtyOrder - ActualDelivered;
      // this.ActualRemaining = ActualRemainingReceiving - totalRejection;

      this.ActualRemaining = ActualDelivered - totalRejection;
      this.ActualRemaining = ActualRemainingReceiving - this.ActualRemaining;
    }
    else {
      // this.ActualRemaining = ActualRemainingReceiving - ActualDelivered;
      // this.ActualRemaining = ActualRemainingReceiving - totalRejection;

      this.ActualRemaining = ActualDelivered - totalRejection;
      this.ActualRemaining = ActualRemainingReceiving - this.ActualRemaining;
    }

  }

  totalRejectConfirmationField() {
    this.toastr.warning('Confirm the total number of reject!', 'Notifications');
  }

  FieldOutRequiredField() {
    this.toastr.warning('Field out the required fields!', 'Notifications');
  }
  onPageIndexClicked(pageIndex: number) {
    // this.currentPageIndex = pageIndex;
    //Set currentPageIndex
    if (pageIndex >= 0 && pageIndex < this.pages.length) {
      this.currentPageIndex = pageIndex;
    }
  }

  showCancelledPOSuccess() {
    this.toastr.success('Cancelled Successfully!', 'Notifications');
  }
  PartialReceivingCheckingonCancellation() {
    this.toastr.warning('You have a pending partial receiving!', 'Notifications');
  }

  AllowablePercentageExceed() {
    this.toastr.warning('Allowable Percentage Exceed!', 'Notifications');
  }

  showLimitonAddingRejection() {
    this.toastr.info('You already reached the limit!', 'Notifications');
  }

  onRemoveAdditionalRejectRow(event: any) {

    if ($("#rejectionrow3").is(":visible")) {
      // alert("The paragraph  is visible.");
      $("#rejectionrow3").hide();
      $("#rejectionrow32").hide();
    }
    else {
      // alert("The paragraph  is hidden.");

      if ($("#rejectionrow2").is(":visible")) {
        // alert("The paragraph  is visible.");
        $("#rejectionrow2").hide();
        $("#rejectionrow22").hide();
        $("#remove-remarks-button").show();


      }
      else {
        // alert("The paragraph  is hidden.");
        if ($("#rejectionrow1").is(":visible")) {
          // alert("The paragraph  is visible.");
          $("#rejectionrow1").hide();
          $("#rejectionrow12").hide();
          $("#remove-remarks-button").hide();
          $("#total-reject").hide();
          $("#total-confirm-reject").hide();


        }
        else {
          // alert("The paragraph  is hidden.");

        }

      }


    }
    //Reloading Add Button
    if ($("#AddRejectBtn").is(":visible")) {

    }
    else {
      $("#AddRejectBtn").show();
    }

  }


  AllowablePercentageComputation(event: any) {
    // Allowable Percentage Computation
    const ExpectedDelivery = this.ExpectedDeliveryActual.nativeElement.value;
    const ActivatedAllowablePercentage = this.ActiveAllowablePercentage.nativeElement.value;
    // const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
    const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
    const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
    const QtyOrder = this.QtyOrdered.nativeElement.value;
    const ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;


    // const summary = ExpectedDelivery * ActivatedAllowablePercentage;
    // console.log(summary);

    //Allowable Percentage Computation
    const summary = ActivatedAllowablePercentage / 100;
    const summaryadd1 = summary + 1;
    const finalcomputation = ActualRemainingReceiving * summaryadd1;
    this.TotalAllowablePercentage.nativeElement.value = finalcomputation;

    //End of Computation


    if (QtyOrder == ActualRemainingReceiving) {
      // if(ExpectedDelivery > QtyOrder)
      if (ExpectedDelivery == TotalAllowablePercentage) {

      }
      else {
        if (TotalAllowablePercentage >= ExpectedDelivery) {

        }
        else {
          $("txtexpected_delivery").val("");
          $("txtexpected_delivery").focus();
          // this.GreatherThanTheOrder(); //Be Carefull
        }
      }
    }
    else {
      if (TotalAllowablePercentage >= ExpectedDelivery) {

      }
      else {
        $("txtexpected_delivery").val("");
        $("txtexpected_delivery").focus();
        // this.GreatherThanTheOrder(); //Be Carefull
      }
    }
    //Gerard Singian
  }


  isAllChecked: boolean = false;

  @ViewChildren("prj") projs: QueryList<ProjectComponent>;

  isAllCheckedChange(event) {
    let proj = this.projs.toArray();
    for (let i = 0; i < proj.length; i++) {
      proj[i].isAllCheckedChange(this.isAllChecked);
    }
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
  //Active Partial Receiving Set Point
  @ViewChild("ActivePartialReceiving") ActivePartialReceiving: ElementRef;


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


  InitialComputation() {
    const a = this.rejectNo1.nativeElement.value;
    const b = this.rejectNo2.nativeElement.value;
    const c = this.rejectNo3.nativeElement.value;
    const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
    const TotalReject = this.totalofReject.nativeElement.value;
    const summary = +a + +b + +c;

    this.totalofReject.nativeElement.value = summary;
  }


  ComplianceSectionA1() {
    // this.editProject.a_remarks = " ";
    this.remarksSectionA1.nativeElement.disabled = true;
    this.remarksSectionA1.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionA1() {
    // this.editProject.a_remarks = "";
    this.remarksSectionA1.nativeElement.disabled = false;
    this.remarksSectionA1.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionA2() {
    // this.editProject.b_remarks = " ";
    this.remarksSectionA2.nativeElement.disabled = true;
    this.remarksSectionA2.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionA2() {
    // this.editProject.b_remarks = "";
    this.remarksSectionA2.nativeElement.disabled = false;
    this.remarksSectionA2.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionA3() {
    // this.editProject.c_remarks = " ";
    this.remarksSectionA3.nativeElement.disabled = true;
    this.remarksSectionA3.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionA3() {
    // this.editProject.c_remarks = "";
    this.remarksSectionA3.nativeElement.disabled = false;
    this.remarksSectionA3.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionA4() {
    // this.editProject.d_remarks = " ";
    this.remarksSectionA4.nativeElement.disabled = true;
    this.remarksSectionA4.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionA4() {
    // this.editProject.d_remarks = "";
    this.remarksSectionA4.nativeElement.disabled = false;
    this.remarksSectionA4.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionA5() {
    // this.editProject.e_remarks = " ";
    this.remarksSectionA5.nativeElement.disabled = true;
    this.remarksSectionA5.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionA5() {
    // this.editProject.e_remarks = "";
    this.remarksSectionA5.nativeElement.disabled = false;
    this.remarksSectionA5.nativeElement.style.backgroundColor = '#FFFFFF';
  }

  //Section 2
  ComplianceSectionB1() {
    // this.editProject.a_remarks_dos = " ";
    this.remarksSectionB1.nativeElement.disabled = true;
    this.remarksSectionB1.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionB1() {
    // this.editProject.a_remarks_dos = "";
    this.remarksSectionB1.nativeElement.disabled = false;
    this.remarksSectionB1.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionB2() {
    // this.editProject.b_remarks_dos = " ";
    this.remarksSectionB2.nativeElement.disabled = true;
    this.remarksSectionB2.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionB2() {
    // this.editProject.b_remarks_dos = "";
    this.remarksSectionB2.nativeElement.disabled = false;
    this.remarksSectionB2.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionB3() {
    // this.editProject.c_remarks_dos = " ";
    this.remarksSectionB3.nativeElement.disabled = true;
    this.remarksSectionB3.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionB3() {
    // this.editProject.c_remarks_dos = "";
    this.remarksSectionB3.nativeElement.disabled = false;
    this.remarksSectionB3.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionB4() {
    // this.editProject.d_remarks_dos = " ";
    this.remarksSectionB4.nativeElement.disabled = true;
    this.remarksSectionB4.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionB4() {
    // this.editProject.d_remarks_dos = "";
    this.remarksSectionB4.nativeElement.disabled = false;
    this.remarksSectionB4.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionB5() {
    // this.editProject.e_remarks_dos = " ";
    this.remarksSectionB5.nativeElement.disabled = true;
    this.remarksSectionB5.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionB5() {
    // this.editProject.e_remarks_dos = "";
    this.remarksSectionB5.nativeElement.disabled = false;
    this.remarksSectionB5.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionB6() {
    // this.editProject.f_remarks_dos = " ";
    this.remarksSectionB6.nativeElement.disabled = true;
    this.remarksSectionB6.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionB6() {
    // this.editProject.f_remarks_dos = "";
    this.remarksSectionB6.nativeElement.disabled = false;
    this.remarksSectionB6.nativeElement.style.backgroundColor = '#FFFFFF';
  }

  //Break Line
  ComplianceSectionC1() {
    // this.editProject.a_remarks_tres = " ";
    this.remarksSectionC1.nativeElement.disabled = true;
    this.remarksSectionC1.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionC1() {
    // this.editProject.a_remarks_tres = "";
    this.remarksSectionC1.nativeElement.disabled = false;
    this.remarksSectionC1.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionC2() {
    // this.editProject.b_remarks_tres = " ";
    this.remarksSectionC2.nativeElement.disabled = true;
    this.remarksSectionC2.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionC2() {
    // this.editProject.b_remarks_tres = "";
    this.remarksSectionC2.nativeElement.disabled = false;
    this.remarksSectionC2.nativeElement.style.backgroundColor = '#FFFFFF';
  }

  //Break Line
  ComplianceSectionC3() {
    // this.editProject.c_remarks_tres = " ";
    this.remarksSectionC3.nativeElement.disabled = true;
    this.remarksSectionC3.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionC3() {
    // this.editProject.c_remarks_tres = "";
    this.remarksSectionC3.nativeElement.disabled = false;
    this.remarksSectionC3.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionC4() {
    // this.editProject.d_remarks_tres = " ";
    this.remarksSectionC4.nativeElement.disabled = true;
    this.remarksSectionC4.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionC4() {
    // this.editProject.d_remarks_tres = "";
    this.remarksSectionC4.nativeElement.disabled = false;
    this.remarksSectionC4.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line for Part 4
  //Break Line
  ComplianceSectionD1() {
    // this.editProject.a_remarks_kwatro = " ";
    this.remarksSectionD1.nativeElement.disabled = true;
    this.remarksSectionD1.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionD1() {
    // this.editProject.a_remarks_kwatro = "";
    this.remarksSectionD1.nativeElement.disabled = false;
    this.remarksSectionD1.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionD2() {
    // this.editProject.b_remarks_kwatro = " ";
    this.remarksSectionD2.nativeElement.disabled = true;
    this.remarksSectionD2.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionD2() {
    // this.editProject.b_remarks_kwatro = "";
    this.remarksSectionD2.nativeElement.disabled = false;
    this.remarksSectionD2.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionD3() {
    // this.editProject.c_remarks_kwatro = " ";
    this.remarksSectionD3.nativeElement.disabled = true;
    this.remarksSectionD3.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionD3() {
    // this.editProject.c_remarks_kwatro = "";
    this.remarksSectionD3.nativeElement.disabled = false;
    this.remarksSectionD3.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break Line
  ComplianceSectionD4() {
    // this.editProject.d_remarks_kwatro = " ";
    this.remarksSectionD4.nativeElement.disabled = true;
    this.remarksSectionD4.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionD4() {
    // this.editProject.d_remarks_kwatro = "";
    this.remarksSectionD4.nativeElement.disabled = false;
    this.remarksSectionD4.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Final BreakLine
  ComplianceSectionE1() {
    // this.editProject.a_remarks_singko = " ";
    this.remarksSectionE1.nativeElement.disabled = true;
    this.remarksSectionE1.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE1() {
    // this.editProject.a_remarks_singko = "";
    this.remarksSectionE1.nativeElement.disabled = false;
    this.remarksSectionE1.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break 2
  ComplianceSectionE2() {
    // this.editProject.b_remarks_singko = " ";
    this.remarksSectionE2.nativeElement.disabled = true;
    this.remarksSectionE2.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE2() {
    // this.editProject.b_remarks_singko = "";
    this.remarksSectionE2.nativeElement.disabled = false;
    this.remarksSectionE2.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break 3
  ComplianceSectionE3() {
    // this.editProject.c_remarks_singko = " ";
    this.remarksSectionE3.nativeElement.disabled = true;
    this.remarksSectionE3.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE3() {
    // this.editProject.c_remarks_singko = "";
    this.remarksSectionE3.nativeElement.disabled = false;
    this.remarksSectionE3.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break 4
  ComplianceSectionE4() {
    // this.editProject.d_remarks_singko = " ";
    this.remarksSectionE4.nativeElement.disabled = true;
    this.remarksSectionE4.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE4() {
    // this.editProject.d_remarks_singko = "";
    this.remarksSectionE4.nativeElement.disabled = false;
    this.remarksSectionE4.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break 5
  ComplianceSectionE5() {
    // this.editProject.e_remarks_singko = " ";
    this.remarksSectionE5.nativeElement.disabled = true;
    this.remarksSectionE5.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE5() {
    // this.editProject.e_remarks_singko = "";
    this.remarksSectionE5.nativeElement.disabled = false;
    this.remarksSectionE5.nativeElement.style.backgroundColor = '#FFFFFF';
  }

  //Break 6
  ComplianceSectionE6() {
    // this.editProject.f_remarks_singko = " ";
    this.remarksSectionE6.nativeElement.disabled = true;
    this.remarksSectionE6.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE6() {
    // this.editProject.f_remarks_singko = "";
    this.remarksSectionE6.nativeElement.disabled = false;
    this.remarksSectionE6.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break 7
  ComplianceSectionE7() {
    // this.editProject.g_remarks_singko = " ";
    this.remarksSectionE7.nativeElement.disabled = true;
    this.remarksSectionE7.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE7() {
    // this.editProject.g_remarks_singko = "";
    this.remarksSectionE7.nativeElement.disabled = false;
    this.remarksSectionE7.nativeElement.style.backgroundColor = '#FFFFFF';
  }
  //Break 7
  ComplianceSectionE8() {
    // this.editProject.h_remarks_singko = " ";
    this.remarksSectionE8.nativeElement.disabled = true;
    this.remarksSectionE8.nativeElement.style.backgroundColor = '#E0E0E0';
  }

  NoneComplianceSectionE8() {
    // this.editProject.h_remarks_singko = "";
    this.remarksSectionE8.nativeElement.disabled = false;
    this.remarksSectionE8.nativeElement.style.backgroundColor = '#FFFFFF';
  }



  onChangeEventReject3(event: any) {

    if (this.rejectNo3.nativeElement.value == "") {
      this.rejectNo3.nativeElement.value = "0";
      console.warn("Empty Quantity in the textInput! ")
    }

    console.log(event.target.value);
    const a = this.rejectNo1.nativeElement.value;
    const b = this.rejectNo2.nativeElement.value;
    const c = this.rejectNo3.nativeElement.value;
    const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
    const TotalReject = this.totalofReject.nativeElement.value;
    const summary = +a + +b + +c;
    console.log(summary);
    this.totalofReject.nativeElement.value = summary;
    // alert("You change a value 3");

    // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
    if (ActualDelivered > TotalReject) {
      // alert("A");
    }
    else {
      this.RejectionGreaterThanReceiving();
    }

  }

  RejectionGreaterThanReceiving() {
    this.toastr.warning('Rejection Qty Greather than Actual Receiving!', 'Notifications');
  }

  validateNumber(e: any) {
    let input = String.fromCharCode(e.charCode);
    const reg = /^\d*(?:[.,]\d{1,2})?$/;

    if (!reg.test(input)) {
      e.preventDefault();
    }
  }

  decimalFilter(event: any) {

    const reg = /^-?\d*(\.\d{0,2})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }

  }

  HideSearchBtn(event: any) {
    $("#SearchBtnDetailed").show();

  }

}
