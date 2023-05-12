const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'addEmployee' : './javascript/addEmployee.js',
	'addTask' : './javascript/addTask.js',
	'updateEmployee' : './javascript/updateEmployee.js',
	'updateTask' : './javascript/updateTask.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};