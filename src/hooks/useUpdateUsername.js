import { useMutation } from "@apollo/client";
import { UpdateUsername } from "../graphql/mutation";
import { GetUser } from "../graphql/query"
export default function useUpdateUsername(props) {
  console.log(props)
  const [updateUsername, { loading: loadingUpdateUsername }] = useMutation(UpdateUsername,{
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: GetUser,
        variables: { username: props }
      }
    ],
    notifyOnNetworkStatusChange: true
  });
  return {
    updateUsername,
    loadingUpdateUsername,
  };
}