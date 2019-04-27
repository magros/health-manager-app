<template>
    <ActionBar style="background-color: #00C3B0; box-shadow: 0 4px 2px -2px gray;" >
        <DockLayout verticalAlignment="center" horizontalAlignment="left" stretchLastChild="true">
            <Image dock="left" src="~/assets/logo.png" width="10%" height="50" verticalAlignment="center" @tap="openDrawer()"></Image>
            <StackLayout dock="left" orientation="horizontal" horizontalAlignment="right" verticalAlignment="center" width="90%">
                <Label class="fa" :text="'fa-search' | fonticon"></Label>
                <Label class="fa" :text="'fa-heart' | fonticon"></Label>
                <Label class="fa" :text="'fa-calendar' | fonticon"></Label>
            </StackLayout>
        </DockLayout>
    </ActionBar>
</template>

<script>
import sideDrawer from '../../mixins/side-drawer';
import Home from '../Home';

    export default {
        name: 'TopBar',
        mixins: [sideDrawer],
        data() {
            return {
                homePage: Home
            }
        }

    };
</script>

<style scoped lang="scss">
    @import '../../app-variables';
    .fa{
        font-size: 25px;
        margin-right: 40px;
        color: white;
    }
</style>