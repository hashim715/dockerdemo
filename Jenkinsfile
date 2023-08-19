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

    stage('Log into dockerhub') {
      steps {
        powershell 'docker login -u hashim715 -p pakistan@715petarian'
      }
    }

  }
}