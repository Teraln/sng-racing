<template>
  <div class="login">
    <v-container fill-height justify="center">
      <v-row>
        <v-col cols="4" offset="4">
          <v-col cols="4" offset="4">
            <v-img
              src="@/assets/600px-Team_Singularity.png"
              aspect-ratio="1"
              class="grey lighten-2"
            ></v-img>
          </v-col>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            <v-btn @click="login" outlined color="primary">Enter</v-btn>
            <v-btn @click="test" outlined color="primary">Current</v-btn>
            <v-btn @click="signOut" outlined color="primary">Sign out</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { fb } from "@/firebase.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("admin");
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage, fb.auth().currentUser);
        });
    },
    // TEST
    test: function() {
      console.log(fb.auth().currentUser);
    },
    signOut: function() {
      fb.auth()
        .signOut()
        .then(function() {
          console.log("Sign-out successful.");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    //TEST
  }
};
</script>



<style lang="scss" scoped>
.login {
  height: 100vh;
}
</style>