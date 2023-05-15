import { Outlet, Navigate } from 'react-router-dom'
import { useBearStore } from '../../../context/Store'

const PrivateRoute = () => {
    const userData = useBearStore((state) => state.userData)
    return(
        !userData.isVerified ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute