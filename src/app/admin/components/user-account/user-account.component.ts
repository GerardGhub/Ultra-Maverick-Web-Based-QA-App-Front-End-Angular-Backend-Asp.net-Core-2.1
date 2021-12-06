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
import { UserAccount } from 'src/app/models/user-account';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
      //Objects for Holding Model Data
      AspNetUsers: UserAccount[] = [];
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
  

  constructor(private userAccountService: UserAccountService, private formBuilder: FormBuilder, private systemCapabilityStatusService:  SystemCapabilityStatusService) {


   }

  ngOnInit()
  {
           //Get data from database
           this.userAccountService.sample().subscribe(
            (response: UserAccount[]) =>
            {
              this.AspNetUsers = response;
              this.showLoading = false;
              this.calculateNoOfPages();
            }
    
        
          );
    
           //Create newForm
        this.newForm = this.formBuilder.group({
          id: this.formBuilder.control(null),
          firstName: this.formBuilder.control(null, [Validators.required]),
          is_active: this.formBuilder.control(null, [Validators.required])
        });
    
        //Create editForm
        this.editForm = this.formBuilder.group({
          id: this.formBuilder.control(null),
          firstName: this.formBuilder.control(null, [Validators.required]),
          is_active: this.formBuilder.control(null, [Validators.required])
        });
      
        // Here 
        this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();

  }

  calculateNoOfPages()
  {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.AspNetUsers, this.searchBy, this.searchText).length / this.pageSize);
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
    // if (this.newForm.valid)
    // {
    //   //Invoke the REST-API call
    //   this.rejectedStatusService.insertRejectStatus(this.newForm.value).subscribe((response) =>
    //   {
    //     //Add Response to Grid
    //     var p: RejectedStatus= new RejectedStatus();
    //     p.id = response.id;
    //     p.reject_status_name = response.reject_status_name;
    //     p.is_active = response.is_active;
    //     this.clientLocations.push(p);

    //     //Reset the newForm
    //     this.newForm.reset();
    //     $("#newClientLocationFormCancel").trigger("click");
    //     this.calculateNoOfPages();

    //     this.calculateNoOfPages();
    //   }, (error) =>
    //     {
    //       console.log(error);
    //     });
    // }
  }

  onEditClick(event, UserParam: UserAccount)
  {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() =>
    {
      //Set data into editForm
      this.editForm.patchValue(UserParam);
      this.editIndex = this.AspNetUsers.indexOf(UserParam);

      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }

  onUpdateClick()
  {
    // if (this.editForm.valid)
    // {
    //   //Invoke the REST-API call
    //   this.rejectedStatusService.updateRejectedStatus(this.editForm.value).subscribe((response: RejectedStatus) =>
    //   {
    //     //Update the response in Grid
    //     this.clientLocations[this.editIndex] = response;

    //     //Reset the editForm
    //     this.editForm.reset();
    //     $("#editClientLocationFormCancel").trigger("click");
    //   },
    //     (error) =>
    //     {
    //       console.log(error);
    //     });
    // }
  }

  onDeleteClick(event, RejectedStatus: RejectedStatus)
  {
    //Set data into deleteClientLocation
    // this.deleteRejectStatus.id = RejectedStatus.id;
    // this.deleteRejectStatus.reject_status_name = RejectedStatus.reject_status_name;
    // this.deleteIndex = this.clientLocations.indexOf(RejectedStatus);
  }

  onDeleteConfirmClick()
  {
    // //Invoke the REST-API call
    // this.rejectedStatusService.deleteRejectedStatus(this.deleteRejectStatus.id).subscribe(
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
