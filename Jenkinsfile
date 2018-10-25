pipeline {
  agent {
    docker {
      image 'node:8.9-alpine'
    }

  }
  stages {
    stage('list files') {
      parallel {
        stage('list files') {
          steps {
            sh 'ls -a'
          }
        }
        stage('npm init') {
          steps {
            sh 'npm init'
          }
        }
      }
    }
  }
}