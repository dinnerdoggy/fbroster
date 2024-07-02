const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]

let container = document.getElementById("container");

for (let i = 0; i < imgs.length; i++) {
  let imgsDOM = ""
  imgsDOM += `<img class="team-img" src=${imgs[i]}>`
}
container.innerHTML = imgsDOM
