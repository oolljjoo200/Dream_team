const form = document.getElementById('quizForm');
const inputs = form.querySelectorAll('[value]');
const resultEl = document.getElementById('result');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let result = 0;
  inputs.forEach(input => {
    if (input.checked) {
      result += parseInt(input.value);
    }
  });

  let message;
  if (result >= -20 && result <= 0) {
    message = 'Тебе больше подходит направлени ИВТ';
  } else if (result > 0 && result <= 20) {
    message = 'Тебе больше подходит направлени ИСИТ';
  } else {
    message = 'Ой, что-то пошло не так...';
  }

  resultEl.textContent = `Ваш результат: ${result}. ${message}`;
});
