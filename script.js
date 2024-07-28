function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
  }

setInterval(updateTime, 1000);



document.querySelectorAll(".window").forEach(dragElement);

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++; 
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}



var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

welcomeScreenClose.addEventListener("click",() => closeWindow(welcomeScreen));
welcomeScreenOpen.addEventListener("click",() => openWindow(welcomeScreen));

var projectScreen = document.querySelector("#project_post");
var projectScreenClose = document.querySelector("#projectclose");
var projectScreenOpen = document.querySelector("#projectopen");

projectScreenClose.addEventListener("click", () => closeWindow(projectScreen));
projectScreenOpen.addEventListener("click", () => openWindow(projectScreen));

var libraryScreen = document.querySelector("#library");
var libraryScreenClose = document.querySelector("#libraryclose");
var libraryScreenOpen = document.querySelector("#libraryopen");

libraryScreenClose.addEventListener("click", () => closeWindow(libraryScreen));
libraryScreenOpen.addEventListener("click", () => openWindow(libraryScreen));

var canvasScreen = document.querySelector("#canvas_app");
var canvasScreenClose = document.querySelector("#canvasclose");
var canvasScreenOpen = document.querySelector("#canvasopen");

canvasScreenClose.addEventListener("click", () => closeWindow(canvasScreen));
canvasScreenOpen.addEventListener("click", () => openWindow(canvasScreen));

var musicScreen = document.querySelector("#music");
var musicScreenClose = document.querySelector("#musicclose");
var musicScreenOpen = document.querySelector("#musicopen");

musicScreenClose.addEventListener("click", () => closeWindow(musicScreen));
musicScreenOpen.addEventListener("click", () => openWindow(musicScreen));


document.querySelectorAll(".window").forEach(addWindowTapHandling);

var topBar = document.querySelector("#top")

var biggestIndex = 1;

function addWindowTapHandling(element) {
    element.addEventListener("mousedown", () =>
      handleWindowTap(element)
    )
}

function handleWindowTap(element) {
    biggestIndex++; 
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}




let isDrawing = false;
let x = 0;
let y = 0;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


canvas.addEventListener('mousedown', (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener('mouseup', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = document.getElementById('selColor').value;
  context.lineWidth = document.getElementById('selWidth').value;
  context.lineJoin = "round";
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
}

function clearArea() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function updateLineWidth() {
  context.lineWidth = document.getElementById("selWidth").value;
}

function updateColor() {
  context.strokeStyle = document.getElementById("selColor").value;
}