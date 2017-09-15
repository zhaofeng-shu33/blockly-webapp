'use strict';
//create a namespace for your code. 
goog.provide('Blockly.JavaScript.json');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['json_attribute'] = function(block) {
  var value_object_name = Blockly.JavaScript.valueToCode(block, 'object_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_object_attribute = Blockly.JavaScript.valueToCode(block, 'object_attribute', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_object_name+'['+value_object_attribute+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};