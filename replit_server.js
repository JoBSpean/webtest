const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory хранилище сообщений
let messages = [];

// Endpoint для отправки сообщения
app.post('/api/send-message', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Сообщение не может быть пустым' });
  }

  const messageEntry = {
    text: message,
    timestamp: new Date().toLocaleString('ru-RU'),
    id: Date.now()
  };
  
  messages.unshift(messageEntry); // Добавляем в начало
  
  // Храним максимум 100 сообщений
  if (messages.length > 100) {
    messages.pop();
  }
  
  console.log(`📨 ${messageEntry.timestamp} - ${message}`);
  
  res.json({ 
    success: true, 
    message: 'Привет получен! ✅',
    receivedAt: messageEntry.timestamp
  });
});

// Endpoint для получения всех сообщений
app.get('/api/messages', (req, res) => {
  res.json({ 
    messages: messages.map(m => `[${m.timestamp}] ${m.text}`),
    count: messages.length
  });
});

// Endpoint для очистки сообщений
app.post('/api/clear-messages', (req, res) => {
  messages = [];
  console.log('🗑️  Все сообщения удалены');
  res.json({ success: true, message: 'Сообщения очищены' });
});

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║     🚀 СЕРВЕР ЗАПУЩЕН НА REPLIT!          ║
╚═══════════════════════════════════════════╝

✅ Ваше приложение онлайн!
🌐 Откройте: https://hello-app.replit.dev

(Или найдите URL в окне Preview справа)
  `);
});
