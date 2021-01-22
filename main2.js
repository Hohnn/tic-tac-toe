function click()
{
    let casesClass = document.getElementsByClassName('case')
    for (let i=0; i < casesClass.length; i++) {
        casesClass[i].onclick = test
        };   
    
}

click();

let id1 = document.getElementById('box0').classList
let id2 = document.getElementById('box1').classList
let id3 = document.getElementById('box2').classList
let id4 = document.getElementById('box3').classList
let id5 = document.getElementById('box4').classList
let id6 = document.getElementById('box5').classList
let id7 = document.getElementById('box6').classList
let id8 = document.getElementById('box7').classList
let id9 = document.getElementById('box8').classList
let tour = false;

function test  (event) {    
    if(tour == false && event.target.classList == 'case'){
        event.target.classList.add("notactive")
        tour = true;
    } else if(event.target.classList == 'case') {
        event.target.classList.add("active")
        tour = false;
    }
    console.log(tour)
    winConditionTopLine()
    winConditionMidLine()
    winConditionBotLine()
    winConditionFirstCol()
    winConditionMidCol()
    winConditionLastCol()
    winConditionFirstDiag()
    winConditionLasttDiag()
    
};

function winConditionId1() {
    if (event.target.id == 'box0') {
        if (id1.contains('active') && id2.contains('active') && id3.contains('active')) {
            id1.add('win'); id2.add('win'); id3.add('win')
        }
        if (id1.contains('active') && id4.contains('active') && id7.contains('active')) {
            id1.add('win'); id4.add('win'); id7.add('win')
        }    
        if (id1.contains('active') && id5.contains('active') && id9.contains('active')) {
            id1.add('win'); id5.add('win'); id9.add('win')
        }   
    }
}
function winConditionTopLine() {
    if (event.target.id == 'box0' || event.target.id == 'box1' || event.target.id == 'box2') {
        if ((id1.contains('active') && id2.contains('active') && id3.contains('active')) || (id1.contains('notactive') && id2.contains('notactive') && id3.contains('notactive'))) {
            id1.add('win'); id2.add('win'); id3.add('win')
        }    
    }
}
function winConditionMidLine() {
    console.log(id4, id5, id6)
    if (event.target.id == 'box3' || event.target.id == 'box4' || event.target.id == 'box5') {
        if ((id4.contains('active') && id5.contains('active') && id6.contains('active')) || (id4.contains('notactive') && id5.contains('notactive') && id6.contains('notactive'))) {
            id4.add('win'); id5.add('win'); id6.add('win')
        }    
    }
};
function winConditionBotLine() {
    if (event.target.id == 'box6' || event.target.id == 'box7' || event.target.id == 'box8') {
        if ((id7.contains('active') && id8.contains('active') && id9.contains('active')) || (id7.contains('notactive') && id8.contains('notactive') && id9.contains('notactive'))) {
            id7.add('win'); id8.add('win'); id9.add('win')
        }    
    }
}
function winConditionFirstCol() {
    if (event.target.id == 'box0' || event.target.id == 'box3' || event.target.id == 'box6') {
        if ((id1.contains('active') && id4.contains('active') && id7.contains('active')) || (id1.contains('notactive') && id4.contains('notactive') && id7.contains('notactive'))) {
            id1.add('win'); id4.add('win'); id7.add('win')
        }    
    }
}
function winConditionMidCol() {
    if (event.target.id == 'box1' || event.target.id == 'box4' || event.target.id == 'box7') {
        if ((id2.contains('active') && id5.contains('active') && id8.contains('active')) || (id2.contains('notactive') && id5.contains('notactive') && id8.contains('notactive'))) {
            id2.add('win'); id5.add('win'); id8.add('win')
        }    
    }
}
function winConditionLastCol() {
    if (event.target.id == 'box2' || event.target.id == 'box5' || event.target.id == 'box8') {
        if ((id3.contains('active') && id6.contains('active') && id9.contains('active')) || (id3.contains('notactive') && id6.contains('notactive') && id9.contains('notactive'))) {
            id3.add('win'); id6.add('win'); id9.add('win')
        }    
    }
}
function winConditionFirstDiag() {
    if (event.target.id == 'box0' || event.target.id == 'box4' || event.target.id == 'box8') {
        if ((id1.contains('active') && id5.contains('active') && id9.contains('active')) || (id1.contains('notactive') && id5.contains('notactive') && id9.contains('notactive'))) {
            id1.add('win'); id5.add('win'); id9.add('win')
        }    
    }
}
function winConditionLasttDiag() {
    if (event.target.id == 'box2' || event.target.id == 'box4' || event.target.id == 'box6') {
        if ((id3.contains('active') && id5.contains('active') && id7.contains('active')) || (id3.contains('notactive') && id5.contains('notactive') && id7.contains('notactive'))) {
            id3.add('win'); id5.add('win'); id7.add('win')
        }    
    }
}



