# Flightright Code Challenge 2
Second cold assessment in Flightright Code Challenge 

further description would be found after description of the available scripts as the code use React as frontend framework
#################################################################<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




#################################################################<br>
## What we know


### Problem 2

Create a content editor with a simple page with a dropdown list. The list should consist of some markdown templates , which can be selected and rendered into a markdown preview and html preview. You are free to use any libraries for the markdown to html conversion.  

### Requirements 

- This application can be built using any framework of your choice (preferable Ember/React) 

- Code should be hosted on a github repository you can share with us (Github, Bitbucket...) 

### Note 

- You can create your own markdown templates with simple examples.

- The html preview may be rendered in two ways - it may look like html code preview, and rendered html itself.

- Changing the text field in markdown preview may cause dynamic changes of converted html preview(s).
 
### Brownie Points

- Application adheres to accessibility standards

- The markdown includes placeholder tags, which would then be swapped with some html snippet in the preview. 

## what I have tried to do 

The program uses swhowdown to to convert markdown codes to HTML.

It's modified in real-time as you change the code in the left part of the interface.

You can change many tempaltes with the dropdown list present below the title.

The list of the tools needed to be installed is already present in package.json file.

