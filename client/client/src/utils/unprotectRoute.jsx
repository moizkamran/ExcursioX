import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnprotectRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.user.currentUser?.isPlanMember);
    console.log(isAuth);
    
    if (isAuth) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export default UnprotectRoute;

