export const pardot = `
piAId = "1055273";
piCId = "";
piHostname = "go.ichras.com";

(function () {
  function async_load() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src =
      ("https:" == document.location.protocol ? "https://" : "http://") +
      piHostname +
      "/pd.js";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(s, c);
  }

  if (window.attachEvent) {
    window.attachEvent("onload", async_load);
  } else {
    window.addEventListener("load", async_load, false);
  }
})();
`;
