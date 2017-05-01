using PromotionsService.ApplicationLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AccountDTO = PromotionsService.Models.Account;

namespace PromotionsService.Controllers
{
    [RoutePrefix("api/accounts/")]
    public class AccountController : ApiController
    {
        [HttpPost]
        [Route("")]
        public IHttpActionResult SubmitAccountInfo([FromBody] AccountDTO accountInfo)
        {
            var processor = new AccountLogic();

            var result = processor.ProcessAccountInfo(accountInfo);
            return Ok();
        }
    }
}
