const imgs = [
  "images/portrait1.jpg",
  "images/portrait1.jpg",
  "images/portrait1.jpg"
]

let container = document.getElementById("container");

for (let i = 0; i < imgs.length; i++) {
  let imgsDOM = ""
  imgsDOM += `<img class="team-img" src=${imgs[i]}>`
}
container.innerHTML = imgsDOM
