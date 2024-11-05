const passwordBox=document.getElementById("password");
const length=12;


const Uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase="abcdefghijklmnopqrstuvwxyz";
const Numbers="0123456789";
const symboles="@#$%^&*()_+~}{[]></-=";
  const allChars=Uppercase+Lowercase+Numbers+symboles;
function GeneratePassword()
{
   let password=" ";
   password+=Uppercase[Math.floor(Math.random()*Uppercase.length)];
   password+=Lowercase[Math.floor(Math.random()*Lowercase.length)];
   password+=Numbers[Math.floor(Math.random()*Numbers.length)];
   password+=symboles[Math.floor(Math.random()*symboles.length)];
  

   while(length>password.length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];

   }
   passwordBox.value=password;
}

//copy button
function copyPassword(){
    passwordBox.select(); //select text 
    document.execCommand("copy"); //select and copy
}
