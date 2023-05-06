// Code your solutions in this file
function writeCards( arr ){
  const msg = [];
  for(let i of arr){
    msg.push(`Thank you, ${i}, for the wonderful surprise gift!`)
  }
  return msg
}

function countDown(){
  for( let count = 10; count >= 0; count--){
    console.log(count)
  }
}