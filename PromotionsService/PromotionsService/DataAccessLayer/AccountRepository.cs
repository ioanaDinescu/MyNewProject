using MySql.Data.MySqlClient;
using PromotionsService.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace PromotionsService.DataAccessLayer
{
    public class AccountRepository
    {
        public static Account InsertAccountInfo(Account accountInfo)
        {
            var constr = ConfigurationManager.ConnectionStrings["PromotionDB"].ConnectionString;
            using (MySqlConnection connection = new MySqlConnection(constr))
            {
                
            }

            return null;
        }
    }
}