class Helpers {        
    getUsersByAge(response, ageMin, ageMax) {
        return response.users
          .filter(user => user.age >= ageMin && user.age <= ageMax)
          .map(user => user.name);
    }
  
    getUsersByRole(response, role) {
        return response.users
        .filter(user => user.role === role)
        .map(user => user.name);
    }
  
    getUsersByCountry(response, country) {
        return response.users
        .filter(user => user.country === country)
        .map(user => user.name);
    }
    
    getUsersByBalance(response, minBalance, maxBalance) {
        return response.users
        .filter(user => user.balance >= minBalance && user.balance <= maxBalance)
        .map(user => user.name);
    }
  }

  export default new Helpers();

// class Helpers {
//     getUsersByAge(response, ageMin, ageMax) {
//         // return response.users.filter((user) => user.age >= ageMin && user.age <= ageMax);
//         const users = [];
        
//         for (const user of response.users) {
//             if (user.age >= ageMin && user.age <= ageMax) {
//                 users.push(user);
//             }
//         }
//         return users;
//     }
  
//     getUsersByRole(response, role) {
//         // return response.users.filter((user) => user.role === role);
//         const users = [];

//         for (const user of response.users) {
//             if (user.role === role) {
//                 users.push(user);
//             }
//         }
//         return users;
//     }
  
//     getUsersByCountry(response, country) {
//         // return response.users.filter((user) => user.country === country);

//         const users = [];
        
//         for (const user of response.users) {
//             if (user.country === country) {
//                 users.push(user);
//             }
//         }
//         return users;
//     }
    
//     getUsersByBalance(response, minBalance, maxBalance) {
//         // return response.users.filter((user) => user.balance >= minBalance && user.balance <= maxBalance);
//         const users = [];

//         for (const user of response.users) {
//           if (user.balance >= minBalance && user.balance <= maxBalance) {
//             users.push(user);
//           }
//         }
    
//         return users;
//     }
//   }
  
//   export default new Helpers();

