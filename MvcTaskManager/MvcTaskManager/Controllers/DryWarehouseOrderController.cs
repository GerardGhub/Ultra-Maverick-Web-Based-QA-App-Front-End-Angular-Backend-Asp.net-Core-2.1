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
  public class DryWarehouseOrderController : Controller
  {
   
    private ApplicationDbContext db;

    public DryWarehouseOrderController(ApplicationDbContext db)
    {
      this.db = db;
    }

    [HttpGet]
    [Route("api/dry_wh_orders_checklist_distinct")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetDistinctPreparedOrders()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new {p.is_approved_prepa_date}).Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
      && temp.is_for_validation.Contains(DeActivated) && temp.is_approved != null && temp.is_prepared != null || temp.force_prepared_status != null).ToList();
      return StoreOrderCheckList;


     // List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.Where(temp => temp.is_active.Contains(Activated)
     //&& temp.is_for_validation.Contains(DeActivated) && temp.is_approved.Contains(Activated)).ToList();
     // return StoreOrderCheckList;
    }

    [HttpGet]
    [Route("api/store_orders")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public List<DryWhOrder> GetStoreOrders()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new { p.is_approved_prepa_date }).Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
        && temp.is_for_validation.Contains(DeActivated) && temp.is_approved != null && temp.is_prepared == null || temp.force_prepared_status != null).ToList();
      return StoreOrderCheckList;


    
    }

    [HttpGet]
    [Route("api/store_orders/search/{searchby}/{searchtext}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Search(string searchBy, string searchText)
    {

      string ProjectIsActivated = "1";
      List<DryWhOrder> DryWhOrders = null;
      if (searchBy == "is_approved_prepa_date")
        DryWhOrders = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date.ToString().Contains(searchText)).ToList();
      else if (searchBy == "All_Data")
        DryWhOrders = db.dry_wh_orders.Where(temp => temp.is_approved_prepa_date.Contains(searchText) && temp.is_active.Contains(ProjectIsActivated)).ToList();
   
      List<DryWhOrderViewModel> dryWhStoreOrderViewModel = new List<DryWhOrderViewModel>();
      foreach (var DryWhOrder in DryWhOrders)
      {
        dryWhStoreOrderViewModel.Add(new DryWhOrderViewModel()
        {
          //ProjectID = project.ProjectID, Actual_remaining_receiving = project.Actual_remaining_receiving, Po_number = project.Po_number, ProjectName = project.ProjectName, TeamSize = project.TeamSize, DateOfStart = project.DateOfStart.ToString("dd/MM/yyyy"), Active = project.Active, ClientLocation = project.ClientLocation, ClientLocationID = project.ClientLocationID, Status = project.Status


          Primary_id = DryWhOrder.primary_id,
          Is_approved_prepa_date = DryWhOrder.is_approved_prepa_date,
        


     
       


        });
      }

      return Ok(dryWhStoreOrderViewModel);
    }










  }
}
