import { gql } from "@apollo/client";

export const InsertUser = gql`
    mutation MyMutation($age: Int!, $fullname: String!, $gender: String!, $password: String!, $username: String!) {
        insert_user_one(object: {age: $age, fullname: $fullname, gender: $gender, password: $password, username: $username}) {
        age
        fullname
        gender
        password
        username
        }
    }`;