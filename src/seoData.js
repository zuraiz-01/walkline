export const buildFaqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: (faqs || []).map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const seoCategoryPages = {
  wallets: {
    path: '/wallets',
    urlSlug: '/wallets',
    breadcrumb: [
      { label: 'Home', to: '/' },
      { label: 'Wallets' },
    ],
    metaTitle: 'Wallets in Pakistan | Leather, Men and Women | Walkline',
    metaDescription:
      'Shop premium yet affordable wallets in Pakistan. Explore leather wallets for men and women with practical layouts, fair PKR pricing, and nationwide delivery.',
    h1: 'Wallets in Pakistan - Premium Look, Everyday Value',
    intro:
      'This category page targets buyers searching for wallets, wallets for men Pakistan, wallets for women, wallets ladies styles, and leather wallets in one strong commercial page.',
    sections: [
      {
        h2: 'Choose Wallets Built for Pakistani Daily Use',
        paragraphs: [
          'Most people buying wallets in Pakistan want a clear combination of style, durability, and practical pricing in PKR. A wallet should not only look premium in product photos, it should feel reliable in real daily movement from office to commute to weekend use. This collection is designed around that expectation and helps users filter quickly by size, material, and use case.',
          'A strong category page should reduce confusion. Instead of splitting every small keyword variant into separate pages, this layout keeps intent together: buyers looking for wallets, leather wallets, wallets for men Pakistan, and wallets for women can all start from one primary hub. That structure improves crawl depth, internal linking strength, and user journey clarity.',
        ],
        subsections: [
          {
            h3: 'Slim and full-capacity layouts',
            text: 'Some shoppers want a compact carry with card-first access, while others need larger formats for cash, cards, and receipts. This page addresses both without forcing visitors through duplicate pages.',
          },
          {
            h3: 'Daily comfort and material focus',
            text: 'Pocket comfort, seam strength, and long-term finish quality matter more than one-time visual appeal. Highlighting these factors supports better conversion and fewer returns.',
          },
        ],
      },
      {
        h2: 'Men and Women Collections in One Clear Structure',
        paragraphs: [
          'Search demand shows high overlap between general wallet terms and gender-specific terms. This page keeps broad intent at category level, then pushes refined intent into subcategory links for mens wallets and wallets ladies collections. That improves both semantic relevance and navigation flow.',
          'For Pakistan audiences, this approach is practical: first-time buyers often start broad, then narrow by style, budget, and gift intent. The page should guide users from discovery to decision with short trust blocks, visible PKR ranges, and direct links to men and women subpages.',
        ],
        subsections: [
          {
            h3: 'Wallets for men Pakistan',
            text: 'Direct this intent to a dedicated mens wallets page with leather-first positioning, brand-comparison language, and office-use framing.',
          },
          {
            h3: 'Wallets for women and wallets ladies styles',
            text: 'Route women-focused intent to a dedicated page with compact formats, elegant color direction, and gifting recommendations.',
          },
        ],
      },
      {
        h2: 'Leather Wallets, PKR Value, and Conversion Trust',
        paragraphs: [
          'Leather wallets remain one of the highest-converting accessory segments in Pakistan because they communicate durability and premium finish at once. The category page should explain leather benefits in clear buyer language: better aging, stronger structure, and lower replacement frequency versus weak synthetic builds.',
          'To increase conversion, keep pricing context transparent in PKR tiers. Entry options can emphasize utility, mid-range options can highlight improved leather and stitching, and premium options can justify price with finish quality and gift-ready presentation. Add delivery timeline clarity and a simple return policy near the purchase area to reduce friction.',
          'EEAT signals should be visible and practical: close-up stitching photos, real compartment shots, dimensions, material details, verified reviews, and pre-dispatch quality checks. These trust elements help category pages perform better for both SEO and sales.',
        ],
      },
    ],
    internalLinks: [
      { anchor: 'Men wallets in Pakistan', to: '/wallets/mens-wallets-pakistan' },
      { anchor: 'Wallets for women', to: '/wallets/womens-wallets-pakistan' },
      { anchor: 'Keychain Pakistan collection', to: '/keychains' },
      { anchor: 'Custom keychain Pakistan', to: '/keychains/custom-keychains-pakistan' },
      { anchor: 'Digital wallets vs physical wallets', to: '/blog/digital-wallets-vs-physical-wallets-pakistan' },
    ],
    lsiKeywords: [
      'bifold wallet',
      'slim wallet Pakistan',
      'card holder wallet',
      'wallet price in Pakistan',
      'gift wallet for men',
      'durable leather wallet',
      'everyday carry wallet',
      'wallet with card slots',
    ],
    faqs: [
      {
        question: 'What is a good wallet price range in Pakistan?',
        answer: 'Most buyers find good value between PKR 1,500 and PKR 4,500 depending on material, compartment design, and finishing quality.',
      },
      {
        question: 'Are leather wallets worth buying for daily use?',
        answer: 'Yes. Good leather wallets usually last longer, hold shape better, and look more premium than low-grade synthetic options.',
      },
      {
        question: 'Do you offer wallets for men and women?',
        answer: 'Yes, this category covers broad wallet intent and links to dedicated mens wallets and womens wallets subcategory pages.',
      },
      {
        question: 'Which wallet style is best for gifting?',
        answer: 'A medium-size black or tan bifold is usually the safest gift choice for most age groups and dress styles.',
      },
    ],
  },

  mensWallets: {
    path: '/wallets/mens-wallets-pakistan',
    urlSlug: '/wallets/mens-wallets-pakistan',
    breadcrumb: [
      { label: 'Home', to: '/' },
      { label: 'Wallets', to: '/wallets' },
      { label: "Men's Wallets" },
    ],
    metaTitle: "Men's Wallets in Pakistan | Leather and Branded Look", 
    metaDescription:
      'Explore mens wallets in Pakistan with leather construction, premium-inspired finishes, and fair PKR pricing. Shop durable styles with nationwide delivery.',
    h1: 'Mens Wallets in Pakistan - Leather First, Smart Pricing',
    intro:
      'This subcategory clusters men wallets, mens wallets, leather wallets for men, and branded comparison terms into one conversion-focused page for Pakistan.',
    sections: [
      {
        h2: 'Mens Wallets Designed for Daily Performance',
        paragraphs: [
          'A strong mens wallets page should reflect how Pakistani buyers actually carry essentials: cards, cash, CNIC, and occasional receipts. The best products balance capacity with pocket comfort so the wallet feels useful, not bulky. When category copy explains this clearly, buyers make faster decisions and return rates usually drop.',
          'Men wallets shoppers are often practical and price-aware. They compare stitching, pocket layout, edge quality, and material feel before they compare labels. Positioning your catalog around build quality and long-term use helps outperform generic keyword-heavy pages that do not answer real purchase questions.',
        ],
        subsections: [
          {
            h3: 'Office carry and everyday carry',
            text: 'Prioritize slim and medium bifold formats that pair well with formal and smart-casual outfits while still carrying all basics.',
          },
          {
            h3: 'Gift-ready and personal use options',
            text: 'Men wallets in neutral colors like black, tan, and deep brown convert consistently for both self-purchase and gifting occasions.',
          },
        ],
      },
      {
        h2: 'Leather Wallets for Men and Brand-Comparison Intent',
        paragraphs: [
          'Searchers using terms like mens wallets lv, wallets lv, gucci wallets, gucci wallets for men, j wallets, jafferjees wallets, and hub wallets are usually expressing style intent plus quality expectations. They want polished design language but still care about practical value in PKR.',
          'This page should satisfy that demand without creating brand-fragmented thin pages. Keep one strong mens wallet hub that compares style direction, structure, and material quality in plain language. This supports semantic SEO while preventing cannibalization across many weak URLs.',
          'Use transparent product specs: dimensions, card slots, leather type, fold behavior, and finish notes. Pair this with close-up images and verified customer comments to reinforce EEAT signals and improve trust at checkout.',
        ],
      },
      {
        h2: 'PKR Price Tiers and High-Intent Conversion Blocks',
        paragraphs: [
          'Clear PKR segmentation helps this page convert better. Entry tier can target basic daily use, mid-tier can emphasize improved leather quality and finishing, and premium tier can focus on refined detail and gifting presentation. Price clarity is especially important for first-time buyers from search.',
          'Add short conversion blocks near product grids: quality check before dispatch, responsive support, straightforward exchange process, and expected delivery window by city. These signals reduce hesitation and support higher add-to-cart rates from organic traffic.',
        ],
      },
    ],
    internalLinks: [
      { anchor: 'Shop all wallets', to: '/wallets' },
      { anchor: 'Wallets for women in Pakistan', to: '/wallets/womens-wallets-pakistan' },
      { anchor: 'Keychains for men', to: '/keychains' },
      { anchor: 'Custom name keychains', to: '/keychains/custom-keychains-pakistan' },
      { anchor: 'Leather wallet care guide', to: '/blog/how-to-care-for-leather-wallets-in-pakistan' },
    ],
    lsiKeywords: [
      'mens bifold wallet',
      'slim mens wallet',
      'premium wallet Pakistan',
      'office wallet men',
      'wallet gift for him',
      'durable stitch wallet',
      'minimal wallet men',
      'wallet under 3000 PKR',
    ],
    faqs: [
      {
        question: 'Which mens wallet style is best for daily use?',
        answer: 'A medium bifold with 6 to 8 card slots is usually the best balance of capacity, comfort, and daily durability.',
      },
      {
        question: 'Are branded-look mens wallets available at affordable prices?',
        answer: 'Yes. You can target premium-inspired design language while maintaining practical PKR pricing for local buyers.',
      },
      {
        question: 'How do I choose between slim and regular mens wallets?',
        answer: 'Choose slim if you carry fewer cards. Choose regular if you need extra cash and card compartments every day.',
      },
      {
        question: 'Do leather wallets for men require special care?',
        answer: 'Basic care is enough: keep away from excess moisture, avoid overstuffing, and clean gently with a soft dry cloth.',
      },
    ],
  },

  womensWallets: {
    path: '/wallets/womens-wallets-pakistan',
    urlSlug: '/wallets/womens-wallets-pakistan',
    breadcrumb: [
      { label: 'Home', to: '/' },
      { label: 'Wallets', to: '/wallets' },
      { label: "Women's Wallets" },
    ],
    metaTitle: "Women's Wallets in Pakistan | Elegant and Affordable", 
    metaDescription:
      'Discover wallets for women in Pakistan with elegant finishes, practical compartments, and clear PKR pricing. Shop premium-looking ladies wallets online.',
    h1: 'Wallets for Women in Pakistan - Elegant and Practical',
    intro:
      'This subcategory targets wallets for women and wallets ladies intent in one strong page with style guidance, practical layout tips, and PKR-first positioning.',
    sections: [
      {
        h2: 'Wallets for Women Built Around Daily Routine',
        paragraphs: [
          'A womens wallet page should start with use-case clarity: compact carry for small handbags, medium formats for all-day use, and spacious layouts for higher card and cash volume. This practical structure helps users self-select faster and supports better conversion quality.',
          'Women shoppers in Pakistan frequently compare elegance and functionality together. They want a wallet that looks polished while still managing daily essentials smoothly. Clear product details on dimensions, compartments, and closure style make that decision easier and reduce post-purchase friction.',
        ],
        subsections: [
          {
            h3: 'Compact, medium, and spacious formats',
            text: 'Offering size-based filtering keeps the shopping flow focused and reduces confusion for first-time buyers.',
          },
          {
            h3: 'Color direction for local preferences',
            text: 'Black, tan, beige, and deep neutrals remain high-converting because they pair well with both eastern and western wardrobe choices.',
          },
        ],
      },
      {
        h2: 'Wallets Ladies Search Intent and Semantic Coverage',
        paragraphs: [
          'The query mix around wallets for women and wallets ladies is broad but commercially aligned. A single strong subcategory page is better than many tiny pages because it keeps authority consolidated and avoids internal competition.',
          'Use semantic variation naturally in body content and product labels, then support depth with internal links to the parent wallets category, mens wallets page, and relevant gifting content. This builds topical relevance while keeping UX simple.',
        ],
      },
      {
        h2: 'PKR Pricing, Gifting, and Trust Signals',
        paragraphs: [
          'Price communication should be direct in PKR tiers. Entry-level picks can emphasize utility, mid-tier can focus on build quality and finish, and premium options can highlight refined design and presentation value. Transparent value framing increases buyer confidence.',
          'For gifting, include quick guidance blocks on suitable sizes and shades. Add EEAT signals such as verified usage feedback, close-up construction images, size references, and clear support channels. These details create trust and improve checkout completion.',
        ],
      },
    ],
    internalLinks: [
      { anchor: 'Shop all wallets', to: '/wallets' },
      { anchor: 'Mens wallets in Pakistan', to: '/wallets/mens-wallets-pakistan' },
      { anchor: 'Keychain Pakistan collection', to: '/keychains' },
      { anchor: 'Couple and name keychains', to: '/keychains/custom-keychains-pakistan' },
      { anchor: 'Wallet gifting guide', to: '/blog/wallet-gifting-guide-pakistan' },
    ],
    lsiKeywords: [
      'ladies wallet Pakistan',
      'slim wallet for women',
      'gift wallet for her',
      'zip wallet women',
      'card wallet ladies',
      'elegant wallet design',
      'wallet under 2500 PKR',
      'everyday women wallet',
    ],
    faqs: [
      {
        question: 'What wallet size works best for daily use?',
        answer: 'A medium wallet usually gives the best balance of portability and storage for daily routines.',
      },
      {
        question: 'Are wallets ladies styles suitable for gifting?',
        answer: 'Yes. Neutral-tone medium-size wallets are among the safest and most appreciated gift choices.',
      },
      {
        question: 'Do womens wallets come in leather and non-leather options?',
        answer: 'Yes. Both material types can be offered based on personal style preference, maintenance needs, and budget.',
      },
      {
        question: 'What is a practical budget for womens wallets in Pakistan?',
        answer: 'Most shoppers buy confidently between PKR 1,200 and PKR 4,000 based on quality tier and design detail.',
      },
    ],
  },

  keychains: {
    path: '/keychains',
    urlSlug: '/keychains',
    breadcrumb: [
      { label: 'Home', to: '/' },
      { label: 'Keychains' },
    ],
    metaTitle: 'Keychains in Pakistan | Stylish and Durable | Walkline',
    metaDescription:
      'Buy keychains in Pakistan for cars, bikes, bags, and gifts. Explore stylish durable designs with affordable PKR pricing and nationwide delivery.',
    h1: 'Keychain Pakistan Collection - Style Meets Utility',
    intro:
      'This category clusters keychain pakistan, pakistan keychain, keychain design, design keychain, keychain men, hooks keychain, and keychain ring intent in one SEO hub.',
    sections: [
      {
        h2: 'Keychain Pakistan Demand and Real Usage Intent',
        paragraphs: [
          'A keychain looks like a small product, but users interact with it every day. In Pakistan, shoppers usually look for one of three outcomes: stronger key organization, better hardware reliability, or a giftable style piece with character. A high-performing category page should serve all three intents clearly.',
          'Combining broad keychain terms into one category page improves discoverability and keeps authority consolidated. Instead of separate low-value pages for minor variations, this page can naturally include both keychain design language and utility-focused selection logic.',
        ],
        subsections: [
          {
            h3: 'Design keychain intent',
            text: 'Users looking for design-led options respond well to visual filters by material, shape, and finish tone.',
          },
          {
            h3: 'Hardware-first utility intent',
            text: 'Users searching for hooks keychain and keychain ring options need confidence in clasp strength, loop thickness, and durability details.',
          },
        ],
      },
      {
        h2: 'Material Positioning for Better Conversion',
        paragraphs: [
          'Keychain men and unisex segments often convert best with metal and leather formats because they signal durability and clean style. Lighter styles can still perform strongly in gifting campaigns, especially when product pages include close-ups and clear dimensions.',
          'Use PKR-based value framing just like wallet pages. Entry-level keychains can focus on lightweight everyday utility, mid-tier can stress stronger hardware and finish quality, and premium options can emphasize craftsmanship or personalization readiness.',
        ],
      },
      {
        h2: 'Trust Blocks and Internal Discovery',
        paragraphs: [
          'EEAT signals for keychains should include authentic hardware visuals, ring and hook details, and verified buyer comments about real daily use. This is especially important for car and bike users carrying heavier keys.',
          'Guide visitors into high-intent subpages with internal links such as custom keychain Pakistan, car keychain options, and couple/name formats. Better internal discovery increases both session depth and conversion probability.',
        ],
      },
    ],
    internalLinks: [
      { anchor: 'Custom keychain Pakistan', to: '/keychains/custom-keychains-pakistan' },
      { anchor: 'Shop wallets in Pakistan', to: '/wallets' },
      { anchor: 'Mens wallets and keychain gifts', to: '/wallets/mens-wallets-pakistan' },
      { anchor: 'Durable keychain material guide', to: '/blog/how-to-choose-keychain-material' },
      { anchor: 'Read wallet and keychain blog guides', to: '/blog' },
    ],
    lsiKeywords: [
      'durable keyring',
      'minimal keychain',
      'gift keychain Pakistan',
      'daily use keychain',
      'car key organizer',
      'heavy duty keychain hook',
      'premium keychain finish',
      'keychain price Pakistan',
    ],
    faqs: [
      {
        question: 'What type of keychain is best for daily use?',
        answer: 'A keychain with a strong ring, dependable hook, and quality hardware is best for regular daily carrying.',
      },
      {
        question: 'Are keychains good gifts in Pakistan?',
        answer: 'Yes. Keychains are practical, affordable, and available in many personalization-friendly styles.',
      },
      {
        question: 'What is the common keychain price range in Pakistan?',
        answer: 'Most keychains sell between PKR 300 and PKR 2,500 depending on material quality and design complexity.',
      },
      {
        question: 'How can I evaluate keychain durability before buying?',
        answer: 'Check ring thickness, clasp quality, material details, and close-up photos of the hardware connection points.',
      },
    ],
  },

  customKeychains: {
    path: '/keychains/custom-keychains-pakistan',
    urlSlug: '/keychains/custom-keychains-pakistan',
    breadcrumb: [
      { label: 'Home', to: '/' },
      { label: 'Keychains', to: '/keychains' },
      { label: 'Custom Keychains' },
    ],
    metaTitle: 'Custom Keychain Pakistan | Name, Resin, Acrylic, Car',
    metaDescription:
      'Order custom keychains in Pakistan: name, couple, resin, acrylic, leather, car and bike styles. Affordable PKR pricing with nationwide delivery.',
    h1: 'Custom Keychain Pakistan - Personal, Durable, Gift-Ready',
    intro:
      'This subcategory clusters custom keychain, custom keychain pakistan, resin, acrylic, leather, car and bike keychain terms into one high-intent page.',
    sections: [
      {
        h2: 'Custom Keychain Intent and Personalization Flow',
        paragraphs: [
          'Custom keychain pages convert when personalization is easy to understand. Buyers want to know what they can customize, how it will look, and how quickly it can be delivered. Clear options for keychain name text, couple keychain pairing, and bead styling help users complete checkout with less hesitation.',
          'Trend-driven terms such as cherry keychain and labubu keychain can be handled as variants inside this subcategory rather than separate thin pages. This keeps topical authority strong while still covering discovery intent from social and search.',
        ],
        subsections: [
          {
            h3: 'Name and couple customization',
            text: 'Provide character limits, font previews, and clear production timelines so buyers can order confidently.',
          },
          {
            h3: 'Gift-first messaging',
            text: 'Highlight occasion use cases like birthdays, anniversaries, and Eid gifting to improve conversion on personalized items.',
          },
        ],
      },
      {
        h2: 'Material Coverage: Resin, Acrylic, Metal, Leather',
        paragraphs: [
          'Searchers looking for keychain resin, resin art keychain, and resin keychain price in Pakistan are often comparing creativity with budget. This page should explain material differences clearly: resin for visual depth, acrylic for lightweight personalization, metal for strength, and leather for premium texture.',
          'Including crochet keychain options broadens audience reach for handmade and soft aesthetic intent. When materials are explained with practical use advice, users choose better and return rates usually drop.',
        ],
      },
      {
        h2: 'Car and Bike Use Cases, Hooks, and Safety Formats',
        paragraphs: [
          'Car keychain, cars keychain, honda keychain, and keychain bike queries indicate high daily-use intent. These users care about ring security, quick access, and hardware durability. Product copy should explicitly mention these performance points.',
          'Utility keywords like hooks keychain, keychain ring, and self defense keychain set should be handled responsibly with clear product scope and practical usage notes. Transparent messaging builds trust and supports better purchase decisions.',
          'To maximize conversions, keep PKR pricing visible by tier and show expected customization turnaround before checkout. Personalized products perform better when delivery expectations are explicit.',
        ],
      },
    ],
    internalLinks: [
      { anchor: 'Shop all keychains', to: '/keychains' },
      { anchor: 'Wallet category page', to: '/wallets' },
      { anchor: 'Mens wallet gifts', to: '/wallets/mens-wallets-pakistan' },
      { anchor: 'Resin keychain ideas blog', to: '/blog/resin-keychain-ideas-pakistan' },
      { anchor: 'Keychain holder wall ideas blog', to: '/blog/keychain-holder-wall-ideas' },
    ],
    lsiKeywords: [
      'personalized keyring',
      'name keychain Pakistan',
      'couple gift keychain',
      'resin custom keyring',
      'acrylic name keychain',
      'leather car key fob',
      'bike keychain Pakistan',
      'custom gift Pakistan',
    ],
    faqs: [
      {
        question: 'How long does a custom keychain order take in Pakistan?',
        answer: 'Most custom orders are prepared within a few business days, then dispatched nationwide based on city delivery timelines.',
      },
      {
        question: 'What is the average custom keychain price in PKR?',
        answer: 'Simple custom designs often start around PKR 500, while premium materials and detailing can increase the final price.',
      },
      {
        question: 'Which material is best for car and bike keychains?',
        answer: 'Metal and quality leather are usually better for heavier daily-use keysets because they hold up longer under tension.',
      },
      {
        question: 'Can I order couple or name keychains as gifts?',
        answer: 'Yes. Couple and name custom keychains are among the most popular personalized gift choices in Pakistan.',
      },
    ],
  },
}


