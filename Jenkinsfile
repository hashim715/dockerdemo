pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/hashim715/dockerdemo', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        powershell 'docker build -t dockerdemoproject:v1 .'
      }
    }

  }
}