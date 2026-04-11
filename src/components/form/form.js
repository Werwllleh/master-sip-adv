
const forms = document.querySelectorAll('form.form');

if (forms.length) {
  forms.forEach(form => {
    initForm(form);
  })
}

function initForm(form) {
  form.setAttribute('novalidate', '');

  const inputName = form.querySelector('input[name="name"]');
  const inputPhone = form.querySelector('input[name="phone"]');
  const checkbox = form.querySelector('.checkbox input[name="agree"]');

  if (!inputName || !inputPhone || !checkbox) return;

  const maskOptions = {
    mask: '+{7} 000 000-00-00',
    overwrite: true
  };
  const mask = IMask(inputPhone, maskOptions);

  inputName.addEventListener('input', function () {
    if (this.value.length >= 3) {
      this.classList.remove('error');
    } else {
      this.classList.add('error');
    }
  });

  inputPhone.addEventListener('input', function () {
    if (mask.unmaskedValue.length === 11) {
      this.classList.remove('error');
    } else {
      this.classList.add('error');
    }
  });

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.closest('.checkbox').classList.remove('error');
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    if (!validateField(inputName)) {
      isValid = false;
    }
    if (!validateField(inputPhone, mask)) {
      isValid = false;
    }

    if (!validateCheckbox(checkbox)) {
      isValid = false;
    }

    if (isValid) {

      const formData = {
        name: inputName.value,
        phone: inputPhone.value,
        privacyPolicyAccepted: checkbox.checked
      };

      // Добавляем UTM-метки из cookie
      const utmData = getUtmFromCookies();
      if (utmData) {
        Object.assign(formData, utmData);
      }

      fetch('https://master-sip.ru/api/sales-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          console.log('Успешно:', data);
          ymGoal('submit');
          form.reset();
        })
        .catch(error => {
          console.error('Ошибка:', error);
        });

      // Очистка формы
      form.reset();
      /*addUserMessage('Форма отправлена');
      nextStep();*/
    }

  })
}

function validateField(field, mask) {
  if (!field.value || (field.type === 'tel' && mask?.unmaskedValue.length !== 11)) {

    field.classList.add('error');
    return false;
  }
  field.classList.remove('error');
  return true;
}

function validateCheckbox(field) {
  if (!field.checked) {
    field.closest('.checkbox').classList.add('error');
    return false;
  }
  field.closest('.checkbox').classList.remove('error');
  return true;
}
