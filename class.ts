  interface User {
    name: String
  }
  interface Product{
    productName : String
  }
  class Cart {
  // protected user : User
    private store : object

    constructor(public user: User, private store: object = {}){
      
    }

    put(id: String,product: Product){
      this.store[id] = product
    }

    get(id: String) {
      retrun this.store[id]
    }
  }

  class PromotionCart extends Cart {
    addPromotion (){
      this.user
    }
  }

  const cart2 = new  PromotionCart({name})
  cart2.addPromotion();
  const cartJohn = new Cart({name: John})
  cartJohn.