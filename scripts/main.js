
const app = document.querySelector("#app");
const newLine = document.getElementById("newLine");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
app.addEventListener("keypress", async function(event){
  console.log(event)
  if(event.key === "Enter" || event.keyCode === '13'){
    await delay(150);
    getInputValue();
    new_line();
  }
});

app.addEventListener("click", function(){
  app.lastElementChild.querySelector("input").focus()
})


async function open_terminal(){
  await delay(500);
  createText("You can run several commands:");
  createCode("about", "Who am i");
  createCode("all", "See all commands.");
  createCode("social", "All my social networks.");
  await delay(200);
  new_line();
}


function new_line(){
  app.append(newLine.content.cloneNode(true))
  app.lastElementChild.querySelector("input").focus()
}

async function getInputValue(){

  const commands = [
    "all",
    "projects",
    "about",
    "social",
    "clear"
  ]
  
  const value = app.lastElementChild.querySelector("input").value  

  if (commands.includes(value)) {
    trueValue()
  }
  else {
    falseValue()
  }

  if(value === "all"){
    app.append(all.content.cloneNode(true))
  }
  else if(value === "projects"){
    app.append(projects.content.cloneNode(true))
  }
  else if(value === "about"){
    app.append(about.content.cloneNode(true))
  }
  else if(value === "social"){
    app.append(social.content.cloneNode(true))
  }
  else if(value === "clear"){
    app.innerHTML = "";
  }
  else{
    createText(`command not found: ${value}`)
    createText(`type "all" to get all available commands`)
  }
}

function trueValue(){
  app.lastElementChild.querySelector("input").classList.add("success")
}

function falseValue(){
  app.lastElementChild.querySelector("input").classList.add("error")
  app.lastElementChild.querySelector("i").classList.add("error")
}

function createText(text){
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
