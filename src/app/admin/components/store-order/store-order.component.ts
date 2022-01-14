import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RejectedStatus } from 'src/app/models/rejected-status';
import { SystemCapabilityStatus } from 'src/app/models/system-capability-status';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { RejectedStatusService } from 'src/app/services/rejected-status.service';
import { SystemCapabilityStatusService } from 'src/app/services/system-capability-status.service';
import Swal from 'sweetalert2';
import * as $ from "jquery";
import { DryWhStoreOrders } from 'src/app/models/dry-wh-store-orders';
import { WhCheckerDashboardService } from 'src/app/services/wh-checker-dashboard.service';


@Component({
  selector: 'app-store-order',
  templateUrl: './store-order.component.html',
  styleUrls: ['./store-order.component.scss']
})
export class StoreOrderComponent implements OnInit {
     //Objects for Holding Model Data
     storeOrders: DryWhStoreOrders[] = [];
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
 

  constructor(private whCheckerDashboardService: WhCheckerDashboardService, private formBuilder: FormBuilder, private systemCapabilityStatusService:  SystemCapabilityStatusService, private toastr: ToastrService) { }

  ngOnInit()
  {
         //Get data from database
         this.whCheckerDashboardService.getStoreOrders().subscribe(
          (response: DryWhStoreOrders[]) =>
          {
            this.storeOrders = response;
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
    var noOfPages = Math.ceil(filterPipe.transform(this.storeOrders, this.searchBy, this.searchText).length / this.pageSize);
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


 


  FieldOutRequiredField() {
    this.toastr.warning('Field out the required fields!', 'Notifications');
  }




 


  onSearchTextChange(event)
  {
    this.calculateNoOfPages();
  }

  

}
