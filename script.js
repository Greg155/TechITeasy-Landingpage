
// const services_p = document.querySelectorAll(".services__word");
// console.log(services_p);

// for(const element of services_p){
//     element.addEventListener('mouseover', function(){
//         element.style.color = "red";
//     })
// }




//console.log(cursor)

// document.addEventListener('mousemove', (e) => {

//     console.log(cursor.style)
// })
const cursor = document.getElementsByClassName('cursor')[0];
document.onmousemove = (e) => {
    
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
}

 const h2 = document.querySelector('.subscribe h2')

 console.log(h2)

    h2.addEventListener('mouseover' , e => {
        console.log('over')
        cursor.classList.add('cursor_big')
     })



    h2.addEventListener('mouseleave' , e => {
        console.log('leave')
        cursor.classList.remove('cursor_big')
     })


