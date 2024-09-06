// console.log('Form');
const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const textarea = form.elements.message;
const input = form.elements.email;
const local = localStorage.getItem(localStorageKey);
const parsedLocal = JSON.parse(local) ?? '';

textarea.value = parsedLocal.message ?? '';
input.value = parsedLocal.email ?? '';
form.addEventListener('submit', evnt => {
  evnt.preventDefault();
  if (evnt.target.email.value === '' || evnt.target.message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});

form.addEventListener('input', event => {
  if (event.target.type === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.type === 'textarea') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
