const button = document.getElementById('messageButton');
const messageOutput = document.getElementById('messageOutput');

button.addEventListener('click', () => {
  messageOutput.textContent =
    'Soy Gabriel, estudiante de Ingeniería en Sistemas en la UNA. Este CV es una práctica de laboratorio y muestra mi interés por aprender desarrollo web.';
});
