function click()
{
    let casesClass = document.getElementsByClassName('case')
    for (let i=0; i < casesClass.length; i++) {
        casesClass[i].onclick = border
        };   
    
}

function test(event)
{
    event.target.classList.toggle("active")
}

function border()
{
    let elements = document.getElementsByClassName('case');
    for (let i = 0; i < elements.length; i++) { 
        elements[i].onclick = () => {
        if(elements[i].classList.value != 'case active'){
            elements[i].classList.remove("notactive");
            elements[i].classList.add("active");
        } else if (elements[i].classList.contains('active')) {
            elements[i].classList.remove("active");
            elements[i].classList.add("notactive");
        }
        // console.log(elements[i].classList.contains('active'))
        // console.log(elements[i].classList)
        // win()       
    }   
        
    }
    
    
    
}

click();

// function win ()
// {
//     let id = document.getElementById('box0').classList
//     let id2 = document.getElementById('box1').classList
//     let id3 = document.getElementById('box2').classList
//     let ids = [id, id2, id3]
//     console.log(id.value)
//     console.log(ids)
//     if(id.contains('active')){
//         id.add('win');
//     }
// }
