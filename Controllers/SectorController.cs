using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;

namespace TrackingInfo.Controllers
{
    public class SectorController : Controller
    {
        //
        // GET: /Sector/

        //public ActionResult Index()
        //{
        //    return View();
        //}



        [HttpPost]
        public JsonResult SectorInsertUpdate(int SectorID, string SectorName)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SectorModel> data = new List<SectorModel>();

            try
            {
                success = SectorModel.Sector_InsertUpdate(SectorID, SectorName);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        public JsonResult SectorDelete(int SectorID)
        {
            bool success = true;
            string _Message = string.Empty;
            List<SectorModel> data = new List<SectorModel>();
            try
            {
                success = SectorModel.Sector_Delete(SectorID);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult SectorGetAll()
        {
            bool success = true;
            string _Message = string.Empty;
            List<SectorModel> data = new List<SectorModel>();
            try
            {
                data = SectorModel.Sector_GetAll();
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
