import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import MainScreen from "../../screens/MainScreen";
import LoginScreen from "../../screens/LoginScreen";
import PrivateRoute from "../routes/PrivateRoute";
import RegisterScreen from "../../screens/RegisterScreen";

const MainRouter = () => {
    return (
        <Routes>
            <Route element={<AuthRoute />}>
                <Route path="/" element={<MainScreen />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="auth/login" element={<LoginScreen />} />
                <Route path="auth/register" element={<RegisterScreen/>}/>
            </Route>
        </Routes>
    );
};

export default MainRouter;
