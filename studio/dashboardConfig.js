export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60413d0ae6d2de0d648438b3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8r6oz82w',
                  apiId: 'e4a51d91-e436-470c-aa93-37ccff9c6f82'
                },
                {
                  buildHookId: '60413d0be6d2de0e878437e3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-x5xq1whh',
                  apiId: '4b80d458-bbde-4054-a111-6869e70d6b19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jchuynh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-x5xq1whh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
