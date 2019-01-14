# OpenClassRoom_React_Native


React Native configuration : 
Install LTS version of NodeJs
Because LTS version contains npm ( package manager)

Install expo : sudo npm install -g expo-cli
create a projet : expo init PROJECTNAME
run the application : npm start

Don't forget to install brew and watchman:
brew install watchman

Two kinds of project :
    -  CRNA (Create-React-Native-App)
    -  React Native With Native Code


CRNA Project hierarchy : 
    -  assets: Store graphics ressources ??
    -  .gitignore : if the project is stored on a git
    -  .watchmanconfig : Improve application performances by modifying the watchman configuration. By default, the watchman watches and notifies all modifications.
    -  babel.config : Javascript compiler
    -  node_modules : contains all modules of the current application
    -  app.json : enable to config some application's settings
    -  App.js : The file which is runned at the start of the application
    -  package.json : Contain all dependences.
    