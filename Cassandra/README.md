# Cassandra Event Tracker (Hands-on Project)

## 🎯 Objective

This project is designed to **learn Cassandra by doing**.

JavaScript is intentionally minimal — the core logic must be implemented using Cassandra queries.

---

## 🧠 What You Will Learn

* Cassandra data modeling
* Partition keys vs clustering keys
* INSERT and SELECT queries
* Query-driven design

---

## ☁️ Prerequisite: DataStax Astra

* Create a free Cassandra DB: [https://astra.datastax.com](https://astra.datastax.com)
* Retrieve (following guidelines):

  * Client ID
  * Client Secret
  * Secure Connect Bundle (downloaded zip)

---

## ⚙️ Setup

```bash
npm install
```

Create a `.env` file in root directory, with this content:

```
ASTRA_DB_SECURE_BUNDLE=./path/to/secure-connect-database_name.zip
ASTRA_DB_CLIENT_ID=your_client_id
ASTRA_DB_CLIENT_SECRET=your_client_secret
```

---

## ▶️ Run

```bash
node src/server.js
```

Test:

```
POST /event
GET /events?user=test
```

---

## 🧪 Student Task

Implement the logic inside `src/eventService.js`.

---

## 📁 Project Structure

```
public/index.html
src/
 ├── server.js
 ├── routes.js
 ├── cassandraClient.js
 └── eventService.js  ← implement here
```

---

## 📁 Prerequisites

Be aware to create a dedicated keyspace on AstraDB and a dedicated table to use in this workshop.