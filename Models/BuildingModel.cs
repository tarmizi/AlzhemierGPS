using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace TrackingInfo.Models
{
    public class BuildingModel
    {

        public int BuildingCode
        {
            get;
            set;
        }

        public string BuildingName
        {
            get;
            set;
        }


        public BuildingModel() { }

        public static bool Building_InsertUpdate(int BuildingCode, string BuildingName)
        {
            List<BuildingModel> _Value = new List<BuildingModel>();
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
                        _SQLCommand.CommandText = "Building_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@BuildingCode", BuildingCode);
                        _SQLCommand.Parameters.AddWithValue("@BuildingName", BuildingName);   
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


        public static bool Building_Delete(int BuildingCode)
        {
            List<BuildingModel> _Value = new List<BuildingModel>();
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
                        _SQLCommand.CommandText = "Building_Delete";
                        _SQLCommand.Parameters.AddWithValue("@BuildingCode", BuildingCode);                  
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


        public static List<BuildingModel> Building_GetAll()
        {

            List<BuildingModel> _Value = new List<BuildingModel>();

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
                        _SQLCommand.CommandText = "Building_GetAll";
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        BuildingModel _result;
                        while (_SQLDataReader.Read())
                        {
                            _result = new BuildingModel();
                            _result.BuildingCode = Convert.ToInt32(_SQLDataReader["BuildingCode"].ToString());
                            _result.BuildingName = _SQLDataReader["BuildingName"].ToString();
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