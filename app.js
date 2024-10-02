console.log('WhatsApp Translator Extension is running!');

// Sample logic to "translate" messages on WhatsApp Web
const translateMessages = () => {
  // Get all message elements
  const messages = document.querySelectorAll('.selectable-text span');
  
  // Loop through each message and "translate" it (dummy translation here)
  messages.forEach(message => {
    message.textContent = 'Translated message';
  });
};

// Automatically run the translate function after a few seconds (to ensure the page is loaded)
setTimeout(translateMessages, 3000);

// Allow users to type in their preferred language
const messageBox = document.querySelector('div[contenteditable="true"]');
if (messageBox) {
  messageBox.addEventListener('input', (event) => {
    // Replace the message content with the preferred language (dummy translation for now)
    event.target.textContent = 'Typing in preferred language...';
  });
}

  