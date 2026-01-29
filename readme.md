````markdown
# 🛡️ ML-Based Network Monitoring System (Shikra-AI)

A **Machine Learning–based Network Monitoring System** designed to detect anomalous and suspicious activities in real-time within a Local Area Network (LAN). This project is developed as a **Final Year Project (FYP)** at **Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)**.

---

## 📌 Project Overview

Traditional signature-based Intrusion Detection Systems (IDS) struggle with unknown and evolving cyber threats. This project addresses those limitations by leveraging **Machine Learning–based anomaly detection** to identify unusual network behavior in real time.

The system captures network traffic, extracts flow-level metadata, applies unsupervised ML models to compute anomaly scores, and alerts administrators through a web dashboard and email notifications.

> 🔒 **Privacy-Preserving Design:** Packet payloads are never inspected or stored — only metadata is analyzed.

---

## 🎯 Objectives

- Real-time monitoring of LAN traffic
- Detection of unknown and zero-day attacks
- Reduced false positives using behavioral analysis
- Interactive web dashboard for administrators
- Secure role-based access control (RBAC)

---

## 🧠 Key Features

### 🔹 Network Traffic Capture

- Real-time packet capture using **Promiscuous Mode**
- Supports **SPAN / Port Mirroring**
- Protocol identification (TCP, UDP, ICMP)

### 🔹 Feature Extraction

- Packet size
- Timestamps
- Source/Destination IP & Ports
- Flow-based metadata

### 🔹 ML Anomaly Detection Engine

- Unsupervised learning models
- Real-time anomaly scoring
- Configurable detection threshold

### 🔹 Data Storage & Logging

- SQLite / PostgreSQL database
- Persistent anomaly and incident logs

### 🔹 Alert Mechanism

- Real-time dashboard alerts
- Email notifications for high-severity anomalies

### 🔹 Web Dashboard

- Live traffic visualization
- Anomaly spike graphs
- Incident history and logs

### 🔹 User Management & RBAC

- Secure authentication
- Roles:
  - **Administrator** (full access)
  - **Observer** (read-only)

---

## 🏗️ System Architecture

The system follows the **4+1 Architectural View Model**:

- **Use Case View** – User interactions
- **Logical View** – ML pipeline & processing logic
- **Development View** – Modular codebase
- **Process View** – Runtime data flow
- **Physical View** – Deployment within LAN

---

## 🛠️ Technology Stack

| Layer         | Technology                                   |
| ------------- | -------------------------------------------- |
| Backend       | Python (Flask / Django)                      |
| ML Engine     | Scikit-learn                                 |
| Frontend      | HTML, CSS, JavaScript (React / Vue optional) |
| Database      | SQLite / PostgreSQL                          |
| Visualization | Charts.js / Plotly                           |
| Alerts        | SMTP (Email)                                 |

---

## 📁 Repository Structure

```plaintext
Shikra-AI/
├── Implementation/                # Core system code & ML notebooks
├── Literature-Review/             # Research papers & analysis
├── SCOPE-DOCUMENT/                # Project scope documentation
├── Software-Requirements/         # SRS and system design
├── extra-presentations-to-supervisor/
│   └── Slides & progress reviews
├── README.md
```
````

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/cybermax47/Shikra-AI.git
cd Shikra-AI
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the Application

```bash
python app.py
```

Access the dashboard at:

```
http://localhost:5000
```

---

## 👥 User Roles

| Role          | Permissions                                 |
| ------------- | ------------------------------------------- |
| Administrator | Full access, configuration, user management |
| Observer      | View-only dashboard access                  |

---

## 🔐 Security Considerations

- Password hashing before storage
- Authentication required for dashboard access
- Role-based access enforcement
- Input validation to prevent injection attacks

---

## 📊 Performance & Reliability

- Real-time anomaly detection with minimal latency
- Graceful handling of malformed packets
- Automatic database reconnection

---

## 📚 References

- Sommer & Paxson (2010) — ML challenges in IDS
- Ahmad et al. (2021) — Encrypted traffic analysis
- Dromard et al. (2018) — Unsupervised anomaly detection

---

## 👨‍🎓 Project Team

- **Muhammad Umar Maqsood** (2022447)
- **Muhammad Younas** (2022456)
- **Shamina Durrani** (2022453)

### 🎓 Supervision

- **Dr. Muhammad Zain Siddiqi** — Supervisor
- **Dr. Khurram Jadoon** — Co-Supervisor
- **Madam Beenish** — Lecturer

---

## 📄 License

This project is developed for **academic and research purposes** as part of a Final Year Project at GIKI.

```
::contentReference[oaicite:0]{index=0}
```
