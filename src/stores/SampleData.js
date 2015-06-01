const ShopCatalogItemsBySku = {
  A: {
    name: 'Shop Item A',
    unitPrice: 2,
    unitPricePerVolume: {
      4: 8
    }
  },
  B: {
    name: 'Shop Item B',
    unitPrice: 5,
  }
};

const ShopCartItemsBySku = {
  A: 1,
  B: 4
};

var SampleData = {
  shopCatalogItems: ShopCatalogItemsBySku,
  shopCartItems: ShopCartItemsBySku
};

export default SampleData;
