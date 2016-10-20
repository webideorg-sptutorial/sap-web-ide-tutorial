sap.ui.jsview("test.view.view2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf test.view.view2
	*/ 
	getControllerName : function() {
		return "test.view.view2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf test.view.view2
	*/ 
	createContent : function(oController) {
	    var myBtn = new sap.m.Button({
	        text:'To First View',
	        press:[oController.handlePressToFirstView, oController]
	    });
		return new sap.m.Page({
			title: "My Second View",
			content: [
				myBtn
			]
		});
	}

});
