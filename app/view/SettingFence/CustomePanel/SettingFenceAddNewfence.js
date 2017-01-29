


Ext.define('MyGPS.view.SettingFence.CustomePanel.SettingFenceAddNewfence', {

});
var _settingFenceAddNewfence;





function SettingFenceAddNewfence() {

    _settingFenceAddNewfence = Ext.create('Ext.Panel',


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
            id: 'SettingFenceAddNewfenceID',
            draggable: false,
            //  scrollable: true,
            right: -5,
            //top: 45,
            //right: 35,
            bottom: 220,
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
                          id: 'btnSettingFenceAddNewfence_AddNewFence',
                          height: 62,
                          width: 65,

                          html: '<div ><img src="resources/icons/AddNewFenceSetting2.png" width="55" height="55" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {



                          }
                      },
                         {
                             xtype: 'button',
                             id: 'btnSettingFenceAddNewfence_Back',
                             height: 62,
                             width: 65,                             
                             html: '<div ><img src="resources/icons/BackStreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {


                                 
                             }
                         },
                   


                           







                ]

            },









        });

    return _settingFenceAddNewfence;
}



function SettingFenceAddNewfenceShow() {
    Ext.Viewport.remove(_settingFenceAddNewfence);
    this.overlay = Ext.Viewport.add(SettingFenceAddNewfence());
    this.overlay.show();
}

function SettingFenceAddNewfenceHide() {
    //  Ext.getCmp('TrackingHistoryMapInfoPanelDetails').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  N/A </u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel"> TODAY :' + now + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel"> N/A </td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel"> N/A | Point: N/A  </td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel"> N/A </td></tr></table>');
    _settingFenceAddNewfence.hide();
}