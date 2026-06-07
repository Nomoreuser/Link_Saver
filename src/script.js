const res = document.getElementById("res");
const input = document.getElementById("hinput");
const pvalue = document.getElementById("text");
// const cursor = document.getElementById('cursor'); moved in render created inside input holder
let os = 0;
window.addEventListener("keydown", (e) => {
  const blockKeys = ["Control", "Tab"];

  // disable spam space key, 1 each else key
  // if (e.key == " " && os < 1) {
  //   os++;
  //   document.getElementById("ttt").textContent = os;
  // } else if (os == 1 && e.key == " ") {
  //   e.preventDefault();
  // } else if (e.key !== " ") {
  //   os = 0;
  //   document.getElementById("ttt").textContent = os;
  // }

  if (blockKeys.includes(e.key)) {
    e.preventDefault();
  }
  // document.getElementById('ttt').textContent = e.key

  if (e.key == "Enter") {
    Entered();
  } else {
    input.focus();

    // alert(e.key)
    setTimeout(render, 0);
  }
  pvalue.scrollIntoView();

});

input.addEventListener("input", render);


function Entered() {
  const span = document.createElement("span");
  span.textContent = "> " + input.value;
  res.append(span);

  // alert(input.value)
  // res.lastElementChild?.scrollIntoView(); // auto scroll to bottom / last element created
  document.getElementById('ttt').textContent = input.value

  input.value = "";
  pvalue.innerHTML = "";
  input.focus();
  render(); // called because cursor is created in here
}

// scroll
const main = document.getElementById("main");

main.addEventListener("mousemove", (e) => {
  const rec = main.getBoundingClientRect();

  const dis = rec.right - e.clientX;
  // document.getElementById('ttt').textContent = dis
  if (dis <= 60) {
    main.classList.add("bigScroll");
  } else {
    main.classList.remove("bigScroll");
  }
});

main.addEventListener("mouseleave", () => {
  // alert('leave')

  main.classList.remove("bigScroll");
});

render();

function render() {
  const pos = input.selectionStart;

  const lbefore = input.value.slice(0, pos);
  const lafter = input.value.slice(pos);

  const before = cctext(lbefore);
  const after = cctext(lafter);
  // document.getElementById('ttt').textContent = document.getElementById('terminal').clientHeight;
  pvalue.innerHTML = before + `<span id="cursor"></span>` + after;
}


function cctext(text){
  return text
    .replace(/</g, "&lt")
    .replace(/>/g, "&gt")
    
}
