const express = require('express');
const es = require('./es');
const app = express();
const inquirer = require('inquirer');


console.log('CompanyChooser');

var questions = [

  
  	 {
    type: 'list',
    name: 'firstTimeWorking',
    message: 'It is your first time working?',
    choices: ['Y','N'],
      
    },
    

    {
    type: 'list',
    name: 'yearsOfExperience',
    message: 'How many years of experience do you have?',
    choices: ['<1','1-3','3+'],
    },

  {
    type: 'list',
    name: 'favoriteLanguages',
    message: 'What is your favorite programming language?',
    choices: ['Java','C','Scala','Python','javascript'],
    },
      {
    type: 'list',
    name: 'hardwareOrSoftware',
    message: 'Do you prefer working with Hardware or Software?',
    choices: ['H','S','Both'],
    },
          {
    type: 'list',
    name: 'parttimeOrfulltime',
    message: 'Do you want a part-time job or a full time job?',
    choices: ['FT','PT'],
    },
              {
    type: 'list',
    name: 'programmingType',
    message: 'What types of programming languages do you prefer?',
    choices: ['procedural','oop','functional'],
    },
                  {
    type: 'list',
    name: 'technicalField',
    message: 'In what technical field do you want your company to be ?',
    choices: ['automotive','embedded','mobile','web','Any'],
    },

];

inquirer.prompt(questions).then((answers) => {

	 console.log('The perfect company for you is: ')
	 es.diagnose(answers)
.then(result => console.log(result.companyName));
});