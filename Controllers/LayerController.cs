using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrackingInfo.Models;
namespace TrackingInfo.Controllers
{
    public class LayerController : Controller
    {
        //
        // GET: /Layer/

        //public ActionResult Index()
        //{
        //    return View();
        //}






        [HttpPost]
        public JsonResult LayerBoundaryInsertUpdate(string LayerID, string AccountNo, string DeviceID, string LayerPath, string LayerName, string LayerType, string LayerLength, string CreatedBy, string ModifiedBy, int LayerOrder, string LayerStatus)
        {
            bool success = true;
            string _Message = string.Empty;
            List<LayerModel> data = new List<LayerModel>();

            try
            {
                success = LayerModel.LayerBoundary_InsertUpdate( LayerID,  AccountNo,  DeviceID,  LayerPath,  LayerName,  LayerType,  LayerLength,  CreatedBy,  ModifiedBy,  LayerOrder,  LayerStatus);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }







        [HttpPost]
        public JsonResult LayerInsertUpdate(string LayerID, string LayerPath, string LayerName, string LayerType, string LayerLength, string CreatedBy, string ModifiedBy, int LayerOrder, string LayerStatus, string BuildingName, string FloorName, string SectorName, string R1)
        {
            string LayerIDs = LayerID.Replace("),(", "-").Replace("(", "-").Replace(")", "-").Replace(" ", "").Replace(",", "-");
            bool success = true;
            string _Message = string.Empty;
            List<LayerModel> data = new List<LayerModel>();

            try
            {
                success = LayerModel.Layer_InsertUpdate(LayerIDs, LayerPath, LayerName, LayerType, LayerLength, CreatedBy, ModifiedBy, LayerOrder, LayerStatus, BuildingName, FloorName, SectorName, R1);
            }
            catch (Exception ex)
            {
                _Message = ex.Message;
                success = false;
            }

            return Json(new { success = success, message = _Message, total = data.Count, results = data }, JsonRequestBehavior.AllowGet);
        }





        [HttpGet]
        public JsonResult LayerGetAll()
        {
            bool success = true;
            string _Message = string.Empty;
            List<LayerModel> data = new List<LayerModel>();
            try
            {
                data = LayerModel.Layer_GetAll();
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
