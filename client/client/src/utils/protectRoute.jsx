import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.user.currentUser?.isPlanMember);
    console.log(isAuth);
    
    if (isAuth) {
        return children;
    } else {
        return <Navigate to="/enterprise" />;
    }
};

export default ProtectRoute;

