using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet]
        public ActionResult GetNotFound()
        {
            return NotFound("Page not found");
        }
        [HttpGet]
        public ActionResult GetBadRequest()
        {
            return BadRequest("This is a bad request");
        }
        [HttpGet]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized("Not authorized");
        }
        [HttpGet]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem #1", "This is a validation error #1");
            ModelState.AddModelError("Problem #2", "This is a validation error #2");
            return ValidationProblem();
        }

        [HttpGet]
        public ActionResult GetServerError()
        {
            throw new Exception("Server error.");
        }
    }
}