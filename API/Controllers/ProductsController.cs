using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext context;
        public ProductsController(StoreContext context)
        {
            this.context = context;
            
        }

        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            var products = context.Products.ToList();
            return Ok(products);
        }
        
        [HttpGet("{id}")] // access example: api/products/3
        public ActionResult<Product> GetProducts(int id)
        {
            return context.Products.Find(id);
        }

    }
}