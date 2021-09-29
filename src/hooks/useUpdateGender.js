import { useMutation } from "@apollo/client";
import { UpdateGender } from "../graphql/mutation";
import { GetUser } from "../graphql/query"
export default function useUpdateGender() {
  const [updateGender, { loading: loadingUpdate }] = useMutation(UpdateGender,{
    refetchQueries: [GetUser],
  });
  return {
    updateGender,
    loadingUpdate,
  };
}