pipeline {
  agent {
    docker {
      image 'node:alpine'
    }

  }
  stages {
    stage('list files') {
      steps {
        sh 'ls -a'
      }
    }
  }
}