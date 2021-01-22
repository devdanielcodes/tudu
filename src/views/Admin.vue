<template>
  <div>
    <img class="bg" src="../assets/admin-bg.svg" alt="" srcset="" />
    <main>
      <h1>Welcome to your admin</h1>
      {{ owner }}
      <button @click="logout">Logout</button>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      owner: "user",
    }),
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
};
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  z-index: -1;
}
main {
  padding: 20px;
}
</style>
