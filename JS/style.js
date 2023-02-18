// JS Code for random color change effect in hover

const menuBoxes = document.querySelectorAll('.card');

menuBoxes.forEach(function(box) {
  box.addEventListener('mouseover', function(event) {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = color;
  });
  
  box.addEventListener('mouseout', function(event) {
    box.style.backgroundColor = 'white';
  });
});
