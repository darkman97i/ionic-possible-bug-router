<template>
  <ion-app>
    <Menu />
    <ion-router-outlet id="main-content"/>
  </ion-app>
</template>

<script>
  import { defineComponent } from 'vue';
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  import Menu from "@/components/Menu";

  export default defineComponent({
    name: 'App',
    components: { IonApp, IonRouterOutlet, Menu }
  });
</script>
