<template>
    <Page>
        <TopBar/>
        <StackLayout>
            <NavigationButton android.systemIcon="ic_menu_back"></NavigationButton>
        </StackLayout>
    </Page>
</template>

<script>
import TopBar from '../shared/TopBar'

export default {
    name: 'AppointmentConfirmation.vue',
    components: {
        TopBar
    }
}
</script>

<style lang="scss" scoped>

</style>

