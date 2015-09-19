using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Local_Storage_Demo.Startup))]
namespace Local_Storage_Demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
