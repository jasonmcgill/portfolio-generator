const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;



fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Checkout out index.html to see the output!')
});


/*
const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
};

console.log('======================')
profileDataArr.forEach(function(profileItem) {
    console.log(profileItem);
})


profileDataArr.forEach(profileItem => console.log (profileItem));
printProfileData(profileDataArgs); */

