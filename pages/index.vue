<template>
  <div class="container my-5">
    <h1>A lot of Tests in here</h1>
    <Events 
      v-if="user"
    />
    <div
      v-else
      class="login"
    >
      <form>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" v-model="email" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" v-model="pw" class="form-control">
        </div>
        <div
          class="btn btn-primary"
          @click="login"
        >
          Submit
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      user: undefined,
      email: undefined,
      pw: undefined
    }
  },
  mounted() {
      const auth = getAuth();
      if(auth.currentUser){
        this.user = user
      }
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.pw)
        .then((userCredential) => {
          this.user = userCredential.user;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>
