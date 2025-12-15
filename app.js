const adviceID = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const generateBtn = document.querySelector('.btn-generate');

function generateAdvice() {
  fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })
    .then((response) => response.json())
    .then((data) => {
      adviceText.textContent = `"${data.slip.advice}"`;
      adviceID.textContent = data.slip.id;
    })
    .catch((error) => {
      adviceText.textContent = 'Something went wrong. Try again.';
      console.error(error);
    });
}

generateBtn.addEventListener('click', generateAdvice);
