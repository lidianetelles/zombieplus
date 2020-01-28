pipeline {
    agent {
        docker { image "node" }        
    }
    stages {
        stage('Build'){
            steps {
                sh"npm install"
            }            
        }
        stage('Testes'){
            steps {
                sh "npm test"
            }            
        }
    }
}