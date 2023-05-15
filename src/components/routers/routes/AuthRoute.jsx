import { Outlet, Navigate } from 'react-router-dom'
import { useBearStore } from '../../../context/Store'

const AuthRoute = () => {
    const userData = useBearStore((state) => state.userData)
    return(
        userData.isVerified ? <Outlet/> : <Navigate to="/auth/login"/>
    )
}

export default AuthRoute