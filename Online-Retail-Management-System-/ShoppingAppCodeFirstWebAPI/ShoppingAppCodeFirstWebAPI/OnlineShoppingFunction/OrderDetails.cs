﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShoppingFunction
{
    public partial class OrderDetails
    {
     
        public int OrderDetailsId { get; set; }

       
        public int ProductId { get; set; }

       
        public int OrderId { get; set; }
       
        public int? Quantity { get; set; }


        public decimal? UnitCost { get; set; }

        public decimal? OrderTotal { get; set; }

        public string? Comments { get; set; }


    }
}
