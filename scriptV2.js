const cases = document.querySelectorAll('.case')
let a = 0
cases.forEach((item,index) => {
    item.addEventListener('click', ()=> {        
        if (a == 0 && cases[index].classList == 'case' ) {
            cases[index].classList.add('cyrcle')
            /* a = 1 */
        }/*  else if (cases[index].classList == 'case') {
            cases[index].classList.add('cross')
            a = 0
        } */
        winCondition(index)
        diago()
        bot(index, cases)
    })
})

function diago() {
    let diago1 = [cases[0], cases[4], cases[8]]
    let diago2 = [cases[2], cases[4], cases[6]]
    let crossCheck = 0
    let crossCheck2 = 0
    let cyrcleCheck = 0
    let cyrcleCheck2 = 0
    diago1.forEach(cases => {
        if (cases.classList.contains('cross')) {
            crossCheck++
        } else if (cases.classList.contains('cyrcle')) {
            cyrcleCheck++
        }
    })
    diago2.forEach(cases => {
        if (cases.classList.contains('cross')) {
            crossCheck2++
        } else if (cases.classList.contains('cyrcle')) {
            cyrcleCheck2++
        }
    })

    if (crossCheck == 3 || cyrcleCheck == 3) {
        diago1.forEach(cases => {
            cases.classList.add('win')
        })
    }
    if (crossCheck2 == 3 || cyrcleCheck2 == 3) {
        diago2.forEach(cases => {
            cases.classList.add('win')
        })
    }  

}

function winCondition(targetIndex) {
    //si l'index clické <= 2
    if (targetIndex <= 2) {
        //groupe toute la ligne
        let lineTop = [cases[0], cases[1], cases[2]]
        let columnTop = [cases[targetIndex], cases[targetIndex+3], cases[targetIndex+6]]
        //check toute la ligne
        let allEqual = arr => arr.every( v => v.classList.value === arr[0].classList.value )
        if (allEqual( lineTop )) {
            console.log('yess')
            lineTop.forEach(item => {
                item.classList.add('win')
            })
        }

        if (allEqual( columnTop )) {
            console.log('yess')
            columnTop.forEach(item => {
                item.classList.add('win')
            })
        }        
        
    }
    if (targetIndex > 2 && targetIndex < 6) {
        //groupe toute la ligne
        let lineTop = [cases[3], cases[4], cases[5]]
        let columnTop = [cases[targetIndex], cases[targetIndex+3], cases[targetIndex-3]]
        //check toute la ligne
        let allEqual = arr => arr.every( v => v.classList.value === arr[0].classList.value )
        if (allEqual( lineTop )) {
            console.log('yess')
            lineTop.forEach(item => {
                item.classList.add('win')
            })
        }

        if (allEqual( columnTop )) {
            console.log('yess')
            columnTop.forEach(item => {
                item.classList.add('win')
            })
        }
        
        
    }
    if (targetIndex > 5 && targetIndex < 9) {
        //groupe toute la ligne
        let lineTop = [cases[6], cases[7], cases[8]]
        let columnTop = [cases[targetIndex], cases[targetIndex-3], cases[targetIndex-6]]
        //check toute la ligne
        let allEqual = arr => arr.every( v => v.classList.value === arr[0].classList.value )
        if (allEqual( lineTop )) {
            console.log('yess')
            lineTop.forEach(item => {
                item.classList.add('win')
            })
        }
        
        if (allEqual( columnTop )) {
            console.log('yess')
            columnTop.forEach(item => {
                item.classList.add('win')
            })
        }
        
        
    }
    
}

function bot(targetIndex, item) {
    let random = Math.floor(Math.random() * 8)
    console.log(random)
    
        item[random].classList.add('cross')
    
}