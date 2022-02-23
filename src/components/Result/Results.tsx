import React, { Fragment, Dispatch, useState, useEffect } from "react";
import ProductList from "./ResultList";
import ProductForm from "./ResultForm";
import TopCard from "../../common/components/TopCard";
import "./Results.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPath } from "../../store/actions/root.actions";
import { IResultState, IStateType, IRootPageStateType } from "../../store/models/root.interface";
import Popup from "reactjs-popup";
import { removeProduct, clearSelectedProduct, setModificationState,
  changeSelectedProduct } from "../../store/actions/results.action";
import { addNotification } from "../../store/actions/notifications.action";
import { ProductModificationStatus, IResult } from "../../store/models/result.interface";

const Result: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const results: IResultState = useSelector((state: IStateType) => state.results);
  const path: IRootPageStateType = useSelector((state: IStateType) => state.root.page);
  const numberItemsCount: number = results.results.length;
  const totalPrice: number = results.results.reduce((prev, next) => prev + ((next.price * next.amount) || 0), 0);
  const totalAmount: number = results.results.reduce((prev, next) => prev + (next.amount || 0), 0);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    dispatch(clearSelectedProduct());
    dispatch(updateCurrentPath("results", "list"));
  }, [path.area, dispatch]);

  function onProductSelect(result: IResult): void {
    dispatch(changeSelectedProduct(result));
    dispatch(setModificationState(ProductModificationStatus.None));
  }

  function onProductRemove() {
    if(results.selectedProduct) {
      setPopup(true);
    }
  }

  return (
    <Fragment>
      <h1 className="h3 mb-2 text-gray-800">Results</h1>
      <p className="mb-4">Results here</p>
      <div className="row">
        <TopCard title="PRODUCT COUNT" text={`${numberItemsCount}`} icon="box" class="primary" />
        <TopCard title="PRODUCT AMOUNT" text={`${totalAmount}`} icon="warehouse" class="danger" />
        <TopCard title="SUMMARY PRICE" text={`$${totalPrice}`} icon="dollar-sign" class="success" />
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-green">Product List</h6>
              <div className="header-buttons">
                <button className="btn btn-success btn-green" onClick={() =>
                  dispatch(setModificationState(ProductModificationStatus.Create))}>
                  <i className="fas fa fa-plus"></i>
                </button>
                <button className="btn btn-success btn-blue" onClick={() =>
                  dispatch(setModificationState(ProductModificationStatus.Edit))}>
                  <i className="fas fa fa-pen"></i>
                </button>
                <button className="btn btn-success btn-red" onClick={() => onProductRemove()}>
                  <i className="fas fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <ProductList
                onSelect={onProductSelect}
              />
            </div>
          </div>
        </div>
        {((results.modificationState === ProductModificationStatus.Create)
          || (results.modificationState === ProductModificationStatus.Edit && results.selectedProduct)) ?
          <ProductForm /> : null}
      </div>


      <Popup
        className="popup-modal"
        open={popup}
        onClose={() => setPopup(false)}
        closeOnDocumentClick
      >
        <div className="popup-modal">
          <div className="popup-title">
            Are you sure?
          </div>
          <div className="popup-content">
            <button type="button"
              className="btn btn-danger"
              onClick={() => {
                if (!results.selectedProduct) {
                  return;
                }
                dispatch(addNotification("Product removed", `Product ${results.selectedProduct.name} was removed`));
                dispatch(removeProduct(results.selectedProduct.id));
                dispatch(clearSelectedProduct());
                setPopup(false);
              }}>Remove
              </button>
          </div>
        </div>
      </Popup>
    </Fragment >
  );
};

export default Result;
