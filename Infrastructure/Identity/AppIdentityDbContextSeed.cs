using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Nina",
                    Email = "nina@sublime.com",
                    UserName = "nina@sublime.com",
                    Address = new Address 
                    {
                        FirstName= "Nina",
                        LastName = "Marok",
                        Street = "Goethe Str",
                        City = "Geneva",
                        State = "Switzerland",
                        Zipcode = "1201",
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}