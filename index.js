import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  apiKey: "AIzaSyBJD0eV2nbWcxctiadfFF8YMDITxdZU40E",
  authDomain: "roster-6e993.firebaseapp.com",
  databaseURL: "https://roster-6e993-default-rtdb.firebaseio.com",
  projectId: "roster-6e993",
  storageBucket: "roster-6e993.appspot.com",
  messagingSenderId: "380947205868",
  appId: "1:380947205868:web:6d7653ba7ef3898b33dfc9"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const playersInDb = ref(database, "players");

const domString = document.querySelector(".main");

const renderDom = (players) => {
  domString.innerHTML = ""; // Clear the existing content
  players.forEach(player => {
    domString.innerHTML += `
      <div class="profile glass">
        <img class="player-image" src="${player.imageUrl}" alt="image not found">
        <ul>
          <li>${player.name}</li>
          <li>${player.position}</li>
          <li>${player.school}</li>
        </ul>
        <button class="btn btn-danger" id="delete--${player.id}"><i class="fa fa-trash"></i></button>
      </div>
    `;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");

  const createPlayer = (e) => {
    e.preventDefault();

    const newPlayerObj = {
      name: document.querySelector("#form-name").value,
      position: document.querySelector("#form-pos").value,
      school: document.querySelector("#form-school").value,
      imageUrl: document.querySelector("#form-image").value,
    };

    push(playersInDb, newPlayerObj);
    form.reset();
  };

  form.addEventListener('submit', createPlayer);

  const loadPlayers = () => {
    onValue(playersInDb, (snapshot) => {
      const playersArray = [];
      snapshot.forEach((childSnapshot) => {
        const player = childSnapshot.val();
        player.id = childSnapshot.key; // Adding the unique key to the player object
        playersArray.push(player);
      });
      renderDom(playersArray);
    });
  };

  loadPlayers();

  domString.addEventListener("click", (e) => {
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");
      const playerRef = ref(database, `players/${id}`);
      remove(playerRef);
    }
  });
});
