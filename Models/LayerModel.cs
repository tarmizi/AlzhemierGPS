using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class LayerModel
    {


        public int ID
        {
            get;
            set;
        }

        public string LayerID
        {
            get;
            set;
        }

        public string AccountNo
        {
            get;
            set;
        }





        public string LayerPath
        {
            get;
            set;
        }

        public string LayerName
        {
            get;
            set;
        }






        public string LayerType
        {
            get;
            set;
        }

        public string LayerLength
        {
            get;
            set;
        }





        public string CreatedBy
        {
            get;
            set;
        }

        public string CreatedDate
        {
            get;
            set;
        }

        


        public string ModifiedBy
        {
            get;
            set;
        }

        public string ModifiedDate
        {
            get;
            set;
        }

        public string LayerStatus
        {
            get;
            set;
        }

        public string LayerOrder
        {
            get;
            set;
        }




        public string BuildingName
        {
            get;
            set;
        }

        public string FloorName
        {
            get;
            set;
        }

        public string SectorName
        {
            get;
            set;
        }


        public LayerModel() { }

        public static bool LayerBoundary_InsertUpdate(string LayerID, string AccountNo,string DeviceID ,string LayerPath, string LayerName, string LayerType, string LayerLength, string CreatedBy, string ModifiedBy, int LayerOrder, string LayerStatus)
        {
            List<LayerModel> _Value = new List<LayerModel>();
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            bool _value = true;
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
                        _SQLCommand.CommandText = "LayerBoundary_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@LayerID", LayerID);
                        _SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        _SQLCommand.Parameters.AddWithValue("@DeviceID", DeviceID);

                        _SQLCommand.Parameters.AddWithValue("@LayerPath", LayerPath);
                        _SQLCommand.Parameters.AddWithValue("@LayerName", LayerName);
                        _SQLCommand.Parameters.AddWithValue("@LayerType", LayerType);
                        _SQLCommand.Parameters.AddWithValue("@LayerLength", LayerLength);
                        _SQLCommand.Parameters.AddWithValue("@CreatedBy", CreatedBy);

                        _SQLCommand.Parameters.AddWithValue("@ModifiedBy", ModifiedBy);
                        _SQLCommand.Parameters.AddWithValue("@LayerOrder", LayerOrder);
                        _SQLCommand.Parameters.AddWithValue("@LayerStatus", LayerStatus);
                       
                        _DBConnection.Open();
                        _SQLCommand.ExecuteNonQuery();

                    }

                    catch (Exception ex)
                    {
                        _value = false;


                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _value;
        }








        public static bool Layer_InsertUpdate(string LayerID, string LayerPath, string LayerName, string LayerType, string LayerLength, string CreatedBy, string ModifiedBy, int LayerOrder, string LayerStatus, string BuildingName, string FloorName, string SectorName, string R1)
        {
            List<LayerModel> _Value = new List<LayerModel>();
            SqlConnection _SQLConnection = SQLConnectionString.BuildConnection();
            bool _value = true;
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
                        _SQLCommand.CommandText = "Layer_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@LayerID", LayerID);
                    
                        _SQLCommand.Parameters.AddWithValue("@LayerPath", LayerPath);
                        _SQLCommand.Parameters.AddWithValue("@LayerName", LayerName);
                        _SQLCommand.Parameters.AddWithValue("@LayerType", LayerType);
                        _SQLCommand.Parameters.AddWithValue("@LayerLength", LayerLength);
                        _SQLCommand.Parameters.AddWithValue("@CreatedBy", CreatedBy);

                        _SQLCommand.Parameters.AddWithValue("@ModifiedBy", ModifiedBy);
                        _SQLCommand.Parameters.AddWithValue("@LayerOrder", LayerOrder);
                        _SQLCommand.Parameters.AddWithValue("@LayerStatus", LayerStatus);

                        _SQLCommand.Parameters.AddWithValue("@BuildingName", BuildingName);

                        _SQLCommand.Parameters.AddWithValue("@FloorName", FloorName);
                        _SQLCommand.Parameters.AddWithValue("@SectorName", SectorName);
                        _SQLCommand.Parameters.AddWithValue("@R1", R1);

                        _DBConnection.Open();
                        _SQLCommand.ExecuteNonQuery();

                    }

                    catch (Exception ex)
                    {
                        _value = false;


                    }

                    finally
                    {

                        _DBConnection.Close();

                    }

                }

            }



            return _value;
        }











        public static List<LayerModel> Layer_GetAll()
        {

            List<LayerModel> _Value = new List<LayerModel>();

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

                        _SQLCommand.CommandText = "Layer_GetAll";

                        //_SQLCommand.Parameters.AddWithValue("@AccountNo", AccountNo);
                        //_SQLCommand.Parameters.AddWithValue("@TrackID", TrackID);

                        _DBConnection.Open();


                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();

                        LayerModel _result;

                        while (_SQLDataReader.Read())
                        {
                            _result = new LayerModel();
                            _result.ID = Convert.ToInt32(_SQLDataReader["ID"].ToString());
                            _result.LayerID = _SQLDataReader["LayerID"].ToString();
                       
                            _result.LayerPath = _SQLDataReader["LayerPath"].ToString();
                            _result.LayerName = _SQLDataReader["LayerName"].ToString();
                            _result.LayerType = _SQLDataReader["LayerType"].ToString();
                            _result.LayerLength = _SQLDataReader["LayerLength"].ToString();




                            _result.CreatedBy = _SQLDataReader["CreatedBy"].ToString();
                            _result.CreatedDate = _SQLDataReader["CreatedDate"].ToString();
                            _result.ModifiedBy = _SQLDataReader["ModifiedBy"].ToString();
                            _result.ModifiedDate = _SQLDataReader["ModifiedDate"].ToString();
                            _result.LayerStatus = _SQLDataReader["LayerStatus"].ToString();
                            _result.LayerOrder = _SQLDataReader["LayerOrder"].ToString();


                            _result.BuildingName = _SQLDataReader["BuildingName"].ToString();
                            _result.FloorName = _SQLDataReader["FloorName"].ToString();
                            _result.SectorName = _SQLDataReader["SectorName"].ToString();


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

    }
}