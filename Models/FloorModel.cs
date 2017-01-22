using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;


namespace TrackingInfo.Models
{
    public class FloorModel
    {

         public int FloorID
        {
            get;
            set;
        }

        public string FloorName
        {
            get;
            set;
        }


        public FloorModel() { }


        public static bool Floor_InsertUpdate(int FloorID, string FloorName)
        {
            List<FloorModel> _Value = new List<FloorModel>();
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
                        _SQLCommand.CommandText = "Floor_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@FloorID", FloorID);
                        _SQLCommand.Parameters.AddWithValue("@FloorName", FloorName);
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


        public static bool Floor_Delete(int FloorID)
        {
            List<FloorModel> _Value = new List<FloorModel>();
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
                        _SQLCommand.CommandText = "Floor_Delete";
                        _SQLCommand.Parameters.AddWithValue("@FloorID", FloorID);
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


        public static List<FloorModel> Floor_GetAll()
        {

            List<FloorModel> _Value = new List<FloorModel>();

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
                        _SQLCommand.CommandText = "Floor_GetAll";
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        FloorModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new FloorModel();
                            _result.FloorID = Convert.ToInt32(_SQLDataReader["FloorID"].ToString());
                            _result.FloorName = _SQLDataReader["FloorName"].ToString();
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