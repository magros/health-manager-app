<template>
    <Page>
        <TopBar></TopBar>
        <StackLayout>
            <StackLayout orientation="horizontal" horizontalAlignment="center" class="switch-section">
                <Button @tap="navigateToList()" text="LISTA" class="switch-button" ></Button>
                <Button @tap="navigateToFilters()" text="FILTRAR BÚSQUEDA" class="filter-button"></Button>
            </StackLayout>
            <MapView></MapView>
        </StackLayout>
    </Page>
</template>

<script>
import TopBar from '../../shared/TopBar'
import SearchResults from '../../Results'
import Search from '../Search'
export default {
    name: 'MapSearch',
    components: {
        TopBar
    },
    methods: {
        navigateToList() {
            this.$navigateTo(SearchResults)
        },
        navigateToFilters() {
            this.$navigateTo(Search)
        }
    }
}
</script>

<style lang="scss" scoped>
    .switch-section {
        height: 70;
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
