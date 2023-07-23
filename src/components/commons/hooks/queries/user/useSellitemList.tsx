import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_MYPOINT = gql`
  query fetchPointTransactionsOfSelling {
    fetchPointTransactionsOfSelling {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const useQuerysellItem = () => {
  const result =
    useQuery<Pick<IQuery, "fetchPointTransactionsOfSelling">>(FETCH_MYPOINT);
  return result;
};