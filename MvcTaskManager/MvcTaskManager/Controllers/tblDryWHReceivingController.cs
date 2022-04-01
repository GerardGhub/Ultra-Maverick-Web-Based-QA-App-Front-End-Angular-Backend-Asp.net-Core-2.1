using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
      //System.Threading.Thread.Sleep(1000);
      //List<Project> projects = db.Projects.Include("ClientLocation").ToList();
      //string ProjectIsActivated = "1";

      //string LabStatusRequest = "LAB REQUEST";
      //string LabStatusApproved = "LAB APPROVED";
      //string LabStatusResult = "LAB RESULT";
      //List<Project> projects = db.Projects.Include("ClientLocation").Where(temp => temp.Active.ToString().Contains((char)1)).ToList();

      List<DryWareHouseReceiving> projects = db.tblDryWHReceiving.Where(temp => temp.is_active.Equals(true)

      && temp.lab_request_by != null
      && temp.lab_result_released_by == null).ToList();


      //List<RMProjectsPartialPo> projects = db.ProjectsPartialPo.Include("ClientLocation").Where(temp => temp.is_activated.Contains(ProjectIsActivated)
      //&& DateTime.Now.AddDays(temp.Days_expiry_setup) >= temp.Expiration_date || temp.Is_expired.Contains(ExpiredRM) != temp.Is_approved_XP.Contains(ExpiredRM)).ToList();

      //List<RMProjectsPartialPo> projects = db.ProjectsPartialPo.Where(temp => temp.is_activated.Contains(ProjectIsActivated)).ToList();

      List<DryWareHouseReceivingViewModel> projectsViewModel = new List<DryWareHouseReceivingViewModel>();
      foreach (var project in projects)
      {
        //int dayDiff = (project.Expiration_date_string - DateTime.Now).Days;
        int dayDiffExpiryDaysAging = (project.lab_exp_date_extension - DateTime.Now).Days;
        int LaboratoryAging = (project.qa_approval_date - DateTime.Now).Days;
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
          Qa_approval_date = project.qa_approval_date,
          Lab_result_released_by = project.lab_result_released_by,
          Lab_result_released_date = project.lab_result_released_date,
          Lab_result_remarks = project.lab_result_remarks,
          Lab_sub_remarks = project.lab_sub_remarks,
          Is_active = project.is_active,

          //Sample
          Expiry_days_aging = dayDiffExpiryDaysAging,
          Lab_approval_aging_days = LaboratoryAging
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
   
      List<DryWareHouseReceiving> projects = db.tblDryWHReceiving.Where(temp => temp.is_active.Equals(true)


      && temp.lab_result_released_by != null).ToList();


      //List<RMProjectsPartialPo> projects = db.ProjectsPartialPo.Include("ClientLocation").Where(temp => temp.is_activated.Contains(ProjectIsActivated)
      //&& DateTime.Now.AddDays(temp.Days_expiry_setup) >= temp.Expiration_date || temp.Is_expired.Contains(ExpiredRM) != temp.Is_approved_XP.Contains(ExpiredRM)).ToList();

      //List<RMProjectsPartialPo> projects = db.ProjectsPartialPo.Where(temp => temp.is_activated.Contains(ProjectIsActivated)).ToList();

      List<DryWareHouseReceivingViewModel> projectsViewModel = new List<DryWareHouseReceivingViewModel>();
      foreach (var project in projects)
      {
        //int dayDiff = (project.Expiration_date_string - DateTime.Now).Days;
        int dayDiffExpiryDaysAging = (project.lab_exp_date_extension - DateTime.Now).Days;
        int LaboratoryAging = (project.qa_approval_date - DateTime.Now).Days;
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
          Qa_approval_date = project.qa_approval_date,
          Lab_result_released_by = project.lab_result_released_by,
          Lab_result_released_date = project.lab_result_released_date,
          Lab_result_remarks = project.lab_result_remarks,
          Lab_sub_remarks = project.lab_sub_remarks,
          Is_active = project.is_active,

          //Sample
          Expiry_days_aging = dayDiffExpiryDaysAging,
          Lab_approval_aging_days = LaboratoryAging
          //DaysBeforeExpired = dayDiff

        });
      }
      return Ok(projectsViewModel);




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

