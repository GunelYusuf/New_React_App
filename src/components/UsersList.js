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

 export const UsersList = ({users,onUserDelete = [], hasEmil }) =>{
    return (
        <>
          <ul>
              {users.map(({name,surname,age,email},index) => (
             <React.Fragment key={email}>
             <li style={{textAlign: 'left'}} >
             {index + 1}. {name} {surname} {age} (<a href={`mailto: ${email}`}>{email}</a>)
             </li>
             <button onClick={() => onUserDelete(email)}>Remove</button>
             </React.Fragment>
         
          ))}
           </ul>
          {hasEmil && <span>We have at least one Emil</span>}
        </>
    )
 }