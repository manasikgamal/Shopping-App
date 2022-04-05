export default function chooseatt(product,value,pros, key){
    let test=JSON.parse(localStorage.getItem("items"))
    let newproduct = localStorage.getItem("items") &&
    test[0].id===product.id ? JSON.parse(localStorage.getItem("items"))
          : [product];
       let mno=newproduct[0].attributes.map((item)=>item.id===pros?{...item,choose:value,key:key,ctr:1}:item)
      
          newproduct.map(p=>p.id===product.id?{...p,attributes:mno}:p)
          localStorage.setItem(
            "items",
            JSON.stringify(newproduct.map(p=>p.id===product.id?{...p,attributes:mno}:p)))
}