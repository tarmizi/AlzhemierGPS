using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;


namespace TrackingInfo.Models
{
    public class SectorModel
    {
          public int SectorID
        {
            get;
            set;
        }

        public string SectorName
        {
            get;
            set;
        }
        public SectorModel() { }
        public static bool Sector_InsertUpdate(int SectorID, string SectorName)
        {
            List<SectorModel> _Value = new List<SectorModel>();
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
                        _SQLCommand.CommandText = "Sector_InsertUpdate";
                        _SQLCommand.Parameters.AddWithValue("@SectorID", SectorID);
                        _SQLCommand.Parameters.AddWithValue("@SectorName", SectorName);
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


        public static bool Sector_Delete(int SectorID)
        {
            List<SectorModel> _Value = new List<SectorModel>();
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
                        _SQLCommand.CommandText = "Sector_Delete";
                        _SQLCommand.Parameters.AddWithValue("@SectorID", SectorID);
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


        public static List<SectorModel> Sector_GetAll()
        {

            List<SectorModel> _Value = new List<SectorModel>();
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
                        _SQLCommand.CommandText = "Sector_GetAll";
                        _DBConnection.Open();
                        SqlDataReader _SQLDataReader = _SQLCommand.ExecuteReader();
                        SectorModel _result;
                        while (_SQLDataReader.Read())
                        {   _result = new SectorModel();
                            _result.SectorID = Convert.ToInt32(_SQLDataReader["SectorID"].ToString());
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