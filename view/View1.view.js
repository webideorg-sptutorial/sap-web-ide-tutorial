sap.ui.jsview("test.view.View1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf test.view.View1
	*/ 
	getControllerName : function() {
		return "test.view.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf test.view.View1
	*/ 
	createContent : function(oController) {
	    var myBtn = new sap.m.Button({
	        text:'To Next View',
	        press:[oController.handlePressMyBtn, oController]
	    });
		return new sap.m.Page({
			title: "First View",
			content: [
				myBtn
			]
		});
	}

});
