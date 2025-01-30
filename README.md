Sales Application
This project consists of a Vue.js frontend and a Node.js backend with gRPC communication. The app provides functionality for managing products, orders, and customer services through a microservice architecture.
________________________________________
Project Structure

Sales-Application/
├── frontend/                     # Vue.js Frontend
│   ├── src/
│   │   ├── components/           # Reusable Vue components
│   │   ├── views/                # Pages (Admin, Salesperson, Customer)
│   │   ├── router/               # Vue Router setup
│   │   ├── store/                # State management
│   │   ├── grpc/                 # gRPC client setup
│   │   ├── main.js               # Entry point
│   │   ├── App.vue               # Root component
│   ├── public/                   # Static files
│   ├── package.json              # Dependencies
│   ├── vite.config.js            # Build configuration
│   └── README.md                 # Frontend documentation
├── backend/                      # Node.js Backend
│   ├── proto/                    # gRPC .proto files
│   │   └── services.proto        # Service definitions
│   ├── auth-service/             # Auth Service
│   │   ├── authService.js        # Auth logic
│   │   ├── server.js             # gRPC server setup
│   │   └── package.json          # Dependencies
│   ├── customer-service/         # Customer Service
│   │   ├── customerService.js    # Customer logic
│   │   ├── server.js             # gRPC server setup
│   │   └── package.json          # Dependencies
│   ├── product-service/          # Product Service
│   │   ├── productService.js     # Product logic
│   │   ├── server.js             # gRPC server setup
│   │   └── package.json          # Dependencies
│   ├── order-service/            # Order Service
│   │   ├── orderService.js       # Order logic
│   │   ├── server.js             # gRPC server setup
│   │   └── package.json          # Dependencies
│   └── README.md                 # Backend documentation
└── README.md                     # Combined documentation
________________________________________
Frontend Setup
The frontend is built using Vue.js and communicates with the backend via gRPC.
Install Dependencies
1.	Clone the repository:
git clone https://github.com/sales-application
/sales-application.git
cd sales-application/frontend
3.	Install the necessary dependencies:
npm install
4. 	Run the App
To start the frontend development server:

npm run dev
The app will be available at http://localhost:3000.
________________________________________
Backend Setup
The backend is built using Node.js with microservices for authentication, customers, products, and orders. The services communicate through gRPC.
Install Dependencies
1.	Navigate to the backend directory:
cd sales-application/backend
2.	Install dependencies for each service:

npm install --prefix auth-service
npm install --prefix customer-service
npm install --prefix product-service
npm install --prefix order-service
Run the Services
To start each service, run:

npm start --prefix auth-service
npm start --prefix customer-service
npm start --prefix product-service
npm start --prefix order-service
Each service will run on different ports, and the frontend will communicate with them via gRPC.
________________________________________
Technologies Used
•	Frontend: Vue.js, gRPC, Vue Router, Pinia/Vuex
•	Backend: Node.js, gRPC, Proto Files, Microservices architecture
________________________________________
Contributions
Feel free to fork this repository and contribute. If you have any suggestions or improvements, please create an issue or pull request.

