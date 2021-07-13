import { createRouter, createWebHistory } from '@ionic/vue-router';
import DefaultLayout from "@/components/DefaultLayout";
import Tab1 from "@/views/Tab1";
import Tab3 from "@/views/Tab3";

const routes =  [
  {
    path: '/',
    name: 'root',
    component: DefaultLayout,
    redirect: '/tab1',
    children: [
      {
        path: 'tab1',
        component: Tab1,
        name: 'tab1'
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: Tab3
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeResolve((to, from, next) => {
  console.log('to: '+ to);
  console.log('to.name: '+ to.name);
  console.log('to.path: '+ to.path);
  console.log('from: '+ from);

  next();

});

export default router;
