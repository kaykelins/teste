pipeline {
  agent any
  stages {
    stage('list files') {
      parallel {
        stage('list files') {
          steps {
            sh 'ls -a'
          }
        }
        stage('npm test') {
          steps {
            sh 'npm test'
          }
        }
      }
    }
    stage('error') {
      steps {
        sh 'docker ps'
      }
    }
  }
}