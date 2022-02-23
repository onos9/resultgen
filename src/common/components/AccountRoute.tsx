import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { IStateType } from "../../store/models/root.interface";
import { IAccount } from "../../store/models/account.interface";
import { useLocation } from "react-router";

export const AccountRoute: React.FC = () => {

  const account: IAccount = useSelector((state: IStateType) => state.account);
  const location = useLocation()

  return account?.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}