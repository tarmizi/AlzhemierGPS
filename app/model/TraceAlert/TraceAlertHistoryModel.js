Ext.define('MyGPS.model.TraceAlert.TraceAlertHistoryModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [

                { name: 'ID' },
		    { name: 'AccountNo' },
            { name: 'TrackID' },
            { name: 'TrackItem' },
            { name: 'Fencelength' },
            { name: 'FencePath' },

             { name: 'ShapeType' },
            { name: 'Longituded' },
            { name: 'Latituded' },


            { name: 'AlertDate' },
             { name: 'FenceAreaName' },
            { name: 'CreatedGeofenceID' },
             { name: 'TrackingItem_Alert' },
                  { name: 'TimeAlert' },
              { name: 'TimeFrom' },
                  { name: 'TimeTo' },
        ]
    }
});