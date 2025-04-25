let body = document.querySelector('body')
body.addEventListener('mousemove',(e)=>{
    let span = document.createElement('span')
    let size = Math.floor(Math.random()*100)
    span.style.height = `${size}px`
    span.style.width = `${size}px`
    span.style.top = `${e.offsetY}px`
    span.style.left = `${e.offsetX}px`
    body.appendChild(span)
    setTimeout(() => {
        span.remove()
    }, 4000);

})