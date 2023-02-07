<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useAuthStore } from "@/stores";

const schema = Yup.object().shape({
  username: Yup.string().required("Username é necessário"),
  password: Yup.string().required("Password é necessário"),
});

async function onSubmit(values) {
  const authStore = useAuthStore();
  const { username, password } = values;
  await authStore.login(username, password);
}
</script>

<template>
  <div class="image">
      <img src="../../assets/ecocampus2.svg" alt="">
    </div>
  <div class="wrapper">
    <div class="card">
      <h4 class="card-header">Login</h4>
      <div class="card-body">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, isSubmitting }"
        >
          <div class="form-group">
            <label>Username</label>
            <Field
              name="username"
              placeholder="exemplo"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.username }"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="exemplo"
              class="form-control"
              :class="{ 'is-invalid': errors.password }"
            />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="form-group formBtns">
            <button class="btn formBtn" :disabled="isSubmitting">
              <span
                v-show="isSubmitting"
                class="spinner-border spinner-border-sm mr-1"
              ></span>
              Login
            </button>
            <router-link to="register" class="btn formBtn"
              >Registar</router-link
            >
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style>

.image {
  display: flex;
  margin-top: 5%;
  justify-content: center;
}

.wrapper {
  min-height: 60vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(220, 220, 220);
  background-color: white;
}

.card {
  height: fit-content;
  min-width: 650px;
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.card-header {
  background-color: rgb(77, 187, 110);
  color: white;
  border: none;
  text-align: center;
}

.formBtns {
  display: flex;
  gap: 20px;
}

.formBtn {
  min-width: 100px;
  background-color: rgb(77, 187, 110);
  color: white;
  transition: 0.3s all ease-in-out;
}

.formBtn:hover {
  color: white;
  transform: scale(1.05);
}
</style>
