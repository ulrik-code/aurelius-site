// Field Notes early signup, shared by /emperor and /stoic. Both land in the same Kit list;
// each page has its own Kit form so Kit shows which account a signup came from.
// Keys match data-source on each page's form. An empty or missing ID means signups are not open.
var KIT_FORMS = { emperor: "10226443", stoic: "10226445" };

document.querySelectorAll("form[data-newsletter]").forEach(function (form) {
  var msg = form.querySelector(".msg");
  var button = form.querySelector("button");
  var input = form.querySelector("input[type=email]");
  var formId = KIT_FORMS[form.getAttribute("data-source")] || "";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "That email doesn't look right.";
      input.focus();
      return;
    }
    if (!formId) {
      msg.textContent = "Signups open soon.";
      return;
    }
    var data = new FormData();
    data.set("email_address", email);
    button.disabled = true;
    fetch("https://app.kit.com/forms/" + formId + "/subscriptions", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })
      // Kit answers 200 even when it rejects the address, so read its status field.
      .then(function (r) {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then(function (res) {
        if (!res || res.status !== "success") {
          button.disabled = false;
          var reason = res && res.errors && res.errors.messages && res.errors.messages[0];
          msg.textContent = reason ? reason + "." : "Something went wrong. Try again in a minute.";
          return;
        }
        form.querySelector(".row").remove();
        msg.textContent = "Check your inbox to confirm.";
      })
      .catch(function () {
        button.disabled = false;
        msg.textContent = "Something went wrong. Try again in a minute.";
      });
  });
});
