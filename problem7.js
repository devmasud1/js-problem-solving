/*function name printDetails(). you will be provided an object. 
you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

const obj = {
    name: "akash",
    age:22,
    email:"abc@gmail.com"
}
Amar nam akash, amar boyos 22, amar email abc@gmail.com, amar adress nai. 
*/

function printDetails(personInfo) {
  if (typeof personInfo !== "object") {
    return "please provide a object";
  }

  const name = personInfo.name || "nai";
  const age = personInfo.age || "nai";
  const email = personInfo.email || "nai";
  const adress = personInfo.adress || "nai";

  return `Amar nam ${name}, amar boyos ${age}, amar email ${email}, amr adress ${adress}`;
}

const obj = {
  name: "akash",
  age: 22,
  email: "abc@gmail.com",
};
console.log(printDetails(obj));
