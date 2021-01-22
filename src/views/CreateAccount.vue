<template>
  <div class="body">
    <img class="bg" src="../assets/form-bg.svg" alt="" srcset="" />
    <main>
      <div class="logo">
        <img src="../assets/logo.svg" alt="" srcset="" />
      </div>
      <p>Manage activities easy</p>
      <form @submit.prevent="create">
        <h2>Create an account</h2>

        <div class="names">
          <div class="first">
            <label for="lastname">Last name</label>
            <input type="text" name="lastname" id="lastname" v-model="form.lastName" />
          </div>
          <div class="last">
            <label for="firstname">First name</label>
            <input type="text" name="firstname" id="firstname" v-model="form.firstName" />
          </div>
        </div>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="form.email" />

        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="form.password" />

        <button>Create <img src="../assets/b-arrow.svg" alt="" /></button>
        <router-link :to="{ name: 'Login' }">Login to your account</router-link>
      </form>
    </main>
    <img src="../assets/warn.svg" class="warn" :class="{ close: close }" alt="" />
  </div>
</template>

<script>
import { ref } from "vue";
import store from "../store";
export default {
  setup() {
    const close = ref(false);
    const form = ref({
      lastName: "",
      firstName: "",
      email: "",
      password: "",
    });
    const create = () => {
      if (
        form.value.lastName == "" ||
        form.value.firstName == "" ||
        form.value.email == "" ||
        form.value.password == ""
      ) {
        close.value = true;
        setTimeout(() => {
          close.value = false;
        }, 2000);
      } else {
        store.dispatch("createAccount", form.value);
        store.dispatch("loginUser", {
          email: form.value.email,
          password: form.value.password,
        });
      }
    };

    return { create, form, close };
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
.names {
  display: flex;
}
.names .first {
  margin-right: 10px;
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
@media (max-width: 470px) {
  main {
    width: 85%;
  }
  form {
    padding: 34px;
  }
}
</style>
