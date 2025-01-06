document.addEventListener('DOMContentLoaded', function() {
    //console.log('Script is running');
    //alert('Script is running :D!')
   

    const paragraph = document.createElement('text');
    
    paragraph.innerHTML = '<br>Snoopy information text';
    
    document.querySelector('.todo').appendChild(paragraph);
});
