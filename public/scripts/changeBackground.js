

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Script is running');
//     alert('Script is running :D!')
   

//     // const bg1 = document.querySelector(".bg1") !== null;

   
    
//     // const numOfTasks = document.getElementById('taskCount');


//     // paragraph.innerHTML = '<br>' + numOfTasks;
    
//     // document.querySelector('.todo').appendChild(paragraph);
// });

var superToggle = function(element, class0, class1) {
    element.classList.toggle(class0);
    element.classList.toggle(class1);
  }

function changeBackground(){
    var bg = document.getElementById('background')
    superToggle(bg, 'bg1', 'bg2')
}

