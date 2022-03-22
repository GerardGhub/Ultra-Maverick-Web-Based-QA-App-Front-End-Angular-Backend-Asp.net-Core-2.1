using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManager.Controllers
{

  public class tblRejectedStatusController : Controller
  {
    private ApplicationDbContext db;
    public tblRejectedStatusController(ApplicationDbContext db)
    {
      this.db = db;
    }

    [HttpGet]
    [Route("api/tblrejectedstatus")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    public IActionResult Get()
    {
      List<TblRejectedStats> tblRejectedStatuses = db.TblRejectedStatus.ToList();
      return Ok(tblRejectedStatuses);
    }

    [HttpGet]
    [Route("api/tblrejectedstatus/searchbyid/{id}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult GetByRejectID(int RejectionID)
    {
      TblRejectedStats tblRejectedStatuses = db.TblRejectedStatus.Where(temp => temp.id == RejectionID).FirstOrDefault();
      if (tblRejectedStatuses != null)
      {
        return Ok(tblRejectedStatuses);
      }
      else
        return NoContent();
    }

    [HttpPost]
    [Route("api/tblrejectedstatus")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public TblRejectedStats Post([FromBody] TblRejectedStats rejectedStatusdata)
    {
      db.TblRejectedStatus.Add(rejectedStatusdata);
      db.SaveChanges();

      TblRejectedStats  existingData = db.TblRejectedStatus.Where(temp => temp.id == rejectedStatusdata.id).FirstOrDefault();
      return rejectedStatusdata;
    }




    [HttpPut]
    [Route("api/tblrejectedstatus")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public TblRejectedStats Put([FromBody] TblRejectedStats rejectstats)
    {
      TblRejectedStats existingRejectedStatus = db.TblRejectedStatus.Where(temp => temp.id == rejectstats.id).FirstOrDefault();
      if (existingRejectedStatus != null)
      {
        existingRejectedStatus.reject_status_name = rejectstats.reject_status_name;
        existingRejectedStatus.is_active = rejectstats.is_active;
        db.SaveChanges();
        return existingRejectedStatus;
      }
      else
      {
        return null;
      }
    }

    [HttpDelete]
    [Route("api/tblrejectedstatus")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public int Delete(int ID)
    {
      TblRejectedStats existingRejectedStatus = db.TblRejectedStatus.Where(temp => temp.id == ID).FirstOrDefault();
      if (existingRejectedStatus != null)
      {
        db.TblRejectedStatus.Remove(existingRejectedStatus);
        db.SaveChanges();
        return ID;
      }
      else
      {
        return -1;
      }
    }


  }
}
