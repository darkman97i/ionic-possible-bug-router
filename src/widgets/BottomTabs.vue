<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="tab1" href="/tab1">
        <ion-icon :icon="triangle" />
        <ion-label>Tab 1</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="tab3" href="/tab3">
        <ion-icon :icon="square" />
        <ion-label>Tab 3</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
  import { images, square, triangle, fileTrayFull } from 'ionicons/icons';

  export default {
    name: 'BottomTabs',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon },
    setup() {
      return {
        images,
        square,
        triangle,
        fileTrayFull
      };
    }
  };
</script>
