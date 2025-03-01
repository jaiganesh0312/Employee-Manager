# **Employee Manager**  

## **Description**  
Employee Manager is a **full-stack web application** built with **Next.js** (frontend) and **Node.js** (backend) to efficiently manage employee data with authentication and role-based access control.  

## **Features**  
### **🔒 Authentication System**  
- ✅ **User Signup** with email verification (Nodemailer)  
- ✅ **User Login** (JWT-based, stores access & refresh tokens in cookies)  
- ✅ **Forgot Password & Reset Password** (email-based reset link)  
- ✅ **Logout** (clears authentication tokens)  
- ✅ **Protected Routes** (ensures only authenticated users can access certain pages)  

### **👨‍💼 Employee Management**  
- ✅ **Create Employee**  
- ✅ **Update Employee**  
- ✅ **Delete Employee**  
- ✅ **Search Bar** to find employees by typing their name prefix  
- ✅ **Pagination** for handling large datasets efficiently  
- ✅ **Data Validation** using Express Validator (backend validation for employee data)  

### **🖥️ UI & User Experience**  
- ✅ **Custom Toast Notifications** for better UX (using NextUI's alert component + Redux)  
- ✅ **Navbar with User Avatar** (includes logout functionality)  
- ✅ **Custom 404 & Error Pages** for better user experience  
- ✅ **Reusable Components** (PasswordInput, Toast, etc.)  
- ✅ **Animations** powered by Framer Motion  

## **Technologies Used**  
### **Backend**  
- **Framework:** Express.js (Node.js)  
- **Database:** MySQL  
- **ORM:** Sequelize (for interacting with MySQL)  
- **Validation:** Express Validator  
- **Authentication:** JWT (Access & Refresh Tokens), Nodemailer (email verification & password reset)  

### **Frontend**  
- **Framework:** Next.js (React.js)  
- **State Management:** Redux Toolkit (for authentication & global state management)  
- **API Handling:** React Query + Axios  
- **Styling:** Tailwind CSS  
- **UI Library:** NextUI  
- **Icons:** Iconify/react  
- **Animations:** Framer Motion  

## **How to Run the Project**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/your-repository.git
cd employee-manager
```

### **2️⃣ Install Dependencies**  
#### **Backend:**  
```sh
cd backend
npm install
```

#### **Frontend:**  
```sh
cd frontend
npm install
```

### **3️⃣ Set Up Environment Variables**  
Create a **.env** file in the **backend** directory and add:  
```
DATABASE_URL=mysql://your-mysql-user:your-mysql-password@localhost:3306/your-database-name
JWT_SECRET=your-secret-key
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

### **4️⃣ Run the Application**  
#### **Start Backend Server**  
```sh
cd backend
npm start
```

#### **Start Frontend Server**  
```sh
cd frontend
npm run dev
```

### **5️⃣ Open the App in Your Browser**  
Go to:  
```
http://localhost:3000
```

---

### **📌 Notes:**  
- Ensure MySQL is installed and running before starting the backend.  
- Update the `.env` file with your credentials before running.  
- You can test API routes using Postman.  

---

