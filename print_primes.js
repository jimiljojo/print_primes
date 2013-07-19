#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var primes=[];
count=0;
for(var i=2;i<2000;i++){
    var isprime=true;
    for(var j=2;j<i;j++){
	if(i%j===0)
	    isprime=false;
	}
    if(isprime===true){
	primes[count]=i;
	count++;
	}
    if(count>=100)
	break;
    }
fs.writeFileSync(outfile , primes);
console.log("Script: " + __filename + "\nWrote: " + count + " elements To: " + outfile);
