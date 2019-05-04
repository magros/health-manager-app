<template>
    <Page class="page">
        <TopBar></TopBar>
        <DockLayout stretchLastChild="false">
            <StackLayout class="c-bg-white w-100" width="100%"
                         style="border-bottom-color: #D0D0D0; border-bottom-width: 2px"
                         orientation="horizontal"
                         horizontalAlignment="center"
                         dock="top" height="80">

                <StackLayout orientation="horizontal">

                    <StackLayout class="btn btn-orange"
                                 orientation="horizontal"
                                 verticalAlignment="middle"
                                 width="30%"
                                 height="40"
                                 @tap="navigateToMap()">
                        <Label class="fa m-r-10" :text="'fa-map' | fonticon" verticalAlignment="middle"></Label>
                        <Label text="MAPA" verticalAlignment="middle"></Label>
                    </StackLayout>

                    <Button @tap="navigateToFilters()"
                            height="40"
                            width="50%" text="FILTRAR BÚSQUEDA"
                            class="btn btn-grey text-dark"
                            color="black"></Button>
                </StackLayout>
            </StackLayout>

            <ScrollView width="100%" dock="bottom">
                <StackLayout>
                    <StackLayout v-for="doctor in doctors" orientation="horizontal"
                                 class="doctor"
                                 style="padding: 30px;"
                                 verticalAlignment="middle">
                        <Image src="~/assets/doctor.png" stretch="none"></Image>
                        <StackLayout class="m-l-20">
                            <Label text="ROGELIO MENDOZA" class="doctor-name"></Label>
                            <Label text="DENTISTA ODONTOLOGO" class="doctor-speciality"></Label>
                            <Label text="Iztapalapa - sinatel: Consulta privada"></Label>
                            <Label class="hr"></Label>

                            <StackLayout orientation="horizontal"
                                         verticalAlignment="center"
                                         style="vertical-align: center" width="100%">

                                <Button verticalAlignment="center"
                                        @tap="$navigateTo(Doctor)"
                                        class="btn" text="CONOCER MÁS"/>

                                <StackLayout orientation="horizontal" class="m-r-10 m-l-10" verticalAlignment="center">
                                    <Label class="fa" :text="'fa-star' | fonticon" style="color: #DFCA5D; margin-right: 2px"></Label>
                                    <Label class="fa" :text="'fa-star' | fonticon" style="color: #DFCA5D; margin-right: 2px"></Label>
                                    <Label class="fa" :text="'fa-star' | fonticon" style="color: #DFCA5D; margin-right: 2px"></Label>
                                    <Label class="fa" :text="'fa-star' | fonticon" style="color: #DFCA5D; margin-right: 2px"></Label>
                                    <Label class="fa" :text="'fa-star' | fonticon" style="color: #D0D0D0;"></Label>
                                </StackLayout>
                                <Label text="10 opioniones" verticalAlignment="center" style="color: #DFCA5D;font-size: 9px; font-weight: bold"></Label>
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
    import Doctor from '../components/Doctor'

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
                Doctor,
                doctors: [
                    {name: 'Dentista', code: 'dt'},
                    {name: 'Cirujano', code: 'cj'},
                    {name: 'Cirujano', code: 'cj'},
                    {name: 'Cirujano', code: 'cj'},
                    {name: 'Cirujano', code: 'cj'},
                    {name: 'Cirujano', code: 'cj'},
                    {name: 'Cirujano', code: 'cj'},
                    {name: 'Cirujano', code: 'cj'},
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

    .doctor {
        .doctor-name {
            font-size: 20px;
            font-weight: bold;
        }

        Label {
            color: black;
            font-size: 10px;
        }

        .doctor-speciality {
            font-size: 12px;
            color: #777777;
        }

        .fa-star {
            color: #DFCA5D;
            background-color: #DFCA5D;
        }

        .btn {
            background-color: $primary-color;
            height: 20;
            font-size: 9px;
            font-weight: bold;
            padding: 0;
            padding-right: 20px;
            padding-left: 20px;
            margin: 0;
        }
    }

    Scrollview {
        background-color: white;
    }
</style>
