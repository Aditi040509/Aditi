function nextPage(pageNo){

document
.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById("page"+pageNo)
.classList.add("active");

window.scrollTo(0,0);
}

/* NOTES */

function showNotes(){

document
.getElementById("notesContainer")
.classList.remove("hidden");

}

/* GALLERY */

function showGallery(){

document
.getElementById("gallery")
.classList.remove("hidden");

}

/* FLOWERS */

const flowerContainer =
document.getElementById("flowers");

for(let i=0;i<35;i++){

const flower =
document.createElement("div");

flower.classList.add("flower");

flower.innerHTML="🌸";

flower.style.left =
Math.random()*100+"vw";

flower.style.animationDuration =
(8+Math.random()*10)+"s";

flower.style.animationDelay =
Math.random()*5+"s";

flowerContainer.appendChild(flower);

}

/* QUIZ */

function checkQuiz(){

const q1 =
document.getElementById("q1")
.value
.trim()
.toLowerCase();

const q2 =
document.getElementById("q2")
.value
.trim()
.toLowerCase();

const q3 =
document.getElementById("q3")
.value
.trim()
.toLowerCase();

if(
q1==="9th" &&
q2==="aditi" &&
q3==="blue"
){

document
.getElementById("quizResult")
.innerHTML =
"Correct ❤️";

document
.getElementById("quizNext")
.disabled=false;

document
.getElementById("quizNext")
.innerHTML="Next →";

}
else{

document
.getElementById("quizResult")
.innerHTML =
"Wrong answer 😏";

}

}

/* PUZZLE */

const pieces =
document.querySelectorAll(".piece");

let draggedPiece=null;

const positions=[
"0% 0%",
"50% 0%",
"100% 0%",
"0% 50%",
"50% 50%",
"100% 50%",
"0% 100%",
"50% 100%",
"100% 100%"
];

let order=[0,1,2,3,4,5,6,7,8];

order.sort(()=>Math.random()-0.5);

function renderPuzzle(){

pieces.forEach((piece,index)=>{

piece.style.backgroundPosition =
positions[order[index]];

});

}

renderPuzzle();

pieces.forEach(piece=>{

piece.addEventListener(
"dragstart",
()=>{
draggedPiece=piece;
}
);

piece.addEventListener(
"dragover",
e=>{
e.preventDefault();
}
);

piece.addEventListener(
"drop",
()=>{

const from =
Array.from(pieces)
.indexOf(draggedPiece);

const to =
Array.from(pieces)
.indexOf(piece);

let temp =
order[from];

order[from]=order[to];

order[to]=temp;

renderPuzzle();

checkPuzzle();

}
);

});

function checkPuzzle(){

let solved=true;

for(let i=0;i<9;i++){

if(order[i]!==i){

solved=false;
break;

}

}

if(solved){

document
.getElementById("puzzleNext")
.disabled=false;

document
.getElementById("puzzleNext")
.innerHTML=
"Next → ❤️";

alert(
"Puzzle Solved ❤️"
);

}

}
