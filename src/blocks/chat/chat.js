const date = new Date();

let currentStep = 1;
let userAnswers = {};

/* ================= helpers ================= */

function getChatHeight() {
  const heightWindow = window.innerHeight;

  const titleSection = document.querySelector('.page-main-about');
  const chat = document.querySelector('.chat');
  const header = document.querySelector('.header');

  if (!titleSection || !chat || !header) return;

  const titleSectionHeight = titleSection.offsetHeight;
  const headerHeight = header.offsetHeight;

  const chatMinHeightValue = heightWindow - headerHeight - titleSectionHeight;

  chat.style.minHeight = `${(chatMinHeightValue + 50) / 10}rem`;
}

function showChat() {
  const chat = document.querySelector('.chat');

  if (!chat) return;

  chat.classList.add('shown');
}

function initChat() {
  getChatHeight();
  setTimeout(() => {
    showChat();
  }, 400);
}

function scrollToBottom(element) {

  if (element) {
    return element.scrollIntoView(
      {behavior: "smooth", block: "center", inline: "start"}
    )
  }
}

function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function getMessageByStep(step) {
  return messages.find(m => m.step === step);
}

function getNextStep(current) {
  return current + 1;
}

/* ================= typing indicator ================= */

let typingIndicator = null;

function showTypingIndicator() {
  const chat = document.querySelector('.chat');
  const messagesField = chat.querySelector('.chat-messages__inner');

  if (!chat || !messagesField) return;

  hideTypingIndicator();

  typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-message-typing';
  typingIndicator.innerHTML = `
    <div class="typing">
        Вера печатает<span class="dots"></span>
      </div>
  `;

  messagesField.appendChild(typingIndicator);
}

function hideTypingIndicator() {
  if (typingIndicator) {
    typingIndicator.remove();
    typingIndicator = null;
  }
}

/* ================= message renderers ================= */

function renderTextMessage(message, stepIndex) {
  return {
    html: `
      <div class="chat-message__icon"></div>
      <div class="chat-message__inner">
        <div class="chat-message__text">${message.text}</div>
        <div class="chat-message__date">${formatTime(date)}</div>
      </div>
    `,
    skip: false
  };
}

function renderRadioMessage(message, stepIndex) {
  let buts = message.buts;

  if (message.category === 'square') {
    buts = message.buts.filter((item) => item.type && item.type.includes(userAnswers.question1?.[0]));
  }

  const buttonsHtml = buts.map(btn => `
    <button class="chat-message__btn" data-answer="${btn.text}" data-type="${btn.type}" data-goal="${message.goal}" data-category="${message.category}" data-step="${stepIndex}">
      ${btn.text}
    </button>
  `).join('');

  return {
    html: `
      <div class="chat-message__icon"></div>
      <div class="chat-message__inner">
        <div class="chat-message__text">${message.text}</div>
        <div 
            class="chat-message__buttons"
            style="transform: translateY(3rem); opacity: 0; visibility: hidden;"
        >
            ${buttonsHtml}
        </div>
        <div class="chat-message__date">${formatTime(date)}</div>
      </div>
    `,
    skip: !buts.length
  };
}

function renderCardMessage(message, stepIndex) {
  let cards = message.buts;
  let buttons = message.buttons || [];

  let cardsHtml = '';
  let buttonsHtml = '';

  if (message.category === 'build-type') {
    cards = message.buts.filter((item) => item.type && item.type.includes(userAnswers.question2?.[0]));
  }

  if (cards.length) {
    cardsHtml = cards.map(item => `
      <div class="chat-card" data-name="${item.name}" data-goal="${message.goal}" data-type="${item.type}" data-category="${message.category}">
        <img src="${item.img}" alt="${item.name}" class="chat-card__img">
        <div class="chat-card__content">
          <h4 class="chat-card__title">${item.name}</h4>
          <p class="chat-card__price">${item.price}</p>
          <p class="chat-card__meta">${item.diameter} | ${item.meterage}</p>
        </div>
      </div>
    `).join('');
  }

  if (buttons.length) {
    buttonsHtml = buttons.map(btn => `
        <button class="chat-message__btn" data-answer="${btn.text}" data-goal="${message.goal}" data-step="${stepIndex}">
          ${btn.text}
        </button>
      `).join('');
  }

  let str = message.text;

  if (str === '{variants}') {
    const buildType = userAnswers.question1?.[1];

    switch (buildType?.toLowerCase()) {
      case 'дом':
        str = 'дома';
        break;
      case 'баня':
        str = 'бани';
        break;
      case 'гараж':
        str = 'гаража';
        break;
      case 'хозяйственная постройка':
        str = 'хозяйственной постройки';
        break;
      default:
        str = 'дома';
        break;
    }
  }

  const text = message.text.replace('{variants}', `Выберите тип ${str}`);

  return {
    html: `
      <div class="chat-message__icon"></div>
      <div class="chat-message__inner">
        <div class="chat-message__text">${text}</div>
        ${cardsHtml !== "" ? 
          `<div class="chat-message__cards" style="transform: translateY(3rem); opacity: 0; visibility: hidden;">
            ${cardsHtml}
          </div>` : ''}
        ${buttonsHtml !== "" ? 
          `<div class="chat-message__buttons" style="transform: translateY(3rem); opacity: 0; visibility: hidden;">
            ${buttonsHtml}
          </div>` : ''}
        <div class="chat-message__date">${formatTime(date)}</div>
      </div>
    `,
    skip: !cards.length
  };
}

function renderPhoneMessage(message, stepIndex) {
  return {
    html: `
      <div class="chat-message__icon"></div>
      <div class="chat-message__inner">
        <div class="chat-message__text">${message.text}</div>
        <form class="chat-message__form form-lead" data-goal="submit">
          <input type="text" name="name" autocomplete class="chat-message__input" placeholder="Ваше имя" required>
          <input type="text" name="phone" inputmode="numeric" class="chat-message__input" placeholder="+7 (___) ___-__-__" required>
          <button type="submit" class="chat-message__btn">Отправить</button>
          <label class="checkbox">
            <input type="checkbox" name="agree" required>
            <span class="checkbox__box"></span>
            <span>Даю согласие на&nbsp;<a href="">обработку персональных данных</a></span>
          </label>
        </form>
        <div class="chat-message__date">${formatTime(date)}</div>
      </div>
    `,
    skip: false
  };
}

/* ================= message handlers ================= */

function setupRadioHandlers(messageItem, message) {
  const buttons = messageItem.querySelectorAll('.chat-message__btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const answer = this.dataset.answer;
      const goal = this.dataset.goal;
      const type = this.dataset.type;
      const step = parseInt(this.dataset.step);

      buttons.forEach((item) => {
        item.classList.remove('active');
      })

      btn.classList.add('active');

      removeMessagesAfterStep(step);
      userAnswers[goal] = [type, answer];
      addUserMessage(answer);
      nextStep();
    });
  });
}

function setupCardHandlers(messageItem, message) {
  // Обработчик для карточек
  const cards = messageItem.querySelectorAll('.chat-card');
  cards.forEach(card => {
    card.addEventListener('click', function () {
      const name = this.dataset.name;
      const type = this.dataset.type;
      const goal = this.dataset.goal;
      const step = parseInt(messageItem.dataset.step);

      cards.forEach((item) => {
        item.classList.remove('active');
      })

      card.classList.add('active');

      removeMessagesAfterStep(step);
      userAnswers[goal] = [type, name];
      addUserMessage(`${name}`);
      nextStep();
    });
  });

  // Обработчик для кнопок под карточками
  const buttons = messageItem.querySelectorAll('.chat-message__btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const answer = this.dataset.answer;
      const goal = this.dataset.goal;
      const step = parseInt(this.dataset.step);

      removeMessagesAfterStep(step);
      if (goal) {
        userAnswers[goal] = answer;
      }
      addUserMessage(answer);
      nextStep();
    });
  });
}

function setupPhoneHandler(messageItem, message) {
  const form = messageItem.querySelector('.form-lead');

  if (!form) return;

  form.setAttribute('novalidate', '');

  const inputName = form.querySelector('.chat-message__input[name="name"]');
  const inputPhone = form.querySelector('.chat-message__input[name="phone"]');
  const checkbox = form.querySelector('.checkbox input[name="agree"]');

  if (!inputName || !inputPhone || !checkbox) return;

  const maskOptions = {
    mask: '+{7} 000 000-00-00',
    overwrite: true
  };
  const mask = IMask(inputPhone, maskOptions);


  function validateField(field) {
    if (!field.value || (field.type === 'tel' && mask.unmaskedValue.length !== 11)) {

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
    if (!validateField(inputPhone)) {
      isValid = false;
    }

    if (!validateCheckbox(checkbox)) {
      isValid = false;
    }

    if (isValid) {
      const formData = {
        name: inputName.value,
        phone: inputPhone.value,
        agree: checkbox.checked
      };

      // Отправка данных (можно заменить на реальный API)
      console.log('Форма отправлена:', formData);

      // Очистка формы и переход к следующему шагу
      form.reset();
      /*addUserMessage('Форма отправлена');
      nextStep();*/
    }
  });
}

/* ================= core functions ================= */

function removeMessagesAfterStep(step) {
  const chat = document.querySelector('.chat');
  const messagesField = chat.querySelector('.chat-messages__inner');

  if (!chat || !messagesField) return;

  const allMessages = messagesField.querySelectorAll('.chat-message');

  // Находим индекс сообщения в DOM по step
  let removeIndex = -1;
  allMessages.forEach((msg, i) => {
    const msgStep = parseInt(msg.dataset.step);
    if (msgStep === step) {
      removeIndex = i;
    }
  });

  // Удаляем все сообщения после найденного
  allMessages.forEach((msg, i) => {
    if (i > removeIndex) {
      msg.remove();
    }
  });

  // Очищаем ответы после указанного шага
  const goalsToDelete = Object.keys(userAnswers).filter(key => {
    const msg = messages.find(m => m.goal === key);
    return msg && msg.step > step;
  });

  goalsToDelete.forEach(key => {
    delete userAnswers[key];
  });

  // Устанавливаем текущий шаг на текущий вопрос (не следующий!)
  // nextStep() сам увеличит его
  currentStep = step;
}

function addMessage(step) {
  const message = getMessageByStep(step);

  if (!message) return;

  const chat = document.querySelector('.chat');
  const messagesField = chat.querySelector('.chat-messages__inner');

  if (!chat || !messagesField) return;

  const messageType = message.type;

  // Рендерим контент в зависимости от типа
  const renderers = {
    text: renderTextMessage,
    radio: renderRadioMessage,
    cards: renderCardMessage,
    phone: renderPhoneMessage
  };

  const render = renderers[messageType];
  if (!render) return;

  const rendered = render(message, step);

  // Проверяем, нужно ли пропустить этот шаг
  if (rendered.skip) {
    currentStep = step;
    nextStep();
    return;
  }

  const messageItem = document.createElement('div');
  messageItem.className = `chat-message message--${messageType}`;
  messageItem.dataset.step = step;
  messageItem.style = 'transform: translateX(-10rem); opacity: 0; visibility: hidden;';

  messageItem.innerHTML = rendered.html;
  messagesField.appendChild(messageItem);

  setTimeout(() => {
    messageItem.style = '';
  }, 100);

  setTimeout(() => {
    scrollToBottom(messageItem);
  }, 300)

  const buttonsWrap = messageItem.querySelector('.chat-message__buttons');
  if (buttonsWrap) {
    setTimeout(() => {
      buttonsWrap.style = '';
    }, 350)
  }

  const cardsWrap = messageItem.querySelector('.chat-message__cards');
  if (buttonsWrap) {
    setTimeout(() => {
      cardsWrap.style = '';
    }, 350)
  }

  // Обработчики для интерактивных типов
  const handlers = {
    radio: setupRadioHandlers,
    cards: setupCardHandlers,
    phone: setupPhoneHandler
  };

  const setupHandler = handlers[messageType];
  if (setupHandler) {
    setupHandler(messageItem, message);
  }

  // Обработка sleep для перехода к следующему вопросу (только для text-сообщений)
  if (messageType === 'text' && message.sleep) {
    setTimeout(() => {
      nextStep();
    }, parseInt(message.sleep));
  } else if (messageType === 'text' && !message.sleep) {
    setTimeout(() => {
      nextStep();
    }, 500);
  }
}

function addUserMessage(text) {
  const chat = document.querySelector('.chat');
  const messagesField = chat.querySelector('.chat-messages__inner');

  if (!chat || !messagesField) return;

  const messageItem = document.createElement('div');
  messageItem.className = 'chat-message message--user';
  messageItem.style = 'transform: translateX(10rem); opacity: 0; visibility: hidden;';

  messageItem.innerHTML = `
    <div class="chat-message__inner">
      <div class="chat-message__text">${text}</div>
      <div class="chat-message__date">${formatTime(date)}</div>
    </div>
  `;

  messagesField.appendChild(messageItem);

  setTimeout(() => {
    messageItem.style = '';
  }, 100);

  setTimeout(() => {
    scrollToBottom(messageItem);
  }, 300)
}

function nextStep() {
  currentStep = getNextStep(currentStep);

  showTypingIndicator();

  const nextMessage = getMessageByStep(currentStep);

  if (!nextMessage) return;

  // Проверка на noscroll (задержка перед показом сообщения)
  if (nextMessage.noscroll) {
    const delay = typeof nextMessage.noscroll === 'string'
      ? parseInt(nextMessage.noscroll)
      : 100; // небольшая задержка для булевых значений

    setTimeout(() => {
      hideTypingIndicator();
      addMessage(currentStep);
    }, delay);
  } else {
    // Небольшая задержка для эффекта "печатания"

    setTimeout(() => {
      hideTypingIndicator();
      addMessage(currentStep);
    }, 1000);
  }
}

/* ================= init ================= */

initChat();

showTypingIndicator();

setTimeout(() => {
  hideTypingIndicator();
}, 1000);

setTimeout(() => {
  addMessage(currentStep);
}, 1500);
