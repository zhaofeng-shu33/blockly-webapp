//load question from web server omitted


//define the question lists
var questions=[{
    "description":"工业4.0最早是哪个国家提出的？",
    "choice_1":"美国",
    "choice_2":"德国",
    "choice_3":"日本",
    "right_choice":"B"    
},
{
    "description":"IoT 是什么意思？",
    "choice_1":"智能制造",
    "choice_2":"工业4.0",
    "choice_3":"物联网",
    "right_choice":"C"    
},
{
    "description":"下列哪一项不属于工业4.0的理念？",
    "choice_1":"集中决策",
    "choice_2":"信息透明",
    "choice_3":"互操作",
    "right_choice":"A"    
}  
];

//below is the code generated by blockly, you should remove the variable "questions"

var item, question_item, counter_outer, counter_inner, i, input_id_temp;


document.write("<ul>");
	  counter_outer = 0;
  for (var question_item_index in questions) {
    question_item = questions[question_item_index];
    document.write("<li>");
    	  document.write("<div>");
      	  document.write(question_item['description']);
      document.write("</div>");
      for (counter_inner = 1; counter_inner <= 3; counter_inner++) {
        input_id_temp = String(counter_outer) + String(counter_inner);
        document.write("<label for='"+input_id_temp+"'>"+question_item[(String('choice_') + String(counter_inner))]+"</label>");
        document.write("<input type='radio' value='"+counter_inner+"' id='"+input_id_temp+"' name='"+(String('question_') + String(counter_outer))+"'></input>");
      }
    document.write("</li>");
    counter_outer = counter_outer + 1;
  }
document.write("</ul>");
