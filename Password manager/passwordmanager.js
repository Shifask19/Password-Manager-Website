function maskPassword(pass){
  let str="";
  for(let i=0;i<pass.length;i++)
  {
    str+="*"
  }
  return str;
}
function copyText(txt) {
  navigator.clipboard.writeText(txt).then(
    ()=>{
      /*clipboard successfullt set  */
      document.getElementById("alert").style.display="inline";
      setTimeout(()=>{
        document.getElementById("alert").style.display="none";     
      },2000)
    },
    ()=>{
      /*Clipboard Write Failed */
     alert("Clipboard Copying Failed!");
    },
  );
}
  //Delete Function
  const DeletePAsswords=(website)=>{
    let data=localStorage.getItem("passwords");
    let arr=JSON.parse(data);
    arrUpdate=arr.filter((e)=>{
     return e.website!=website;
    })
    localStorage.setItem("passwords",JSON.stringify(arrUpdate));
      
   alert("successFully Deleted!!");
   showPasswords()
   }


//logic to fill the data

const ShowPAssword = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null || JSON.parse(data).length==0) {
    tb.innerHTML = "No data to Show"
  }
  else {
    tb.innerHTML=`  <tr>
    <td> CWH</td>
    <td>codewithharry.com</td>
    <td>1234</td>
    <td><button id="del"> Deletet</button></td>
   </tr>`
    let arr = JSON.parse(data);
    let  str = "";
    for (i = 0; i < arr.length; i++) {
      const element = arr[i];
      str+= ` <tr>
  <td>${element.website}<img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"> </td>
  <td>${element.username} <img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
  <td>${element.password}<img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
  <td>${maskPassword(element.password)}<button id="del" onclick="DeletePAsswords()" id="${element.website}">Delete</button></td>
  </tr>`
    }
    tb.innerHTML = tb.innerHTML + str;
  }
}

console.log("working");
ShowPAssword();
document.querySelector("#sub").addEventListener('click', (e) => {
  e.preventDefault();
  console.log("Submitted!");
  console.log(website.value, username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({ website: website.value, username: username.value, password: password.value });
    alert("PAssword Saved!");
    localStorage.setItem("passwords", JSON.stringify(json))
  } else {

    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({ website: website.value, username: username.value, password: password.value });
    alert("PAssword Saved!");
    localStorage.setItem("passwords", JSON.stringify(json))

  }
   ShowPAssword();

})

//copy buttons