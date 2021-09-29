import { useMutation } from "@apollo/client";
import { UpdateUsername } from "../graphql/mutation";
import { GetUser } from "../graphql/query"
export default function useUpdateUsername() {
  const [updateUsername, { loading: loadingUpdate }] = useMutation(UpdateUsername,{
    refetchQueries: [GetUser],
  });
  return {
    updateUsername,
    loadingUpdate,
  };
}