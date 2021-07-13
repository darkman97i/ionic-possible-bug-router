<template>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-item>
      <ion-label>Enter a number</ion-label>
      <ion-textarea inputmode="numeric"></ion-textarea>
    </ion-item>

    <ExploreContainer name="Tab 1 page" />
  </ion-content>
</template>

<script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonTextarea } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';

  export default  {
    name: 'Tab1',
    components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonTextarea }
  };
</script>
