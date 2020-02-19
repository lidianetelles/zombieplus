pipeline {
    agent {
        docker { 
            image "devops/node-wd"
            args "--network=skynet"
         }        
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }            
        }
        stage('Tests'){
            steps {
                sh "npm run test:ci"                
            }
            post {
                always {
                    junit testResults: "tests_output/**/*.xml"
                }
            }            
        }
    }
}