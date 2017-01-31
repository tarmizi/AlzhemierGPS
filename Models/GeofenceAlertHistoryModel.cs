using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class GeofenceAlertHistoryModel
    {

        public string ID
        {
            get;
            set;
        }
        public string AccountNo
        {
            get;
            set;
        }

        public string TrackID
        {
            get;
            set;
        }
        public string TrackItem
        {
            get;
            set;
        }

        public string Fencelength
        {
            get;
            set;
        }





        public string FencePath
        {
            get;
            set;
        }
        public string ShapeType
        {
            get;
            set;
        }

        public string Longituded
        {
            get;
            set;
        }
        public string Latituded
        {
            get;
            set;
        }

        public string AlertDate
        {
            get;
            set;
        }



        public string FenceAreaName
        {
            get;
            set;
        }

        public string CreatedGeofenceID
        {
            get;
            set;
        }
        public string TrackingItem_Alert
        {
            get;
            set;
        }
        public string TimeAlert
        {
            get;
            set;
        }
        public string TimeFrom
        {
            get;
            set;
        }
        public string TimeTo
        {
            get;
            set;
        }
        public static List<GeofenceAlertHistoryModel> Get_GeofenceAlertHistoryByAccNo(string AccNo)
        {

            List<GeofenceAlertHistoryModel> _Value = new List<GeofenceAlertHistoryModel>();

            //SqlConnection _SQLConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DentalAppConn"].ConnectionString);
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();

            using (SqlConnection _DBConnection = _SQLConnection)
            {

                SqlCommand _SQLCommand = new SqlCommand();

                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;

                _SQLCommand.CommandTimeout = 0;



                using (_SQLCommand)
                {

                    try
                    {

                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "GeofenceAlertHistory_GetByAccNo";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccNo);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        GeofenceAlertHistoryModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new GeofenceAlertHistoryModel();

                            //_result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            //_result.Fencelength = _SQLDataReader["Fencelength"].ToString();
                            //_result.FencePath = _SQLDataReader["FencePath"].ToString();
                            //_result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            //_result.Longituded = _SQLDataReader["Longituded"].ToString();
                            //_result.Latituded = _SQLDataReader["Latituded"].ToString();
                            //_result.AlertDate = _SQLDataReader["AlertDate"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.CreatedGeofenceID = _SQLDataReader["CreatedGeofenceID"].ToString();
                            _result.TrackingItem_Alert = _SQLDataReader["TrackingItem_Alert"].ToString();    
                            
                            _Value.Add(_result);

                        }

                    }

                    catch (Exception ex)
                    {

                        throw new Exception(ex.Message);

                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _Value;

        }

        public static List<GeofenceAlertHistoryModel> Get_GeofenceAlertHistoryByAccNoYearMonth(string AccNo,string Year,string Month)
        {

            List<GeofenceAlertHistoryModel> _Value = new List<GeofenceAlertHistoryModel>();

            //SqlConnection _SQLConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DentalAppConn"].ConnectionString);
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();

            using (SqlConnection _DBConnection = _SQLConnection)
            {

                SqlCommand _SQLCommand = new SqlCommand();

                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;

                _SQLCommand.CommandTimeout = 0;



                using (_SQLCommand)
                {

                    try
                    {

                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "GeofenceAlertHistory_GetByAccNo_Year_Month";

                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccNo);
                        _SQLCommand.Parameters.AddWithValue("@Year", Year);
                        _SQLCommand.Parameters.AddWithValue("@Month", Month);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        GeofenceAlertHistoryModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new GeofenceAlertHistoryModel();

                            //_result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.Fencelength = _SQLDataReader["Fencelength"].ToString();
                            //_result.FencePath = _SQLDataReader["FencePath"].ToString();
                            //_result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            //_result.Longituded = _SQLDataReader["Longituded"].ToString();
                            //_result.Latituded = _SQLDataReader["Latituded"].ToString();
                            //_result.AlertDate = _SQLDataReader["AlertDate"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.CreatedGeofenceID = _SQLDataReader["CreatedGeofenceID"].ToString();
                            _result.TrackingItem_Alert = _SQLDataReader["TrackingItem_Alert"].ToString();
                            _result.TimeAlert = _SQLDataReader["TimeAlert"].ToString();
                            _result.TimeFrom =TimeConverter(_SQLDataReader["TimeFrom"].ToString());
                            _result.TimeTo =TimeConverter(_SQLDataReader["TimeTo"].ToString());
                            
                            
                            _Value.Add(_result);

                        }

                    }

                    catch (Exception ex)
                    {

                        throw new Exception(ex.Message);

                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _Value;

        }

        public static List<GeofenceAlertHistoryModel> Get_GeofenceAlertHistoryByTrackID(string TrackID, string DateFrom, string DateTo,string GeofenceID)
        {//31-01-2016
            //31/01/2016
            //20160131
            //20160131
            int i=0;
            string[] dated = new string [3];
            string[] words = DateFrom.Split('-');
            string dt;
            foreach (string word in words)
            {
                dated[i] = word;
                i++;
            }
            dt = dated[2] + dated[1] + dated[0];
            List<GeofenceAlertHistoryModel> _Value = new List<GeofenceAlertHistoryModel>();

            //SqlConnection _SQLConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DentalAppConn"].ConnectionString);
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();

            using (SqlConnection _DBConnection = _SQLConnection)
            {

                SqlCommand _SQLCommand = new SqlCommand();

                _SQLCommand.CommandType = System.Data.CommandType.StoredProcedure;

                _SQLCommand.CommandTimeout = 0;



                using (_SQLCommand)
                {

                    try
                    {

                        _SQLCommand.Connection = _DBConnection;
                        _SQLCommand.CommandText = "GeofenceAlertHistory_GetByTrackID";

                        _SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);
                        _SQLCommand.Parameters.AddWithValue("@DateFrom", dt);
                        _SQLCommand.Parameters.AddWithValue("@DateTo", dt);
                        _SQLCommand.Parameters.AddWithValue("@GeofenceID", GeofenceID);
                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        GeofenceAlertHistoryModel _result;

                        while (_SQLDataReader.Read())
                        {


                            _result = new GeofenceAlertHistoryModel();

                            _result.ID = _SQLDataReader["ID"].ToString();
                            _result.AccountNo = _SQLDataReader["AccountNo"].ToString();
                            _result.TrackID = _SQLDataReader["TrackID"].ToString();
                            _result.TrackItem = _SQLDataReader["TrackItem"].ToString();
                            _result.Fencelength = _SQLDataReader["Fencelength"].ToString();
                            _result.FencePath = _SQLDataReader["FencePath"].ToString();
                            _result.ShapeType = _SQLDataReader["ShapeType"].ToString();
                            _result.Longituded = _SQLDataReader["Longituded"].ToString();
                            _result.Latituded = _SQLDataReader["Latituded"].ToString();
                            _result.AlertDate = _SQLDataReader["AlertDate"].ToString();
                            _result.FenceAreaName = _SQLDataReader["FenceAreaName"].ToString();
                            _result.CreatedGeofenceID = _SQLDataReader["CreatedGeofenceID"].ToString();
                           // _result.TrackingItem_Alert = _SQLDataReader["TrackingItem_Alert"].ToString();

                            _Value.Add(_result);

                        }

                    }

                    catch (Exception ex)
                    {

                        throw new Exception(ex.Message);

                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _Value;

        }










        public static string TimeConverter(string Time)
        {
            string Masa="";

            if(Time=="1")
            {
                Masa = "01:00AM";
            }else if(Time=="2")
            { Masa = "02:00AM"; }
            else if (Time == "2")
            { Masa = "02:00AM"; }
            else if (Time == "3")
            { Masa = "03:00AM"; }
            else if (Time == "4")
            { Masa = "04:00AM"; }
            else if (Time == "5")
            { Masa = "05:00AM"; }
            else if (Time == "6")
            { Masa = "06:00AM"; }
            else if (Time == "7")
            { Masa = "07:00AM"; }
            else if (Time == "8")
            { Masa = "08:00AM"; }
            else if (Time == "9")
            { Masa = "09:00AM"; }
            else if (Time == "10")
            { Masa = "10:00AM"; }
            else if (Time == "11")
            { Masa = "11:00AM"; }
            else if (Time == "12")
            { Masa = "12:00PM"; }
            else if (Time == "13")
            { Masa = "01:00PM"; }
            else if (Time == "14")
            { Masa = "02:00PM"; }
            else if (Time == "15")
            { Masa = "03:00PM"; }
            else if (Time == "16")
            { Masa = "04:00PM"; }
            else if (Time == "17")
            { Masa = "05:00PM"; }
            else if (Time == "18")
            { Masa = "06:00PM"; }
            else if (Time == "19")
            { Masa = "07:00PM"; }
            else if (Time == "20")
            { Masa = "08:00PM"; }
            else if (Time == "21")
            { Masa = "09:00PM"; }
            else if (Time == "22")
            { Masa = "10:00PM"; }
            else if (Time == "23")
            { Masa = "11:0PM"; }
            else if (Time == "24")
            { Masa = "12:00AM"; }
           return Masa;

        }
    }
}