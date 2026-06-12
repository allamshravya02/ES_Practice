function fetchUserName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const name="cvr123";
        resolve(name)},1000);
    });
}

function fetchUserDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user={
                Name:"Arya",Branch:"CSE",Section:"E"
            };
        resolve(user)},2000);
    });
}
fetchUserDetails()
 .then((result)=>console.log(result))
 .catch((err)=>console.log("Error"+err));

fetchUserName()
 .then((res)=>console.log(res))
 .catch((err)=>console.log(err));