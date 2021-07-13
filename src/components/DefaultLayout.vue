<template>
  <ion-page class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" :icon="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-router-outlet />

    <BottomTabs />
  </ion-page>
</template>

<script>
  import {defineComponent} from "vue";
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonIcon, IonMenuToggle, IonButton, IonButtons, IonRouterOutlet } from "@ionic/vue";
  import { home, menu } from 'ionicons/icons';
  import BottomTabs from "@/widgets/BottomTabs";

  export default defineComponent({
    name: 'DefaultLayout',
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonIcon, IonMenuToggle, IonButton, IonButtons, IonRouterOutlet, BottomTabs },
    setup() {
      return {
        home,
        menu
      };
    }
  });
</script>
