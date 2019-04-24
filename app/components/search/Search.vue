<template>
    <Page class="page">
        <TopBar></TopBar>
        <StackLayout verticalAlignment="center" style="width: 80%" horizontalAlignment="center">
            <Label class="field-label" text="Especialidad"></Label>
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
                ]
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
</style>
