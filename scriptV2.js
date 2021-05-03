const cases = document.querySelectorAll('.case')
let a = 0
let win = 0
function winStop() {
    for (let i = 0; i < cases.length; i++) {
        if (cases[i].classList.contains('win')) {
            win = 1
            console.log('hhh')
            return win
        }
        
    }
}

cases.forEach((item,index) => {
    item.addEventListener('click', ()=> {
            console.log(item)
        if (win > 0) {
            console.log('ouueazue')
        } else {
            if (a == 0 && cases[index].classList == 'case' ) {
                cases[index].classList.add('cyrcle')
                /* a = 1 */
            }/*  else if (cases[index].classList == 'case') {
                cases[index].classList.add('cross')
                a = 0
            } */
            
            diago()
            bot(index, cases)
            winStop()
            winCondition(index)     
        }
        
        
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
            win = 1
        })
    }
    if (crossCheck2 == 3 || cyrcleCheck2 == 3) {
        diago2.forEach(cases => {
            cases.classList.add('win')
            win = 1
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
let round = 0
function bot(targetIndex, item) {
    let arr = []
    let arrRond = []
    console.log(arrRond)
    console.log(round)
    
    item.forEach(cases => {
        if (cases.classList == "case") {
            arr.push(cases)
        }        
        if (cases.classList == "case cyrcle") {
            arrRond.push(cases)
        }        
    })
    let random = Math.floor(Math.random() * arr.length)
    console.log(arr)
    /* arr[random].classList.add('cross') */

    /* if (item[random].classList == 'case') {
        item[random].classList.add('cross')
    } else {
        random++
        if (item[random].classList == 'case') {
            item[random].classList.add('cross')
        }
        
    }  */
    if (round == 0 && targetIndex != 4 && item[4].classList == 'case') {      
        item[4].classList.add('cross')
        console.log('round0')
        round = 2       
    } else if ( round == 0){
        arr[random].classList.add('cross')
        round++
        console.log('round00')
    }   
    
    if ( round == 1) {
        if (targetIndex < 6) {
            item[targetIndex+3].classList.add('cross')
        } else {
            arr[0].classList.add('cross')
        }
        
    }/*  else if (arr.length < 8) {
        arr[random].classList.add('cross')
    } */
    round = 1
}