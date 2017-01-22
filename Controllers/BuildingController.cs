using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class BuildingController : Controller
    {
        //
        // GET: /Building/

        //public ActionResult Index()
        //{
        //    return View();
        //}





        [HttpPost]
        public JsonResult BuildingInsertUpdate(int BuildingCode, string BuildingName)
        {
            bool success = true;
            string _Message = string.Empty;
            List<BuildingModel> data = new List<BuildingModel>();

            try
            {
                success = BuildingModel.Building_InsertUpdate(BuildingCode, BuildingName);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult BuildingDelete(int BuildingCode)
        {
            bool success = true;
            string _Message = string.Empty;
            List<BuildingModel> data = new List<BuildingModel>();

            try
            {
                success = BuildingModel.Building_Delete(BuildingCode);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }







        [HttpGet]
        public JsonResult BuildingGetAll()
        {
            bool success = true;
            string _Message = string.Empty;
            List<BuildingModel> data = new List<BuildingModel>();
            try
            {
                data = BuildingModel.Building_GetAll();
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

    }
}
