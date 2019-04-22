<template>
    <Page class="page">
        <TopBar></TopBar>
        <StackLayout verticalAlignment="center">
            <Label class="field-label" text="Especialidad"></Label>
        </StackLayout>
    </Page>
</template>

<script>
    import TopBar from './TopBar';

    export default {
        name: 'Search',
        methods: {
            onButtonTap() {
                console.log('button clicked');
            }
        },
        components: {
            TopBar
        }
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';
    @import '../app-common';

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
