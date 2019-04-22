<template>
    <ActionBar style="background-color: #00C3B0; box-shadow: 0 4px 2px -2px gray;" >
        <DockLayout verticalAlignment="center" horizontalAlignment="left" stretchLastChild="true">
            <Image dock="left" src="res://icon" width="5%" height="40" verticalAlignment="center"></Image>
            <StackLayout dock="left" orientation="horizontal" horizontalAlignment="right" verticalAlignment="center" width="95%">
                <Label class="fa" :text="'fa-search' | fonticon"></Label>
                <Label class="fa" :text="'fa-heart' | fonticon"></Label>
                <Label class="fa" :text="'fa-calendar' | fonticon"></Label>
            </StackLayout>
        </DockLayout>
    </ActionBar>
</template>

<script>

    export default {
        name: 'TopBar'
    };
</script>

<style scoped lang="scss">
    @import '../app-variables';
    .fa{
        font-size: 25px;
        margin-right: 25px;
        color: white;
    }
</style>