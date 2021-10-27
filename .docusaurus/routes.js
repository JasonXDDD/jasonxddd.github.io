
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
    component: ComponentCreator('/docs/','cfe'),
    routes: [
      {
        path: '/docs/hello/intro/',
        component: ComponentCreator('/docs/hello/intro/','256'),
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
        path: '/docs/tutorial-basics/congratulations/',
        component: ComponentCreator('/docs/tutorial-basics/congratulations/','cb6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post/',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post/','927'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document/',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document/','304'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page/',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page/','cd5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site/',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site/','fa7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features/',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features/','920'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions/',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions/','bc2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site/',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site/','dad'),
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
