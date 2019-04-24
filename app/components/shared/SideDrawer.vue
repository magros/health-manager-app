<template lang="html">
  <RadSideDrawer ref="drawer" drawerLocation="Left" :gesturesEnabled="gesturesEnabled">
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <slot name="drawerContent"></slot>
    </StackLayout>
    <Frame ~mainContent>
      <slot name="mainContent"></slot>
    </Frame>
  </RadSideDrawer>
</template>

<script>
import sideDrawer from '../../mixins/side-drawer'
export default {
  mixins: [sideDrawer],
  data() {
    return {
      gesturesEnabled: true
    }
  }
}
</script>

<style lang="css">
</style>