// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
} 
let partOne = ""; 

async function getUserID(id){

  const firstPart = await vault(id)
  // vault(id).then((data) => {
    
    // console.log(firstPart)
  // }); 
  central(id).then((data) =>{
    let DBnumber = data;
    // console.log(DBnumber);
    // console.log(data)
    if(DBnumber==="db1"){
      db1(id).then((data) =>{
        console.log({...firstPart, ... data})
      })}
      else if(DBnumber === "db2"){
        db2(id).then((data) =>{
          console.log({...firstPart, ... data})
        })
      }
      else if(DBnumber === "db3"){
        db3(id).then((data)=> {
          console.log({...firstPart, ... data})
        })
      }
  }) 
}
getUserID(1);
getUserID(2);
getUserID(3);



// async function getUserIDTWO(id){
//   central(id).then((data) =>{
//     let DBnumber = data;
//     console.log(DBnumber);
//     console.log(data)
//     if(DBnumber==="db1"){
//       db1(id).then((data) =>{
//         console.log(data)
//       })}
//       else if(DBnumber === "db2"){
//         db2(id).then((data) =>{
//           console.log(data)
//         })
//       }
//       else if(DBnumber === "db3"){
//         db3(id).then((data)=> {
//           console.log(data)
//         })
//       }
//   }) 
//   }

// getUserIDTWO(1);

// async function forrealData(id){
//   db1(id).then((data)=>{
//     console.log(data)
//   })
// }
// forrealData(1);
