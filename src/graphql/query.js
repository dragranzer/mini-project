import { gql } from "@apollo/client";

export const GetUser = gql`
query MyQuery($username: String!) {
    user(where: {username: {_eq: $username}}) {
      age
      fullname
      gender
      password
      username
      id
    }
  }
  
`

export const GetUser2 = gql`
query MyQuery2($username: String!) {
    user(where: {username: {_eq: $username}}) {
      age
      fullname
      gender
      password
      username
      id
    }
  }
  
`

export const GetUserbyID = gql`
query MyQuery3($id: Int!) {
  user_by_pk(id: $id) {
    age
    fullname
    gender
    password
    username
    id
  }
}
  
`