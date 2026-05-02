const name="hardik"
const repocount=5

//console.log(name + repocount + "value");//this is outdated method

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);//new one

const newgame = new String("har-dik-ph");

// console.log(newgame);
// console.log(newgame[5]);//
// console.log(newgame.length);
// console.log(newgame.charAt(5));
// console.log(newgame.indexOf("h"));
// console.log(newgame.toUpperCase());
// console.log(newgame.toLowerCase());


const newstring = newgame.substring(0,4);//output(hard) avoid end number that is 4.
//console.log(newstring);

const anotherstring = newgame.slice(-7,4)//it take negative number also
//console.log(anotherstring);


const newstringone = "    hardi    "
// console.log(newstringone);
// console.log(newstringone.trim());//trim the extra spaces


const url ="https.//hardik.com/hardik%20patil"
console.log(url.replace("%20","-"));
console.log(url.includes("hardik"))//check and give ouput true or false

console.log(newgame.split("-"));





