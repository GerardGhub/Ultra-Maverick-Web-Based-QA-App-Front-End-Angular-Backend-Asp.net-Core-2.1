import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RejectedStatus } from 'src/app/models/rejected-status';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { RejectedStatusService } from 'src/app/services/rejected-status.service';
import * as $ from "jquery";
import { Observable } from 'rxjs';
import { SystemCapabilityStatusService } from 'src/app/services/system-capability-status.service';
import { SystemCapabilityStatus } from 'src/app/models/system-capability-status';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rejected-status',
  templateUrl: './rejected-status.component.html',
  styleUrls: ['./rejected-status.component.scss']
})
export class RejectedStatusComponent implements OnInit {
    //Objects for Holding Model Data
    clientLocations: RejectedStatus[] = [];
    showLoading: boolean = true;
  
    //Objects for Delete
    deleteRejectStatus: RejectedStatus = new RejectedStatus();
    editIndex: number = null;
    deleteIndex: number = null;
  
    //Properties for Searching
    searchBy: string = "reject_status_name";
    searchText: string = "";
  
    //Properties for Paging
    currentPageIndex: number = 0;
    pages: any[] = [];
    pageSize: number = 7;
  
    //Properties for Sorting
    sortBy: string = "reject_status_name";
    sortOrder: string = "ASC";
  
    //Reactive Forms
    newForm: FormGroup;
    editForm: FormGroup;
  
    //Autofocus TextBoxes
    @ViewChild("defaultTextBox_New") defaultTextBox_New: ElementRef;
    @ViewChild("defaultTextBox_Edit") defaultTextBox_Edit: ElementRef;

    //Sample for Testing Status
    samples: Observable<SystemCapabilityStatus[]>;

  constructor(private rejectedStatusService: RejectedStatusService, private formBuilder: FormBuilder, private systemCapabilityStatusService:  SystemCapabilityStatusService, private toastr: ToastrService)
   { 

  }

  ngOnInit()
   {
       //Get data from database
       this.rejectedStatusService.getListOfStatusOfReject().subscribe(
        (response: RejectedStatus[]) =>
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
      id: this.formBuilder.control(null),
      reject_status_name: this.formBuilder.control(null, [Validators.required]),
      is_active: this.formBuilder.control(null, [Validators.required])
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
      this.rejectedStatusService.insertRejectStatus(this.newForm.value).subscribe((response) =>
      {
        //Add Response to Grid
        var p: RejectedStatus= new RejectedStatus();
        p.id = response.id;
        p.reject_status_name = response.reject_status_name;
        p.is_active = response.is_active;
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
  onEditClick(event, RejectedStatusParam: RejectedStatus)
  {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() =>
    {
      //Set data into editForm
      this.editForm.patchValue(RejectedStatusParam);
      this.editIndex = this.clientLocations.indexOf(RejectedStatusParam);

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
        title: 'Are you sure that you want to modify the status?',
        text: Status,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
        
  
      //Invoke the REST-API call
      this.rejectedStatusService.updateRejectedStatus(this.editForm.value).subscribe((response: RejectedStatus) =>
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

  onDeleteClick(event, RejectedStatus: RejectedStatus)
  {
    //Set data into deleteClientLocation
    this.deleteRejectStatus.id = RejectedStatus.id;
    this.deleteRejectStatus.reject_status_name = RejectedStatus.reject_status_name;
    this.deleteIndex = this.clientLocations.indexOf(RejectedStatus);
  }

  onDeleteConfirmClick()
  {
    //Invoke the REST-API call
    this.rejectedStatusService.deleteRejectedStatus(this.deleteRejectStatus.id).subscribe(
      (response) =>
      {
        //Delete object in Grid
        this.clientLocations.splice(this.deleteIndex, 1);

        //Clear deleteCountry
        this.deleteRejectStatus.id = null;
        this.deleteRejectStatus.reject_status_name = null;
        this.deleteRejectStatus.is_active = null;

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



}
