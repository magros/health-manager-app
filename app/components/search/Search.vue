<template>
    <Page class="page">
        <TopBar></TopBar>
        <StackLayout style="width: 80%; padding: 30px 0">
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

            <Label class="field-label" text="ASEGURADORA"></Label>
            <FilterSelect :items="healthInsurance"
                          class="filter-select"
                          style="width: 100%"
                          hint="Selecciona una aseguradora"
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
