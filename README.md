# Intervue

A full-stack interview management platform built with Next.js, Prisma, PostgreSQL, Clerk, and modern cloud-native technologies.

## Overview

<p align="center">
  <img src="./public/Screenshot 2026-09-04 090017.png" alt="Intervue Dashboard" width="900"/>
</p>
Intervue is a full-stack interview management platform designed to streamline the process of scheduling, conducting, and managing technical interviews.

The application provides authentication, interview management, appointment scheduling, feedback workflows, and a production-ready deployment architecture using Docker and Kubernetes.

The project is deployed on an AWS EC2 instance running k3s, with Traefik handling ingress and HTTPS certificates automatically through Let's Encrypt.

---

## Features

- 🔐 Authentication and user management with Clerk
- 📅 Interview and appointment management
- 👨‍💻 Interviewer and candidate workflows
- 📊 Dashboard for interview management
- 📝 Interview feedback
- 🔔 Email functionality
- 🛡️ API and application protection with Arcjet
- 🗄️ PostgreSQL database with Prisma ORM
- 🐳 Dockerized application
- ☸️ Kubernetes deployment using k3s
- 🌐 Custom domain with HTTPS
- 🔒 Automatic TLS certificates using Let's Encrypt
- 🚀 CI/CD deployment through GitHub Actions
- 📦 Docker images hosted on Docker Hub

---

## Tech Stack

### Frontend & Backend

- **Next.js 16**
- **React 19**
- **JavaScript**
- **Prisma ORM**

### Database

- **PostgreSQL**
- **Neon PostgreSQL**

### Authentication & Security

- **Clerk** — Authentication and user management
- **Arcjet** — Security, bot detection and request protection

### Infrastructure

- **Docker**
- **Docker Hub**
- **Kubernetes**
- **k3s**
- **AWS EC2**
- **Traefik**
- **cert-manager**
- **Let's Encrypt**

### CI/CD

- **GitHub Actions**

---

## Getting Started

git clone https://github.com/AnkitGyan/Intervue.git
cd Intervue
npm install

## configure env

DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

ARCJET_KEY=
ARCJET_ENV=

RESEND_API_KEY=

# generate prisma and migrate database

npx prisma generate
npx prisma migrate dev

npm run dev

## Running with Docker

docker build \
--build-arg DATABASE_URL="<DATABASE_URL>" \
-t intervue .

docker run \
-p 3000:3000 \
--env-file .env \
intervue

## Running with Kubernetes

k8s/
├── deployment.yml
├── service.yml
├── ingress.yml
└── cluster-issuer.yml

kubectl apply -f k8s/
