


var _settingFencePanelSettingInfo;

Ext.define('MyGPS.view.SettingFence.CustomePanel.SettingFencePanelSettingInfo', {

});




function SettingFencePanelSettingInfo() {

    _settingFencePanelSettingInfo = Ext.create('Ext.Panel',


        {


        requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
        ],


        ////xtype: 'panel',
            // style: 'background-color:#57A0DC',
        height: 150,
            //width: 320,
            //  centered: true,
            // height: '10%',
        width: '100%',
            // centered: false,
        id: 'SettingFencePanelSettingInfoID',
        draggable: false,
        scrollable: true,
        right: 0,
        bottom: 0,
        showAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: null,
            easing: null

        },
        ////style: 'background-color: #57A0DC;',
        items: [

          
                      
                           
                         

                                  {
                                      xtype: "button",
                                      ui: "action",
                                      text: "Boundary Information",
                                      // action: 'ButtonBackToHomeClicked'
                                      //xtype: 'button',                                     
                                      //id: 'SettingDrawFence_HideDetailPanel',
                                      //// margin: 'top left bottom right',
                                      // margin: '-40 2 0 0',                                     
                                      //height: 45,
                                      //width: 45,
                                      //html: '<div ><img src="resources/icons/Picture44.png" width="35" height="35" alt="Company Name"></div>',
                                      ////ui:'round'
                                      //ui: 'plain',
                                      handler: function () {
                                          SettingFencePanelSettingInfoHide();
                                        //  Ext.getCmp('SettingDrawFence_detailPanel').setHidden(true);
                                      }
                                  },
                                 {
                                     xtype: 'selectfield',

                                     id: 'SettingDrawFence_TrackItem',
                                     label: 'Tracking Item',
                                  //   width: '100%',
                                     //  _DataStore_getTrackID
                                     // labelWidth: '40%',
                                     //store: 'multipletrackingitemselectFID',
                                     store: 'TrackingItemList',
                                     valueField: 'TrackID',
                                     displayField: 'TrackItem',
                                     //listeners: {
                                     //    change: function () {

                                     //        }


                                     //}

                                 },


                                 {
                                     xtype: 'textfield',
                                     label: 'Virtual Boundary Name',
                                  //   width: '100%',
                                     id: 'SettingDrawFence_FenceName',
                                     labelWrap: true,
                                     // disabled: true,
                                     // placeHolder: 'C01'

                                 },
                             {

                                 xtype: 'selectfield',
                             //    width: '100%',
                                 label: 'Time From',
                                 id: 'SettingDrawFence_TimeFrom',
                                 options: [
                                      {
                                          text: '05:00-AM',
                                          value: '5'
                                      }, {
                                          text: '06:00-AM',
                                          value: '6'
                                      },
                                 {
                                     text: '07:00-AM',
                                     value: '7'
                                 },
                                     {
                                         text: '08:00-AM',
                                         value: '8'
                                     },
                                 {
                                     text: '09:00-AM',
                                     value: '9'
                                 },
                                  {
                                      text: '10:00-AM',
                                      value: '10'
                                  },
                                 {
                                     text: '11:00-AM',
                                     value: '11'
                                 }, {
                                     text: '12:00-PM',
                                     value: '12'
                                 },
                                 {
                                     text: '01:00-PM',
                                     value: '13'
                                 }, {
                                     text: '02:00-PM',
                                     value: '14'
                                 },
                                 {
                                     text: '03:00-PM',
                                     value: '15'
                                 }, {
                                     text: '04:00-PM',
                                     value: '16'
                                 },
                                 {
                                     text: '05:00-PM',
                                     value: '17'
                                 }, {
                                     text: '06:00-PM',
                                     value: '18'
                                 },
                                 {
                                     text: '07:00-PM',
                                     value: '19'
                                 }, {
                                     text: '08:00-PM',
                                     value: '20'
                                 },
                                 {
                                     text: '09:00-PM',
                                     value: '21'
                                 }, {
                                     text: '10:00-PM',
                                     value: '22'
                                 },
                                 {
                                     text: '11:00-PM',
                                     value: '23'
                                 }, {
                                     text: '12:00-AM',
                                     value: '24'
                                 },
                                 {
                                     text: 'Please Select',
                                     value: '-1'
                                 },


                                 ]
                             },
                                 {

                                     xtype: 'selectfield',
                                   //  width: '100%',
                                     label: 'Time To',
                                     id: 'SettingDrawFence_TimeTo',
                                     options: [

                                           {
                                               text: '05:00-AM',
                                               value: '5'
                                           }, {
                                               text: '06:00-AM',
                                               value: '6'
                                           },
                                 {
                                     text: '07:00-AM',
                                     value: '7'
                                 },
                                     {
                                         text: '08:00-AM',
                                         value: '8'
                                     },
                                 {
                                     text: '09:00-AM',
                                     value: '9'
                                 },
                                  {
                                      text: '10:00-AM',
                                      value: '10'
                                  },
                                 {
                                     text: '11:00-AM',
                                     value: '11'
                                 }, {
                                     text: '12:00-PM',
                                     value: '12'
                                 },
                                 {
                                     text: '01:00-PM',
                                     value: '13'
                                 }, {
                                     text: '02:00-PM',
                                     value: '14'
                                 },
                                 {
                                     text: '03:00-PM',
                                     value: '15'
                                 }, {
                                     text: '04:00-PM',
                                     value: '16'
                                 },
                                 {
                                     text: '05:00-PM',
                                     value: '17'
                                 }, {
                                     text: '06:00-PM',
                                     value: '18'
                                 },
                                 {
                                     text: '07:00-PM',
                                     value: '19'
                                 }, {
                                     text: '08:00-PM',
                                     value: '20'
                                 },
                                 {
                                     text: '09:00-PM',
                                     value: '21'
                                 }, {
                                     text: '10:00-PM',
                                     value: '22'
                                 },
                                 {
                                     text: '11:00-PM',
                                     value: '23'
                                 }, {
                                     text: '12:00-AM',
                                     value: '24'
                                 },
                                 {
                                     text: 'Please Select',
                                     value: '-1'
                                 },


                                     ]
                                 }, {

                                     xtype: 'selectfield',
                                     hidden: true,
                                     width: '100%',
                                     label: 'Days Setting',
                                     id: 'SettingDrawFence_DaySetting',
                                     options: [

                                         {
                                             text: 'EverDays',
                                             value: '1'
                                         },
                                     {
                                         text: 'Exclude Saturday & Sunday',
                                         value: '0'
                                     },

                                     {
                                         text: 'Please Select',
                                         value: '-1'
                                     },

                                     ]
                                 },
                                  {

                                      xtype: 'selectfield',
                                      width: '100%',
                                      label: 'Status',
                                      id: 'SettingDrawFence_Status',
                                      options: [

                                          {
                                              text: 'Active',
                                              value: 'Active'
                                          },
                                      {
                                          text: 'InActive',
                                          value: 'InActive'
                                      },
                                       {
                                           text: 'Please Select',
                                           value: '-1'
                                       },


                                      ]
                                  },


                                   {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFenceID',
                                       width: '100%',
                                       id: 'SettingDrawFence_ID',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   }, {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFencePath',
                                       width: '100%',
                                       id: 'SettingDrawFence_FencePath',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   },
                                   {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFenceShapeType',
                                       width: '100%',
                                       id: 'SettingDrawFence_ShapeType',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   }, {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFenceLength',
                                       width: '100%',
                                       id: 'SettingDrawFence_Length',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   }, {
                                       xtype: 'textfield',
                                       label: 'SettingDrawFenceAccountNo',
                                       width: '100%',
                                       id: 'SettingDrawFence_AccountNo',
                                       labelWrap: true,
                                       hidden: true,
                                       // disabled: true,
                                       // placeHolder: 'C01'

                                   },
                                      {
                                          xtype: 'button',
                                          id: 'SettingDrawFence_Mockbtn',
                                          ui: 'plain',

                                          text: " ",
                                          handler: function () {

                                          }
                                      },
                                        {
                                            xtype: 'button',
                                            id: 'SettingDrawFence_Mockbtn2',
                                            ui: 'plain',

                                            text: " ",
                                            handler: function () {

                                            }
                                        },
                                          {
                                              xtype: 'button',
                                              id: 'SettingDrawFence_Mockbtn3',
                                              ui: 'plain',

                                              text: " ",
                                              handler: function () {

                                              }
                                          },
                                          {
                                              xtype: 'button',
                                              id: 'SettingDrawFence_Mockbtn4',
                                              ui: 'plain',

                                              text: " ",
                                              handler: function () {

                                              }
                                          },
                                          {
                                              xtype: 'button',
                                              id: 'SettingDrawFence_Mockbtn5',
                                              ui: 'plain',

                                              text: " ",
                                              handler: function () {

                                              }
                                          },
                       
                   

                         

                     ],

         

                  



       


    });

    return _settingFencePanelSettingInfo;
}



function SettingFencePanelSettingInfoShow() {
    Ext.Viewport.remove(_settingFencePanelSettingInfo);
    this.overlay = Ext.Viewport.add(SettingFencePanelSettingInfo());
    this.overlay.show();
}

function SettingFencePanelSettingInfoHide() {
    //  Ext.getCmp('TrackingHistoryMapInfoPanelDetails').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  N/A </u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel"> TODAY :' + now + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel"> N/A </td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel"> N/A | Point: N/A  </td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel"> N/A </td></tr></table>');
    _settingFencePanelSettingInfo.hide();
}