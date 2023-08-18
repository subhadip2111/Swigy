import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineFunc = () => setIsOnline(true);
    const offlineFunc = () => setIsOnline(false);

    window.addEventListener("online", onlineFunc);
    window.addEventListener("offline", offlineFunc);
//we need to re moved listner eitherwise its call all page
    return () => {
      window.removeEventListener("online", onlineFunc);
      window.removeEventListener("offline", offlineFunc);
      };
      
      // I am using Empty Array because i want to use thihs only one time 
  }, []);

  return isOnline;
};
export default useOnline;