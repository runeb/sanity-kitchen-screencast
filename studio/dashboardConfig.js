export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eac4c621086077ae4362978',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-screencast-studio-mpe2tmq4',
                  apiId: 'f722b82a-754c-40e7-8ec7-d271de1088b4'
                },
                {
                  buildHookId: '5eac4c620fc1847ca04525f8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-screencast-web',
                  apiId: '34bc3a42-9a3e-4a09-9de0-364493f96c2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-kitchen-screencast',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-screencast-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
