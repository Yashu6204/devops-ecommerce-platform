pipeline {
    agent any

    stages {

        stage('Check Repository') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Frontend Validation') {
            steps {
                sh 'cd frontend && npm install'
            }
        }

        stage('Backend Validation') {
            steps {
                sh 'cd services/product-service && npm install'
            }
        }

        stage('Kubernetes Verification') {
            steps {
                sh 'kubectl get pods -A || true'
            }
        }
    }
}

