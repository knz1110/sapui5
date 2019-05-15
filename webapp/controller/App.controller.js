sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
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
    	
    //Cancel Button on Create Dialog
		ClickCancel : function () {
			
			// var oInput = sap.ui.getCore().getElementById("InputID");
			// oInput.setValue("");
			
			this.getView().byId("CreateDialog").close();
			
		}
      
   });
});