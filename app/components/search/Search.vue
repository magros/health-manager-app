<template>
    <Page class="page">
        <TopBar></TopBar>
        <StackLayout style="width: 80%" horizontalAlignment="center">
            <Label class="field-label" text="ESPECIALIDAD"></Label>
            <FilterSelect :items="specialities"
                          class="filter-select"
                          horizontalAlignment="left"
                          style="width: 100%"
                          hint="Selecciona una especialidad"
                          modal_title="Countries"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>
            <Label class="field-label" text="UBICACIÓN"></Label>
            <FilterSelect :items="specialities"
                          class="filter-select"
                          horizontalAlignment="left"
                          style="width: 100%"
                          hint="Selecciona tu ubicación"
                          modal_title="Countries"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>
            <Label class="field-label" text="TIPO DE BUSQUEDA"></Label>
            <FilterSelect :items="specialities"
                          class="filter-select"
                          horizontalAlignment="left"
                          style="width: 100%"
                          hint="Selecciona mapa o lista"
                          modal_title="Countries"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>
            <Button class="search-btn" text="BUSCAR"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import TopBar from '../shared/TopBar';

    export default {
        name: 'Search',

        methods: {
            onButtonTap() {
                console.log('button clicked');
            }
        },
        components: {
            TopBar
        },
        data() {
            return {
                items: [
                    'Opcion 1',
                    'Opcion 2'
                ],
                specialities: [{name: 'Dentista', code: 'dt'},{name: 'Cirujano', code: 'cj'}],
                selectedListPickerIndex: null
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../../app-variables';
    @import '../../app-common';

    .page{
        background-color: white;
    }
    .info {
        font-size: 30;
        color: white;
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

    .search-btn {
        background-color: #00C3B0;
    }
</style>
