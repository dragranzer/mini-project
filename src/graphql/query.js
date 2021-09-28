import { gql } from "@apollo/client";

export const GetUser = gql`
    query MyQuery($username: String!, $password: String!) {
        user(where: {username: {_eq: $username}, password: {_eq: $password}}) {
        age
        fullname
        gender
        password
        username
        }
    }
`