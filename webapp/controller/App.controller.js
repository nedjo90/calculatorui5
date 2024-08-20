sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/calculator/controller/Utils"],
  function (Controller, Utils) {
    "use strict";
    console.clear();

    return Controller.extend("sap.ui.calculator.controller.App", {
      onPressBtn: function (event) {
        let value = Utils.getClickedValue(event);
        let resultElem = this.getView().byId("result");
        resultElem.setValue(Utils.updateResult(resultElem.getValue(), value));
      },
    });
  }
);
