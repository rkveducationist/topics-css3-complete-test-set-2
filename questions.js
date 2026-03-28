const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"How many ways to apply CSS?",
options:["3","2","4","5"],
answer:"3",
hint:"Inline, Internal, External"
},

{
type:"mcq",
question:"Which is inline CSS?",
options:[
"style attribute inside tag",
"CSS file",
"head tag CSS",
"script"
],
answer:"style attribute inside tag",
hint:"Directly inside HTML element"
},

{
type:"mcq",
question:"Which is external CSS?",
options:[
"CSS file linked using &lt;link&gt;",
"Inline style",
"Internal style",
"Script"
],
answer:"CSS file linked using &lt;link&gt;",
hint:"Separate file"
},

{
type:"mcq",
question:"Which selector selects all elements?",
options:["*","id",".class","#"],
answer:"*",
hint:"Universal selector"
},

{
type:"mcq",
question:"Which selector is for class?",
options:[".classname","#id","*","tag"],
answer:".classname",
hint:"Dot symbol"
},

{
type:"mcq",
question:"Which selector is for id?",
options:["#id",".class","*","tag"],
answer:"#id",
hint:"Hash symbol"
},

{
type:"mcq",
question:"Which property is used for text color?",
options:["color","background","font","style"],
answer:"color",
hint:"Text color"
},

{
type:"mcq",
question:"Which property sets background color?",
options:["background-color","color","bg","background"],
answer:"background-color",
hint:"Background"
},

{
type:"mcq",
question:"Which property adds space inside border?",
options:["padding","margin","border","spacing"],
answer:"padding",
hint:"Inner space"
},

{
type:"mcq",
question:"Which property adds space outside border?",
options:["margin","padding","border","gap"],
answer:"margin",
hint:"Outer space"
},

{
type:"mcq",
question:"What does box model include?",
options:[
"content, padding, border, margin",
"only content",
"only border",
"only margin"
],
answer:"content, padding, border, margin",
hint:"Full box"
},

{
type:"mcq",
question:"Which property controls element display?",
options:["display","position","float","visibility"],
answer:"display",
hint:"block, inline"
},

{
type:"mcq",
question:"Which display value makes element inline?",
options:["inline","block","none","flex"],
answer:"inline",
hint:"No new line"
},

{
type:"mcq",
question:"Which property changes font?",
options:["font-family","font-style","font-type","text-font"],
answer:"font-family",
hint:"Arial, etc"
},

{
type:"mcq",
question:"Which property aligns text?",
options:["text-align","align","text-style","font-align"],
answer:"text-align",
hint:"center, left"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Apply inline CSS to make text red",

required:["style","color"],

hint:"Use style attribute",

solution:`<p style="color:red;">Hello</p>`
},

{
type:"code",
question:"Create internal CSS to set background color",

required:["style","background-color"],

hint:"Inside head",

solution:`<!DOCTYPE html>
<html>
<head>
<style>
body{
  background-color:lightblue;
}
</style>
</head>
<body>
</body>
</html>`
},

{
type:"code",
question:"Link external CSS file",

required:["link","rel","href"],

hint:"Use link tag",

solution:`<link rel="stylesheet" href="style.css">`
},

{
type:"code",
question:"Apply class selector to change text color",

required:[".","color"],

hint:"Use .class",

solution:`.myClass{
  color:blue;
}`
},

{
type:"code",
question:"Apply id selector to change background",

required:["#","background"],

hint:"Use #id",

solution:`#myId{
  background:yellow;
}`
},

{
type:"code",
question:"Apply padding and margin",

required:["padding","margin"],

hint:"Box spacing",

solution:`div{
  padding:10px;
  margin:20px;
}`
},

{
type:"code",
question:"Create box model example with border",

required:["border","padding","margin"],

hint:"Full box",

solution:`div{
  border:2px solid black;
  padding:10px;
  margin:10px;
}`
},

{
type:"code",
question:"Use display property",

required:["display"],

hint:"block or inline",

solution:`span{
  display:block;
}`
},

{
type:"code",
question:"Apply text styling and font",

required:["font-family","text-align"],

hint:"Font + alignment",

solution:`p{
  font-family:Arial;
  text-align:center;
}`
},

{
type:"code",
question:"Add icon using class (font-awesome basic)",

required:["class","i"],

hint:"Use i tag",

solution:`<i class="fa fa-user"></i>`
}

]