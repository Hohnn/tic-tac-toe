
//function showAlert()
//{
  //alert("Evènement de click détecté");
 // div.classList.toggle("active");
//}
//div.classList.toggle("active");
//let casesId = document.getElementById('box1')
function click()
{
    let casesClass = document.getElementsByClassName('case')
    for (var i=0; i < casesClass.length; i++) {
        casesClass[i].onclick = test
        };
        
    
    return casesClass

        
     
}

function test(event)
{
    // console.log(num)
    // return function(){
    //     document.getElementById("box" + num).classList.toggle("active");
    // }
    event.target.classList.toggle("active")   
    
}

click();
let casesClass = click()
console.log(casesClass)
document.getElementById("box1").addEventListener("click", function() {
    alert("Hello World!");
  });










// ajoué une class a Tous
// puis si il y'a la class
// il ajoute une autre
