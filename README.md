# DokaHouse 🏡🤖

Landing page interactiva para **Doka House**, una marca inmobiliaria que integra un chatbot inteligente con tecnología GPT para brindar atención personalizada, búsqueda conversacional de propiedades y una experiencia moderna en bienes raíces.

## 🚀 Tecnologías utilizadas

- [Vite](https://vitejs.dev/) – Compilación ultrarrápida
- [React](https://react.dev/) – Librería de componentes
- [OpenAI API](https://platform.openai.com/docs/api-reference/chat) – Motor conversacional
- [EasyBroker](https://www.easybroker.com/) – Backend inmobiliario (en plan gratuito)

## 🧩 Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── components/
│   └── ChatbotWidget.jsx
└── views/
    └── Home.jsx
```

## 🔐 Variables de entorno

Crea un archivo `.env` con el siguiente contenido:

```
VITE_OPENAI_API_KEY=tu_clave_de_openai
```

⚠️ Nunca subas .env al repositorio (está ignorado en .gitignore)


🛠️ Scripts disponibles

```
npm install      # Instala dependencias
npm run dev      # Inicia entorno local (localhost:5173)
npm run build    # Genera versión optimizada
```

📩 Contacto

Paulette Barrales
https://github.com/paulettecb

🧠 Tu nuevo hogar empieza con una conversación.