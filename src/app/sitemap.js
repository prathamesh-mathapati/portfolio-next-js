import  { MetadataRoute } from 'next'

export default function sitemap() {

  let hostUrl='http://localhost:3000/'
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