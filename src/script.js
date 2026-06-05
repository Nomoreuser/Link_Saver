


const res = document.getElementById('res');
const input = document.getElementById('hinput');
const pvalue = document.getElementById('text');
// const cursor = document.getElementById('cursor'); moved in render created inside input holder

window.addEventListener('keydown', (e)=>{

    const blockKeys = ["ArrowUp", "ArrowDown", "Control"]

    if(blockKeys.includes(e.key)){
        e.preventDefault()
    }
    
    if(e.key == 'Enter'){
        Entered();
    }else{
        input.focus();
        pvalue.scrollIntoView();

        // alert(e.key)
        setTimeout(render, 0)
    }
})


input.addEventListener('input', render);

function Entered(){

    const span = document.createElement('span');
    span.textContent = "> "+ input.value;
    res.append(span)

    // alert(input.value)
    res.lastElementChild?.scrollIntoView(); // auto scroll to bottom / last element created

    // alert(input.value)
    // clear
    input.value = '';
    pvalue.innerHTML = '';
    input.focus();
    render();  // called because cursor is created in here
}


// scroll
const main = document.getElementById('main');

main.addEventListener('mousemove', (e)=>{
    const rec = main.getBoundingClientRect();

    const dis = rec.right - e.clientX;

    if(dis <= 60){
        main.classList.add('showScroll')
    }else{
        main.classList.remove('showScroll')
    }
})


render()

function render() {

    const pos = input.selectionStart;
    const text = input.value;

    const before = text.slice(0, pos);
    const after = text.slice(pos);

    pvalue.innerHTML = before + `<span id="cursor"></span>` + after;
}