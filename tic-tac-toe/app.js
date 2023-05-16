let clickedDiv = null;
let player = "x";
document.querySelector(".playerx").style.background = "black";
let winPossible = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let forx = [];
let foro = [];
let len = 0;
let resulto = false;
let boxes = document.querySelectorAll(".parent-box");
boxes.forEach((box) => {
  box.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === "DIV") {
      clickedDiv = clickedElement;
      if (player == "x") playerX(clickedDiv);
      else if (player == "o") playerO(clickedDiv);
    }
  });
});
// if (player == "o") {
//   document.querySelector(".playero").style.background = "black";
//   document.querySelector(".playerx").style.background = "none";
// } else if (player == "x") {
//   document.querySelector(".playerx").style.background = "black";
//   document.querySelector(".playero").style.background = "none";
// }

function playerX(clickedDiv) {
  if (!resulto && !resultx) {
    if (player == "o") {
      document.querySelector(".playerx").style.background = "black";
      document.querySelector(".playero").style.background = "none";
    } else if (player == "x") {
      document.querySelector(".playero").style.background = "black";
      document.querySelector(".playerx").style.background = "none";
    }
  }
  if (
    clickedDiv.className === "box1" &&
    !forx.includes(1) &&
    !foro.includes(1) &&
    !resulto &&
    !resultx
  ) {
    len++;
    forx.push(1);
    clickedDiv.innerHTML = "X";
    player = "o";
  } else if (
    clickedDiv.className === "box2" &&
    !forx.includes(2) &&
    !foro.includes(2) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(2);
    player = "o";
  } else if (
    clickedDiv.className === "box3" &&
    !forx.includes(3) &&
    !foro.includes(3) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(3);
    player = "o";
  } else if (
    clickedDiv.className === "box4" &&
    !forx.includes(4) &&
    !foro.includes(4) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(4);
    player = "o";
  } else if (
    clickedDiv.className === "box5" &&
    !forx.includes(5) &&
    !foro.includes(5) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(5);
    player = "o";
  } else if (
    clickedDiv.className === "box6" &&
    !forx.includes(6) &&
    !foro.includes(6) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(6);
    player = "o";
  } else if (
    clickedDiv.className === "box7" &&
    !forx.includes(7) &&
    !foro.includes(7) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(7);
    player = "o";
  } else if (
    clickedDiv.className === "box8" &&
    !forx.includes(8) &&
    !foro.includes(8) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(8);
    player = "o";
  } else if (
    clickedDiv.className === "box9" &&
    !forx.includes(9) &&
    !foro.includes(9) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "X";
    len++;
    forx.push(9);
    player = "o";
  }
  if (leno + len == 9 && !resulto && !resultx) {
    let winner = document.querySelector(".winner-box");
    winner.setAttribute("id", "border-id");
    winner.innerHTML = "Drawn";
    document.querySelector(".playero").style.background = "none";
    document.querySelector(".playerx").style.background = "none";
  }
  if (len >= 3) {
    testcase(winPossible, forx);
    if (resultx) {
      let winner = document.querySelector(".winner-box");
      winner.setAttribute("id", "border-id");
      winner.innerHTML = "Player X won";
      forx = [];
      foro = [];
      document.querySelector(".playerx").style.background = "none";
      document.querySelector(".playero").style.background = "none";
    }
  }
  document.querySelector(".refresh").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
let leno = 0;
let resultx = false;
function playerO(clickedDiv) {
  // clickedDiv.style.backgroundColor = "blue";
  if (!resulto && !resultx) {
    if (player == "o") {
      document.querySelector(".playerx").style.background = "black";
      document.querySelector(".playero").style.background = "none";
    } else if (player == "x") {
      document.querySelector(".playero").style.background = "black";
      document.querySelector(".playerx").style.background = "none";
    }
  }
  if (
    clickedDiv.className === "box1" &&
    !forx.includes(1) &&
    !foro.includes(1) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(1);
    player = "x";
  } else if (
    clickedDiv.className === "box2" &&
    !forx.includes(2) &&
    !foro.includes(2) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(2);
    player = "x";
  } else if (
    clickedDiv.className === "box3" &&
    !forx.includes(3) &&
    !foro.includes(3) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(3);
    player = "x";
  } else if (
    clickedDiv.className === "box4" &&
    !forx.includes(4) &&
    !foro.includes(4) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(4);
    player = "x";
  } else if (
    clickedDiv.className === "box5" &&
    !forx.includes(5) &&
    !foro.includes(5) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(5);
    player = "x";
  } else if (
    clickedDiv.className === "box6" &&
    !forx.includes(6) &&
    !foro.includes(6) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(6);
    player = "x";
  } else if (
    clickedDiv.className === "box7" &&
    !forx.includes(7) &&
    !foro.includes(7) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(7);
    player = "x";
  } else if (
    clickedDiv.className === "box8" &&
    !forx.includes(8) &&
    !foro.includes(8) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(8);
    player = "x";
  } else if (
    clickedDiv.className === "box9" &&
    !forx.includes(9) &&
    !foro.includes(9) &&
    !resulto &&
    !resultx
  ) {
    clickedDiv.innerHTML = "O";
    leno++;
    foro.push(9);
    player = "x";
  }
  if (leno + len == 9 && !resulto && !resultx) {
    let winner = document.querySelector(".winner-box");
    winner.setAttribute("id", "border-id");
    winner.innerHTML = "Drawn";
    document.querySelector(".playerx").style.background = "none";
    document.querySelector(".playero").style.background = "none";
  }
  if (leno >= 3) {
    testcaseo(winPossible, foro);
    if (resulto) {
      let winner = document.querySelector(".winner-box");
      winner.setAttribute("id", "border-id");
      winner.innerHTML = "Player O won";
      document.querySelector(".playerx").style.background = "none";
      document.querySelector(".playero").style.background = "none";
      forx = [];
      foro = [];
    }
  }
  document.querySelector(".refresh").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
function testcase(array1, array2) {
  array1.forEach((x) => {
    checkElements(x, array2);
  });
}
function checkElements(firstArray, secondArray) {
  let count = 0;
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray.includes(secondArray[i])) {
      count++;
      if (count === 3) {
        resultx = true;
      }
    }
  }
}
function testcaseo(array1, array2) {
  array1.forEach((x) => {
    checkElementso(x, array2);
  });
}
function checkElementso(firstArray, secondArray) {
  let count = 0;
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray.includes(secondArray[i])) {
      count++;
      if (count === 3) {
        resulto = true;
      }
    }
  }
}

if (player == "o") {
  document.querySelector(".playero").style.background = "black";
} else if (player == "x") {
  document.querySelector(".playerx").style.background = "black";
}

/*


☻*/
