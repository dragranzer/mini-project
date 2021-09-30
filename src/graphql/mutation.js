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

export const InsertBarang = gql `
mutation MyMutation($category: String!, $description: String!, $name: String!, $imgUrl: String!, $stock: Int!, $harga: Int!) {
    insert_fishes_one(object: {category: $category, description: $description, name: $name, imgUrl: $imgUrl, stock: $stock, harga: $harga}) {
      category
      description
      id
      imgUrl
      name
      stock
      harga
    }
  }
`

export const UpdateFullname = gql `
mutation MyMutation2($id: Int!, $fullname: String!) {
    update_user(where: {id: {_eq: $id}}, _set: {fullname: $fullname}) {
      returning {
        age
        fullname
        gender
        id
        password
        username
      }
    }
  }
`

export const UpdateUsername = gql `
mutation MyMutation2($id: Int!, $newUsername: String!) {
    update_user(where: {id: {_eq: $id}}, _set: {username: $newUsername}) {
      returning {
        age
        fullname
        gender
        id
        password
        username
      }
    }
  }
`


export const UpdateGender = gql `
mutation MyMutation2($id: Int!, $gender: String!) {
    update_user(where: {id: {_eq: $id}}, _set: {gender: $gender}) {
      returning {
        age
        fullname
        gender
        id
        password
        username
      }
    }
  }
`

export const UpdateAge = gql `
mutation MyMutation2($id: Int!, $age: Int!) {
    update_user(where: {id: {_eq: $id}}, _set: {age: $age}) {
      returning {
        age
        fullname
        gender
        id
        password
        username
      }
    }
  }
`

export const UpdatePassword = gql `
mutation MyMutation2($id: Int!, $password: String!) {
    update_user(where: {id: {_eq: $id}}, _set: {password: $password}) {
      returning {
        age
        fullname
        gender
        id
        password
        username
      }
    }
  }
`
