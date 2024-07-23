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
<img class="player-image" src="images/portrait1.jpg" alt="image not found">
<ul>
    <li id="name">Casey Cunningham</li>
    <li id="position">Wide Receiver</li>
    <li id="school">McGavock Highschool</li>
</ul>
</div>`
  }
}

console.log("line 30, connected")
renderDom()






