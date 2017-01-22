using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;


namespace TrackingInfo.Controllers
{
    public class FloorController : Controller
    {
        //
        // GET: /Floor/

        //public ActionResult Index()
        //{
        //    return View();
        //}




        [HttpPost]
        public JsonResult FloorInsertUpdate(int FloorID, string FloorName)
        {
            bool success = true;
            string _Message = string.Empty;
            List<FloorModel> data = new List<FloorModel>();

            try
            {
                success = FloorModel.Floor_InsertUpdate(FloorID, FloorName);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult FloorDelete(int FloorID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<FloorModel> data = new List<FloorModel>();

            try
            {
                success = FloorModel.Floor_Delete(FloorID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }





        [HttpGet]
        public JsonResult FloorGetAll()
        {
            bool success = true;
            string _Message = string.Empty;
            List<FloorModel> data = new List<FloorModel>();
            try
            {
                data = FloorModel.Floor_GetAll();
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
