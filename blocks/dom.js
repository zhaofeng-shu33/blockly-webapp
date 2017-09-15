goog.provide('Blockly.Blocks.dom');
goog.require('Blockly.Blocks');
// Encapsute "Document.write()" DOM API Method
// Writes a string of text to a document stream opened by document.open().
Blockly.Blocks['dom_write'] = {
  init: function() {
     this.appendValueInput("content")
        .setCheck(null)
        .appendField("document write");
    this.setInputsInline(false);
    this.setColour(230);
 this.setTooltip("write something to document");
 this.setHelpUrl("write something to document");
 this.setPreviousStatement(true);
 this.setNextStatement(true);
  }
};
Blockly.Blocks['dom_write_ul'] = {
  init: function() {
    this.appendStatementInput("lists")
        .setCheck(null)
        .appendField("write unordered list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("write unordered list tag");
 this.setHelpUrl("write unordered list tag");
  }
};
Blockly.Blocks['dom_write_div'] = {
  init: function() {
    this.appendStatementInput("div_content")
        .setCheck(null)
        .appendField("write division");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("write division tag");
 this.setHelpUrl("write division tag");
  }
};
Blockly.Blocks['dom_write_list_item'] = {
  init: function() {
    this.appendStatementInput("list_item_content")
        .setCheck(null)
        .appendField("write list item");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("write list item tag");
 this.setHelpUrl("write list item tag");
  }
};
Blockly.Blocks['dom_write_label'] = {
  init: function() {
    this.appendValueInput("label_text")
        .setCheck(null)
        .appendField("write label, Text:");
    this.appendValueInput("input_id")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Input Id:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("generate label tag whose 'for' attribute is assigned by input id");
 this.setHelpUrl("generate label tag whose 'for' attribute is assigned by input id");
  }
};
Blockly.Blocks['dom_write_input'] = {
  init: function() {
    this.appendValueInput("input_id")
        .setCheck(null)
        .appendField("Input Type")
        .appendField(new Blockly.FieldDropdown([["radio","radio"], ["submit","submit"], ["reset","reset"]]), "input_type")
        .appendField("ID:");
    this.appendValueInput("input_name")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value:")
        .appendField(new Blockly.FieldVariable("item"), "input_value")
        .appendField("Name:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("generate input tag");
 this.setHelpUrl("generate input tag");
  }
};