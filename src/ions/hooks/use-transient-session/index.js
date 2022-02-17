import { useSession } from "next-auth/react";
import { useEffect } from "react";
import useStore from "../../store";

const useTransientSession = () => {
	const { data: session } = useSession();
	useEffect(() => {
		useStore.getState().setSession(session);
	}, [session]);
};

export default useTransientSession;
