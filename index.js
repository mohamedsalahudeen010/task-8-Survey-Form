function createDiv(tagname,attrname,attrvalue){
  let div=document.createElement(tagname);
  div.setAttribute(attrname,attrvalue)
  return div
}
function createlinebreak(tagname) {
  var ele = document.createElement(tagname);
  return ele;
}

function createptag(tagname, attrname, attrvalue, content) {
  var head1 = document.createElement(tagname);
  head1.setAttribute(attrname, attrvalue);
  head1.innerHTML = content;
  return head1;
}



function createlabels(tagname, attrname, attrvalue,idname,idvalue,content) {
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname, attrvalue);
  ele.setAttribute(idname,idvalue)
  ele.innerHTML = content;
  return ele;
}

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,placeholder,placeholdervalue) {
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname, attrvalue);
  ele.setAttribute(attrname1, attrvalue1);
  ele.setAttribute(placeholder, placeholdervalue);
  return ele;
}

function CreateButton(tagname, attrname, attrvalue, idname, idvalue, content) {
  let ele = document.createElement(tagname);
  ele.setAttribute(attrname, attrvalue);
  ele.setAttribute(idname, idvalue);
  ele.innerHTML = content;
  return ele;
}


let br1 = createlinebreak("br");
let br2 = createlinebreak("br");
let br3 = createlinebreak("br");
let br4 = createlinebreak("br");
let br5 = createlinebreak("br");
let br6 = createlinebreak("br");
let br7 = createlinebreak("br");
let br8 = createlinebreak("br");
let br9 = createlinebreak("br");
let br10 = createlinebreak("br");
let br11 = createlinebreak("br");
let br12 = createlinebreak("br");
let br13 = createlinebreak("br");
let br14 = createlinebreak("br");
let br15 = createlinebreak("br");
let br16 = createlinebreak("br");
let br17 = createlinebreak("br");
let br18 = createlinebreak("br");
let br19 = createlinebreak("br");
let br20 = createlinebreak("br");


let form1 = document.createElement("form");
form1.setAttribute("id", "survey-form");
form1.setAttribute("class", "survey-form");


let headDiv=createDiv("div","class","heading");

let head1 = document.createElement("h1");
head1.setAttribute("id", "title");
head1.innerHTML = "Survey Form";

 headDiv.append(head1);

let ParaDiv=createDiv("div","class", "heading-para");
var paragraph = createptag("p", "id", "description", "This is a survey-form");

ParaDiv.append(paragraph);

let firstNameDiv=createDiv("div","class", "firstNameDiv");
let firstNamelabel = createlabels("label", "for", "first-name","id","name-label", "Firstname");
let firstNameinput = createinput("input","type","text","id","first-name","placeholder","Mohamed");

 firstNameDiv.append(firstNamelabel,firstNameinput);

let lastNameDiv=createDiv("div","class", "lastNameDiv");
let lastNamelabel = createlabels("label", "for", "last-name","id","name-label", "Lastname");
let lastNameinput = createinput("input","type","text","id","last-name","placeholder","Salah");

 lastNameDiv.append(lastNamelabel,lastNameinput)

let emailDiv=createDiv("div","class", "emailDiv");
let emaillabel = createlabels("label", "for", "email","id","email-label", "Email");
let emailinput = createinput("input","type","text","id","email","placeholder","abcd@gmail.com");

 emailDiv.append(emaillabel,emailinput);

let genderDiv=createDiv("div","class", "genderDiv");

let genderhead=document.createElement("h5");
genderhead.innerHTML="Gender";

let maleDiv=createDiv("div","class", "maleDiv");

var labelMale = document.createElement("label");
labelMale.setAttribute("for", "male");
labelMale.innerHTML = "Male";

var male = document.createElement("input");
male.setAttribute("type", "radio");
male.setAttribute("name", "gender");
male.setAttribute("id", "male");
male.setAttribute("value", "male");
male.addEventListener("click", gender);

maleDiv.append(labelMale,male);

let FemaleDiv=createDiv("div","class", "femaleDiv");

var labelFemale = document.createElement("label");
labelFemale.setAttribute("for", "female");
labelFemale.innerHTML = "feMale";

var female = document.createElement("input");
female.setAttribute("type", "radio");
female.setAttribute("name", "gender");
female.setAttribute("id", "female");
female.setAttribute("value", "female");
female.addEventListener("click", gender);

FemaleDiv.append(labelFemale,female);

genderDiv.append(genderhead,maleDiv,br16,FemaleDiv)

let foodDiv=createDiv("div","class", "foodDiv");

let foodHead=document.createElement("p");
foodHead.innerHTML="Must Select Two From This"

let foodForm = document.createElement("form");
foodForm.setAttribute("id", "food-form");

let labelfood1=document.createElement("label");
labelfood1.setAttribute("for","biriyani");
labelfood1.innerHTML="Biriyani";

let food1 = document.createElement("input");
food1.setAttribute("type", "checkbox");
food1.setAttribute("id", "biriyani");
food1.setAttribute("value", "biriyani");
food1.innerHTML = "Biriyani";

let labelfood2=document.createElement("label");
labelfood2.setAttribute("for","parotta");
labelfood2.innerHTML="Parotta";

let food2 = document.createElement("input");
food2.setAttribute("type", "checkbox");
food2.setAttribute("id", "parotta");
food2.setAttribute("value", "Parotta");
food2.innerHTML = "Parotta";

let labelfood3=document.createElement("label");
labelfood3.setAttribute("for","mandhi");
labelfood3.innerHTML="Mandhi";

let food3 = document.createElement("input");
food3.setAttribute("type", "checkbox");
food3.setAttribute("id", "mandhi");
food3.setAttribute("value", "Mandhi");
food3.innerHTML = "Mandhi";

foodForm.append(labelfood1,food1,br12,labelfood2,food2,br13,labelfood3,food3);
foodDiv.append(foodHead, foodForm)

let addressDiv=createDiv("div","class", "addressDiv");
let addresslabel = createlabels("label", "for", "address","id","address-label", "Address");
let addressinput = createinput("input","type","text","id","address","placeholder","bharathinagar 6th street");

addressDiv.append(addresslabel,addressinput);

let pincodeDiv=createDiv("div","class", "pincodeDiv");
let pincodelabel = createlabels("label", "for", "pincode","id","pincode-label", "Pincode");
let pincodeinput = createinput("input","type","Number","id","pincode","placeholder","600028");

pincodeDiv.append(pincodelabel,pincodeinput);

let stateDiv=createDiv("div","class", "stateDiv");
let statelabel = createlabels("label", "for", "state","id","state-label", "State");
let stateinput = createinput("input","type","text","id","state","placeholder","tamilnadu");

stateDiv.append(statelabel,stateinput);

let countryDiv=createDiv("div","class", "countryDiv");
let countrylabel = createlabels("label", "for", "country","id","country-label", "Country");
let countryinput = createinput("input","type","text","id","country","placeholder","india");

countryDiv.append(countrylabel,countryinput);

let textAreaDiv=createDiv("div","class", "textareaDiv");
let Createtextarea = document.createElement("textarea");
Createtextarea.setAttribute("id", "comments");
Createtextarea.setAttribute("cols", "40");
Createtextarea.setAttribute("rows", "4");

textAreaDiv.append(Createtextarea);

let buttonDiv=createDiv("div","class", "btnDiv");
var button1 = document.createElement("button");
button1.setAttribute("id", "submit");
button1.setAttribute("class", "btn");
button1.innerHTML = "Submit";

buttonDiv.append(button1);


let container=createDiv("div","class","container","class","form-group")


form1.append(headDiv,br1,ParaDiv,br2,firstNameDiv,br3,lastNameDiv,br4,emailDiv,br5,genderDiv,foodDiv,addressDiv,br8,pincodeDiv,br9,stateDiv,br10,countryDiv,br15,buttonDiv,br16,textAreaDiv)
container.append(form1)
document.body.append(container);


function gender() {
  if (male.checked) {
    let res = document.getElementById("male").value;
    return res;
  } else if (female.checked) {
    let res1 = document.getElementById("female").value;
    return res1;
  } else {
    return "others";
  }
}

function selectFood(){
  if(food1.checked && food2.checked){
    let res = `${document.getElementById("biriyani").value} +
    ${document.getElementById("parotta").value}
    `;
    return res;
  }
}

form1.addEventListener("submit", function (event) {
  event.preventDefault();
  
  var fname = document.getElementById("first-name").value;
  var lname = document.getElementById("last-name").value;
  var email=document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var food = document.getElementById("food-form").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  console.log(fname,lname,address,pincode,food,state,country);

  function createTable(tagname, attrname, attrvalue) {
    var table = document.createElement(tagname);
    table.setAttribute(attrname, attrvalue);
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";
    table.style.aligncontent = "right";
    table.style.left = "20px";
    return table;
  }

  function createTable1(tagname) {
    var table = document.createElement(tagname);

    return table;
  }
  function createTable2(tagname, content) {
    var table = document.createElement(tagname);
    table.innerHTML = content;
    table.style.border = "1px solid black";
    return table;
  }

  var table = createTable("table", "class", "table");
  var thead = createTable("thead", "class", "thead-dark");
  var tr1 = createTable1("tr");
  var th1 = createTable2("th", "Firstname");
  var th2 = createTable2("th", "Lastname");
  var th3 = createTable2("th", "email");
  var th4 = createTable2("th", "gender");
  var th5 = createTable2("th", "Choice of food");
  var th6 = createTable2("th", "address");
  var th7 = createTable2("th", "pincode");
  var th8 = createTable2("th", "state");
  var th9 = createTable2("th", "country");

  tr1.append(th1, th2, th3, th4, th5, th6, th7, th8, th9);
  thead.append(tr1);

  var tbody = createTable1("tbody");
  var tr2 = createTable1("tr");
  var td1 = createTable2("th", fname);
  var td2 = createTable2("th", lname);
  var td3 = createTable2("th", email);
  var td4 = createTable2("th", gender());
  var td5 = createTable2("th",food);
  var td6 = createTable2("th", address);
  var td7 = createTable2("th", pincode);
  var td8 = createTable2("th", state);
  var td9 = createTable2("th", country);

  document.getElementById("survey-form").reset();

  tr2.append(td1, td2, td3, td4, td5, td6, td7, td8,td9);
  tbody.append(tr2);
  table.append(thead, tbody);
  return document.body.append(table);
 
});
