import React from "react";
import { useSelector } from "react-redux";
import { IStateType, IResultState } from "../../store/models/root.interface";
import { IResult } from "../../store/models/result.interface";

export type productListProps = {
  onSelect?: (result: IResult) => void;
  children?: React.ReactNode;
};

function ResultList(props: productListProps): JSX.Element  {
  const results: IResultState = useSelector((state: IStateType) => state.results);

  const productElements: (JSX.Element | null)[] = results.results.map(result => {
    if (!result) { return null; }
    return (<tr className={`table-row ${(results.selectedProduct && results.selectedProduct.id === result.id) ? "selected" : ""}`}
      onClick={() => {
        if(props.onSelect) props.onSelect(result);
      }}
      key={`product_${result.id}`}>
      <th scope="row">{result.id}</th>
      <td>{result.name}</td>
      <td>{result.category}</td>
      <td>{result.amount}</td>
      <td>{result.price}</td>
    </tr>);
  });

  return (
    <div className="table-responsive portlet">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {productElements}
        </tbody>
      </table>
    </div>
  );
}

export default ResultList;
