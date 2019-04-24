<template lang="html">
  <ScrollView>
    <StackLayout width="100%">
      <StackLayout class="sidedrawer-header">
        <Label horizontalAlignment="center"
          verticalAlignment="center"
          class="drawer-header header-title"
          text="Health Manager"/>
      </StackLayout>
      <StackLayout class="sidedrawer-profile">
        <Label horizontalAlignment="center" class="user-profile-title" text="Usuario"/>
        <Label horizontalAlignment="center" class="since-profile-title" text="Miembro desde 2019"/>
      </StackLayout>
      <StackLayout class="sidedrawer-navigation">
        <Label
          v-for="(page, i) in pages"
          @tap="goToPage(page.component)"
          class="drawer-item"
          :text="page.name"
          :key="i"
        />
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
import sideDrawer from '../../../mixins/side-drawer'
export default {
  mixins: [sideDrawer],
  data () {
    return {
      // define our pages, making sure the component matches that defined in /app/router/index.js
      pages: [
        { name: 'Buscar', component: this.$routes.Search },
      ]
    }
  },
  methods: {
    goToPage (pageComponent) {
      // use the manual navigation method
      this.$navigateTo(pageComponent)
      // and we probably want to close the drawer when changing pages
      this.closeDrawer()
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidedrawer-header {
    height: 80;
    background-color: #383b65;
    color: white;
  }

  .sidedrawer-profile {
    height: 60;
    color: white;
    background-color: #383b65;
    border-top: 5px white;
  }

  .sidedrawer-navigation {
    color: black;
    font-size: 14px;
    padding-left: 30px;
    padding-top: 20;
  }

  .header-title {
    font-size: 25px;
    margin-top: 20;
  }

  .user-profile-title {
    font-size: 18px;
    margin-top: 5;
  }

  .since-profile-title {
    font-size: 10px;
  }
</style>