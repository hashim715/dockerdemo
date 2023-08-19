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
      environment {
        username = 'hashim715'
        password = 'pakistan@715'
      }
      steps {
        powershell 'docker login -u $env:username -p $env:password'
      }
    }

  }
}