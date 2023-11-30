import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import { Navigate } from "react-router-dom";

export default function BaseAuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {props.children}
        </>
    )
}