
function takeANumber (line, name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
 }
 
 function nowServing (line) {
   if (line.length >=1) {
   return `Now serving ${line.shift()}.`
 } else {
   return "There is nobody waiting to be served!"
  }
 }