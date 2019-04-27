<template>
    <Page class="page" actionBarHidden="true" margin="0">
        <ScrollView height="100%">
            <DockLayout stretchLastChild="false">
                <StackLayout dock="top" width="100%">
                    <StackLayout verticalAlignment="top" horizontalAlignment="center">
                        <StackLayout verticalAlignment="center" horizontalAlignment="center" class="text-center m-t-10">
                            <Image src="~/assets/logo.png" stretch="none"></Image>
                        </StackLayout>
                        <Label class="h2 c-white text-center text-white m-t-15" text="HealthManager"></Label>
                        <Label text="Ingresa tu contraseña" class="c-white m-t-10 text-center"></Label>

                        <TextField text="" class="text-field m-t-15"></TextField>
                        <TextField text="" class="text-field m-t-15"></TextField>

                        <Button text="Ingresar" id="loginBtn" class="btn btn-blue-dark"
                                @tap="$navigateTo(searchPage)"></Button>

                        <StackLayout class="hr-light m-t-10 m-b-10 width-60"></StackLayout>

                        <StackLayout class="btn btn-md btn-grey width-60 text-blue-dark"
                                     verticalAlignment="middle"
                                     orientation="horizontal"
                                     @tap="$navigateTo(searchPage)">
                            <Label class="fa m-r-15" :text="'fa-rocket' | fonticon" verticalAlignment="middle"></Label>
                            <Label text="Ingresar como invitado" verticalAlignment="middle"></Label>
                        </StackLayout>

                        <StackLayout class="hr-light m-t-10 m-b-10 width-60"></StackLayout>

                        <StackLayout class="btn btn-md btn-blue-dark width-60"
                                     orientation="horizontal"
                                     verticalAlignment="middle"
                                     @tap="$navigateTo(searchPage)">
                            <Label class="fa m-r-15" :text="'fa-facebook-official' | fonticon"
                                   verticalAlignment="middle"></Label>
                            <Label text="Ingresa Usando Facebook" verticalAlignment="middle"></Label>
                        </StackLayout>

                        <StackLayout class="btn btn-md btn-orange width-60"
                                     orientation="horizontal"
                                     verticalAlignment="middle"
                                     @tap="$navigateTo(registerPage)">
                            <Label class="fa m-r-15" :text="'fa-facebook-official' | fonticon"
                                   verticalAlignment="middle"></Label>
                            <Label text="Crear cuenta gratis" verticalAlignment="middle"></Label>
                        </StackLayout>

                    </StackLayout>
                </StackLayout>

                <StackLayout dock="bottom"
                             verticalAlignment="center"
                             horizontalAlignment="center"
                             width="100%;"
                             height="70px"
                             style="margin: 0"
                             class="text-center c-bg-white">
                    <label verticalAlignment="center" width="100%">
                        AVISO DE PRIVACIDAD
                    </label>
                </StackLayout>
            </DockLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Search from './search/Search';
    import Register from './auth/Register'
    import AppointmentConfirmation from './medical-appointment/AppointmentConfirmation';
    import Results from './Results';
    import MapSearch from './search/map/MapSearch'

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
                appointmentConfimation: AppointmentConfirmation,
                resultsPage: Results,
                mapSearch: MapSearch
            }
        },
        mounted() {
            this.$store.dispatch('disableGestures')
        }
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';

    .page {
        background-color: $primary-color;
    }

    .info {
        font-size: 30;
        color: white;
    }

    #loginBtn {
        margin-top: 15;
        border: none;
    }

    #loginBtn, .text-field {
        width: 70%;
    }

    .text-field {
        background-color: white;
        border-color: lightgray;
    }
</style>
