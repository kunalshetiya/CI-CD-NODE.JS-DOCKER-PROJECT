# ⚙️ CI/CD Demo (Node.js Microservice)

A Node.js microservice with **Docker integration and CI/CD pipeline** using GitHub Actions.

## 🚀 Features

* Node.js microservice
* Dockerized application
* CI pipeline with GitHub Actions
* Automated testing

## 📁 Structure

* `src/` → Application code
* `tests/` → Test cases
* `Dockerfile` → Container setup
* `.github/workflows/` → CI pipeline

## ⚙️ Run

```bash
npm install
npm start
```

## 🐳 Docker

```bash
docker build -t ci-cd-demo .
docker run -p 3000:3000 ci-cd-demo
```

## 🧪 Test

```bash
npm test
```
