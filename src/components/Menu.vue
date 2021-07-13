<template>
  <!-- https://www.learmoreseekmore.com/2021/01/ionic-vue-app-side-menu-integration-with-ion-menu-component.html
  https://www.youtube.com/watch?v=JseEALv0HXs
  https://github.com/Naveen512/Ionic5-Vue3-Side-Menu
  -->
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-list-header>
          Navigate
        </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button @click="menuNavigation('/browser')">
            <ion-label>Browser</ion-label>
          </ion-item>
          <ion-item button @click="menuNavigation('/tab1')">
            <ion-label>tab1</ion-label>
          </ion-item>
          <ion-item button @click="menuNavigation('/tab2')">
            <ion-label>tab2</ion-label>
          </ion-item>
          <ion-item button @click="menuNavigation('/tab3')">
            <ion-label>tab3</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
  import { IonMenu, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonMenuToggle, IonListHeader, menuController } from "@ionic/vue";
  export default {
    name: 'Menu',
    components: {IonMenu, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonList, IonLabel, IonMenuToggle, IonListHeader },
    methods: {
      menuNavigation(url) {
        menuController.close("app-menu");
        this.$router.push(url);
      }
    }
  };
</script>
