export default [
  {
    header: 'Apps',
    icon: 'PackageIcon',
    children: [
      {
        title: 'eCommerce',
        icon: 'ShoppingCartIcon',
        children: [
          {
            title: 'Shop',
            route: 'shop',
          },
          {
            title: 'Details',
            route: { name: 'product-details', params: { slug: 'apple-watch-series-5-27' } },
          },
          {
            title: 'Wishlist',
            route: 'wishlist',
          },
          {
            title: 'Checkout',
            route: 'checkout',
          },
        ],
      },
    ],
  },
]
