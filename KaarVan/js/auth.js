// KAARVAN — auth.js
// Frontend-only demo authentication. No real backend; structured so a real
// auth API could later replace fakeLogin()/fakeRegister() below.

function fakeLogin(identifier, password) {
  // Demo: any well-formed input "succeeds" and creates a local session.
  const name = identifier.includes("@") ? identifier.split("@")[0].replace(/[.\d_]/g, " ") : "KAARVAN Shopper";
  const user = {
    name: name.trim().replace(/\b\w/g, c => c.toUpperCase()) || "KAARVAN Shopper",
    email: identifier.includes("@") ? identifier : `${identifier}@example.com`,
    phone: identifier.includes("@") ? "" : identifier,
  };
  Store.setUser(user);
  return user;
}

function initLoginPage() {
  const form = Utils.qs("#loginForm");
  if (!form) return;
  Utils.qs("#togglePwVisibility")?.addEventListener("click", (e) => {
    const input = Utils.qs("#loginPassword");
    input.type = input.type === "password" ? "text" : "password";
    e.currentTarget.querySelector("i").setAttribute("data-lucide", input.type === "password" ? "eye" : "eye-off");
    Utils.refreshIcons();
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = Utils.qs("#loginId").value.trim();
    const pw = Utils.qs("#loginPassword").value;
    let valid = true;
    if (!id) { setError("#loginId", "Enter your email or phone number"); valid = false; } else clearError("#loginId");
    if (pw.length < 4) { setError("#loginPassword", "Enter your password"); valid = false; } else clearError("#loginPassword");
    if (!valid) return;

    const btn = Utils.qs("#loginSubmitBtn");
    btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> Logging in...`;
    setTimeout(() => {
      fakeLogin(id, pw);
      Toast.show("Welcome back!", "success");
      window.location.href = "account.html";
    }, 700);
  });
  Utils.qs("#googleLoginBtn")?.addEventListener("click", () => {
    fakeLogin("shopper@gmail.com", "google-oauth-demo");
    Toast.show("Signed in with Google (demo)", "success");
    setTimeout(() => window.location.href = "account.html", 500);
  });
}

function initRegisterPage() {
  const form = Utils.qs("#registerForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = Utils.qs("#regName").value.trim();
    const email = Utils.qs("#regEmail").value.trim();
    const phone = Utils.qs("#regPhone").value.trim();
    const pw = Utils.qs("#regPassword").value;
    const pw2 = Utils.qs("#regPasswordConfirm").value;
    let valid = true;

    if (name.length < 2) { setError("#regName", "Enter your full name"); valid = false; } else clearError("#regName");
    if (!Utils.emailValid(email)) { setError("#regEmail", "Enter a valid email address"); valid = false; } else clearError("#regEmail");
    if (!Utils.phoneValid(phone)) { setError("#regPhone", "Enter a valid 10-digit mobile number"); valid = false; } else clearError("#regPhone");
    if (pw.length < 6) { setError("#regPassword", "Password must be at least 6 characters"); valid = false; } else clearError("#regPassword");
    if (pw2 !== pw || !pw2) { setError("#regPasswordConfirm", "Passwords do not match"); valid = false; } else clearError("#regPasswordConfirm");
    if (!valid) return;

    const btn = Utils.qs("#registerSubmitBtn");
    btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> Creating account...`;
    setTimeout(() => {
      Store.setUser({ name, email, phone });
      Toast.show("Account created — welcome to KAARVAN!", "success");
      window.location.href = "account.html";
    }, 700);
  });
}

function initForgotPasswordPage() {
  const requestForm = Utils.qs("#fpRequestForm");
  const otpForm = Utils.qs("#fpOtpForm");
  const resetForm = Utils.qs("#fpResetForm");
  if (!requestForm) return;

  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = Utils.qs("#fpEmail").value.trim();
    if (!Utils.emailValid(email)) { setError("#fpEmail", "Enter a valid email address"); return; }
    clearError("#fpEmail");
    Utils.qs("#fpStep1").classList.add("hide");
    Utils.qs("#fpStep2").classList.remove("hide");
    Toast.show(`OTP sent to ${email} (demo: use 123456)`, "info", 4000);
  });

  otpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const otp = Utils.qs("#fpOtp").value.trim();
    if (otp !== "123456") { setError("#fpOtp", "Incorrect OTP. Try 123456 for this demo."); return; }
    clearError("#fpOtp");
    Utils.qs("#fpStep2").classList.add("hide");
    Utils.qs("#fpStep3").classList.remove("hide");
  });

  resetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = Utils.qs("#fpNewPassword").value;
    const pw2 = Utils.qs("#fpNewPasswordConfirm").value;
    if (pw.length < 6) { setError("#fpNewPassword", "Password must be at least 6 characters"); return; }
    if (pw !== pw2) { setError("#fpNewPasswordConfirm", "Passwords do not match"); return; }
    clearError("#fpNewPassword"); clearError("#fpNewPasswordConfirm");
    Toast.show("Password reset successfully", "success");
    setTimeout(() => window.location.href = "login.html", 900);
  });
}

function setError(sel, msg) {
  const input = Utils.qs(sel);
  const field = input.closest(".form-field");
  field.classList.add("has-error");
  const err = Utils.qs(".form-error-msg", field);
  if (err) { err.textContent = msg; err.classList.add("show"); }
}
function clearError(sel) {
  const input = Utils.qs(sel);
  const field = input.closest(".form-field");
  field.classList.remove("has-error");
  Utils.qs(".form-error-msg", field)?.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
  bootShell("home");
  initLoginPage();
  initRegisterPage();
  initForgotPasswordPage();
});
