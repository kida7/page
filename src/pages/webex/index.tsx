import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WebexPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    const code = router.query.code as string;

    if (code) {
      window.close();
      //@ts-ignore
      new window.PalmServiceBridge().call('luna://com.webos.applicationManager/launch', `{"id":"test-login-webex", "params": {"code":"${code}"}}`);
    }
  }, [router.query.code]);

  return null;
};

export default WebexPage;
