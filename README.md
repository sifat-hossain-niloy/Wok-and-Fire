[![Premium Photo | Chef Cooking Food Professional Chef Cooking with Wok ...](https://tse2.mm.bing.net/th?id=OIP.CWrhGwYBkSiQsEJB5cHtlAHaE7\&pid=Api)](https://www.freepik.com/premium-ai-image/chef-cooking-food-professional-chef-cooking-with-wok-fire-asian-kitchen_199404101.htm)


---
**Wok and Fire | Full-Stack Restaurant Web App**

Wok and Fire is a full-stack restaurant management and ordering application built with **React, FastAPI, PostgreSQL, Firebase, and Stripe**. It enables restaurants to manage menus, process secure online payments, and provide an interactive experience with features like a chatbot and responsive UI/UX.

## 🛠️ Tech Stack

* **Frontend**: React.js, Redux, CSS Modules
* **Backend**: FastAPI
* **Database**: PostgreSQL
* **Authentication**: Firebase
* **Payments**: Stripe

## 📂 Project Structure

```bash
Wok-and-Fire/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.py
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── App.js
├── .env
├── docker-compose.yml
└── README.md
```

## ⚙️ Installation

### Prerequisites

* Python (v3.9 or above)
* Node.js (v14 or above)
* PostgreSQL
* Docker & Docker Compose (for containerized deployment)

### Steps

1. **Clone the repository**:

```bash
git clone https://github.com/sifat-hossain-niloy/Wok-and-Fire.git
cd Wok-and-Fire
```

2. **Set up environment variables**:

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_postgresql_connection_string
FIREBASE_CONFIG=your_firebase_config
STRIPE_SECRET_KEY=your_stripe_secret
```

3. **Install dependencies**:

```bash
# Backend
cd backend
pip install -r requirements.txt

# Frontend
cd ../frontend
npm install
```

4. **Run the application**:

```bash
# Start backend
cd ../backend
uvicorn main:app --reload

# Start frontend
cd ../frontend
npm start
```

Frontend: `http://localhost:3000` | Backend API: `http://localhost:8000`

## 🐳 Docker Deployment

```bash
docker-compose up --build
```

App accessible at `http://localhost`

## 🧪 Testing

```bash
# Backend
cd backend
pytest

# Frontend
cd frontend
npm test
```

## 📄 License

MIT License

## 🙌 Acknowledgements

Developed by [Md Sifat Hossain](https://github.com/sifat-hossain-niloy) and [Intesar Tahmid](https://github.com/Intesar-Tahmid)

🔗 [GitHub Repository](https://github.com/sifat-hossain-niloy/Wok-and-Fire)
