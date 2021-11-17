
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/','60e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/','647'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/','8e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/','4f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/','363'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/','fb4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/','b09'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','804'),
    exact: true
  },
  {
    path: '/blog/2021-plan/',
    component: ComponentCreator('/blog/2021-plan/','0ac'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','38a'),
    exact: true
  },
  {
    path: '/blog/hello-world/',
    component: ComponentCreator('/blog/hello-world/','978'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/','0ff'),
    exact: true
  },
  {
    path: '/blog/tags/教學/',
    component: ComponentCreator('/blog/tags/教學/','e3b'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/','e93'),
    exact: true
  },
  {
    path: '/blog/tags/plan/',
    component: ComponentCreator('/blog/tags/plan/','8ee'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/','9d9'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','de5'),
    routes: [
      {
        path: '/docs/bottle-neko/plan/',
        component: ComponentCreator('/docs/bottle-neko/plan/','42b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro/',
        component: ComponentCreator('/docs/intro/','688'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/react-next-js/data-fetching/',
        component: ComponentCreator('/docs/react-next-js/data-fetching/','f71'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/react-next-js/page/',
        component: ComponentCreator('/docs/react-next-js/page/','353'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','f49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
