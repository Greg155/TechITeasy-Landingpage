window.onload = () => {

    const arrow = document.querySelector('.arrow');
    console.log(arrow)
    
    
    document.querySelector('.arrow').addEventListener('click', (e) => {
        e.stopPropagation()
        document.getElementsByClassName('manifesto')[0].scrollIntoView({ behavior: "smooth"})
    })
    

    
    let sectionHead = document.getElementsByClassName('hero');
    const bodyHeigt = document.body.clientHeight;
    console.log(sectionHead[0].clientHeight);
    const cursor = document.getElementsByClassName('cursor')[0];
    
    
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
    let cube = document.querySelector(".cube")
    let left = 600;
    let bottom = 400
    let currentScroll = 0;
    document.body.addEventListener('scroll', (e) => {
       console.log(e.timeStamp)

        if (currentScroll < document.body.scrollTop) {
            left +=5
            bottom -=2
        } else {
            left -=5
            bottom +=2            
        }

        // console.log(document.documentElement.scrollTop)
        //console.log(cube.style.top)
        cube.style.left = `${left}px`
        cube.style.bottom = `${bottom}px`
        currentScroll = document.body.scrollTop

        console.log(left)
    })

    
    const blackArrow = document.querySelector('.arrow_black') 

    blackArrow.addEventListener('click', (e) => {
        e.stopPropagation()
        document.querySelector("#email").focus()
        document.querySelector('.subscribe').scrollIntoView({behavior: "smooth"})
      
    })

    window.onmousemove = (e) => {
        //console.log(e)


        if (e.target.classList.value === "manifesto") {
            console.log(e.target.classList.value)
            cursor.classList.remove('*')
            cursor.classList.add('cursor')
            cursor.classList.add('cursor_carre')
        }



        if (e.target.classList.value === "partnership") {
            console.log(e.target.classList.value)
            cursor.classList.remove('*')
            cursor.classList.add('cursor')
            cursor.classList.add('cursor_carre')
        }

        if (e.target.classList.value === "services__container") {
            console.log(e.target.classList.value)
            cursor.classList.remove('cursor_carre')
        }

        if (e.target.classList.value === "profile") {
            console.log(e.target.classList.value)
            cursor.classList.add('cursor')
            cursor.classList.add('cursor_carre')
        }


        if (e.target.classList.value === "subscribe") {
            console.log(e.target.classList.value)
            cursor.classList.remove('cursor_carre')
        }
        
        if (e.target.classList.value === "contact") {
            console.log(e.target.classList.value)
            cursor.classList.add('cursor_carre')
        }


        //changeCursor(e.clientY);
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;

        e.stopPropagation();
    }
    
     const h2 = document.querySelector('.subscribe h2')
    
    
        h2.addEventListener('mouseover' , e => {
            cursor.classList.add('cursor_big')
         })
    
    
    
        h2.addEventListener('mouseleave' , e => {
            cursor.classList.remove('cursor_big')
         })
        
    

}











    


