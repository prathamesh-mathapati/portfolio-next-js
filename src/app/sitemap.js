import  { MetadataRoute } from 'next'

export default function sitemap() {

  let hostUrl='https://main--inspiring-cajeta-a31e4c.netlify.app/'
 const route= [''].map((item)=>(
  {
    url: hostUrl+item,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }
 )

  )
  return [
   ...route
  ]
}