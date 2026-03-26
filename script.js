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

// page initialization with elements in list
add_elements_in_list(teamMembers)

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
  <div class="card col m-auto" style="width: 25rem;">
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
