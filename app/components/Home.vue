<template>
    <Page class="page" actionBarHidden="true">
        <DockLayout>
            <StackLayout verticalAlignment="top" horizontalAlignment="center" dock="top" width="100%" height="92%">
                <Label class="h2 c-white text-center" style="color: white; margin-top: 90px" text="HealthManager"></Label>
                <Label text="Ingresa tu contraseña" class="c-white m-t-20 m-b-10 text-center"></Label>
                <TextField text="" class="text-field m-t-15"></TextField>
                <TextField text="" class="text-field m-t-15"></TextField>
                <Button text="Ingresar" id="loginBtn" class="btn btn-primary" @tap="$navigateTo(resultsPage)"></Button>
                <StackLayout class="hr-light m-t-20 m-b-20" style="width: 60%"></StackLayout>
                <Button text="Ingresar como invitado" class="btn btn-md btn-grey" @tap="$navigateTo(resultsPage)" style="width: 60%; color: #222B54"></Button>
                <StackLayout class="hr-light m-t-20 m-b-20"  style="width: 60%"></StackLayout>
                <Button class="btn btn-md btn-primary fa"  @tap="$navigateTo(resultsPage)" style="width: 60%">
                    <formattedString>
                        <span class="fa" :text="'fa-facebook-official' | fonticon" style="margin-right: 5px;font-size: 20px"></span>
                        <span text="Ingresa Usando Facebook" style="margin-left: 20px"></span>
                    </formattedString>
                </Button>
                <Button text="Crear cuenta gratis" class="btn btn-md btn-orange" @tap="$navigateTo(registerPage)" style="width: 60%"></Button>
            </StackLayout>
            <StackLayout verticalAlignment="center" horizontalAlignment="center" dock="bottom" height="8%" width="100%;" style="background-color:lightgray">
                <label style="text-align: center;width: 100%" verticalAlignment="center">
                    AVISO DE PRIVACIDAD
                </label>
            </StackLayout>
        </DockLayout>

    </Page>
</template>

<script>
import Search from './search/Search';
import Register from './auth/Register'
import AppointmentConfirmation from './medical-appointment/AppointmentConfirmation';
import Results from './Results';
export default {
    methods: {
        onButtonTap() {
            console.log('button clicked');
        },
        navigateToSearch() {
            this.$state.dispatch('enableGestures')
            this.$navigate(this.searchPage)
        }
    },
    data() {
        return {
            searchPage: Search,
            registerPage: Register,
            appointmentConfimation: AppointmentConfirmation
            resultsPage: Results
        }
    },
    mounted() {
        this.$store.dispatch('disableGestures')
    }
};
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';

    // End custom common variables

    .page{
        background-color: $primary-color;
    }

    .info {
        font-size: 30;
        color: white;
    }
    #loginBtn{
         margin-top: 15;
        border: none;
    }
    #loginBtn, .text-field{
        width: 70%;
    }
    .text-field{
        background-color: white;
        border-color: lightgray;
    }
    .btn-grey{
        background-color: #D0D0D0;
        border-radius: 1;
        color: white;
        /*font-size: 24;*/
        vertical-align: middle;
        width: 80%;
    }
</style>
