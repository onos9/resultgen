import { IResult, ProductModificationStatus } from "../models/result.interface";
export const ADD_PRODUCT: string = "ADD_PRODUCT";
export const EDIT_PRODUCT: string = "EDIT_PRODUCT";
export const REMOVE_PRODUCT: string = "REMOVE_PRODUCT";
export const CHANGE_PRODUCT_AMOUNT: string = "CHANGE_PRODUCT_AMOUNT";
export const CHANGE_PRODUCT_PENDING_EDIT: string = "CHANGE_PRODUCT_PENDING_EDIT";
export const CLEAR_PRODUCT_PENDING_EDIT: string = "CLEAR_PRODUCT_PENDING_EDIT";
export const SET_MODIFICATION_STATE: string = "SET_MODIFICATION_STATE";

export function addProduct(result: IResult): IAddProductActionType {
    return { type: ADD_PRODUCT, result: result };
}

export function editProduct(result: IResult): IEditProductActionType {
    return { type: EDIT_PRODUCT, result: result };
}

export function removeProduct(id: number): IRemoveProductActionType {
    return { type: REMOVE_PRODUCT, id: id };
}

export function changeProductAmount(id: number, amount: number): IChangeProductAmountType {
    return { type: CHANGE_PRODUCT_AMOUNT, id: id, amount: amount };
}

export function changeSelectedProduct(result: IResult): IChangeSelectedProductActionType {
    return { type: CHANGE_PRODUCT_PENDING_EDIT, result: result };
}

export function clearSelectedProduct(): IClearSelectedProductActionType {
    return { type: CLEAR_PRODUCT_PENDING_EDIT };
}

export function setModificationState(value: ProductModificationStatus): ISetModificationStateActionType {
    return { type: SET_MODIFICATION_STATE, value: value };
}

interface IAddProductActionType { type: string, result: IResult };
interface IEditProductActionType { type: string, result: IResult };
interface IRemoveProductActionType { type: string, id: number };
interface IChangeSelectedProductActionType { type: string, result: IResult };
interface IClearSelectedProductActionType { type: string };
interface ISetModificationStateActionType { type: string, value:  ProductModificationStatus};
interface IChangeProductAmountType {type: string, id: number, amount: number};