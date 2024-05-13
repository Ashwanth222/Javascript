var string = new String("  string literal  ");
console.log(string.trim())
console.log(string.replace("string", "STRING"))
console.log(string.charAt(5))
console.log(string.split("str"))
console.log(string.concat("hgyt"))
console.log(string)
console.log(string.endsWith("literal"))
console.log(string.endsWith("literal  "))
console.log(string.lastIndexOf("l"))
console.log(string.indexOf("l"))
var stringg = new String("string literalltr");
console.log(stringg.startsWith("str", 0))
console.log(stringg.startsWith("ing lit", 3))
console.log(stringg.endsWith("l", 15))
console.log(stringg.endsWith("l", -3))

var str = "Welcome to javaTpoint.";  
console.log(str.endsWith("to", 10))  
console.log(str.endsWith("To", 10)) 

var strr = "hello world"
console.log(strr.includes(" world", 5))
console.log(strr.includes(" World", 5))

console.log(strr.repeat(4))
console.log(str.slice(4))
console.log(str.slice(4,9))
console.log(str.codePointAt("t"))

console.log(str.substring(5,9))

var sttr = "   hello world   "
console.log(sttr.trimEnd())
console.log(sttr.trimStart())
var sttrr = "   hello world   "
console.log(sttrr.trimStart())

var namee = "IUFIGVBK"
var nameee = "dcfvbhnj"

console.log(namee.toLowerCase())
console.log(nameee.toUpperCase())
console.log(namee.toLocaleLowerCase())
console.log(nameee.toLocaleUpperCase())