const storeduserinformation=localStorage.getItem("userinformation"); //first it will empty

if(storeduserinformation){
console.log("we have data in localstorage");
 
const stringdatatoconvertmaindata=JSON.parse(storeduserinformation);
}else{
    userinformationtobestored();
}

// Function to store user information in local storage
function userinformationtobestored(){
    const firstName=prompt("Enter your First Name:");
    const lastName=prompt("Enter your LastName");
    const country=prompt("Enter your country Name");
    const state=prompt("Enter ypur state Name");
    const city=prompt("enter your city Name");
    const village=prompt("enter your village Name");
    const phone=prompt("enter your phone Number");

 //store the informatin in local storage

    const userInfo={   
        firstName,
        lastName,
        country,
        state,
        city,
        village,
        phone,
    };
    localStorage.setItem("userinformation",JSON.stringify(userInfo)); //set the value in local Storage

    document.getElementById("firstname").textContent=userInfo.firstName;
    document.getElementById("lastname").textContent=userInfo.lastName;
    document.getElementById("country").textContent=userInfo.country;
    document.getElementById("state").textContent=userInfo.state;
    document.getElementById("city").textContent=userInfo.city;
    document.getElementById("village").textContent=userInfo.village;
    document.getElementById("Phonenum").textContent=userInfo.phone;
}
userinformationtobestored();