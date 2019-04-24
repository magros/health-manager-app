<template>
    <Page class="page">
        <TopBar></TopBar>
        <DockLayout stretchLastChild="false" backgroundColor="#3c495e">
            <StackLayout
                    style="width: 100%; background-color: white; border-bottom-color: black; border-bottom-width: 2px"
                    orientation="horizontal" horizontalAlignment="center" dock="top" height="80">

                <StackLayout orientation="horizontal" class="switch-section">
                    <Button @tap="navigateToMap()" text="MAPA" class="switch-button" ></Button>
                    <Button @tap="navigateToFilters()" text="FILTRAR BÚSQUEDA" class="filter-button"></Button>
                </StackLayout>
            </StackLayout>
            <ScrollView width="100%" height="100%" backgroundColor="red" dock="bottom" orientation="vertical">
                <StackLayout style="width: 100%; background-color: white" height="100%" orientation="vertical">
                    <StackLayout orientation="horizontal" style="padding: 30px;" verticalAlignment="middle"
                                 v-for="doctor in doctors">
                        <Image src="~/assets/doctor.png" stretch="none"></Image>
                        <StackLayout style="margin-left: 20px ">
                            <Label text="ROGELIO MENDOZA" style="color: black"></Label>
                            <Label text="DENTISTA ODONTOLOGO" style="color: black"></Label>
                            <Label text="Ixtapalapa - sinatel: Consulta privada" style="color: black"></Label>
                            <Label style="width: 100%; height: 2px; background-color: black; margin-top: 10px; margin-bottom: 10px"></Label>

                            <StackLayout orientation="horizontal" verticalAlignment="center" style="" width="100%">
                                <Button class="btn btn-md btn-primary" text="CONOCER MÁS"
                                        style="color: white; background-color: #00C3B0; font-size: 9px;padding: 0; padding-right: 50px; padding-left: 50px; margin: 0; margin-top: 5px"
                                        height="25"></Button>
                            </StackLayout>

                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </ScrollView>

        </DockLayout>


    </Page>
</template>

<script>
    import TopBar from './shared/TopBar';
    import MapSearch from './search/map/MapSearch'
    import Search from '../components/search/Search'
    export default {
        name: 'Results',

        methods: {
            onButtonTap() {
                console.log('button clicked');
            },
            navigateToMap() {
                this.$navigateTo(MapSearch)
            },
            navigateToFilters() {
                this.$navigateTo(Search)
            }
        },
        components: {
            TopBar
        },
        data() {
            return {
                doctors: [
                    {name: 'Dentista', code: 'dt'},
                    {name: 'Cirujano', code: 'cj'},
                    {name: 'Cirujano', code: 'cj'},
                ],
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';
    @import '../app-common';

    .page {
        background-color: white;
    }

    .info {
        font-size: 30;
        color: white;
    }

    .text-field {
        background-color: white;
        border-color: lightgray;
    }

    .btn-grey {
        background-color: #D0D0D0;
        border-radius: 1;
        color: white;
        /*font-size: 24;*/
        vertical-align: middle;
        width: 80%;
    }

    .switch-button {
        background-color: #FF6000;
        color: white;
        height: 45;
    }

    .filter-button {
        height: 45;
    }
</style>
