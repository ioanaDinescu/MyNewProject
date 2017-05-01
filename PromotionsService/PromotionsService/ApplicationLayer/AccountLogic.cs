using PromotionsService.Models;
using PromotionsService.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;

namespace PromotionsService.ApplicationLayer
{
    public class AccountLogic : BaseLogic
    {
        public Account ProcessAccountInfo(Account accountInfo)
        {
            AccountValidator.ValidateAccountInfo(accountInfo, this);

            if(Errors != null)
            {
                return null;
            }



            return accountInfo;
        }
    }
}