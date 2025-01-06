document.addEventListener('DOMContentLoaded', function() {
    //console.log('Script is running');
    //alert('Script is running :D!')
   

    const paragraph = document.createElement('text');
    
    const quotes = [
        '“I only dread one day at a time.”', 
        '"My life has no purpose, no direction, no aim, no meaning, and yet I\'m still happy. I can\'t figure it out. What am I doing right?"', 
        '"Don\'t worry about the world coming to an end today. It is already tomorrow in Australia"', 
        '"If I were given the opportunity to present a gift to the next generation, it would be the ability for each individual to learn to laugh at himself"'
    ];

    for(let i = 0; i < quotes.length; i++){
        paragraph.innerHTML += '<br>' + quotes[i] + '<br>';
    }
    

    // Add to document
    document.querySelector('.todo').appendChild(paragraph);
});
