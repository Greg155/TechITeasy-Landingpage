
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

let sectionHead = document.getElementsByClassName('hero');
const bodyHeigt = document.body.clientHeight;
console.log(sectionHead[0].clientHeight);
const cursor = document.getElementsByClassName('cursor')[0];

const elemPos =  {
    header: document.getElementsByClassName('hero')[0].offsetTop,
    manifesto: document.getElementsByClassName('manifesto')[0].offsetTop,
    partnership: document.getElementsByClassName('partnership')[0].offsetTop,
    service: document.getElementsByClassName('services__container')[0].offsetTop,
    profile: document.getElementsByClassName('profile')[0].offsetTop,
    subscribe: document.getElementsByClassName('subscribe')[0].offsetTop,
    contact: document.getElementsByClassName('contact')[0].offsetTop,
}
console.log(elemPos)

const divBottom = (elem) => {

    return bodyHeigt - elem.clientHeight;
}


// const changeCursor = (cursorHeigth) => {
//     let heigthToChange = 0;
//     const valueObject = Object.values(elemPos)
//     console.log(cursorHeigth);
//     if (valueObject.includes(cursorHeigth)) {
//         console.log(cursorHeigth);
//         Object.keys(elemPos).forEach( elem => {
//             if (elemPos[elem] === cursorHeigth) {
//                 console.log(elem)
//             }

//     })

// }

// }



document.onmousemove = (e) => {
    
    console.log(e.target)
    if (e.target.classList.value === "subhead") {
        console.log("sub")
    }
    //changeCursor(e.clientY);
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


