import React, { useEffect } from "react";

//domain whitelisted, this isn't dangerous.
const facebookAppId = "108033484048488";

const CustomerChat = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: "v5.0",
      });
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={facebookAppId}
        theme_color="#003eff"
        greeting_dialog_display="hide"
        logged_in_greeting="Hello, do you have any questions for us?"
        logged_out_greeting="Hello, do you have any questions for us?"
      />
    </>
  );
};

export default CustomerChat;
