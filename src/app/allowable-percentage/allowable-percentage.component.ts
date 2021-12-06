import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RejectedStatus } from '../models/rejected-status';
import { SystemCapabilityStatus } from '../models/system-capability-status';
import { RejectedStatusService } from '../services/rejected-status.service';
import { SystemCapabilityStatusService } from '../services/system-capability-status.service';
import * as $ from "jquery";
import { FilterPipe } from '../pipes/filter.pipe';
import { AllowablePercentage } from '../models/allowable-percentage';
import { AllowablePercentageService } from '../services/allowable-percentage.service';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allowable-percentage',
  templateUrl: './allowable-percentage.component.html',
  styleUrls: ['./allowable-percentage.component.scss']
})
export class AllowablePercentageComponent implements OnInit {
//Objects for Holding Model Data
tblAllowablePercentageQA: AllowablePercentage[] = [];
showLoading: boolean = true;

hide = true;
//Objects for Delete
deleteRejectStatus: AllowablePercentage = new AllowablePercentage();
editIndex: number = null;
deleteIndex: number = null;

//Properties for Searching
searchBy: string = "p_allowable_percentage";
searchText: string = "";

//Properties for Paging
currentPageIndex: number = 0;
pages: any[] = [];
pageSize: number = 7;

//Properties for Sorting
sortBy: string = "p_allowable_percentage";
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

  constructor(private allowablePercentageService: AllowablePercentageService,private toastr: ToastrService, private formBuilder: FormBuilder, private systemCapabilityStatusService:  SystemCapabilityStatusService, public loginService: LoginService) { }

  ngOnInit()
  {
    this.loginService.detectIfAlreadyLoggedIn(); //detect already Login
    this.ToDay = new Date();
    this.activeUser = this.loginService.currentUserName;

       //Get data from database
       this.allowablePercentageService.getAllAlowablePercentage().subscribe(
        (response: AllowablePercentage[]) =>
        {
          this.tblAllowablePercentageQA = response;
          this.showLoading = false;
          this.calculateNoOfPages();
        }

    
      );

       //Create newForm
    this.newForm = this.formBuilder.group({
      p_id: this.formBuilder.control(null),
      p_allowable_percentage: this.formBuilder.control(null, [Validators.required]),
      // p_is_active: this.formBuilder.control(null, [Validators.required])
    });

    //Create editForm
    this.editForm = this.formBuilder.group({
      p_id: this.formBuilder.control(null),
      p_allowable_percentage: this.formBuilder.control(null, [Validators.required]),
      p_is_active: this.formBuilder.control(null, [Validators.required]),
      p_date_modified: this.formBuilder.control(null, [Validators.required]),
      p_modified_by: this.formBuilder.control(null, [Validators.required]),
      
    });
  
    // Here 
    this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();

  }



  calculateNoOfPages()
  {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.tblAllowablePercentageQA, this.searchBy, this.searchText).length / this.pageSize);
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
      this.allowablePercentageService.insertAllowablePercentage(this.newForm.value).subscribe((response) =>
      {
        //Add Response to Grid
        var p: AllowablePercentage= new AllowablePercentage();
        p.p_id = response.p_id;
        p.p_allowable_percentage = response.p_allowable_percentage;
        // p.p_is_active = response.p_is_active;

        this.tblAllowablePercentageQA.push(p);

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

  onEditClick(event, AllowablePercentageStatusParam: AllowablePercentage)
  {


    //Reset the editForm
    this.editForm.reset();
    setTimeout(() =>
    {
      //Set data into editForm
      this.editForm.patchValue(AllowablePercentageStatusParam);
      this.editIndex = this.tblAllowablePercentageQA.indexOf(AllowablePercentageStatusParam);

      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);

  }





  InvalidQuantityAllowabPercents() 
  {
    this.toastr.warning('Invalid Allowable Percentage Quantity!', 'Notifications');
  }

  onUpdateClick()
  {
var Percentage =  this.AllowablePercentage.nativeElement.value;


Percentage = Percentage.replace("%","");
// alert(Percentage);
// //Remove Percentage
 if(Percentage == 100)
{

}
else
{
if(Percentage < 100)
{
// alert("Baby aA masster ");
}

else
{
  this.InvalidQuantityAllowabPercents() ;
  return;
}
}
var AllowablePercentages = this.AllowablePercentage.nativeElement.value;
Swal.fire({
  title: 'Are you sure you want to update the allowable percentage?',
  text: AllowablePercentages,
  icon: 'info',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.isConfirmed) {
  
//Start

if (this.editForm.valid)
{
  //Invoke the REST-API call
  
  this.allowablePercentageService.updateAllowablePercentage(this.editForm.value).subscribe((response: AllowablePercentage) =>
  {
    //Update the response in Grid
    this.tblAllowablePercentageQA[this.editIndex] = response;

    //Reset the editForm
    this.editForm.reset();
    $("#editClientLocationFormCancel").trigger("click");
  },
    (error) =>
    {
      console.log(error);
    });
}

//END



    Swal.fire(
      'Updated!',
      'Allowable Percentage commited.',
      'success'
    )
this.ngOnInit();
  }
})


  }

  onDeleteClick(event, AllowablePercentage: AllowablePercentage)
  {
    //Set data into deleteClientLocation
    this.deleteRejectStatus.p_id = AllowablePercentage.p_id;
    this.deleteRejectStatus.p_allowable_percentage = AllowablePercentage.p_allowable_percentage;
    this.deleteIndex = this.tblAllowablePercentageQA.indexOf(AllowablePercentage);
  }

  onDeleteConfirmClick()
  {
    //Invoke the REST-API call
    this.allowablePercentageService.deleteAllowablePercentage(this.deleteRejectStatus.p_id).subscribe(
      (response) =>
      {
        //Delete object in Grid
        this.tblAllowablePercentageQA.splice(this.deleteIndex, 1);

        //Clear deleteCountry
        this.deleteRejectStatus.p_id = null;
        this.deleteRejectStatus.p_allowable_percentage = null;
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
    // const reg = /^-?\d*(\.\d{0,2})?$/;
    // let input = event.target.value + String.fromCharCode(event.charCode);
  
    // if (!reg.test(input)) {
    //     event.preventDefault();
    // }
  }
  
  checkQtyFired(event: any) {

    var Percentage =  this.AllowablePercentage.nativeElement.value;
    Percentage = Percentage.replace("%","");
    // alert(Percentage);
    //Remove Percentage
     if(Percentage == 100)
    {
    
    }
    else
    {
    if(Percentage < 100)
    {
    // alert("Baby aA masster ");
    }
    
    else
    {
      this.InvalidQuantityAllowabPercents() ;
      return;
    }
  }
    // this.InvalidQuantityAllowabPercents(); 
    // $("input[name='p_allowable_percentage']").on('input', function() {
    //   // $(this).val(function(i, v) {
    //   //  return v.replace('%','') + '%';  });
    //   // });
  }


}
