pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
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