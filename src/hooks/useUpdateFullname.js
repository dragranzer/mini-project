import { useMutation } from "@apollo/client";
import { UpdateFullname } from "../graphql/mutation";
import { GetUserbyID } from "../graphql/query"
export default function useUpdateFullname(props) {

  console.log("masuk useUpdateFullname", props)
  const [updateFullname, { loading: loadingUpdate }] = useMutation(UpdateFullname,{
    refetchQueries: [{
      query: GetUserbyID,
      variables: { username: props }
    }],
  });
  return {
    updateFullname,
    loadingUpdate,
  };
}