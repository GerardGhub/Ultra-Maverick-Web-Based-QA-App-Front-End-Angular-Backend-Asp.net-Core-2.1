import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RejectedStatus } from 'src/app/models/rejected-status';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { RejectedStatusService } from 'src/app/services/rejected-status.service';
import * as $ from "jquery";
import { Observable } from 'rxjs';
import { ClientLocation } from 'src/app/models/client-location';
import { ClientLocationsService } from 'src/app/services/client-locations.service';
import { SystemCapabilityStatusService } from 'src/app/services/system-capability-status.service';
import { SystemCapabilityStatus } from 'src/app/models/system-capability-status';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { AspNetRolesService } from 'src/app/services/asp-net-roles.service';
import { AspNetRoles } from 'src/app/models/asp-net-roles';

@Component({
  selector: 'app-asp-net-roles',
  templateUrl: './asp-net-roles.component.html',
  styleUrls: ['./asp-net-roles.component.scss']
})
export class AspNetRolesComponent implements OnInit {

     //Objects for Holding Model Data
     clientLocations: AspNetRoles[] = [];
     showLoading: boolean = true;
   
     //Objects for Delete
     deleteRejectStatus: AspNetRoles = new AspNetRoles();
     editIndex: number = null;
     deleteIndex: number = null;
   
     //Properties for Searching
     searchBy: string = "Name";
     searchText: string = "";
   
     //Properties for Paging
     currentPageIndex: number = 0;
     pages: any[] = [];
     pageSize: number = 7;
   
     //Properties for Sorting
     sortBy: string = "Name";
     sortOrder: string = "ASC";
   
     //Reactive Forms
     newForm: FormGroup;
     editForm: FormGroup;
   
     //Autofocus TextBoxes
     @ViewChild("defaultTextBox_New") defaultTextBox_New: ElementRef;
     @ViewChild("defaultTextBox_Edit") defaultTextBox_Edit: ElementRef;
 
     //Sample for Testing Status
     samples: Observable<SystemCapabilityStatus[]>;
 
   constructor(private aspNetRolesService: AspNetRolesService, private formBuilder: FormBuilder, private systemCapabilityStatusService:  SystemCapabilityStatusService, private toastr: ToastrService)
    { 
 
   }
  ngOnInit(){
    //Get data from database
    this.aspNetRolesService.getListOfRole().subscribe(
      (response: AspNetRoles[]) =>
      {
        this.clientLocations = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      }

  
    );

     //Create newForm
  this.newForm = this.formBuilder.group({
    id: this.formBuilder.control(null),
    reject_status_name: this.formBuilder.control(null, [Validators.required]),
    is_active: this.formBuilder.control(null, [Validators.required])
  });

  //Create editForm
  this.editForm = this.formBuilder.group({
    Id: this.formBuilder.control(null),
    name: this.formBuilder.control(null, [Validators.required]),
    // is_active: this.formBuilder.control(null, [Validators.required])
  });

  // Here 
  this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();
  }

  @ViewChild("RejectStatusDescription") RejectStatusDescription : ElementRef;
  @ViewChild("RejectStatusUpdate") RejectStatusUpdate : ElementRef;
  calculateNoOfPages()
  {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];

    //Generate pages
    for (let i = 0; i < noOfPages; i++)
    {
      this.pages.push({ pageIndex: i });
    }

    this.currentPageIndex = 0;
  }

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
      var Status = this.RejectStatusDescription.nativeElement.value;
      Swal.fire({
        title: 'Are you sure that you want to append new status?',
        text: Status,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
        
  
  
  
          Swal.fire(
            'Append!',
            'Your data is updated on production',
            'success'
          )
  
        }
      })
  


      //Invoke the REST-API call
      this.aspNetRolesService.appendnewRole(this.newForm.value).subscribe((response) =>
      {
        //Add Response to Grid
        var p: AspNetRoles = new AspNetRoles();
        p.Id = response.Id;
        p.name = response.name;
        p.normalizedname = response.normalizedname;
        p.concurrencystamp = response.concurrencystamp;
        p.discriminator = response.discriminator;
        this.clientLocations.push(p);

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
    else
    {
    this.FieldOutRequiredField();
    }
  }


  FieldOutRequiredField() {
    this.toastr.warning('Field out the required fields!', 'Notifications');
  }
  onEditClick(event, StatusParam: AspNetRoles)
  {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() =>
    {
      //Set data into editForm
      this.editForm.patchValue(StatusParam);
      this.editIndex = this.clientLocations.indexOf(StatusParam);

      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }

  onUpdateClick()
  {
    if (this.editForm.valid)
    {
     
      var Status = this.RejectStatusUpdate.nativeElement.value;
      Swal.fire({
        title: 'Are you sure that you want to modify the user role?',
        text: Status,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
        
  
      //Invoke the REST-API call
      this.aspNetRolesService.modifyRole(this.editForm.value).subscribe((response: AspNetRoles) =>
      {
        //Update the response in Grid
        this.clientLocations[this.editIndex] = response;

        //Reset the editForm
        this.editForm.reset();
        $("#editClientLocationFormCancel").trigger("click");
      },
        (error) =>
        {
          console.log(error);
        });
  
  
          Swal.fire(
            'Updated!',
            'your data on production has been modified',
            'success'
          )
  
        }
      })



    }
  }

  onDeleteClick(event, RestApi: AspNetRoles)
  {
    //Set data into deleteClientLocation
    this.deleteRejectStatus.Id = RestApi.Id;
    this.deleteRejectStatus.name= RestApi.name;
    this.deleteRejectStatus.normalizedname= RestApi.normalizedname;
    this.deleteRejectStatus.concurrencystamp= RestApi.concurrencystamp;
    this.deleteRejectStatus.discriminator = RestApi.discriminator;
    this.deleteIndex = this.clientLocations.indexOf(RestApi);
  }

  onDeleteConfirmClick()
  {
    // //Invoke the REST-API call
    // this.aspNetRolesService.deleteRejectedStatus(this.deleteRejectStatus.id).subscribe(
    //   (response) =>
    //   {
    //     //Delete object in Grid
    //     this.clientLocations.splice(this.deleteIndex, 1);

    //     //Clear deleteCountry
    //     this.deleteRejectStatus.id = null;
    //     this.deleteRejectStatus.reject_status_name = null;
    //     this.deleteRejectStatus.is_active = null;

    //     //Recall the calculateNoOfPages
    //     this.calculateNoOfPages();
    //   },
    //   (error) =>
    //   {
    //     console.log(error);
    //   });
  }

  onSearchTextChange(event)
  {
    this.calculateNoOfPages();
  }


}
