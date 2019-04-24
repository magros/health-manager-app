<template>
    <Page actionBarHidden="true">
        <StackLayout>
            <Label class="page-title" text="Crea una cuenta nueva" horizontalAlignment="center"></Label>
            <TextField class="register-field m-t-25" hint="Nombre completo"></TextField>
            <TextField class="register-field m-t-15" hint="Email"></TextField>
            <TextField class="register-field m-t-15" hint="Contraseña"></TextField>
            <TextField class="register-field m-t-15" hint="Confirmar contraseña"></TextField>
            <check-box class="m-t-15" horizontalAlignment="center" text="Acepto los términos y condiciones" fillColor="#00C3B0"/>
            <Button class="register-button m-t-15" text="Registrarse"></Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped lang="scss">
@import '../../app-variables';
@import '../../app-common';

.register-field {
    border-color: #00C3B0;
    border-width: 4px;
    border-radius: 5px;
    background-color: white;
    width: 85%;
    placeholder-color: gray;
    padding-left: 45px;
}

.register-button {
    border-radius: 5px;
    background-color: #00C3B0;
    color: white;
    width: 85%;
}

.page-title {
    font-size: 25px;
    font-weight: bold;
    color: #00C3B0;
    margin-top: 35px;
}
</style>
