# Getting Started with React

React is one of the most popular technology today for creating web applications. It is created and maintained by facebook. This repository is dedicated for learning react from creating your first react app to building it to deploy your react app. All the contents are from the freeCodeCamp curriculum. All credits to them.

## Creating your first react app

If your are in windows, the first thing you need to do is open your terminal and change your current directory to the folder that you want your react app to be created using the "cd <directory>" command.

Install React using create-react-app, a tool that installs all of the dependencies to build and run a full React.js application:
```
npx create-react-app my-app
```

This will first ask for your permission to temporarily install create-react-app and it's associated packages. Once completed, change directories into your new app ("my-app" or whatever you've chosen to call it): cd my-app.


Start your new React app:
```
npm start
```

This command will start up the Node.js server and launch a new browser window displaying your app. You can use Ctrl + c to stop running the React app in your command line.


When you're ready to deploy your web app to production, running npm run build will create a build of your app in the "build" folder.