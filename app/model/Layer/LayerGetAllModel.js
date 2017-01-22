Ext.define('MyGPS.model.Layer.LayerGetAllModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
		{ name: 'ID' },
        { name: 'LayerID' },
        { name: 'LayerPath' },
        { name: 'LayerName' },
        { name: 'LayerType' },
        { name: 'LayerLength' },
        { name: 'CreatedBy' },
        { name: 'CreatedDate' },
        { name: 'ModifiedBy' },
        { name: 'ModifiedDate' },
        { name: 'LayerStatus' },
        { name: 'LayerOrder' },
        { name: 'BuildingName' },
        { name: 'FloorName' },
        { name: 'SectorName' }
        ]
        },
});
