const date = new Date();

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
  getChatHeight()
  setTimeout(() => {
    showChat()
  }, 400)
}

function addMessage(message) {
  const chat = document.querySelector('.chat');
  const messagesField = chat.querySelector('.chat-messages__inner');

  if (!chat || !messagesField) return;

  const messageType = message.type;
  const messageStep = message.step;
  const messageSleep = message.sleep;
  const messageText = message.text;

  const messageItem = document.createElement('div');
  messageItem.className = 'chat-message';
  messageItem.style = 'transform: translateX(-10rem); opacity: 0; visibility: hidden;';

  messageItem.innerHTML = `
    <div class="chat-message__inner">
      <div class="chat-message__icon"></div>
      <div class="chat-message__text">${messageText}</div>
      <div class="chat-message__date"></div>
    </div>
  `;

  messagesField.appendChild(messageItem);

  setInterval(() => {
    messageItem.style = '';
  }, 100)

  console.log(message)
}

initChat()

setTimeout(() => {
  addMessage(messages[0])
}, 1400)
