import React from "react";

// export const UsersList = ({users = []}) =>{
//     const renderUsersList = () => {
//       return  users.map(({name,surname,age,email},index) => (
//           <React.Fragment key={email}>
//            <li style={{textAlign: 'left'}} >
//              {index+1}. {name} {surname} {age} (<a href={`mailto: ${email}`}>{email}</a>)
//           </li>
//            <li style={{textAlign: 'left'}}>
//              {index+1}. {name} {surname} {age} (<a href={`mailto: ${email}`}>{email}</a>)
//           </li>
//           </React.Fragment>
         
//         ));
//     }
//     return (
//         <ul>{renderUsersList()}</ul>
//     )
//  }

 export const UsersList = ({users = []}) =>{
    return (
        <ul>{users.map(({name,surname,age,email},index) => (
          <React.Fragment key={email}>
           <li style={{textAlign: 'left'}} >
             {index+1}. {name} {surname} {age} (<a href={`mailto: ${email}`}>{email}</a>)
          </li>
           <li style={{textAlign: 'left'}}>
             {index+1}. {name} {surname} {age} (<a href={`mailto: ${email}`}>{email}</a>)
          </li>
          </React.Fragment>
         
        ))}</ul>
    )
 }