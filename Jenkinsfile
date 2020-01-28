pipeline {
    agent {
        docker { image "lidi/node-wd" }        
    }
    stages {
        stage('Build'){
            steps {
                sh"npm install"
            }            
        }
        stage('Testes'){
            steps {
                sh "npm run test:ci"
            }            
        }
    }
}