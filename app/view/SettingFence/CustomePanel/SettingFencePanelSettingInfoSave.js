

var _settingFencePanelSettingInfoSave;

Ext.define('MyGPS.view.SettingFence.CustomePanel.SettingFencePanelSettingInfoSave', {

});





function SettingFencePanelSettingInfoSave() {

    _settingFencePanelSettingInfoSave = Ext.create('Ext.Panel',


        {


            requires: [
            'Ext.dataview.List',
            'Ext.data.Store'
            ],


            ////xtype: 'panel',
            // style: 'background-color:#57A0DC',
            height: 1,
            //width: 320,
            // centered: true,
            // height: '10%',
            width: 1,
            // centered: false,
            id: 'SettingFencePanelSettingInfoSaveID',
            draggable: false,
          //  scrollable: true,
            right: -1,
            //top: 45,
            //right: 35,
            bottom: 175,
            zIndex: 30,
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
            ////style: 'background-color: #57A0DC;',

            style: 'background-color: transparent;',


           
            items: {

            xtype: 'container',
            style: 'background-color: transparent;',
            layout: {
                type: 'vbox',
                pack: 'left',
                align: 'end'
            },

            items: [

                  {
                      xtype: 'button',
                      id: 'btnSettingFencePanelSettingInfoSaveHide',
                      height: 62,
                      width: 65,
                   
                      html: '<div ><img src="resources/icons/ShrinkIcon.png" width="55" height="55" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {

                          Ext.getCmp('btnSettingFencePanelSettingInfoSaveHide').setHidden(true);
                          Ext.getCmp('btnSettingFencePanelSettingInfoSaveShow').setHidden(false);

                          SettingFencePanelSettingInfoHide();
                          Ext.getCmp('SettingFencePanelSettingInfoID').setMargin('100 0 0 0');

                          
                      }
                  },
                     {
                         xtype: 'button',
                         id: 'btnSettingFencePanelSettingInfoSaveShow',
                         height: 62,
                         width: 65,
                         hidden:true,
                         html: '<div ><img src="resources/icons/ExpandIcon.png" width="55" height="55" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {


                             Ext.getCmp('btnSettingFencePanelSettingInfoSaveHide').setHidden(false);
                             Ext.getCmp('btnSettingFencePanelSettingInfoSaveShow').setHidden(true);
                             SettingFencePanelSettingInfoShow();

                         }
                     },
                {
                xtype: 'button',
                id: 'btnSettingFencePanelSettingInfoSaveSave',
                height: 62,
                width: 65,
                margin: '-62 60 0 0',
                html: '<div ><img src="resources/icons/SaveIcon.png" width="55" height="55" alt="Company Name"></div>',
                ui: 'plain',
                handler: function () {

                    
                }
            },

                  
                   
                        {
                            xtype: 'button',
                            id: 'btnSettingFencePanelSettingInfoSaveBack',
                            height: 62,
                            width: 65,
                            margin: '-62 120 0 0',
                            html: '<div ><img src="resources/icons/BackStreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                            ui: 'plain',
                            handler: function () {


                            }
                        },



                         

                  
                 

            ]

        },









        });

    return _settingFencePanelSettingInfoSave;
}



function SettingFencePanelSettingInfoSaveShow() {
    Ext.Viewport.remove(_settingFencePanelSettingInfoSave);
    this.overlay = Ext.Viewport.add(SettingFencePanelSettingInfoSave());
    this.overlay.show();
}

function SettingFencePanelSettingInfoSaveHide() {
    //  Ext.getCmp('TrackingHistoryMapInfoPanelDetails').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  N/A </u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel"> TODAY :' + now + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel"> N/A </td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel"> N/A | Point: N/A  </td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel"> N/A </td></tr></table>');
    _settingFencePanelSettingInfoSave.hide();
}