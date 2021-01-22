<template>
  <div class="body">
    <img class="bg" src="../assets/form-bg.svg" alt="" srcset="" />
    <main>
      <div class="logo">
        <img src="../assets/logo.svg" alt="" srcset="" />
      </div>
      <p>Manage activities easy</p>
      <form @submit.prevent="login">
        <h2>
          Login to your<br />
          account
        </h2>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="form.email" />

        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="form.password" />

        <button>Login <img src="../assets/b-arrow.svg" alt="" /></button>
        <router-link :to="{ name: 'Signup' }">Create an account</router-link>
      </form>
    </main>
    <img src="../assets/warn.svg" class="warn" :class="{ close: close }" alt="" />
    <img
      src="../assets/incorrect.svg"
      class="warn"
      :class="{ close: incorrect }"
      alt=""
    />
  </div>
</template>

<script>
import { ref } from "vue";
import store from "../store";
export default {
  setup() {
    const close = ref(false);
    const incorrect = ref(false);
    const form = ref({
      email: "",
      password: "",
    });
    const login = () => {
      if (form.value.email == "" || form.value.password == "") {
        close.value = true;
        setTimeout(() => {
          close.value = false;
        }, 2000);
      } else {
        setTimeout(() => {
          if (store.state.msg == "Request failed with status code 422") {
            incorrect.value = true;
            setTimeout(() => {
              incorrect.value = false;
            }, 2000);
          }
        }, 4000);
        incorrect.value = false;
        store.dispatch("loginUser", form.value);
      }
    };

    return { login, form, close, incorrect };
  },
};
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
.warn {
  pointer-events: none;
  position: fixed;
  bottom: 10px;
  left: 10px;
  opacity: 0;
  transition: all 0.3s;
}
.close {
  opacity: 1;
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
  outline: none;
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
