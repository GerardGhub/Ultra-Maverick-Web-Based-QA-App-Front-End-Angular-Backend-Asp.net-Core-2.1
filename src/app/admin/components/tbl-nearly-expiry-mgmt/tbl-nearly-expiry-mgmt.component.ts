import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AllowablePercentage } from 'src/app/models/allowable-percentage';
import { SystemCapabilityStatus } from 'src/app/models/system-capability-status';
import { AllowablePercentageService } from 'src/app/services/allowable-percentage.service';
import { LoginService } from 'src/app/services/login.service';
import { SystemCapabilityStatusService } from 'src/app/services/system-capability-status.service';
import * as $ from "jquery";
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { TblNearlyExpiryMgmtService } from 'src/app/services/tbl-nearly-expiry-mgmt.service';
import { TblNearlyExpiryMgmt } from 'src/app/models/tbl-nearly-expiry-mgmt';

@Component({
  selector: 'app-tbl-nearly-expiry-mgmt',
  templateUrl: './tbl-nearly-expiry-mgmt.component.html',
  styleUrls: ['./tbl-nearly-expiry-mgmt.component.scss']
})
export class TblNearlyExpiryMgmtComponent implements OnInit {
//Objects for Holding Model Data
TblNearlyExpiryMgmt: TblNearlyExpiryMgmt[] = [];
showLoading: boolean = true;

//Objects for Delete
deleteRejectStatus: TblNearlyExpiryMgmt = new TblNearlyExpiryMgmt();
editIndex: number = null;
deleteIndex: number = null;

//Properties for Searching
searchBy: string = "p_nearly_expiry_desc";
searchText: string = "";

//Properties for Paging
currentPageIndex: number = 0;
pages: any[] = [];
pageSize: number = 7;

//Properties for Sorting
sortBy: string = "p_nearly_expiry_desc";
sortOrder: string = "ASC";

//Reactive Forms
newForm: FormGroup;
editForm: FormGroup;

//Active User
activeUser: string ="";
//Date variable
ToDay: Date;

//Autofocus TextBoxes
@ViewChild("defaultTextBox_New") defaultTextBox_New: ElementRef;
@ViewChild("defaultTextBox_Edit") defaultTextBox_Edit: ElementRef;

//Sample for Testing Status
samples: Observable<SystemCapabilityStatus[]>;

constructor(private tblNearlyExpiryMgmtService: TblNearlyExpiryMgmtService,private toastr: ToastrService, private formBuilder: FormBuilder, private systemCapabilityStatusService:  SystemCapabilityStatusService, public loginService: LoginService) { }


ngOnInit()
  {
    this.loginService.detectIfAlreadyLoggedIn(); //detect already Login
    this.ToDay = new Date();
    this.activeUser = this.loginService.currentUserName;

       //Get data from database
       this.tblNearlyExpiryMgmtService.getAllExpiryDaysData().subscribe(
        (response: TblNearlyExpiryMgmt[]) =>
        {
          this.TblNearlyExpiryMgmt = response;
          this.showLoading = false;
          this.calculateNoOfPages();
        }

    
      );

       //Create newForm
    this.newForm = this.formBuilder.group({
      p_id: this.formBuilder.control(null),
      p_nearly_expiry_desc: this.formBuilder.control(null, [Validators.required]),
      // p_is_active: this.formBuilder.control(null, [Validators.required])
    });

    //Create editForm
    this.editForm = this.formBuilder.group({
      p_id: this.formBuilder.control(null),
      p_nearly_expiry_desc: this.formBuilder.control(null, [Validators.required])
      // p_is_active: this.formBuilder.control(null, [Validators.required]),
      // p_date_modified: this.formBuilder.control(null, [Validators.required]),
      // p_modified_by: this.formBuilder.control(null, [Validators.required]),
    });
  
    // Here 
    this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();

  }
  calculateNoOfPages()
  {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.TblNearlyExpiryMgmt, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];

    //Generate pages
    for (let i = 0; i < noOfPages; i++)
    {
      this.pages.push({ pageIndex: i });
    }

    this.currentPageIndex = 0;
  }


  //ViewChild
  @ViewChild("DateNowInstances") DateNowInstances: ElementRef;
  @ViewChild("AllowablePercentage") AllowablePercentage: ElementRef;

  onPageIndexClicked(ind)
  {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length)
    {
      this.currentPageIndex = ind;
    }
  }

  onNewClick(event)
  {
    //reset the newForm
    this.newForm.reset({ id: 0 });
    setTimeout(() =>
    {
      //Focus the ClientLocation textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }

  onSaveClick()
  {
    if (this.newForm.valid)
    {
      //Invoke the REST-API call
      this.tblNearlyExpiryMgmtService.insertExpiryDaysData(this.newForm.value).subscribe((response) =>
      {
        //Add Response to Grid
        var p: TblNearlyExpiryMgmt= new TblNearlyExpiryMgmt();
        p.p_id = response.p_id;
        p.p_nearly_expiry_desc = response.p_nearly_expiry_desc;
        // p.p_is_active = response.p_is_active;

        this.TblNearlyExpiryMgmt.push(p);

        //Reset the newForm
        this.newForm.reset();
        $("#newClientLocationFormCancel").trigger("click");
        this.calculateNoOfPages();

        this.calculateNoOfPages();
      }, (error) =>
        {
          console.log(error);
        });
    }
  }

  onEditClick(event, ExpiryStatusParam: TblNearlyExpiryMgmt)
  {


    //Reset the editForm
    this.editForm.reset();
    setTimeout(() =>
    {
      //Set data into editForm
      this.editForm.patchValue(ExpiryStatusParam);
      this.editIndex = this.TblNearlyExpiryMgmt.indexOf(ExpiryStatusParam);

      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }

  InvalidQuantityAllowabPercents() 
  {
    this.toastr.warning('Invalid Allowable Percentage Quantity!', 'Notifications');
  }

  UpdatedSuccessFully() 
  {
    this.toastr.success('Update Successfully!', 'Notifications');
  }

  onUpdateClick()
  {
 
// if(this.AllowablePercentage.nativeElement.value == "10")
// {

// }
// else if(this.AllowablePercentage.nativeElement.value == "20")
// {

// }
// else if(this.AllowablePercentage.nativeElement.value == "30")
// {

// }
// else if(this.AllowablePercentage.nativeElement.value == "40")
// {

// }
// else if(this.AllowablePercentage.nativeElement.value == "50")
// {

// }
// else
// {
//   this.InvalidQuantityAllowabPercents() ;
//   return;
// }

    if (this.editForm.valid)
    {
      //Invoke the REST-API call
      
      this.tblNearlyExpiryMgmtService.updateExpiryDaysData(this.editForm.value).subscribe((response: TblNearlyExpiryMgmt) =>
      {
        //Update the response in Grid
        this.TblNearlyExpiryMgmt[this.editIndex] = response;

        //Reset the editForm
        this.editForm.reset();
        $("#editClientLocationFormCancel").trigger("click");

        this.UpdatedSuccessFully(); 
      },
        (error) =>
        {
          console.log(error);
        });
    }
    // else
    // {
    //   alert("Invalid Data");
    // }
  }

  onDeleteClick(event, Xpiry: TblNearlyExpiryMgmt)
  {
    //Set data into deleteClientLocation
    this.deleteRejectStatus.p_id = Xpiry.p_id;
    this.deleteRejectStatus.p_nearly_expiry_desc = Xpiry.p_nearly_expiry_desc;
    this.deleteIndex = this.TblNearlyExpiryMgmt.indexOf(Xpiry);
  }

  onDeleteConfirmClick()
  {
    //Invoke the REST-API call
    this.tblNearlyExpiryMgmtService.deleteExpiryDaysData(this.deleteRejectStatus.p_id).subscribe(
      (response) =>
      {
        //Delete object in Grid
        this.TblNearlyExpiryMgmt.splice(this.deleteIndex, 1);

        //Clear deleteCountry
        this.deleteRejectStatus.p_id = null;
        this.deleteRejectStatus.p_nearly_expiry_desc = null;
        this.deleteRejectStatus.p_is_active = null;

        //Recall the calculateNoOfPages
        this.calculateNoOfPages();
      },
      (error) =>
      {
        console.log(error);
      });
  }

  onSearchTextChange(event)
  {
    this.calculateNoOfPages();
  }

  decimalFilter(event: any) {
    const reg = /^-?\d*(\.\d{0,2})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);
  
    if (!reg.test(input)) {
        event.preventDefault();
    }
  }
  
  checkQtyFired(event: any) {
    this.InvalidQuantityAllowabPercents(); 
  }


}