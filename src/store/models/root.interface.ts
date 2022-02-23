import { IResult, ProductModificationStatus } from "./result.interface";
import { INotification } from "./notification.interface";
import { IUser } from "./user.interface";
import { IOrder } from "./order.interface";
import { IAccount } from "./account.interface";

export interface IRootPageStateType {
    area: string;
    subArea: string;
}

export interface IRootStateType {
    page: IRootPageStateType;
}
export interface IStateType {
    root: IRootStateType;
    results: IResultState;
    notifications: INotificationState;
    users: IUserState;
    orders: IOrdersState;
    account: IAccount;
}

export interface IResultState {
    results: IResult[];
    selectedProduct: IResult | null;
    modificationState: ProductModificationStatus;
}

export interface IActionBase {
    type: string;
    [prop: string]: any;
}

export interface IOrdersState {
    orders: IOrder[];
}

export interface INotificationState {
    notifications: INotification[];
}

export interface IUserState {
    users: IUser[];
    admins: IUser[];
}