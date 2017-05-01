using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PromotionsService.Models
{
    /// <summary>
    /// DTO Defining one account information
    /// </summary>
    public class Account
    {
        /// <summary>
        /// The accountId
        /// </summary>
        public int AccountId { get; set; }

        /// <summary>
        /// First name of the account
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Last name of the account
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// Email address of the account
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Phone number of the account
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// City of the account
        /// </summary>
        public string City { get; set; }

        /// <summary>
        /// Country of the account
        /// </summary>
        public string Country { get; set; }

        /// <summary>
        /// Address of the account
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// ZipCode associated to the address
        /// </summary>
        public string ZipCode { get; set; }
    }
}