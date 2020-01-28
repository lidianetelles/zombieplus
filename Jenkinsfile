pipeline {
    agent any
    stages {
        stage('Build'){
            sh"npm install"
        }
        stage('Testes'){
            sh "npm test"
        }
    }
}