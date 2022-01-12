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
    public List<DryWhOrder> Get()
    {
      string Activated = "1";
      string DeActivated = "0";
      List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.GroupBy(p => new { p.is_approved_prepa_date })
  .Select(g => g.First()).Where(temp => temp.is_active.Contains(Activated)
  && temp.is_for_validation.Contains(DeActivated) && temp.is_approved.Contains(Activated))
  .ToList();
      return StoreOrderCheckList;


     // List<DryWhOrder> StoreOrderCheckList = db.dry_wh_orders.Where(temp => temp.is_active.Contains(Activated)
     //&& temp.is_for_validation.Contains(DeActivated) && temp.is_approved.Contains(Activated)).ToList();
     // return StoreOrderCheckList;
    }




  }
}
