document.getElementById('noun1').addEventListener('click', (event) => {
  event.target.innerText = 'lion';

});

document.getElementById('verb').addEventListener('click', (event) => {
  event.target.innerText = 'running after';

});

document.getElementById('adjective').addEventListener('click', (event) => {
  event.target.innerText = 'safari';

});

document.getElementById('noun2').addEventListener('click', (event) => {
  event.target.innerText = 'car';

});

document.getElementById('day').addEventListener('click', (event) => {
  event.target.style.color = '#000000';
  event.target.style.backgroundColor = '#ffffff';

});

document.getElementById('night').addEventListener('click', (event) => {
  event.target.style.color = '#ffffff';
  event.target.style.backgroundColor = '#000000';

});

document.getElementById('color').addEventListener('click', (event) => {
  event.target.style.color = '#ff0000';
  event.target.style.backgroundColor = '#333300';

});

document.getElementById('image').addEventListener('click', (event) => {
  event.target.setAttribute("src", 'https://media.istockphoto.com/photos/travelers-on-safari-watching-a-cheetah-family-on-the-african-savannah-picture-id1382355588?b=1&k=20&m=1382355588&s=170667a&w=0&h=CNbpfmuq3wAdHrs3wwy1RVqb6lOFlFi8K7W6tMKTNhw=');

});