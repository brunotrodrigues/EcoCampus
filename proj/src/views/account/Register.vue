<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useUsersStore, useAlertStore } from "@/stores";
import { router } from "@/router";

const schema = Yup.object().shape({
  firstName: Yup.string().required("Primeiro nome é necessario"),
  lastName: Yup.string().required("Apelido é necessario"),
  username: Yup.string().required("Nome de utilizador é necessario"),
  password: Yup.string()
    .required("Password é necessaria")
    .min(6, "Password tem que ter pelo menos 6 caracteres"),
});

async function onSubmit(values) {
  const usersStore = useUsersStore();
  const alertStore = useAlertStore();
  values.isAdmin = false
  try {
    await usersStore.register(values);
    await router.push("/account/login"); 

    alertStore.success("Registo bem sucessido");
  } catch (error) {
    alertStore.error(error);
  }

}
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <h4 class="card-header">Registar</h4>
      <div class="card-body">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, isSubmitting }"
          >
          <div class="form-group">
            <label>Primeiro Nome</label>
            <Field
              name="firstName"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.firstName }"
            />
            <div class="invalid-feedback">{{ errors.firstName }}</div>
          </div>
          <div class="form-group">
            <label>Apelido</label>
            <Field
              name="lastName"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.lastName }"
            />
            <div class="invalid-feedback">{{ errors.lastName }}</div>
          </div>
          <div class="form-group">
            <label>Nome de Utilizador</label>
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
              <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
              Registar
            </button>
            <router-link to="login" class="btn formBtn cancelBtn">Cancelar</router-link
            >
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style>
.cancelBtn {
  background-color: rgb(233, 30, 30);
}
.wrapper {
  margin-top: 5%;
}
.formBtns {
  align-items: center;
  justify-content: center;
}
</style>
