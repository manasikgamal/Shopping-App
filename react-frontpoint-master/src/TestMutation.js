import { useQuery } from "@apollo/client"
import * as Const from "./Const"
import Test from "./Test"

export default function Productsclient(){
    const {loading,data,error}=useQuery(Const.getallpro)
    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    if(!data) return <p>no data</p>
    return <Test products={data.category.products}/>
}

