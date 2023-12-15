using Microsoft.EntityFrameworkCore;
namespace ShoppingAppWebAPI.Models
{
    public class StardustAppDbContext : DbContext
        {
            public StardustAppDbContext(DbContextOptions<StardustAppDbContext> options) : base(options) { }

            public DbSet<Admins>? Admins { get; set; }
            public DbSet<Categorys>? Categories { get; set; }
            public DbSet<SubCategorys>? SubCategories { get; set; }
            public DbSet<Customers>? Customers { get; set; }
            public DbSet<OrderDetails>? OrderDetails { get; set; }
            public DbSet<Orders>? Orders { get; set; }
            public DbSet<Products>? Products { get; set; }
            public DbSet<ShoppingCart>? ShoppingCarts { get; set; }
    }
}
