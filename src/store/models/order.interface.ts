import { IResult } from "./result.interface";

export interface IOrder {
    id: number;
    name: string;
    result: IResult;
    amount: number;
    totalPrice: number;
}