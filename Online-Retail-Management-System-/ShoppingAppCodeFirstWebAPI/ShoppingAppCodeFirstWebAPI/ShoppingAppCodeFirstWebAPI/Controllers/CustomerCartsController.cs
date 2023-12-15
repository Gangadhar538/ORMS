using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingAppCodeFirstWebAPI.Models;

namespace ShoppingAppCodeFirstWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerCartsController : ControllerBase
    {
        private readonly ShoppingApplicationDbContext _context;

        public CustomerCartsController(ShoppingApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CustomerCarts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerCart>>> GetCustomerCart()
        {
          if (_context.CustomerCart == null)
          {
              return NotFound();
          }
            return await _context.CustomerCart.ToListAsync();
        }

        // GET: api/CustomerCarts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerCart>> GetCustomerCart(int id)
        {
          if (_context.CustomerCart == null)
          {
              return NotFound();
          }
            var customerCart = await _context.CustomerCart.FindAsync(id);

            if (customerCart == null)
            {
                return NotFound();
            }

            return customerCart;
        }

        // PUT: api/CustomerCarts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerCart(int id, CustomerCart customerCart)
        {
            if (id != customerCart.CartID)
            {
                return BadRequest();
            }

            _context.Entry(customerCart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerCartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CustomerCarts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CustomerCart>> PostCustomerCart(CustomerCart customerCart)
        {
          if (_context.CustomerCart == null)
          {
              return Problem("Entity set 'ShoppingApplicationDbContext.CustomerCart'  is null.");
          }
            _context.CustomerCart.Add(customerCart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomerCart", new { id = customerCart.CartID }, customerCart);
        }

        // DELETE: api/CustomerCarts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerCart(int id)
        {
            if (_context.CustomerCart == null)
            {
                return NotFound();
            }
            var customerCart = await _context.CustomerCart.FindAsync(id);
            if (customerCart == null)
            {
                return NotFound();
            }

            _context.CustomerCart.Remove(customerCart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerCartExists(int id)
        {
            return (_context.CustomerCart?.Any(e => e.CartID == id)).GetValueOrDefault();
        }
    }
}
