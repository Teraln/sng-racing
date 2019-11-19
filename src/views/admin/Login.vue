<template>
  <div class="login">
    <v-container fill-height justify="center">
      <v-row>
        <v-col cols="4" offset="4">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              :type="show1 ? 'text' : 'password'"
              required
            ></v-text-field>
            <v-btn outlined type="submit" color="primary">Enter</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>



<style lang="scss">
.login {
  height: 100vh;
}
</style>