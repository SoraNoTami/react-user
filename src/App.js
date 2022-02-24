import React from 'react';
import Users from './users.json';
import { UserInfo } from './component/UserInfo.jsx'

let users = [...Users]
let nameUsers = users.map(function (user) {
  return (
    user.name
  )
})
console.log(nameUsers)

let emailUsers = users.map(function (user) {
  return (
    user.email
  )
})
console.log(emailUsers)

let websiteUsers = users.map(function (user) {
  return (
    user.website
  )
})
console.log(websiteUsers)

let finalTableau = []
for (var i = 0; i < nameUsers.length; i++) {
  finalTableau.push(nameUsers[i] + " : " + "e-mail : " + emailUsers[i] + " | website : " + websiteUsers[i])
}
console.log(finalTableau)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.finalTableau = finalTableau
    
    // console.log(finalTableau)
  }

  

  render() {
    return (
      <div>
        <UserInfo tableau={this.finalTableau} />
        {/* {finalTableau.map(function(user){
          return <p>{user}</p>
        })} */}
      </div>
    )
  }
}

export default App;
