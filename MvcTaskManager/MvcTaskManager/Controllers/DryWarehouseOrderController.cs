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
    [Route("api/store_orders/search/{searchby}/{searchtext}/{searchindex}")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public IActionResult Search(string searchBy, string searchText, string searchIndex)
    {

      //string data_is_pending = "1";
      string is_activated = "1";
      List<DryWhOrder> projects = null;

      string ApprovedPreparationDate = searchText;
      string FoxStoreCode = searchIndex;
      if (searchBy == "store_name")

        projects = db.dry_wh_orders.Include("Store_Preparation_LogsModel").Where(temp => temp.is_active.Contains(is_activated) && temp.is_approved_prepa_date.Contains(ApprovedPreparationDate) && temp.fox.Contains(FoxStoreCode)).ToList();

      //temp.is_approved.Contains(is_activated) &&
      List <DryWhOrderViewModel> WarehouseStoreOrderContructor = new List<DryWhOrderViewModel>();
      foreach (var project in projects)
      {
        WarehouseStoreOrderContructor.Add(new DryWhOrderViewModel()
        {

          Primary_id = project.primary_id,
          Is_approved_prepa_date = project.is_approved_prepa_date,
          Store_name = project.store_name,
          Route = project.route,
          Area = project.area,
          Category = project.category,
          Is_active = project.is_active,
          Is_for_validation = project.is_for_validation,
          Is_approved = project.is_approved,
          Is_prepared = project.is_prepared,
          Force_prepared_status = project.force_prepared_status,
          Fox = project.fox,
          Item_code = project.item_code,
          Description = project.description,
          Uom = project.uom,
          Total_state_repack = project.total_state_repack,
          Qty = project.qty


        });
      }

      return Ok(WarehouseStoreOrderContructor);
    }





  }
}
