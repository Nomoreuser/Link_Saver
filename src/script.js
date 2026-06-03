
// const textarea = document.getElementById('inputc');

// window.addEventListener('keypress', ()=>{
//     textarea.focus()
// });


const input = document.getElementById('hinput');
const pvalue = document.getElementById('text');
const cursor = document.getElementById('cursor');

window.addEventListener('keypress', ()=>{
    input.focus();
})


let isTyping;
cursor.classList.add("blink")
input.addEventListener('input', ()=>{
    cursor.classList.remove("blink")
    clearTimeout(isTyping);

    pvalue.textContent = input.value;

    isTyping = setTimeout(()=>{
        cursor.classList.add("blink")
    },1000)
});



