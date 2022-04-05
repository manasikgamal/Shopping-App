import { cartItemsVar } from "../index";
export const  Removecard = (product) => {
    const cartitems = localStorage.getItem('cartitems')
    ? JSON.parse(localStorage.getItem('cartitems')):[]
    cartitems.forEach((element) => {
      if (element.id === product.id)
        if (
          JSON.stringify(element.attributes.map((a) => a.choose)) ===
          JSON.stringify(product.attributes.map((p) => p.choose))
        ) {
          if (element.count === 1) {
            // console.log("yes",exist)
            localStorage.setItem(
              "cartitems",
              JSON.stringify(cartitems.filter((x) => x !== element))
            );  
          } else {
            localStorage.setItem(
              "cartitems",
              JSON.stringify(
                cartitems.map((x) =>
                  x.id === product.id &&
                  JSON.stringify(x.attributes.map((a) => a.choose)) ===
                    JSON.stringify(product.attributes.map((p) => p.choose))
                    ? { ...element, count: element.count - 1 }
                    : x
                )
              )
            );
          }
          cartItemsVar([localStorage.getItem('cartitems')?JSON.parse(localStorage.getItem('cartitems'))[0]:[]])
        }
    });
  };