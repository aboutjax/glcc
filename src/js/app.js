const client = ShopifyBuy.buildClient({
  domain: 'popmaker.myshopify.com',
  storefrontAccessToken: '4f2954b6093c26dd8d230cdc3238c97b'
});


const lineItemsToAdd = [
  {variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC83MDQxODgxMDc5ODQx', quantity: 1}
];

let checkoutId = null

client.checkout.create().then((checkout) => {
  checkoutId = checkout.id

  checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
    console.log(checkout.lineItems);
  })
})



const glccJerseyProductId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzUzOTg0NjkzNDU2MQ=='

client.product.fetch(glccJerseyProductId).then((products) => {
  // Do something with the products
  // console.log(products);
});



/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'popmaker.myshopify.com',
      apiKey: '3db0eddb7ef04031e04ea15bdfa1ac38',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [539846934561],
        node: document.getElementById('product-component-00381e5f693'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "options": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "View Product"
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "bold"
      },
      "title": {
        "font-weight": "normal",
        "font-size": "26px"
      },
      "price": {
        "font-size": "18px"
      },
      "compareAt": {
        "font-size": "15px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "bold"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "bold"
      },
      "title": {
        "font-weight": "normal"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "bold"
      },
      "count": {
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        }
      },
      "iconPath": {
        "fill": "#ffffff"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/








let backgroundElement = document.getElementById('background-colour')
let imageContainer = document.getElementById('image-container')
let blackJersey = document.getElementById('image-black-jersey')
let whiteJersey = document.getElementById('image-white-jersey')
let imageCounter = document.getElementById('image-counter')

let currentJersey = 'black'

let updateColour = function() {
  if (currentJersey == 'black') {
    backgroundElement.classList.remove('c-home--black');
    backgroundElement.classList.add('c-home--white');
    blackJersey.classList.remove('db')
    blackJersey.classList.add('dn')
    whiteJersey.classList.add('db')
    currentJersey = 'white'
  } else {
    backgroundElement.classList.remove('c-home--white');
    backgroundElement.classList.add('c-home--black');
    blackJersey.classList.remove('dn')
    blackJersey.classList.add('db')
    whiteJersey.classList.remove('db')
    whiteJersey.classList.add('dn')
    currentJersey = 'black'
  }

  imageCounter.classList.remove('c-home__image-counter-animation')
  imageCounter.classList.add('c-home__image-counter-animation')
}

let timerUpdateColour = function(){
  setInterval(function(){
    updateColour()
  }, 8000)
}

timerUpdateColour()
