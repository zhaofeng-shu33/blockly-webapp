goog.provide('Blockly.Blocks.json');
goog.require('Blockly.Blocks');
// Encapsute "object.attribute" 
Blockly.Blocks['json_attribute'] = {
  init: function() {
    this.appendValueInput("object_name")
        .setCheck(null)
        .appendField("object");
    this.appendValueInput("object_attribute")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("'s attribute");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get Object Property");
 this.setHelpUrl("Get Object Property");
  }
};