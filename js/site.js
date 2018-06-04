
let divUserDetails = document.querySelector(".container")

for (let index =0; index < users.length; index++) {

   let userDetails = `<div class="divUserInfo"> 
                    <p><b>Name:&nbsp&nbsp</b>${users[index].name}</p> 
                    <p><b>User Name:&nbsp&nbsp</b>${users[index].username}</p>
                    <p><b>Email:&nbsp&nbsp</b> ${users[index].email}/p>                                         
                    <p><b>Street:&nbsp&nbsp</b>${users[index].address.street}</p>
                    <p><b>Suite:&nbsp&nbsp</b>${users[index].address.suite}</p>
                    <p><b>City:&nbsp&nbsp</b>${users[index].address.city}</p>
                    <p><b>Zipcode:&nbsp&nbsp</b>${users[index].address.zipcode}</p>                                                   
                    <p><b>Latitude:&nbsp&nbsp</b>${users[index].address.geo.lat}</p>
                    <p><b>Longitude:&nbsp&nbsp</b>${users[index].address.geo.lng}</p>
                    <p><b>Phone:&nbsp&nbsp</b>${users[index].phone}</p>
                    <p><b>Website:&nbsp&nbsp</b>${users[index].website}</p>
                    <p><b>Company Name:&nbsp&nbsp</b>${users[index].company.name}</p>
                    </div>` 
                                        
    divUserDetails.innerHTML += userDetails            
    
}
