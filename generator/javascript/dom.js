'use strict';
//create a namespace for your code. 
goog.provide('Blockly.JavaScript.dom');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['dom_write'] = function(block) {  
  var WriteStr = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.write('+WriteStr+');\n';
  return code;
};
Blockly.JavaScript['dom_write_ul'] = function(block) {
  var statements_lists = Blockly.JavaScript.statementToCode(block, 'lists');
  // TODO: Assemble JavaScript into code variable.
  var code_pre='document.write("<ul>");\n';
  var code = '\t'+statements_lists;
  var code_after='document.write("</ul>");\n';
  return code_pre+code+code_after;
};
Blockly.JavaScript['dom_write_div'] = function(block) {
  var statements_lists = Blockly.JavaScript.statementToCode(block, 'div_content');
  // TODO: Assemble JavaScript into code variable.
  var code_pre='document.write("<div>");\n';
  var code = '\t'+statements_lists;
  var code_after='document.write("</div>");\n';
  return code_pre+code+code_after;
};
Blockly.JavaScript['dom_write_list_item'] = function(block) {
  var statements_lists = Blockly.JavaScript.statementToCode(block, 'list_item_content');
  // TODO: Assemble JavaScript into code variable.
  var code_pre='document.write("<li>");\n';
  var code = '\t'+statements_lists;
  var code_after='document.write("</li>");\n';
  return code_pre+code+code_after;
};
Blockly.JavaScript['dom_write_label'] = function(block) {
  var value_input_id = Blockly.JavaScript.valueToCode(block, 'input_id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_label_text = Blockly.JavaScript.valueToCode(block, 'label_text', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code='document.write("<label for=\'"+'+value_input_id+'+"\'>"+'+value_label_text+'+"</label>");\n'
  return code;
};
Blockly.JavaScript['dom_write_input'] = function(block) {
  var dropdown_input_type = block.getFieldValue('input_type');
  var value_input_id = Blockly.JavaScript.valueToCode(block, 'input_id', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_input_value = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('input_value'), Blockly.Variables.NAME_TYPE);
  var value_input_name = Blockly.JavaScript.valueToCode(block, 'input_name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code_common='document.write("<input type=\''+dropdown_input_type+'\' value=\'"+'+variable_input_value+'+"\' ';
  var code_specific='';
  if(value_input_id!='')
    code_specific = 'id=\'"+'+value_input_id+'+"\' ';
  if(value_input_name!='')
    code_specific += 'name=\'"+'+value_input_name+'+"\'';
      
  var code = code_common+code_specific+'></input>");\n';
  return code;
};
