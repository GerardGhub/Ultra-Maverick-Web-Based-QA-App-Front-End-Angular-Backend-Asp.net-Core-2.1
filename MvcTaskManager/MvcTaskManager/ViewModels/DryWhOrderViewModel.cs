using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManager.ViewModels
{
  public class DryWhOrderViewModel
  {
    public int Primary_id { get; set; }
    public string Is_approved_prepa_date { get; set; }
    public string Store_name { get; set; }
    public string Route { get; set; }
    public string Area { get; set; }
    public string Category { get; set; }
    public string Is_active { get; set; }
    public string Is_for_validation { get; set; }
    public string Is_approved { get; set; }
    public string Is_prepared { get; set; }
    public string Force_prepared_status { get; set; }
    public string Fox { get; set; }
  }
}
