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