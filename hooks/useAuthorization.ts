import {useEffect, useState} from "react";
import {retrieveUserSession} from "@/storage";

export function useAuthorization() {
    const [isAuthorized, setupAuth] = useState<boolean>(false)

    const [isLoadingComplete, setLoadingState] = useState<boolean>(false)
    useEffect(() => {
        async function setAuth(){
            const token = await retrieveUserSession()
            setupAuth(!!token)
            setLoadingState(true)
        }

        setAuth()
    },[])
    return [isAuthorized, isLoadingComplete]
}