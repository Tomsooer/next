"use client"

import {useAuthStore} from "@/schema/store/auth.store";
import {useSession} from "next-auth/react";
import {useEffect} from "react";

interface IProps {
    children: React.ReactNode;
}

const AppLoader = ({children}: IProps) => {
    const {data: session, status} = useSession();
    const {setAuthState} = useAuthStore();
    console.log('AAA: ', session, status)

    useEffect(() => {
        setAuthState(status, session);
        console.log('BBB: ', session, status)
    }, [status, session, setAuthState]);

    return <>{children}</>;
}

export default AppLoader;
