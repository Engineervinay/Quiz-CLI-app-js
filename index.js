var readlineSync=require("readline-sync");
const chalk = require('chalk');
score=0;
console.log(chalk.bgGreen("--------------------------------------"))
console.log(chalk.cyan.bold.underline(" Welcome !!!"))

console.log(chalk.bgGreen("--------------------------------------"))
var username=readlineSync.question("Enter Your name:")

console.clear();

console.log(chalk.bgGreen("--------------------------------------"))

console.log(chalk.cyan.bold.underline(" Welcome "+username +" !!!"))
console.log(chalk.bgGreen("--------------------------------------"))
console.log(chalk.yellow(" Lets Start the Game:"))
console.log(chalk.green(" Rules:"))
console.log(chalk.green(" -You will get Company name you have to guess their Founding year"))
console.log(chalk.green(" -You will get 4 Options for each question"))
console.log(chalk.green(" -Enter Answer Year"))

var temp=readlineSync.question("press enter to proceed:")
console.clear()
function play(name,year,founder,option1,option2,option3,option4)
{
  console.log(chalk.black("."))
  console.log(chalk.bgMagenta(" Company name is "+name +" :"))
  console.log(chalk.cyan("A." +option1 ))
  console.log(chalk.cyan("B." +option2 ))
  console.log(chalk.cyan("C." +option3 ))
  console.log(chalk.cyan("D." +option4 ))

console.log(chalk.bgGreen("--------------------------------------"))  
  var useranswer=readlineSync.question("Enter Answer:")
  if(useranswer==year)
  {
    console.log(chalk.cyan.bold(" Right Answer"))
    score=score+1;

  }
  else{
    console.log(chalk.cyan.bold(" Wrong Answer"))
  }
  console.log(chalk.red.underline(name +" Founded by " + founder+" in " + year));
  
}


var companies=[
  {
    name:"Google",
    year:1998,
    founder:"Larry page,Sergey Brin",
    option1:1989,
    option2:1978,
    option3:1998,
    option4:1976
  },
  {
    name:"Microsoft",
    year:1975,
    founder:"Bill Gates,Paul Allen",
    option1:1955,
    option2:1975,
    option3:1983,
    option4:1997

  },
  {
    name:"IBM",
    year:1911,
    founder:"Thomas J. Watson,Charles Ranlett Flint",
    option1:1979,
    option2:1964,
    option3:1942,
    option4:1911
  },
  {
    name:"Yahoo",
    year:1994,
    founder:"Jerry Yang,David Filo",

    option1:1970,
    option2:1982,
    option3:1994,
    option4:1991
  },
  {
    name:"Infosys",
    year:1981,
    founder:"N. R. Narayana Murthy,Nandan Nilekani",

    option1:1981,
    option2:1974,
    option3:1979,
    option4:1958
  },
  {
    name:"Wipro",
    year:1945,
    founder:"M.H. Premji",

    option1:1986,
    option2:1999,
    option3:1945,
    option4:1978
  },
  {
    name:"Oracle",
    year:1977,
    founder:"Larry Ellison,Bob Miner,Ed Oates",
    option1:1965,
    option2:1977,
    option3:1985,
    option4:1983
  },
  {
    name:"Apple",
    year:1976,
    founder:"Steve Jobs,Steve Wozniak",
    option1:1970,
    option2:1986,
    option3:1945,
    option4:1976
  },
]

for(var i=0;i<8;i++)
{
  
  play(companies[i].name,companies[i].year,companies[i].founder,companies[i].option1,companies[i].option2,companies[i].option3,companies[i].option4);
}
console.clear()
console.log(chalk.bgGreen("--------------------------------------"))
console.log(chalk.black("."))
console.log(chalk.red.bold.underline(" Congratulation "+username +" you have Scored "+score +" points!!!"))
console.log(chalk.black("."))
console.log(chalk.bgGreen("--------------------------------------"))