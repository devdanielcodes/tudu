<template>
  <div class="body">
    <img class="bg" src="../assets/form-bg.svg" alt="" srcset="" />
    <main>
      <div class="logo">
        <img src="../assets/logo.svg" alt="" srcset="" />
      </div>
      <p>Manage activities easy</p>
      <form @submit.prevent>
        <h2>Create an account</h2>

        <label for="name">Name</label>
        <input type="text" name="name" id="name" />

        <label for="email">Email</label>
        <input type="email" name="email" id="email" />

        <label for="password">Password</label>
        <input type="password" name="password" id="password" />

        <button>Create <img src="../assets/b-arrow.svg" alt="" /></button>
        <router-link :to="{ name: 'Login' }">Login to your account</router-link>
      </form>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
main {
  width: 400px;
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
form {
  background: #311499;
  padding: 40px 50px 15px 50px;
  border-radius: 30px 30px 0px 0px;
  color: white;
}
main .logo,
main p {
  text-align: center;
  margin-bottom: 10px;
}
form h2 {
  margin-bottom: 25px;
  text-align: center;
}
form input {
  width: 100%;
  padding: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  background: #4c30af;
  outline: none;
}
form button {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  width: 110px;
  background: #ffffff;
  border-radius: 15px;
  text-decoration: none;
  color: black;
  border: none;
  margin-bottom: 15px;
  cursor: pointer;
}
form a {
  color: white;
  margin-bottom: 10px;
}
@media (max-width: 470px) {
  main {
    width: 85%;
  }
  form {
    padding: 34px;
  }
}
</style>
