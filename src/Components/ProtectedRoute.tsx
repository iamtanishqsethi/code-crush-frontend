import { JSX, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type User = {
    firstName: string;
    photoUrl?: string;
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();
    const user = useSelector((store: { user: User | null }) => store.user);
    const [checkedAuth, setCheckedAuth] = useState(false);

    useEffect(() => {
        if (user === null) {
            const timeout = setTimeout(() => {
                navigate("/login");
            }, 500);
            return () => clearTimeout(timeout);
        } else {
            setCheckedAuth(true);
        }
    }, [user]);

    if (!user && !checkedAuth) {
        return <p>Loading...</p>;
    }

    return children;
};

export default ProtectedRoute;
