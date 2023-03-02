// document.write("<h1>Even Numbers </h1>")
// for(let i=0;i<=12;i++){
//     // document.write((start+3)+"<br>")
//     if(i%2===0){
// document.write("Even Numbers: "+i+"<br>")
//     }

// }

// document.write("<h1>Odd Numbers</h1>")
// for(let j=0;j<=12;j++){
//    if(j%2!==0){
//         document.write("Odd Numbers: "+j+"<br>")
//             }
// }

// let number=prompt("Enter a number")

// if(parseFloat(number)%2===0){
//     document.write("It is an even number")
// }
// else if(parseFloat(number)%2!==0){
// document.write("It is odd")
// }
// else{
//     document.write("Invalid input")
// }


// let i=0

// while(i<=12){
//     document.write(i+"<br>")
//     i++
// }

// let i=0
// do{
//     document.write(i+"<br>")
//         i++ 
// } while(i>=12)

// let i=0

// while(i<=12){
  
//     if(i%2===0){
//         document.write("Even Number"+i+"<br>")
        
//     }
//     i++
// }


let start=+prompt("Enter start range")
let end=+prompt("Enter end range")

for(let i=start;i<=end;i++){
if((i%7===0 && i%3===0 && i%5===0)||i%10===0){
    document.write(i+"<br>")
}
}


// let i=0

// do{
//     if(i%7===0 && i%3===0 && i%5===0){
//         document.write(i+"<br>")
//     }
//     i++
// }while(i<=1000)

