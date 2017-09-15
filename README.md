# USE Blockly to help students build web application

## Background

Google Blockly Framework encapsulates Basic Javascript Elements. However, building a web app requires more, including DOM API
provided by Browser and SERVER API provided by NodeJs. Therefore, this project aims to encapsutes parts of the two kinds of JS API.
Such Encapsulation provides possibility for Non-Programmers to build a web app by graphical block building.

## Current Status

    DOM_WRITE_XXX API (dom.js) has been partial successfully encapsulated.
    JAVASCRIPT_OBJECT_ATTRIBUTE API (json.js) has marched a first step.
    
## How to run

Currently, only the client side is considered. To successfully run playground.html, you need put the following three directories
on the save level

    * blockly-webapp
    * blockly-master (google blockly source)
    * closure-library
   
Then you can paste ./design/blockly_playground.xml and "import from XML", then generate JS codes.
After that, copy and paste JS codes to the corresponding position in load_question.js 

## Effect

![Screenshot_1](/images/Screenshot_1.jpg)