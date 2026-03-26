const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// get html element where add cards
const cards_container_element = document.querySelector(".cards_container")
// get from elements
const name_surname_element = document.querySelector(".name-surname") // Name & surname field
const role_element = document.querySelector(".role-value") // Role field
const email_element = document.querySelector(".email-value") // Email field
const img_element = document.querySelector(".img-value") // Image field
const submit_btn_element = document.querySelector(".btn-submit") // submit button
const reset_btn_element = document.querySelector(".btn-reset") // reset button
const form_element = document.querySelector("form") // form

// page initialization with elements in list
add_elements_in_list(teamMembers)
form_element.addEventListener("submit", TakeFields)
//form_element.addEventListener("reset", ClearFields)
// connect function with form
function TakeFields(event){
  event.preventDefault() //not provvide submit
  let obj={
    name: name_surname_element.value,
    role: role_element.value,
    email: email_element.value,
    img: img_element
  }
  console.log(obj)
  add_card(obj)
  
  }

//functions to add cards into container

function add_elements_in_list(list){
  for (let i=0; i<list.length; i++ ){
    let obj= list[i]
    add_card(obj)
  }
}

function add_card(obj){
  let name = obj["name"]
  let role = obj["role"]
  let email = obj["email"]
  let img = obj["img"]
  let markup = `
  <div class="card col-12 col-md-4 col-sm-6">
      <div class="card-body">
          <img class="card-img rounded-circle p-4" src=${img}></img>
          <h6 class="card-name fs-3 mb-2 text-center text-primary">${name}</h6>
          <p class="card-role fs-4 text-center">${role}</p>
          <p class="card-role fs-5 text-center">${email}</p>
      </div>
  </div>
  `
  console.log(markup)
  cards_container_element.innerHTML += markup
}
