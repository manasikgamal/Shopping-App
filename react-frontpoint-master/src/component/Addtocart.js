import { cartItemsVar } from "../index";
export const Addtocart = (product) => {
    const cartitems = localStorage.getItem('cartitems')
    ? JSON.parse(localStorage.getItem('cartitems')):[]
    let alreadyincart = false;
    cartitems.forEach((item) => {
      if (item.id === product.id) {
        const pro = product.attributes.map((p) => p.choose);
        const mno = item.attributes.map((a) => a.choose);
        if (JSON.stringify(mno) === JSON.stringify(pro)) {
          item.count++;
          alreadyincart = true;
        }
      }
    });
    if (!alreadyincart) {
      cartitems.push({ ...product, count: 1 });
    }
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
    cartItemsVar([localStorage.getItem('cartitems')?JSON.parse(localStorage.getItem('cartitems'))[0]:[]])
  };