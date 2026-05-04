// Kofi Sarpong - External JavaScript file
// This script controls the mobile menu and checks the quiz form.
const menuButton = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });
}
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');
if (quizForm) {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    const answers = ['q1', 'q2', 'q3'];
    answers.forEach((question) => {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === 'correct') score++;
    });
    quizResult.textContent = `You scored ${score} out of 3.`;
  });
}
