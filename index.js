
function takeANumber (line, name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
 }
 
 function nowServing (line) {
   if (line.length >=1) {
   return `Currently serving ${line.shift()}.`
 } else {
   return "There is nobody waiting to be served!"
  }
 }
 
 function currentLine (line) {
   if (line.length === 0) {
     return "The line is currently empty."
   } else
   
   return line
 }