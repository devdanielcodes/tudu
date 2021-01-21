<template>
  <div>
    <img class="bg" src="../assets/landing-bg.svg" alt="" srcset="" />
    <nav>
      <img src="../assets/logo.svg" alt="" srcset="" />
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </nav>
    <main>
      <h1>
        Manage your <br />
        <span>activities</span> easy
      </h1>
      <p>
        keep track of your day to day tasks you want<br />
        to complete
      </p>
      <router-link :to="{ name: 'Signup' }"
        >Sign up <img src="../assets/w-arrow.svg" alt="" srcset=""
      /></router-link>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
nav {
  height: 15vh;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  align-items: center;
}
nav a {
  padding: 14px 30px;
  background: #8b41ea;
  border-radius: 15px;
  text-decoration: none;
  color: white;
}
main {
  text-align: center;
}
main h1 {
  font-size: 60px;
  margin-bottom: 10px;
  margin-top: 70px;
}
main h1 span {
  color: #8b41ea;
}
main p {
  margin-bottom: 20px;
}
main a {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  width: 130px;
  margin: auto;
  background: #000000;
  border-radius: 15px;
  text-decoration: none;
  color: white;
}
@media (max-width: 470px) {
  main h1 {
    font-size: 40px;
  }
  main p {
    padding: 0 10px;
  }
}
</style>
