<template>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>

    <ExploreContainer name="Tab 3 page" />
  </ion-content>
</template>

<script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';

  export default  {
    name: 'Tab3',
    components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent }
  };
</script>
