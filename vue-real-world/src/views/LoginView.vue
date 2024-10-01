<script setup>
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup'
import BaseInput from '@/components/Base/BaseInput.vue';

//------- the validationSchema without library
// const validationSchema = {
//     required: value => {
//         const errMessage = 'Please fill the field'
//         if(value === undefined || value === null) return errMessage 

//         if(!String(value).length) return errMessage

//         return true
//     },
//     minLength: (number, value) => {
//         if (String(value).length < number) return `Please fill at least ${number} characters`
//     },
  
//     email: value => {
//         if (!value) return 'Fill the Email field'

//         const regex =
//         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//         if(!regex.test(String(value).toLowerCase())) {
//             return 'Please fill correct Email'
//         }

//         return true
//     },
//     password: value => {
//         const errMessage = 'Please fill the password'
//         value === undefined || value === null ? errMessage : ''

//         if(!String(value).length) return errMessage

//         return true
//     }
// }
// ------------------------------------------------

const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(9)
})

const {value: emailValue, errorMessage: emailError} = useField('email')
const {value: passwordValue, errorMessage: passwordError} = useField('password')

// ----------------------
// if we have a field that we don't want to check
// we should do this
const {value: asdf, errorMessage: asdfError} = useField('asdf', undefined, {initialValue: "1"})
// ----------------------
// ALSO !!!! in order to not write errorMessage for each field
// we can just use 2-nd parameter from useForm
// which returns the errors array that includes all

const {value: example2} = useField('example2', undefined, {initialValue: 'a'})
// -------

const {handleSubmit, errors} = useForm({
    validations: validationSchema
})

const handleLogin = handleSubmit(values => {

})
</script>

<template>
    <form @submit="handleLogin">
        <BaseInput 
            label="Email"
            v-model="emailValue"
            type="email"
            :error="emailError"
        />
        <BaseInput 
            label="Password"
            v-model="passwordValue"
            type="password"
            :error="passwordError"
        />
        <button type="submit"> Log in </button>
    </form>
</template>

<style >
form {
    display: flex;
    flex-direction: column;
    max-width: 16rem;
    margin: 0 auto;
    gap: 10px;
    text-align: left;

    button {
        border: none;
        background: limegreen;
        color: white;
        border-radius: 20px;
        padding: 10px;
        margin-top: 10px;
    }
}
</style>