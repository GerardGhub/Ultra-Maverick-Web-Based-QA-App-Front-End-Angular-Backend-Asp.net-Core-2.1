using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;
using MvcTaskManager.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManager.Controllers
{
  public class tblDryWHReceivingController : Controller
  {
    private ApplicationDbContext db;
    public tblDryWHReceivingController(ApplicationDbContext db)
    {
      this.db = db;
    }

    //[HttpGet]
    //[Route("api/DryWareHouseReceivingForLabTest")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //public IActionResult Get()
    //{
    //  List<DryWareHouseReceiving> TbLLabTestRemarks = db.tblDryWHReceiving.ToList();
    //  return Ok(TbLLabTestRemarks);
    //}

    [HttpGet]
    [Route("api/DryWareHouseReceivingForLabTest")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Get()
    {

      int CancelledByQAStatus = 3;
      List<DryWareHouseReceiving> projects = db.tblDryWHReceiving.Where(temp => temp.is_active.Equals(true)

      && temp.lab_request_by != null
      && temp.lab_result_released_by == null
      != temp.qa_approval_status.Contains(CancelledByQAStatus.ToString())
      ).ToList();


      List<DryWareHouseReceivingViewModel> projectsViewModel = new List<DryWareHouseReceivingViewModel>();
      foreach (var project in projects)
      {
        //int dayDiff = (project.Expiration_date_string - DateTime.Now).Days;
        int dayDiffExpiryDaysAging = (project.lab_exp_date_extension - DateTime.Now).Days;
        //if(project.qa_approval_date == null)
        //{
        //  int LaboratoryAging = ((DateTime.Now - DateTime.Now)).Days;
        //}
        //else
        //{
        //  int LaboratoryAging = ((TimeSpan)(project.qa_approval_date - DateTime.Now)).Days;
        //}
        int LaboratoryAging = ((TimeSpan)(project.qa_approval_date - DateTime.Now)).Days;
        projectsViewModel.Add(new DryWareHouseReceivingViewModel()
        {
          Id = project.id,
          Lab_access_code = project.lab_access_code,
          Index_id_partial = project.index_id_partial,
          //Item_code = project.DateOfStart.ToString("dd/MM/yyyy"),
          Item_code = project.item_code,
          Item_description = project.item_description,
          Category = project.category,
          Uom = project.uom,
          Qty_received = project.qty_received,
          Historical_lab_transact_count = project.historical_lab_transact_count,
          Lab_status = project.lab_status,      
          //Expiry_days_aging = project.expiry_days_aging,
          Client_requestor = project.client_requestor,
          Lab_request_date = project.lab_request_date,
          Lab_request_by = project.lab_request_by,
          Po_number = project.po_number,
          Qa_approval_status = project.qa_approval_status,
          Qa_approval_by = project.qa_approval_by,
          Qa_approval_date = project.qa_approval_date.ToString("MM/dd/yyyy"),
          Lab_result_released_by = project.lab_result_released_by,
          Lab_result_released_date = project.lab_result_released_date,
          Lab_result_remarks = project.lab_result_remarks,
          Lab_sub_remarks = project.lab_sub_remarks,
          Is_active = project.is_active,
          Lab_exp_date_extension = project.lab_exp_date_extension.ToString("MM/dd/yyyy"),

          //Sample
          Expiry_days_aging = dayDiffExpiryDaysAging,
          Lab_approval_aging_days = LaboratoryAging,
          Supplier = project.supplier,
          Po_date = project.po_date,
          Pr_no = project.pr_no,
          Pr_date = project.pr_date
          //DaysBeforeExpired = dayDiff

        });
      }
      return Ok(projectsViewModel);




    }






    [HttpGet]
    [Route("api/DryWareHouseReceivingForLabTest/LabResult")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult GetLabResult()
    {

      //string data_is_pending = "1";
      string is_activated = "1";
      string LaboratoryResult = "LAB RESULT";

      //projects = db.dry_wh_lab_test_req_logs.Where(temp => temp.is_received_status.Contains(is_activated)).ToList();

      //db.Projects.Include("ClientLocation").Where
      List<DryWhLabTestReqLogs> projects = null;
      projects = db.dry_wh_lab_test_req_logs.Include("DryWareHouseReceiving").Where(temp => temp.is_active.Contains(is_activated) && temp.DryWareHouseReceiving.lab_status.Contains(LaboratoryResult)).ToList();


      List<DryWhLabTestReqLogsViewModel> WarehouseReceivingContructor = new List<DryWhLabTestReqLogsViewModel>();
      foreach (var project in projects)
      {
        int LaboratoryAging = ((TimeSpan)(project.DryWareHouseReceiving.qa_approval_date - project.lab_request_date)).Days;
        int dayDiffExpiryDaysAging = (project.DryWareHouseReceiving.lab_exp_date_extension - project.bbd).Days;
        WarehouseReceivingContructor.Add(new DryWhLabTestReqLogsViewModel()
        {

          Lab_req_id = project.lab_req_id,
          Item_code = project.item_code,
          Item_desc = project.item_desc,
          Category = project.category,
          Qty_received = project.qty_received,
          Remaining_qty = project.remaining_qty,
          Days_to_expired = dayDiffExpiryDaysAging.ToString(),
          Lab_status = project.lab_status,
          Historical = project.historical,
          Aging = project.aging,
          Remarks = project.remarks,
          Fk_receiving_id = project.fk_receiving_id,
          //Is_active = project.is_active,
          Added_by = project.added_by,
          Date_added = project.date_added,
          Qa_approval_by = project.qa_approval_by,
          Qa_approval_status = project.qa_approval_status,
          Qa_approval_date = project.DryWareHouseReceiving.qa_approval_date.ToString(),
          Lab_result_released_by = project.lab_result_released_by,
          Lab_result_released_date = project.lab_result_released_date,
          Lab_result_remarks = project.lab_result_remarks,
          Lab_sub_remarks = project.lab_sub_remarks,
          Lab_exp_date_extension = project.DryWareHouseReceiving.lab_exp_date_extension.ToString(),
          Laboratory_procedure = project.laboratory_procedure,
          Lab_request_date = project.DryWareHouseReceiving.lab_request_date,
          Lab_result_received_by = project.lab_result_received_by,
          Lab_result_received_date = project.lab_result_received_date,
          Lab_request_by = project.lab_request_by,
          Is_received_status = project.is_received_status,
          Po_date = project.po_date,
          Po_number = project.po_number,
          Pr_date = project.pr_date,
          Pr_number = project.pr_number,
          Lab_access_code = project.lab_access_code,
          Bbd = project.bbd,
          Lab_approval_aging_days = LaboratoryAging,
          Client_requestor = project.DryWareHouseReceiving.client_requestor,
          Supplier = project.DryWareHouseReceiving.supplier





        }); 
      }

      return Ok(WarehouseReceivingContructor);



    }

    [HttpGet]
    [Route("api/DryWareHouseReceivingForLabTest/searchreceivedidentity/{searchtext}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Search(int searchText)
    {

      //string data_is_pending = "1";
      string is_activated = "1";
      List<DryWhLabTestReqLogs> projects = null;

      //string ReceivedID = searchText;
      int ReceivedID = searchText;
      //if (searchBy == "store_name")       

      projects = db.dry_wh_lab_test_req_logs.Where(temp => temp.is_received_status.Contains(is_activated) && temp.fk_receiving_id == ReceivedID).ToList();


      List<DryWhLabTestReqLogsViewModel> WarehouseStoreOrderContructor = new List<DryWhLabTestReqLogsViewModel>();
      foreach (var project in projects)
      {
        WarehouseStoreOrderContructor.Add(new DryWhLabTestReqLogsViewModel()
        {

          Lab_req_id = project.lab_req_id,
          Item_code = project.item_code,
          Item_desc = project.item_desc,
          Category = project.category,
          Qty_received = project.qty_received,
          Remaining_qty = project.remaining_qty,
          Days_to_expired = project.days_to_expired.ToString(),
          Lab_status = project.lab_status,
          Historical = project.historical,
          Aging = project.aging,
          Remarks = project.remarks,
          Fk_receiving_id = project.fk_receiving_id,
          //Is_active = project.is_active,
          Added_by = project.added_by,
          Date_added = project.date_added,
          Qa_approval_by = project.qa_approval_by,
          Qa_approval_status = project.qa_approval_status,
          Qa_approval_date = project.qa_approval_date,
          Lab_result_released_by = project.lab_result_released_by,
          Lab_result_released_date = project.lab_result_released_date,
          Lab_result_remarks = project.lab_result_remarks,
          Lab_sub_remarks = project.lab_sub_remarks,
          Lab_exp_date_extension = project.lab_exp_date_extension,
          Laboratory_procedure = project.laboratory_procedure,
          Lab_request_date = project.lab_request_date.ToString(),
          Lab_result_received_by = project.lab_result_received_by,
          Lab_result_received_date = project.lab_result_received_date,
          Lab_request_by = project.lab_request_by,
          Is_received_status = project.is_received_status





        }); ;
      }

      return Ok(WarehouseStoreOrderContructor);
    }


    //[HttpGet]
    //[Route("api/LabTestRemarks/searchbyid/{id}")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //public IActionResult GetByLabID(int LabTestRemarksID)
    //{
    //  int LaboratoryIdentity = LabTestRemarksID;

    //  LabTestRemarks tblLabTestRemark = db.laboratory_test_remarks.Where(temp => temp.lab_remarks_id == LaboratoryIdentity).FirstOrDefault();
    //  if (tblLabTestRemark != null)
    //  {
    //    return Ok(tblLabTestRemark);
    //  }
    //  else
    //    return NoContent();
    //}








    //[HttpPost]
    //[Route("api/LabTestRemarks")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //public LabTestRemarks Post([FromBody] LabTestRemarks LabRemarks)
    //{
    //  db.laboratory_test_remarks.Add(LabRemarks);
    //  db.SaveChanges();

    //  LabTestRemarks existingData = db.laboratory_test_remarks.Where(temp => temp.lab_remarks_id == LabRemarks.lab_remarks_id).FirstOrDefault();
    //  return LabRemarks;
    //}

    //[HttpPut]
    //[Route("api/LabTestRemarks")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //public LabTestRemarks Put([FromBody] LabTestRemarks labTestRemarksProc)
    //{
    //  LabTestRemarks existingDataStatus = db.laboratory_test_remarks.Where(temp => temp.lab_remarks_id == labTestRemarksProc.lab_remarks_id).FirstOrDefault();
    //  if (existingDataStatus != null)
    //  {
    //    existingDataStatus.lab_remarks_description = labTestRemarksProc.lab_remarks_description;
    //    existingDataStatus.lab_test_remarks_active_status = labTestRemarksProc.lab_test_remarks_active_status;
    //    existingDataStatus.updated_at = labTestRemarksProc.updated_at;
    //    existingDataStatus.updated_by = labTestRemarksProc.updated_by;
    //    db.SaveChanges();
    //    return existingDataStatus;
    //  }
    //  else
    //  {
    //    return null;
    //  }
    //}

    [HttpPut]
    [Route("api/DryWareHouseReceivingForLabTest/QAApproval")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public DryWareHouseReceiving Put([FromBody] DryWareHouseReceiving labTestQAStaffApprovalParams)
    {
      DryWareHouseReceiving existingDataStatus = db.tblDryWHReceiving.Where(temp => temp.id == labTestQAStaffApprovalParams.id).FirstOrDefault();
      if (existingDataStatus != null)
      {
        existingDataStatus.qa_approval_by = labTestQAStaffApprovalParams.qa_approval_by;
        existingDataStatus.qa_approval_status = labTestQAStaffApprovalParams.qa_approval_status;
        existingDataStatus.qa_approval_date = labTestQAStaffApprovalParams.qa_approval_date;
        existingDataStatus.lab_status = labTestQAStaffApprovalParams.lab_status;
        db.SaveChanges();
        return existingDataStatus;
      }
      else
      {
        return null;
      }
    }


    [HttpPut]
    [Route("api/DryWareHouseReceivingForLabTest/QAReleasingResult")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public DryWareHouseReceiving PutQAResults([FromBody] DryWareHouseReceiving labTestQAStaffApprovalParams)
    {
      DryWareHouseReceiving existingDataStatus = db.tblDryWHReceiving.Where(temp => temp.id == labTestQAStaffApprovalParams.id).FirstOrDefault();
      if (existingDataStatus != null)
      {
        existingDataStatus.lab_result_released_by = labTestQAStaffApprovalParams.lab_result_released_by;
        existingDataStatus.lab_result_released_date = labTestQAStaffApprovalParams.lab_result_released_date;
        existingDataStatus.lab_status = labTestQAStaffApprovalParams.lab_status;
        existingDataStatus.lab_result_remarks = labTestQAStaffApprovalParams.lab_result_remarks;
        existingDataStatus.lab_sub_remarks = labTestQAStaffApprovalParams.lab_sub_remarks;
        existingDataStatus.lab_exp_date_extension = labTestQAStaffApprovalParams.lab_exp_date_extension;
        existingDataStatus.laboratory_procedure = labTestQAStaffApprovalParams.laboratory_procedure;
        db.SaveChanges();
        return existingDataStatus;
      }
      else
      {
        return null;
      }
    }


    [HttpPut]
    [Route("api/DryWareHouseReceivingForLabTest/CancelledQAReleasingResult")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public DryWareHouseReceiving PutCancelQAResults([FromBody] DryWareHouseReceiving labTestCancelParams)
    {
      DryWareHouseReceiving existingDataStatus = db.tblDryWHReceiving.Where(temp => temp.id == labTestCancelParams.id).FirstOrDefault();
      if (existingDataStatus != null)
      {
        existingDataStatus.lab_cancel_by = labTestCancelParams.lab_cancel_by;
        existingDataStatus.lab_cancel_date = labTestCancelParams.lab_cancel_date;
        existingDataStatus.lab_cancel_remarks = labTestCancelParams.lab_cancel_remarks;
        existingDataStatus.qa_approval_status = labTestCancelParams.qa_approval_status;
        db.SaveChanges();
        return existingDataStatus;
      }
      else
      {
        return null;
      }
    }


    //[HttpDelete]
    //[Route("api/LabTestRemarks")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //public int Delete(int ID)
    //{
    //  LabTestRemarks existingDataStatus = db.laboratory_test_remarks.Where(temp => temp.lab_remarks_id == ID).FirstOrDefault();
    //  if (existingDataStatus != null)
    //  {
    //    db.laboratory_test_remarks.Remove(existingDataStatus);
    //    db.SaveChanges();
    //    return ID;
    //  }
    //  else
    //  {
    //    return -1;
    //  }
    //}


  }

}

