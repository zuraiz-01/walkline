export const catalog = {
  brand: 'Walkline',
  announcement: [
    'Welcome to Walkline',
    'Wallets and keychains for everyday carry',
    'Free shipping over Rs. 10000.',
  ],
  nav: [
    { label: 'Wallets', to: '/collections/wallets' },
    { label: 'Keychains', to: '/collections/keychains' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Track Order', to: '/track-order' },
  ],
  hero: {
    kicker: 'Walkline Studio',
    title: 'Premium wallets and keychains for everyday carry.',
    description:
      'Full-grain leather, clean stitching, and durable hardware built for your daily essentials.',
    primaryCta: { label: 'Shop Wallets', to: '/collections/wallets' },
    secondaryCta: { label: 'Explore Keychains', to: '/collections/keychains' },
    highlights: ['Full-grain leather', 'Precision stitching', 'Everyday carry'],
    image: '/images/hero-wallet.jpg',
    tiles: [
      { tag: 'SAVE 10%', title: 'Travel Wallets', copy: 'Limited time offer.' },
      { tag: 'NEW DROP', title: 'Keychain Series', copy: 'Minimal hardware, bold finish.' },
    ],
  },
  categories: [
    {
      title: 'Leather Wallets',
      image: '/images/category-wallets.jpg',
      to: '/collections/wallets',
    },
    {
      title: 'Slim Card Holders',
      image: '/images/category-cardholders.jpg',
      to: '/collections/wallets',
    },
    {
      title: 'Travel Wallets',
      image: '/images/category-travel.jpg',
      to: '/collections/wallets',
    },
    {
      title: 'Keychains',
      image: '/images/category-keychains.jpg',
      to: '/collections/keychains',
    },
  ],
  products: [
    {
      name: 'Classic Leather Wallet - Black',
      price: 'Rs.2,450.00',
      compareAt: 'Rs.3,200.00',
      tag: 'Save 25%',
      image: '/images/products/wallet-classic.jpg',
      hoverImage: '/images/products/wallet-classic.jpg',
    },
    {
      name: 'Slim Card Holder - Tan',
      price: 'Rs.1,550.00',
      compareAt: 'Rs.2,100.00',
      tag: 'New',
      image: '/images/products/wallet-slim.jpg',
      hoverImage: '/images/products/wallet-slim.jpg',
    },
    {
      name: 'Bifold Wallet - Walnut',
      price: 'Rs.2,799.00',
      compareAt: 'Rs.3,800.00',
      tag: 'Best seller',
      image: '/images/products/wallet-bifold.jpg',
      hoverImage: '/images/products/wallet-bifold.jpg',
    },
    {
      name: 'Zip Coin Wallet - Espresso',
      price: 'Rs.1,350.00',
      compareAt: 'Rs.1,900.00',
      tag: 'Sale',
      image: '/images/products/wallet-zip.jpg',
      hoverImage: '/images/products/wallet-zip.jpg',
    },
    {
      name: 'Travel Wallet - Mocha',
      price: 'Rs.3,200.00',
      compareAt: 'Rs.4,200.00',
      tag: 'Trending',
      image: '/images/products/wallet-travel.jpg',
      hoverImage: '/images/products/wallet-travel.jpg',
    },
    {
      name: 'Minimalist Wallet - Grey',
      price: 'Rs.1,950.00',
      compareAt: 'Rs.2,600.00',
      tag: 'Restock',
      image: '/images/products/wallet-minimal.jpg',
      hoverImage: '/images/products/wallet-minimal.jpg',
    },
    {
      name: 'Braided Leather Keychain - Black',
      price: 'Rs.850.00',
      compareAt: 'Rs.1,200.00',
      tag: 'New',
      image: '/images/products/keychain-braided.jpg',
      hoverImage: '/images/products/keychain-braided.jpg',
    },
    {
      name: 'Metal Keychain Loop - Gunmetal',
      price: 'Rs.650.00',
      compareAt: 'Rs.900.00',
      tag: 'Sale',
      image: '/images/products/keychain-metal.jpg',
      hoverImage: '/images/products/keychain-metal.jpg',
    },
  ],
  promos: [
    {
      tag: 'SAVE 10%',
      title: 'Wallet Essentials',
      copy: 'Limited-time pricing on daily carry staples.',
      image: '/images/promo-wallet.jpg',
    },
    {
      tag: 'NEW IN',
      title: 'Keychain Atelier',
      copy: 'Fresh hardware finishes and minimal straps.',
      image: '/images/promo-keychain.jpg',
    },
    {
      tag: 'SIGNATURE',
      title: 'Everyday Carry',
      copy: 'Clean lines and premium leather texture.',
      image: '/images/promo-everyday.jpg',
    },
  ],
  trending: [
    {
      name: 'Travel Wallet - Mocha',
      price: 'Rs.3,200.00',
      compareAt: 'Rs.4,200.00',
      tag: 'Hot',
      image: '/images/products/wallet-travel.jpg',
      hoverImage: '/images/products/wallet-travel.jpg',
    },
    {
      name: 'Classic Leather Wallet - Black',
      price: 'Rs.2,450.00',
      compareAt: 'Rs.3,200.00',
      tag: 'Trending',
      image: '/images/products/wallet-classic.jpg',
      hoverImage: '/images/products/wallet-classic.jpg',
    },
    {
      name: 'Braided Leather Keychain - Black',
      price: 'Rs.850.00',
      compareAt: 'Rs.1,200.00',
      tag: 'Restock',
      image: '/images/products/keychain-braided.jpg',
      hoverImage: '/images/products/keychain-braided.jpg',
    },
    {
      name: 'Minimalist Wallet - Grey',
      price: 'Rs.1,950.00',
      compareAt: 'Rs.2,600.00',
      tag: 'Sale',
      image: '/images/products/wallet-minimal.jpg',
      hoverImage: '/images/products/wallet-minimal.jpg',
    },
  ],
  marquee: ['Leather Wallets', 'Keychains', 'Everyday Carry', 'Handcrafted'],
  testimonials: [
    {
      quote:
        'The leather feels premium and the stitching is super clean. Worth it.',
      name: 'Hania A.',
      title: 'Karachi',
    },
    {
      quote: 'Wallet feels solid and the finish looks sharp.',
      name: 'Saad R.',
      title: 'Lahore',
    },
    {
      quote: 'Love the keychain hardware and the smooth leather strap.',
      name: 'Maham I.',
      title: 'Islamabad',
    },
  ],
  story: {
    title:
      'Timeless design, premium leather, and smooth edges. Essentials you carry every day.',
    image: '/images/story-leather.jpg',
  },
  newsletter: {
    title: 'Get new wallet drops and keychain launches first.',
    copy: 'Join the Walkline list for releases, restocks, and offers.',
  },
  footer: {
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Wallets', to: '/collections/wallets' },
          { label: 'Keychains', to: '/collections/keychains' },
          { label: 'Best Selling', to: '/' },
          { label: 'Trending', to: '/' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Track Order', to: '/track-order' },
          { label: 'Shipping', to: '/contact' },
          { label: 'Returns', to: '/contact' },
          { label: 'Contact', to: '/contact' },
        ],
      },
      {
        title: 'About',
        links: [
          { label: 'About Us', to: '/about' },
          { label: 'Reviews', to: '/reviews' },
          { label: 'Care Guide', to: '/about' },
          { label: 'Careers', to: '/about' },
        ],
      },
      {
        title: 'Social',
        links: [
          { label: 'Instagram', to: '/contact' },
          { label: 'Facebook', to: '/contact' },
          { label: 'TikTok', to: '/contact' },
          { label: 'YouTube', to: '/contact' },
        ],
      },
    ],
  },
}
