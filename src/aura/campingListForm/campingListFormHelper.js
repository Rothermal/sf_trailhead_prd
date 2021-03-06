({
    createItem:function(component,newItem){
        //breakdown. fetch the event
        //			 set the params with object passed in from component
        //			 fire event
        //			 reset the view component to be an empty object.
      var addItem = component.getEvent("addItem");
        addItem.setParams({"item":newItem});
        addItem.fire();
        component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                        'Name': '',
                        'Quantity__c': 0,
                        'Price__c': 0,
                        'Packed__c': false });
    },
	 validateItemForm: function(component) {
		 console.log('hitting it');     
        // Simplistic error checking
        var validItem = true;
        
        // Name must not be blank
        var nameField = component.find("itemname");
        var itemname = nameField.get("v.value");
        if ($A.util.isEmpty(itemname)){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        
        // Quantity must not be blank
        var quantityField = component.find("quantity");
        var quantity = quantityField.get("v.value");
        if ($A.util.isEmpty(quantity)){
            validItem = false;
            quantityField.set("v.errors", [{message:"Quantity can't be blank."}]);
        }
        else {
            quantityField.set("v.errors", null);
        }
        
        var priceField = component.find("price");
        var price = priceField.get("v.value");
        if ($A.util.isEmpty(price)){
            validItem = false;
            priceField.set("v.errors", [{message:"Price can't be blank."}]);
        }
        else {
            priceField.set("v.errors", null);
        }
        return(validItem);
	},
})