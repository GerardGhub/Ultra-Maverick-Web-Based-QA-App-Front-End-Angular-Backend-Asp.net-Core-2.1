using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;
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

    [HttpGet]
    [Route("api/DryWareHouseReceivingForLabTest")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Get()
    {
      List<DryWareHouseReceiving> TbLLabTestRemarks = db.tblDryWHReceiving.ToList();
      return Ok(TbLLabTestRemarks);
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

