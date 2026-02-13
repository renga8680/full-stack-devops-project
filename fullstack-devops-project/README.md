# Full Stack DevOps Project
## React + Node.js with Complete CI/CD Pipeline

![DevOps](https://img.shields.io/badge/DevOps-Complete-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)

## 🚀 Project Overview

A complete full-stack application with production-ready DevOps pipeline including:
- **Frontend**: React 18
- **Backend**: Node.js + Express
- **Containerization**: Docker & Docker Compose
- **Orchestration**: Kubernetes
- **CI/CD**: Jenkins
- **Configuration Management**: Ansible
- **Infrastructure**: Terraform (Azure)

## 📁 Project Structure

```
fullstack-devops-project/
├── backend/                 # Node.js API
│   ├── src/
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
├── frontend/               # React App
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── docker/                # Docker configurations
├── ansible/              # Ansible playbooks
│   ├── playbooks/
│   │   ├── setup-docker.yml
│   │   └── deploy.yml
│   ├── inventory/
│   │   └── hosts.ini
│   └── templates/
├── terraform/           # Infrastructure as Code
├── k8s/                # Kubernetes manifests
├── Jenkinsfile         # CI/CD Pipeline
└── docker-compose.yml  # Local development
```

## 🎯 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+
- Git

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd fullstack-devops-project
```

2. **Start with Docker Compose**
```bash
docker-compose up --build
```

3. **Access the application**
- Frontend: http://localhost
- Backend API: http://localhost:5000/api/health

### Manual Setup (Development)

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```env
PORT=5000
NODE_ENV=production
```

**Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 📦 Deployment

### Using Ansible

1. **Update inventory file**
```bash
# Edit ansible/inventory/hosts.ini
# Add your server IPs
```

2. **Deploy with Ansible**
```bash
ansible-playbook ansible/playbooks/deploy.yml -i ansible/inventory/hosts.ini
```

### Using Jenkins

1. Create new Pipeline job in Jenkins
2. Point to this repository
3. Select Jenkinsfile
4. Run the pipeline

### Using Kubernetes

```bash
kubectl apply -f k8s/
```

## 🧪 Testing

**Backend:**
```bash
cd backend
npm test
```

**Frontend:**
```bash
cd frontend
npm test
```

## 🏗️ CI/CD Pipeline

The Jenkins pipeline includes:
1. ✅ Code checkout
2. ✅ Dependency installation
3. ✅ Running tests
4. ✅ Building Docker images
5. ✅ Pushing to registry
6. ✅ Deploying with Ansible
7. ✅ Smoke tests

## 📊 Monitoring

- Backend health check: `/api/health`
- Docker health checks configured
- Kubernetes liveness/readiness probes

## 🔒 Security

- CORS enabled
- Security headers configured
- Docker non-root users
- Secrets management with Ansible Vault

## 📝 API Endpoints

### Backend API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create user |

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Axios
- CSS3

**Backend:**
- Node.js 18
- Express
- CORS

**DevOps:**
- Docker
- Docker Compose
- Kubernetes
- Jenkins
- Ansible
- Terraform
- Nginx

## 📖 Documentation

For detailed setup instructions, see:
- [Terraform Guide](docs/terraform-guide.md)
- [Ansible Guide](docs/ansible-guide.md)
- [Jenkins Guide](docs/jenkins-guide.md)
- [Docker Guide](docs/docker-guide.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - feel free to use this project for learning!

## 👨‍💻 Author

Built with ❤️ for learning DevOps

## 🎓 Learning Resources

- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Ansible Documentation](https://docs.ansible.com/)
- [Jenkins Documentation](https://www.jenkins.io/doc/)
- [Terraform Documentation](https://www.terraform.io/docs/)

## 🚧 Roadmap

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Add Redis caching
- [ ] Implement authentication
- [ ] Add monitoring (Prometheus + Grafana)
- [ ] Add logging (ELK Stack)
- [ ] Implement rate limiting
- [ ] Add unit tests
- [ ] Add integration tests

## ⚡ Performance

- Nginx gzip compression enabled
- Static asset caching
- Docker multi-stage builds
- Health checks configured

## 🐛 Troubleshooting

**Backend not starting?**
```bash
docker logs backend
```

**Frontend can't reach backend?**
```bash
docker network inspect fullstack-devops-project_app-network
```

**Port conflicts?**
```bash
sudo lsof -i :80
sudo lsof -i :5000
```

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Check existing documentation
- Review logs: `docker-compose logs -f`

---

**Happy Coding! 🚀**
