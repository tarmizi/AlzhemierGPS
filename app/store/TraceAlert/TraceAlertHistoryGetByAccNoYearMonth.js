
Ext.define('MyGPS.store.TraceAlert.TraceAlertHistoryGetByAccNoYearMonth', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'MyGPS.model.TraceAlert.TraceAlertHistoryModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/GeofenceAlertHistory/GeofenceAlertHistoryByAccNoYearMonth',

            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});
