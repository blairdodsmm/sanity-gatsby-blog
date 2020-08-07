export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f2ce5b0d3629e80a60d40ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sx32hjsk',
                  apiId: '7128358b-a7f6-452f-bea4-1b3670ca58c0'
                },
                {
                  buildHookId: '5f2ce5b1cbdd1eab765f6971',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-byxdry4r',
                  apiId: '1a1bf50b-4a05-40be-80e2-97c5265716d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blairdodsmm/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-byxdry4r.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
