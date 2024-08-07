async function checkAuth() {
  const response = await fetch(
    "https://blizzard-5jur.onrender.com/users/validate-token"
  );
  console.log(response);
  if (response.status !== 200) {
    window.location.href = "login.html";
  }
}

module.exports = checkAuth;
