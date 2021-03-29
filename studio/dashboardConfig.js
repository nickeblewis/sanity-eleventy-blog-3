export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '6061f9c9f4d9a544164b5904',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-3-studio-qenvguay',
                  apiId: '7905d474-353f-445d-84be-c788f162f8f9'
                },
                {
                  buildHookId: '6061f9c981caee4b735dfab4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-3-web-bdr6dpkp',
                  apiId: 'c9381bda-cc99-4b26-b574-96e128dc0613'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-eleventy-blog-3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-3-web-bdr6dpkp.netlify.app', category: 'apps'}
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
