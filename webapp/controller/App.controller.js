sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
   	
   	//Create Button on Main Page
    	ShowCreate : function () {
			var oView = this.getView();
			var oDialog = oView.byId("CreateDialog");
			
			if (!oDialog) {
			// create dialog via fragment factory
			oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.walkthrough.view.CreateDialog", this);
			oView.addDependent(oDialog);
			}
			
			oDialog.open();
    
      },
    	
    //Cancel Button on Create Dialog9
		ClickCancel : function () {
			
			var oView = this.getView();
			
			var oInputID = oView.byId("InputID");
			oInputID.setValue("");
			
			var oInputName = oView.byId("InputName");
			oInputName.setValue("");
			
			var oInputAddress = oView.byId("InputAddress");
			oInputAddress.setValue("");
			
			var oInputEmail = oView.byId("InputEmail");
			oInputEmail.setValue("");
		
			this.getView().byId("CreateDialog").close();
			
		}
		
		// -----
		// ,
	
		// onInit: function() {
  //          var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMM_EMP_SRV", {
  //              json: true,
  //              loadMetadataAsync: true
  //          });
  //          oModel.attachMetadataFailed(function() {
  //              this.getEve   ntBus().publish("Component", "MetadataFailed");
  //          }, this);
  //          this.getView().setModel(oModel);

		// }
    	// -----
    	
   });
});