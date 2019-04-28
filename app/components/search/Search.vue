<template>
    <Page class="page">
        <TopBar></TopBar>
        <StackLayout style="width: 100%; padding: 30px 50px" horizontalAlignment="left">
            <Label class="field-label" text="ESPECIALIDAD"></Label>
            <FilterSelect :items="specialities"
                          horizontalAlignment="left"
                          class="filter-select"
                          style="width: 100%; text-align: left"
                          hint="Selecciona una especialidad"
                          searchHint="Buscar"
                          modal_title="Especialidad"
                          closeText="Cerrar"
                          clearText="Limpiar"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>

            <Label class="field-label" text="ASEGURADORA" v-show="showAllFilter"></Label>
            <FilterSelect :items="healthInsurance"
                          v-show="showAllFilter"
                          class="filter-select"
                          style="width: 100%"
                          hint="Selecciona aseguradora"
                          searchHint="Buscar"
                          modal_title="Aseguradora"
                          closeText="Cerrar"
                          clearText="Limpiar"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>

            <Label class="field-label" text="UBICACIÓN"></Label>
            <FilterSelect :items="state"
                          class="filter-select"
                          style="width: 100%"
                          hint="Selecciona una ubicación"
                          searchHint="Buscar"
                          modal_title="Ubicación"
                          closeText="Cerrar"
                          clearText="Limpiar"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>

            <Label class="field-label" text="Hospital" v-show="showAllFilter"></Label>
            <FilterSelect :items="state"
                          v-show="showAllFilter"
                          class="filter-select"
                          style="width: 100%"
                          hint="Selecciona un hospital"
                          searchHint="Buscar"
                          modal_title="Hospital"
                          closeText="Cerrar"
                          clearText="Limpiar"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>

            <Label class="field-label" text="TIPO DE BÚSQUEDA"></Label>
            <FilterSelect :items="state"
                          class="filter-select"
                          style="width: 100%"
                          hint="Selecciona un tipo"
                          searchHint="Buscar"
                          modal_title="Ubicación"
                          closeText="Cerrar"
                          clearText="Limpiar"
                          search_param="name"
                          render="drop"
                          primary_key="code">
            </FilterSelect>

            <StackLayout class="btn btn-sm btn-blue-dark"
                         v-show="!showAllFilter"
                         verticalAlignment="middle"
                         style="margin: 0; margin-top: 25px; width: 155px"
                         horizontalAlignment="left"
                         orientation="horizontal"
                         @tap="showMore()">
                <Label class="fa m-r-5" :text="'fa-plus' | fonticon"
                       style="font-size: 10px" verticalAlignment="middle"></Label>
                <Label text="FILTROS" verticalAlignment="middle"></Label>
            </StackLayout>

            <Button class="btn btn-primary"
                    text="BUSCAR"
                    @tap="$navigateTo(searchMapPage)"

                    style="margin: 50px 0 0 0; font-weight: bold"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import TopBar from '../shared/TopBar';
    import MapSearch from '../search/map/MapSearch';

    export default {
        name: 'Search',

        methods: {
            showMore() {
                this.showAllFilter = true;
            }
        },
        components: {
            TopBar
        },
        data() {
            return {
                searchMapPage: MapSearch,
                showAllFilter: false,
                items: [
                    'Opcion 1',
                    'Opcion 2'
                ],
                specialities: [{name: 'Dentista', code: 'dt'}, {name: 'Cirujano', code: 'cj'}],
                healthInsurance: [{name: 'AXA', code: 'dt'}, {name: 'tor', code: 'cj'}],
                state: [{name: 'Quéretaro', code: 'dt'}, {name: 'Guanajuato', code: 'cj'}],
                selectedListPickerIndex: null
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../../app-variables';
    @import '../../app-common';

    .field-label {
        color: black;
        font-size: 10px;
        font-weight: bold;
        padding-bottom: 5px;
        margin-top: 35px;
    }
</style>
