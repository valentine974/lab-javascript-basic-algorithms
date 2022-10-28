// Iteration 1: Names and Input
const hacker1='Valentine'
console.log(`The driver's name is ${hacker1}`)
const hacker2='Suzy'
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length >hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
 }
 else if (hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 }
 else if (hacker1.length = hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

let uppercaseHacker1="";

for (let i=0;i<hacker1.length;i++) {
  uppercaseHacker1= uppercaseHacker1+hacker1[i]+" "  
}
console.log(uppercaseHacker1);

let inverseHacker2=""; 

for (let j=hacker2.length-1;j>=0;j--) {
  inverseHacker2= inverseHacker2+hacker2[j].toLowerCase()  
}
console.log(inverseHacker2);


if(hacker1.length >= hacker2.length) { 
 for (i=0; i<=hacker2.length-1;i++) { 
   if(hacker1[i]>hacker2[i])  { 
   console.log(`The driver's name goes first.`)
     break
   }
   else if (hacker1[i]<hacker2[i])  { 
   console.log(`Yo, the navigator goes first definitely.`)
     break
   }
   else if (hacker1[i]=hacker2[i]) { 
     if(i=hacker2.length-1) { 
       console.log(`What?! You both have the same name?`)
       break
     }
     else  { 
     continue
     }

   }
     
 }
  
}

else if(hacker1.length < hacker2.length) { 
 for (i=0; i<=hacker1.length-1;i++) { 
   if(hacker1[i]>hacker2[i])  { 
   console.log(`The driver's name goes first.`)
     break
   }
   else if (hacker1[i]<hacker2[i])  { 
   console.log(`Yo, the navigator goes first definitely.`)
     break
   }
   else if (hacker1[i]=hacker2[i]) { 
     if(i=hacker1.length-1) { 
       console.log(`What?! You both have the same name?`)
       break
     }
     else  { 
     continue
     }

   }
     
 }
  
}

// BONUS 1.1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat pulvinar bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius magna vitae felis commodo imperdiet. Sed rhoncus, lorem et malesuada iaculis, metus ante dapibus sem, at commodo tortor magna eu arcu. Nam eu lorem nisl. Donec nisl massa, tempus vitae tortor eu, faucibus vehicula ante. In eleifend orci tortor, ut interdum tellus lacinia consectetur. Pellentesque at vehicula purus, molestie venenatis erat. Curabitur ex turpis, ultrices non lobortis ac, euismod quis enim.

Praesent faucibus vehicula ipsum sit amet rhoncus. Integer egestas in ligula sed suscipit. Praesent lobortis accumsan arcu ut posuere. Sed in enim efficitur, venenatis purus at, semper sapien. Morbi vel facilisis diam, at accumsan tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum placerat felis quis vulputate lobortis. Phasellus id fermentum sem, in blandit elit. Nullam et sapien quam.

Proin ultrices mauris nec orci lobortis rutrum. Integer nec sem nec leo viverra dapibus nec non massa. Etiam auctor justo urna, id fermentum lorem varius eget. Etiam egestas faucibus tellus, non efficitur neque suscipit a. Vestibulum sit amet turpis dapibus nibh consectetur sodales eu at sapien. Fusce sed porta erat. Mauris suscipit lectus ac sodales viverra.` 

let numberOfWords =0; 

for (let i=0; i<loremIpsum.length;i++)  { 
  if(loremIpsum[i]===" ")   { 
    if(loremIpsum[i-1]===".")   { 
      continue
    }
    else   {  
    numberOfWords+=1 
    }
    
  }
  else if (loremIpsum[i]===".")  { 
    numberOfWords+=1
  }
  
  else if (loremIpsum[i]==="/n")  { 
    continue
  }
  else   { 
  continue
  }
}
console.log(numberOfWords);

// BONUS 1.2

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat pulvinar bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut varius magna vitae felis commodo imperdiet. Sed rhoncus, lorem et malesuada iaculis, metus ante dapibus sem, at commodo tortor magna eu arcu. Nam eu lorem nisl. Donec nisl massa, tempus vitae tortor eu, faucibus vehicula ante. In eleifend orci tortor, ut interdum tellus lacinia consectetur. Pellentesque at vehicula purus, molestie venenatis erat. Curabitur ex turpis, ultrices non lobortis ac, euismod quis enim.

Praesent faucibus vehicula ipsum sit amet rhoncus. Integer egestas in ligula sed suscipit. Praesent lobortis accumsan arcu ut posuere. Sed in enim efficitur, venenatis purus at, semper sapien. Morbi vel facilisis diam, at accumsan tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum placerat felis quis vulputate lobortis. Phasellus id fermentum sem, in blandit elit. Nullam et sapien quam.

Proin ultrices mauris nec orci lobortis rutrum. Integer nec sem nec leo viverra dapibus nec non massa. Etiam auctor justo urna, id fermentum lorem varius eget. Etiam egestas faucibus tellus, non efficitur neque suscipit a. Vestibulum sit amet turpis dapibus nibh consectetur sodales eu at sapien. Fusce sed porta erat. Mauris suscipit lectus ac sodales viverra.`

// console.log(loremIpsum.indexOf(" et "))
// console.log(loremIpsum.includes(" et "))

let counter = 0;
let substring = loremIpsum ;

do   {  
if(substring.includes(" et "))  { 
  counter+=1;
  substring=substring.slice(substring.indexOf(" et ")+4, substring.length);
  
}
else   { 
  break
}
} while (substring.length>0)

console.log(counter);


//BONUS 2

let phraseToCheck = 'A man, a plan, a canal, Panama!'
//let phraseToCheck ="Amor, Roma"
// let phraseToCheck ="race car"
// let phraseToCheck ="stack cats"
//let phraseToCheck ="step on no pets"
// let phraseToCheck ="taco cat"
// let phraseToCheck ="put it up"
//let phraseToCheck ="Was it a car or a cat I saw?"  
//let phraseToCheck ="No 'x' in Nixon"

phraseToCheck= phraseToCheck.toLowerCase()
let unpunctuatedPhrase="";


for (let value of phraseToCheck)  {  
  switch (value) { 
    case " ":
    case ".":
    case "!":
    case "'":
    case "?": 
    case ",":
      continue
    default:
      unpunctuatedPhrase+=value
     break;
  
  }
    
}


let j=unpunctuatedPhrase.length-1 

if(unpunctuatedPhrase.length%2===0){  
  
  for (i=0; i<=(unpunctuatedPhrase.length/2);i++){ 
    if(unpunctuatedPhrase[i]===unpunctuatedPhrase[j]){ 
      if (i===(unpunctuatedPhrase.length/2)) {
        console.log(`Of course it's a palindrom, well done!`)
        break;
      }
      else { 
        j--
        continue
        
      }
    }
    else { 
      console.log(`It's not a palindrome, you dummy`)
    break
    }
    
  }
}

else {
  for (i=0; i<=(unpunctuatedPhrase.length/2);i++){ 
    if(unpunctuatedPhrase[i]===unpunctuatedPhrase[j]){ 
      if (i===((unpunctuatedPhrase.length-1)/2)) {
        console.log(`Of course it's a palindrom, well done!`)
        break;
      }
      else {  
        j--
        continue
        
      }
    }
    else { 
      console.log(`It's not a palindrome, you dummy`)
    break
    }
    
  }
}



    
