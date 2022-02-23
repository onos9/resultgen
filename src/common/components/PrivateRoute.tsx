import { Navigate, Outlet, useLocation } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { IStateType } from "../../store/models/root.interface";
import { IAccount } from "../../store/models/account.interface";

interface Props {
  component: React.ComponentType
  //path?: string
  //roles: Array<ROLE>
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {

  const account: IAccount = useSelector((state: IStateType) => state.account);
  const location = useLocation()

  return account?.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}