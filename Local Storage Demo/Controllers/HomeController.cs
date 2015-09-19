using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Local_Storage_Demo.Models;

namespace Local_Storage_Demo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        //
        public ActionResult SendUniversityInfoAjax()
        {
            var info = new University
            {
                Name = "Jahangirnagar University",
                Location = "Dhaka",
                NumberofTeachers = 2000,
                NumberofStudents = 15000
            };
            var infoList = new List<University> {info};
            return Json(infoList, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetResponseAjax(University university)
        {
            var flag = university != null;
            return Json(flag, JsonRequestBehavior.AllowGet);
        }
    }
}