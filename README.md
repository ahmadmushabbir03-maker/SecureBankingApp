# 🏦 Secure Digital Banking Application on Microsoft Azure

## 📌 Project Overview

The **Secure Digital Banking Application** is a full-stack cloud-native banking solution developed using **React**, **Spring Boot**, and **Microsoft Azure**. The project demonstrates an end-to-end **CI/CD pipeline** using **Azure DevOps**, automated deployments to **Azure App Service**, and secure authentication using **Spring Security with JWT**.

This project showcases modern DevOps practices, cloud deployment, and enterprise application development.

---

# 🏗️ Solution Architecture

```
Developer
    │
    ▼
 GitHub Repository
    │
    ▼
Azure DevOps Repository
    │
    ▼
Azure DevOps YAML Pipeline
    │
 ┌───────────────┐
 │ Build Stage   │
 │ • React Build │
 │ • Maven Build │
 │ • Package JAR │
 └───────────────┘
    │
    ▼
 Publish Artifact
    │
    ▼
 Deploy Stage
    │
    ▼
 Azure App Service (Linux)
    │
 ┌───────────────┐
 │ Spring Boot   │
 │ React Frontend│
 │ JWT Security  │
 │ H2 Database   │
 └───────────────┘
```

---

# 🚀 Features

- Secure Login using JWT Authentication
- Spring Security Authorization
- RESTful Banking APIs
- React-based Responsive UI
- Customer Dashboard
- Account Management
- Transaction Management
- H2 In-Memory Database
- Swagger API Documentation
- Spring Boot Actuator Monitoring
- Automated Azure DevOps CI/CD Pipeline

---

# 🛠 Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React + Vite |
| Backend | Spring Boot 3 |
| Language | Java 21 |
| Build Tool | Apache Maven |
| Security | Spring Security + JWT |
| Database | H2 Database |
| API Documentation | Swagger OpenAPI |
| Monitoring | Spring Boot Actuator |
| Version Control | Git + GitHub |
| CI/CD | Azure DevOps Pipelines |
| Cloud Platform | Microsoft Azure |
| Hosting | Azure App Service (Linux) |

---

# ☁️ Azure Services Used

- Azure App Service
- Azure Virtual Machines
- Azure Resource Groups
- Azure Virtual Network
- Azure Network Security Groups
- Azure DevOps Pipelines
- Azure Repositories
- Azure Monitor
- Azure Log Stream

---

# 📂 Project Structure

```
SecureDigitalBanking
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── target
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── azure-pipelines.yml
├── README.md
└── .gitignore
```

---

# ⚙️ CI/CD Pipeline

The Azure DevOps pipeline performs the following tasks automatically:

### Stage 1 – Build

- Checkout Source Code
- Install Node.js
- Install Java 21
- Install Maven
- Build React Application
- Build Spring Boot Application
- Execute Unit Tests
- Package Executable JAR
- Publish Build Artifact

---

### Stage 2 – Deploy

- Download Build Artifact
- Deploy to Azure App Service
- Restart Application
- Validate Deployment

---

# 🔐 Security

The application is secured using:

- Spring Security
- JWT Authentication
- BCrypt Password Encoding
- Stateless Authentication
- Protected REST APIs
- CORS Configuration

---

# 📈 Monitoring

Application health and monitoring are provided through:

- Spring Boot Actuator
- Azure Log Stream
- Azure App Service Logs

Health Endpoint

```
/actuator/health
```

---

# 📚 API Documentation

Swagger UI

```
/swagger-ui.html
```

OpenAPI Documentation

```
/api-docs
```

---

# 🖥 Local Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd backend

mvn clean install

mvn spring-boot:run
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# ☁️ Azure Deployment

The application is deployed using Azure DevOps CI/CD Pipeline.

Deployment Flow

```
GitHub
      │
      ▼
Azure DevOps
      │
      ▼
Build Pipeline
      │
      ▼
Publish Artifact
      │
      ▼
Azure App Service
```

---

# 📊 Project Highlights

- Full Stack Banking Application
- Enterprise CI/CD Pipeline
- Infrastructure on Microsoft Azure
- Automated Build & Deployment
- JWT Authentication
- Azure App Service Hosting
- Spring Boot Backend
- React Frontend
- Production-ready YAML Pipeline

---

# 📸 Project Demonstration

The project documentation includes:

- Architecture Diagram
- GitHub Repository
- Azure DevOps Repository
- YAML Pipeline
- Successful CI/CD Execution
- Azure Resource Group
- Azure App Service
- Deployment Center
- Live Banking Application
- Spring Security Configuration
- Development Environment

---

# 🎯 Learning Outcomes

Through this project, the following skills were demonstrated:

- Azure DevOps
- CI/CD Automation
- Git & GitHub
- Microsoft Azure
- Azure App Service
- Spring Boot Development
- React Development
- Maven Build Automation
- JWT Authentication
- Cloud Deployment
- Troubleshooting Production Deployments

---

# 👨‍💻 Author

**Ahmad Mushabbir Mohammed**

Azure Administrator Associate (AZ-104)

Azure DevOps | Cloud Engineer | Java | Spring Boot | React | CI/CD

GitHub:
https://github.com/ahmadmushabbir03-maker

---

# 📄 License

This project is intended for educational, learning, and portfolio purposes.
