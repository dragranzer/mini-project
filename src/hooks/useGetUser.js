import { useLazyQuery } from "@apollo/client";
import { GetUser } from "../graphql/query";

export default function useGetData() {
    const [getUser, { data, loading, error }] = useLazyQuery(GetUser);
    console.log(data)
    return {
      user: data ? data.user : [],
      loading,
      error,
      getUser
    };
  }