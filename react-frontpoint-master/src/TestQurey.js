import { gql,useQuery } from "@apollo/client"
import * as Const from "./Const"
import Test2 from "./Test2"

export default function AllProducts(){
    const {loading,data,error}=useQuery(Const.getpro)
    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    if(!data) return <p>no data</p>
    return <Test2 products={data.category.products}/>
}