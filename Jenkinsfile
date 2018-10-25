pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
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
        stage('npm test') {
          steps {
            sh 'npm test'
          }
        }
      }
    }
  }
}