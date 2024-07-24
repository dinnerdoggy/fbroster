const players = [
  {
    id: 1,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 2,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 3,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 4,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 5,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 6,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 7,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 8,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 9,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 10,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
  {
    id: 11,
    name: "Casey Cunningham",
    position: "Wide Reciever",
    school: "McGavock Highschool",
    imageUrl: "images/portrait1.jpg",
  },
];


// Main section connection where dom is rendered
const domString = document.querySelector(".main")


// Defining the function to render the array to the dom
function renderDom() {
  for (let i = 0; i < players.length; i++) {
    domString.innerHTML += `<div class="profile glass">
    <img id="formImage" class="player-image" src="${players[i].imageUrl}" alt="image not found">
    <ul>
     <li id="name">${players[i].name}</li>
     <li id="position">${players[i].position}</li>
     <li id="school">${players[i].school}</li>
    </ul>
    <button class="btn btn-danger" id="delete--${players[i].id}">Remove</button>
  </div>`
  }
}



// create ******************
const form = document.querySelector("form")

const createPlayer = (e) => {
  e.preventDefault();

  const newPlayerObj = {
    id: players.length +1,
    name: document.querySelector("#form-name").value,
    position: document.querySelector("#form-pos").value,
    school: document.querySelector("#form-school").value,
    imageUrl: document.querySelector("#form-image").value,
  }

  players.push(newPlayerObj);
  domString.innerHTML = "";
  renderDom();
  form.reset();
}

form.addEventListener('submit', createPlayer);

// delete ********************

domString.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = players.findIndex(e => e.id === Number(id));
    players.splice(index, 1);
    domString.innerHTML = "";
    renderDom();
  }
});





renderDom()