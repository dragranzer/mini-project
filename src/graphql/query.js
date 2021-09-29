import { gql } from "@apollo/client";

export const GetUser = gql`
query MyQuery($username: String!) {
    user(where: {username: {_eq: $username}}) {
      age
      fullname
      gender
      password
      username
    }
  }
  
`