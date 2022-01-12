using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManager.Models
{
  public class DryWhOrder
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int primary_id { get; set; }
    public string is_approved_prepa_date { get; set; }
    public string store_name { get; set; }
    public string route { get; set; }
    public string area { get; set; }
    public string category { get; set; }

  }
}
