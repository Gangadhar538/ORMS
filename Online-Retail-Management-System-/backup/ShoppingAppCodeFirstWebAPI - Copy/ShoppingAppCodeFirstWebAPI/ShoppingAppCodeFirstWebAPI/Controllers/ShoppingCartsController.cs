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
    public class ShoppingCartsController : ControllerBase
    {
        private readonly ShoppingAppDb _context;

        public ShoppingCartsController(ShoppingAppDb context)
        {
            _context = context;
        }

        // GET: api/ShoppingCarts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShoppingCart>>> GetShoppingCart()
        {
          if (_context.ShoppingCart == null)
          {
              return NotFound();
          }
            return await _context.ShoppingCart.ToListAsync();
        }

        // GET: api/ShoppingCarts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShoppingCart>> GetShoppingCart(int id)
        {
          if (_context.ShoppingCart == null)
          {
              return NotFound();
          }
            var shoppingCart = await _context.ShoppingCart.FindAsync(id);

            if (shoppingCart == null)
            {
                return NotFound();
            }

            return shoppingCart;
        }

        // PUT: api/ShoppingCarts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShoppingCart(int id, ShoppingCart shoppingCart)
        {
            if (id != shoppingCart.RecordId)
            {
                return BadRequest();
            }

            _context.Entry(shoppingCart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShoppingCartExists(id))
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

        // POST: api/ShoppingCarts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ShoppingCart>> PostShoppingCart(ShoppingCart shoppingCart)
        {
            if (ModelState.IsValid)

            {

                // Check if the department with the provided ID exists

                var existingProduct = _context.Products.Find(shoppingCart.ProductId);



                if (existingProduct != null)

                {

                    // Department exists, use the existing one

                    shoppingCart.ProdctName = existingProduct;



                    _context.ShoppingCart.Add(shoppingCart);

                    _context.SaveChanges();

                    return Ok(shoppingCart);

                }

                else

                {

                    // Department does not exist, return a 404 Not Found response

                    return NotFound("Product not found");

                }

            }

            return BadRequest(ModelState);
        }

        //if (_context.ShoppingCart == null)
        //{
        //    return Problem("Entity set 'ShoppingApplicationDbContext.ShoppingCart'  is null.");
        //}
        //  _context.ShoppingCart.Add(shoppingCart);
        //  await _context.SaveChangesAsync();

        //  return CreatedAtAction("GetShoppingCart", new { id = shoppingCart.RecordId }, shoppingCart);
    //}

    // DELETE: api/ShoppingCarts/5
    [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShoppingCart(int id)
        {
            if (_context.ShoppingCart == null)
            {
                return NotFound();
            }
            var shoppingCart = await _context.ShoppingCart.FindAsync(id);
            if (shoppingCart == null)
            {
                return NotFound();
            }

            _context.ShoppingCart.Remove(shoppingCart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShoppingCartExists(int id)
        {
            return (_context.ShoppingCart?.Any(e => e.RecordId == id)).GetValueOrDefault();
        }
    }
}
