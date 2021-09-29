import { useMutation } from "@apollo/client";
import { UpdateFullname } from "../graphql/mutation";
import { GetUser } from "../graphql/query"
export default function useUpdateFullname() {
  const [updateFullname, { loading: loadingUpdate }] = useMutation(UpdateFullname,{
    refetchQueries: [GetUser],
  });
  return {
    updateFullname,
    loadingUpdate,
  };
}