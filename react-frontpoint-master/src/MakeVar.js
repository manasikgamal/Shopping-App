import { InMemoryCache,makeVar } from "@apollo/client"

const initialpro=[
{
    id:"0",
    name:"manasik"
}
]

export const cache=new InMemoryCache({
    typePolicies: {
        Query: {
        category: { // Every person type
          fields: {
            products: { // A field on the person type
              read () { // when it's read
                return provar();
              }
            },
          },
        },
      },
    }
})

export const provar=cache.makeVar(initialpro)
export default function deletepro(id)
{
     const allproducts=provar([...provar()])
    console.log("fromall",allproducts)
}