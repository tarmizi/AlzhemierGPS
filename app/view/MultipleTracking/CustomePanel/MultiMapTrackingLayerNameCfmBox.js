Ext.define('MyGPS.view.MultiPleTracking.CustomePanel.MultiMapTrackingLayerNameCfmBox', {

});

var _multiMapTrackingLayerNameCfmBox;
function MultiMapTrackingLayerNameCfmBox() {



    _multiMapTrackingLayerNameCfmBox = Ext.create('Ext.Panel', {

        height: 400,
        width: 420,

        id: 'MultiMapTrackingLayerNameCfmBoxID',
        centered: true,
        // draggable: true,
        //hideOnMaskTap: true,//
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: null,
            easing: null
        },
        style: "background-color:black; color:black;",
        //style: 'background-color: transparent;',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                id: 'toolbarMultiMapTrackingLayerNameCfmBoxTopID',
                title: 'Enter Layer Name',


            },

               {
                   xtype: 'container',
                   height: '100%',
                   width: '100%',
                   // margin: 10,

                   items: [

                       {
                           xtype: 'fieldset',
                           id: 'fieldMultiMapTrackingLayerNameCfmBox',
                           //title: 'Setting Layer Name',
                           //defaults: {

                           //    labelWidth: '45%'
                           //},
                           items: [
                               {
                                   // xtype: 'textfield',
                                   xtype: 'selectfield',
                                   id: 'MultiMapTrackingLayerNameCfmBox_BuildingName',
                                   label: 'Building Name',
                                   labelWidth: '45%',
                                   store: _DataStore_BuildingStore_GetAll,
                                   valueField: 'BuildingName',
                                   displayField: 'BuildingName',
                                   //placeHolder: 'Tom Roy',
                                   labelWrap: true,
                                
                                  
                               },

                                 {
                                     // xtype: 'textfield',
                                     xtype: 'selectfield',
                                     id: 'MultiMapTrackingLayerNameCfmBox_FloorName',
                                     label: 'Floor Name',
                                     labelWidth: '45%',
                                     store: _DataStore_FloorStore_GetAll,
                                     valueField: 'FloorName',
                                     displayField: 'FloorName',
                                   
                                     labelWrap: true,
                                    
                                 },

                                   {
                                       // xtype: 'textfield',
                                       xtype: 'selectfield',
                                       id: 'MultiMapTrackingLayerNameCfmBox_SectorName',
                                       label: 'Sector Name',
                                       labelWidth: '45%',
                                       store: _DataStore_SectorStore_GetAll,
                                       valueField: 'SectorName',
                                       displayField: 'SectorName',
                                       labelWrap: true,
                                       hidden: true,
                                    
                                   },
                                  {
                                      xtype: 'checkboxfield',
                                      label: '<b><font color=#60A2CF>Floor</font></b>',
                                      id: 'MultiMapTrackingLayerNameCfmBoxMainFloor',
                                      labelWidth: '45%',
                                      listeners: {
                                          check: function () {

                                              Ext.getCmp('MultiMapTrackingLayerNameCfmBoxSector').setChecked(false);
                                              Ext.getCmp('MultiMapTrackingLayerNameCfmBox_FloorName').setHidden(false);
                                              Ext.getCmp('MultiMapTrackingLayerNameCfmBox_SectorName').setHidden(true);

                                          },
                                          uncheck: function () {
                                             // Ext.getCmp('MultiMapTrackingLayerNameCfmBoxFloorName').setHidden(true);
                                              // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                          }
                                      }

                                  },
                              
                                 {
                                     xtype: 'checkboxfield',
                                     label: '<b><font color=#60A2CF>Sector</font></b>',
                                     id: 'MultiMapTrackingLayerNameCfmBoxSector',
                                     labelWidth: '45%',
                                     listeners: {
                                         check: function () {

                                             Ext.getCmp('MultiMapTrackingLayerNameCfmBoxMainFloor').setChecked(false);                                            
                                             Ext.getCmp('MultiMapTrackingLayerNameCfmBox_FloorName').setHidden(false);
                                             Ext.getCmp('MultiMapTrackingLayerNameCfmBox_SectorName').setHidden(false);

                                         },
                                         uncheck: function () {
                                             //Ext.getCmp('MultiMapTrackingLayerNameCfmBoxSectorName').setHidden(true);
                                             // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                         }
                                     }

                                 },
                                
                                {
                                    // xtype: 'textfield',
                                    xtype: 'textfield',
                                    id: 'MultiMapTrackingLayerNameCfmBox_LayerName',
                                    label: 'Layer Name',
                                    labelWidth: '45%',
                                    disabled: false,
                                    hidden: true,
                                    //placeHolder: 'Tom Roy',
                                    labelWrap: true,
                                    //required: true,
                                    clearIcon: true
                                },
                                {
                                    xtype: 'container',
                                    id: 'MultiMapTrackingLayerNameCfmBoxcontainer',
                                    width: '100%',
                                    layout: {
                                        type: 'vbox',

                                    },
                                    hidden: true,
                                    items: [

                                          {
                                              xtype: 'checkboxfield',
                                              label: '<b><font color=#60A2CF>Main Floor</font></b>',
                                              id: 'MultiMapTrackingLayerNameCfmBox_MainFloor',
                                              labelWidth: '45%',
                                              listeners: {
                                                  check: function () {

                                                      Ext.getCmp('MultiMapTrackingLayerNameCfmBox_Sector').setChecked(false);
                                                    

                                                  },
                                                  uncheck: function () {

                                                      // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                  }
                                              }

                                          },

                                               {
                                                   xtype: 'checkboxfield',
                                                   label: '<b><font color=#60A2CF>Sector</font></b>',
                                                   id: 'MultiMapTrackingLayerNameCfmBox_Sector',
                                                   labelWidth: '45%',
                                                   listeners: {
                                                       check: function () {

                                                           Ext.getCmp('MultiMapTrackingLayerNameCfmBox_MainFloor').setChecked(false);
                                                        
                                                       },
                                                       uncheck: function () {

                                                           // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                       }
                                                   }

                                               },


                                    ]

                                },
                                 

                           ]




                       },
                   ]
               },

             {
                 docked: 'bottom',
                 xtype: 'toolbar',
                 id: 'toolbarMultiMapTrackingLayerNameCfmBoxnBottomID',
                 items: [


                         {
                             xtype: 'button',
                             //height: 40,
                             //width: 125,
                             // top: 154,
                             id: 'btnMultiMapTrackingLayerNameCfmBoxHide',
                             ui: 'action',
                             text: 'Cancel',
                             handler: function () {
                                 MultiMapTrackingLayerNameCfmBoxHide();
                             }

                         },
                          {
                              xtype: 'spacer'
                          },
                         {
                             xtype: 'button',
                             //height: 40,
                             //width: 125,
                             //   top: 154,
                             id: 'btnMultiMapTrackingLayerNameCfmBoxOK',
                             ui: 'action',
                             text: 'Create',
                             handler: function () {
                                 LayerName = Ext.getCmp('MultiMapTrackingLayerNameCfmBox_LayerName').getValue();
                                 var BuildingName = Ext.getCmp('MultiMapTrackingLayerNameCfmBox_BuildingName').getValue();
                                 var FloorName = Ext.getCmp('MultiMapTrackingLayerNameCfmBox_FloorName').getValue();
                                 var SectorName = Ext.getCmp('MultiMapTrackingLayerNameCfmBox_SectorName').getValue();
                                 var R1 = LayerID;
                                 Layer_InsertUpdate(LayerID, LayerPath, LayerName, LayerType, LayerLength, CreatedBy, ModifiedBy, LayerStatus, BuildingName, FloorName, SectorName, R1);
                             }

                         },
                 ]

             },



















        ],



    });

    return _multiMapTrackingLayerNameCfmBox;
}





function MultiMapTrackingLayerNameCfmBoxShow() {
    Ext.Viewport.remove(_multiMapTrackingLayerNameCfmBox);
    this.overlay = Ext.Viewport.add(MultiMapTrackingLayerNameCfmBox());
    this.overlay.show();
}



function MultiMapTrackingLayerNameCfmBoxHide() {
    _multiMapTrackingLayerNameCfmBox.hide();
}
