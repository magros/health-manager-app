<template>
    <Page class="page">
        <TopBar></TopBar>
        <ScrollView>
            <StackLayout>
                <StackLayout
                        style="background-image: url('~/assets/doctor-female.jpg'); background-repeat: no-repeat; background-size: 100% 100%"
                        height="200">
                    <DockLayout stretchLastChild="false"
                                style="background-image: url('~/assets/shadow-effect.png'); background-repeat: no-repeat; background-size: 100% 100%"
                                height="200" width="100%">
                        <StackLayout dock="top">
                            <Label class="fa" :text="'fa-chevron-left' | fonticon"
                                   style="font-size: 28px; padding: 60px 0 0 30px; color: black"
                                   @tap="$navigateTo(Results)"></Label>
                        </StackLayout>
                        <StackLayout dock="bottom" class="doctor-info">
                            <Label text="Juana Pérez" class="text-white doctor-name"></Label>
                            <DockLayout stretchLastChild="false">
                                <StackLayout dock="left">
                                    <Label text="Dentista odontologo"></Label>
                                    <Label text="Cedula profesional: 123456789"></Label>
                                </StackLayout>
                                <StackLayout dock="right">
                                    <Label text="10 opiniones"></Label>
                                    <StackLayout orientation="horizontal">
                                        <Label class="fa" :text="'fa-star' | fonticon"
                                               style="color: #DFCA5D; margin-right: 2px"></Label>
                                        <Label class="fa" :text="'fa-star' | fonticon"
                                               style="color: #DFCA5D; margin-right: 2px"></Label>
                                        <Label class="fa" :text="'fa-star' | fonticon"
                                               style="color: #DFCA5D; margin-right: 2px"></Label>
                                        <Label class="fa" :text="'fa-star' | fonticon"
                                               style="color: #DFCA5D; margin-right: 2px"></Label>
                                        <Label class="fa" :text="'fa-star' | fonticon" style="color: #D0D0D0;"></Label>
                                    </StackLayout>
                                </StackLayout>
                            </DockLayout>
                        </StackLayout>
                    </DockLayout>
                </StackLayout>
                <Button class="btn btn-primary text-white m-t-30 m-b-30 font-weight-bold"
                        text="AGENDAR CITA" width="80%"
                        style="margin-bottom: 40px; margin-top: 40px; font-size: 18px"></Button>
                <Label class="hr m-t-20 m-b-20"></Label>
                <Label text="EXPERIENCIA Y SERVICIOS" class="title p-l-15 m-b-20 m-t-20"></Label>
                <Label textWrap="true" class="p-l-15 p-r-15"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Label>
                <Label textWrap="true" class="p-l-15 p-r-15"
                       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Label>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import TopBar from './shared/TopBar';
    import Results from './Results';

    export default {
        name: 'Doctor',
        methods: {},
        components: {
            TopBar
        },
        data() {
            return {Results}
        }
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';
    @import '../app-common';

    .title {
        color: $primary-color;
        font-size: 20px;
        font-weight: bold;
    }

    .doctor-info {
        padding: 20px 25px;

        Label {
            color: white;
            font-size: 10px;
            font-weight: bold;
        }

        .doctor-name {
            font-weight: bold;
            font-size: 20px;
        }
    }
</style>
