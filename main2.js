function click()
{
    let casesClass = document.getElementsByClassName('case')
    for (let i=0; i < casesClass.length; i++) {
        casesClass[i].onclick = test
        };   
    
}

// const casesClass = document.querySelector('.morpion');
// console.log(casesClass)
// let tour = false;
// casesClass.addEventListener('click', () => {
//     if(!tour) {
//         casesClass.classList.add('open');
//         tour = true;
//     } else {
//         casesClass.classList.remove('open');
//         tour = false;
//     }
// });
let tour = false;
function test  (event) 
{    
    if(!tour){
        event.target.classList.add("active")
        tour = true;
    } else {
        event.target.classList.add("notactive")
        tour = false;
    }    
    win()
}

// function border()
// {
//     let elements = document.getElementsByClassName('case');
//     for (let i = 0; i < elements.length; i++) { 
//         elements[i].onclick = () => {
//         if(elements[i].classList.value != 'case active'){
//             elements[i].classList.remove("notactive");
//             elements[i].classList.add("active");
//         } else if (elements[i].classList.contains('active')) {
//             elements[i].classList.remove("active");
//             elements[i].classList.add("notactive");
//         }
//         // console.log(elements[i].classList.contains('active'))
//         // console.log(elements[i].classList)
        
//     }   
        
//     }
    
    
    
// }

click();

function win ()
{
    let id1 = document.getElementById('box0').classList
    let id2 = document.getElementById('box1').classList
    let id3 = document.getElementById('box2').classList
    let id4 = document.getElementById('box3').classList
    let id5 = document.getElementById('box4').classList
    let id6 = document.getElementById('box5').classList
    let id7 = document.getElementById('box6').classList
    let id8 = document.getElementById('box7').classList
    let id9 = document.getElementById('box8').classList
    let ids = [id1, id2, id3, id4, id5, id6, id7, id8, id9]
    let active = []
    for (let i = 0; i < ids.length; i++) {
        const element = ids[i];                
        console.log(i)
        console.log(element)
        console.log(element.contains('active'))
        if(element.contains('active')){
            active.push('id'+i)                        
        }
        
                
        // if(element4.contains('active')){
        //     if(element5.contains('active')){
        //         if(element6.contains('active')){
        //             ids.forEach(id => {
        //                 id.add('win')
        //             })
        //         }                
        //     }
        // }        
    }
    console.log(active)
    if (active[0] === 'id0') {
        if(active[1] === 'id1') {
            if (active[2] === 'id2') {
                for (let i = 0; i < active.length; i++) {
                ids[i].add('win')
                }                
            }
        }   
    }
    if (active[0] === 'id3') {
        if(active[1] === 'id4') {
            if (active[2] === 'id5') {
                for (let i = 3; i < active.length+3; i++) {
                ids[i].add('win')
                }                
            }
        }   
    }
    if (active[0] === 'id6') {
        if(active[1] === 'id7') {
            if (active[2] === 'id8') {
                for (let i = 6; i < active.length+6; i++) {
                ids[i].add('win')
                }                
            }
        }   
    }
    if (active[0] === 'id0') {
        if(active[1] === 'id3') {
            if (active[2] === 'id6') {
                for (let i = 0; i < active.length+6; i = i+3) {
                ids[i].add('win')
                }                
            }
        }   
    }
    if (active[0] === 'id1') {
        if(active[1] === 'id4') {
            if (active[2] === 'id7') {
                for (let i = 1; i < active.length+7; i = i+3) {
                ids[i].add('win')
                }                
            }
        }   
    }
    if (active[0] === 'id2') {
        if(active[1] === 'id5') {
            if (active[2] === 'id8') {
                for (let i = 2; i < active.length+8; i = i+3) {
                ids[i].add('win')
                }                
            }
        }   
    }
    if (active[0] === 'id0') {
        if(active[1] === 'id4') {
            if (active[2] === 'id8') {
                for (let i = 0; i < active.length+8; i = i+4) {
                ids[i].add('win')
                }                
            }
        }   
    }
    if (active[0] === 'id2') {
        if(active[1] === 'id4') {
            if (active[2] === 'id6') {
                for (let i = 2; i < active.length+4; i = i+2) {
                ids[i].add('win')
                }
            }
        }
    }


//si active contien ... ajouté a chaque id la class


    // ids.forEach(id => {
    //     // if(id.contains('active')){
    //     //     id.add('win');
    //     // }
    //     return 
    // })
    // const findex = ids.findIndex(value => {
    //     console.log(value)
    //     return value.contains('active')
        
    // })
    // console.log(findex)

    // if(ids[0,1,2].contains('active')){
    //     ids[0,1,2].add('win');
    // }
    // ids.forEach(element => console.log(element))
}

//pour chaque elements de la liste, vérifier si ils ont 'active', et si 1 2 3 à 'active' alors leur ajouté 'win'
