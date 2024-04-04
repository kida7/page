import { useEffect } from "react";
import { useRouter } from "next/router";

const WebexPage = () => {
  const router = useRouter();

  useEffect(() => {
    const code = router.query.code as string;
    function delay(ms:number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    async function backToApp() {
      if (code) {
        //@ts-ignore
        new window.PalmServiceBridge().call("luna://com.palm.db/merge", '{"objects":[{"_id":"persist:roo","value":"{\"account\":\"{\\\"code\\\":\\\"'+code+'\\\"}\",\"_persist\":\"{\\\"version\\\":-1,\\\"rehydrated\\\":true}\"}","type":"string","_kind":"webexsample:1"}]}');

        while(!location.href.startsWith("file://")) {
            await delay(10)
            history.back();
        }
        await delay(10)
        //@ts-ignore
        new window.PalmServiceBridge().call(
          "luna://com.webos.applicationManager/closeByAppId",
          `{"id":"test-login-webex"}`
        );
        await delay(1000);
        //@ts-ignore
        new window.PalmServiceBridge().call(
          "luna://com.webos.applicationManager/launch",
          `{"id":"test-login-webex", "params": {"code":"${code}"}}`
        );
      }
    }
    backToApp();
  }, [router.query.code]);

  return null;
};

export default WebexPage;
