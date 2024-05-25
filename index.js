const btnLike1 = document.getElementById("btnLike1");
const count1 = document.getElementById("count1");

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1;
  count1.textContent = likeCounts.toString();
}

btnLike1.addEventListener("click", countLike1);

const btnLike2 = document.getElementById("btnLike2");
const count2 = document.getElementById("count2");

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1;
  count2.textContent = likeCounts.toString();
}

btnLike2.addEventListener("click", countLike2);

const btnDisLike1 = document.getElementById("btnDisLike1");
const count3 = document.getElementById("count3");

function countDisLike1() {
  let DisLikeCounts = parseInt(count3.value) + 1;
  count3.textContent = DisLikeCounts.toString();
}
btnDisLike1.addEventListener("click", countDisLike1);




const btnDisLike2 = document.getElementById("btnDisLike2");
const count4 = document.getElementById("count4");

function countDisLike2() {
  let DisLikeCounts = parseInt(count4.value) + 1;
  count4.textContent = DisLikeCounts.toString();
}
btnDisLike2.addEventListener("click", countDisLike2)
