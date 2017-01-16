Ext.define('MyGPS.model.Layer.LayerBoundaryGetAllModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
		{ name: 'ID' },
        { name: 'LayerID' },
            { name: 'AccountNo' },
        { name: 'DeviceID' },
        { name: 'LayerPath' },
        { name: 'LayerName' },
        { name: 'LayerType' },
        { name: 'LayerLength' },
        { name: 'CreatedBy' },
        { name: 'CreatedDate' },
        { name: 'ModifiedBy' },
        { name: 'ModifiedDate' },
        { name: 'LayerStatus' },
        { name: 'LayerOrder' }
        ]
    },
});
