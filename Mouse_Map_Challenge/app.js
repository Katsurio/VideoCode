

document.addEventListener('mousemove', function(e) { 

    const red = Math.round((e.pageX / window.innerWidth) * 255);
    
    const green = Math.round((e.pageY / window.innerHeight) * 255);

    const color = `rgb(${red}, ${green}, 0)`;

    document.body.style.backgroundColor = color;
})
/Applications/MAMP/htdocs/Springboard/VideoCode