<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useAuthStore } from "@/stores";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

async function onSubmit(values) {
  const authStore = useAuthStore();
  const { username, password } = values;
  await authStore.login(username, password);
}
</script>

<template>
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
              >Register</router-link
            >
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  min-height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(220, 220, 220);
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
