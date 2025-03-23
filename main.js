// Sample perfume data
const perfumes = [
  {
      id: 1,
      name: "Valentino Donna Born In Roma Eau de Parfum",
      price: 140.00,
      description: "This is a warm floral fragrance inspired by Roman street style and edgy haute couture. A trio of jasmine flowers and sparkling blackcurrant fuse with warm vanilla and rich woods to create a scent that captures the essence of modern femininity.",
      images: [
          "/assets/valention1.jpg",
          "/assets/valentino2.jpg",
          "/assets/valentino3.jpg"
      ],
      notes: ["Blackcurrant, Jasmine Grandiflorum, Bourbon Vanilla"]
  },
  {
      id: 2,
      name: "Ariana Grande Cloud Eau de Parfum",
      price: 70.00,
      description: "Ariana Grande’s fragrance Cloud opens with a dreamy blend of lavender blossom, juicy pear, and bergamot. The heart of the fragrance is a whipped touch of crème de coconut, indulgent praline, and exotic vanilla orchid. Sensual musks and creamy woods add a cashmere like feel that seduces the senses.",
      images: [
          "/assets/perfume4.jpg",
          "/assets/araina2.jpg",
          "/assets/ariana3.jpg"
      ],
      notes: ["Juicy Pear, Crème de Coconut, Sensual Musks"]
  },
  {
      id: 3,
      name: "Marc Jacobs Fragrances Daisy Eau de Toilette",
      price: 137.00,
      description: "Charmingly simple with a signature quality, Daisy Marc Jacobs transports you to a place that’s optimistic, beautiful, and pure. The top of the fragrance is infused with succulent wild berries and soft white violets. At the heart, velvety jasmine warms to a dreamy dry-down of sensual sandalwood, for a romantic, lingering finish.",
      images: [
          "/assets/marc1.jpg",
          "/assets/marc2.jpg",
          "/assets/marc3.jpg"
      ],
      notes: ["Strawberry, Violet Leaves, Jasmine"]
  },
  {
      id: 4,
      name: "JIMMY CHOO I Want Choo Eau de Parfum",
      price: 89.99,
      description: "This floral eau de parfum includes top notes of mandarin juice and velvet peach middle notes of red spider lily and jasmine, and a base note of vanilla.",
      images: [
          "/assets/jimmy1.jpg",
          "/assets/jimmy2.jpg",
          "/assets/jimmy1.jpg"
      ],
      notes: ["Mandarin Juice, Jasmine, and Vanilla"]
  },
  {
      id: 5,
      name: "Armani Beauty My Way Eau de Parfum",
      price: 160.00,
      description: "This feminine fragrance combines consciously sourced ingredients from around the world in a blend of woody and floral notes. Bergamot meets Egyptian orange blossom in a sparkling start amplified by Indian tuberose and jasmine. At the base, white musk and cedarwood from Virginia combine with vanilla from Madagascar.",
      images: [
          "/assets/armani1.jpg",
          "/assets/armani2.jpg",
          "/assets/armani3.jpg"
      ],
      notes: ["Orange Blossom, Tuberose, Vanilla"]
  },
  {
      id: 6,
      name: "Carolina Herrera Good Girl Blush Eau de Parfum",
      price: 170.00,
      description: "A fresh, floral explosion of femininity, this radiant reinvention of the iconic Good Girl scent reveals the multifaceted nature of modern womanhood with a double dose of sensual vanilla and exotic ylang-ylang.",
      images: [
          "/assets/carolina1.jpg",
          "/assets/carolina2.jpg",
          "/assets/carolina3.jpg"
      ],
      notes: ["Mandarin, Ylang-Ylang, Vanilla"]
  },
  {
      id: 7,
      name: "Jo Malone London Red Hibiscus Cologne Intense",
      price: 160.00,
      description: "A chance encounter with a rare and vivid flower in the heart of Hawaii’s tropical forest. The striking red hibiscus is complemented by a touch of jasmine sambac and the sensuality of vanilla. Solar and exotic.",
      images: [
          "/assets/jo1.jpg",
          "/assets/jo2.jpg",
          "/assets/jo3.jpg"
      ],
      notes: ["Mandarin, Red Hibiscus, Vanilla"]
  },
  {
      id: 8,
      name: "KAYALI VANILLA CANDY ROCK SUGAR | 42 Eau de Parfum",
      price: 138.00,
      description: "Live your sweetest fantasy with VANILLA CANDY ROCK SUGAR | 42 Eau de Parfum. Sugary, delightful, and tempting, this fragrance is a lighter, youthful take on the brand’s cult favorite, VANILLA | 28.",
      images: [
          "/assets/kay1.jpg",
          "/assets/kay2.jpg",
          "/assets/kay3.jpg"
      ],
      notes: ["Candied Pear, Rock Sugar, Vanilla Cream"]
  }
  
];

const makeup = [
  {
      id: 9,
      name: "NARS Light Reflecting Advanced Skincare Medium Coverage Foundation",
      price: 54.00,
      description: "An advanced makeup-skincare-hybrid foundation with a natural finish that quickly blurs and smooths while visibly improving skin’s clarity over time.",
      images: ["/assets/found1.jpg", "/assets/found2.jpg", "/assets/found3.jpg"],
      shades: ["Natural"]
  },
  {
      id: 10,
      name: "Rare Beauty by Selena Gomez Mini Soft Pinch Liquid Blush",
      price: 15.00,
      description: "Weightless, long-lasting liquid blush with up to 12-hour wear. Blends and builds beautifully for a soft, healthy flush in matte or dewy finishes.",
      images: ["/assets/blush1.jpg", "/assets/blush2.jpg", "/assets/blush3.jpg"],
      shades: ["Light", "Medium", "Dark"]
  },
  {
      id: 11,
      name: "NARS Radiant Creamy Concealer with Medium Coverage",
      price: 32.00,
      description: "A multipurpose concealer that brightens, corrects, and perfects for up to 16 hours with a creamy medium-to-buildable coverage and natural, radiant finish.",
      images: ["/assets/con1.jpg", "/assets/con2.jpg", "/assets/con3.jpg"],
      shades: ["Radiant"]
  },
  {
      id: 12,
      name: "PATRICK TA Major Dimension Eye Illusion Eyeshadow Duo",
      price: 42.00,
      description: "A shimmering eyeshadow duo that illuminates eyes with super-fine sparkles and multidimensional pearl pigments.",
      images: ["/assets/eye1.jpg", "/assets/eye2.jpg", "/assets/eye3.jpg"],
      shades: ["Neutral"]
  },
  {
      id: 13,
      name: "Anastasia Beverly Hills Long-Wearing Matte & Satin Velvet Lipstick",
      price: 23.00,
      description: "A full-pigment lipstick with brilliant color, control, and comfort for velvety-soft, intensely rich lips that last..",
      images: ["/assets/lip1.jpg", "/assets/lip2.jpg", "/assets/lip3.jpg"],
      shades: ["Haze","Tease "]
  },
  {
      id: 14,
      name: "Charlotte Tilbury Airbrush Matte Bronzer",
      price: 58.00,
      description: "An oversized natural matte bronzer in a refillable compact, infused with hyaluronic acid for a skin-perfecting bronzed filter for the face and body.",
      images: ["/assets/bronz1.jpg", "/assets/bronz2.jpg", "/assets/bronz3.jpg"],
      shades: ["Matte"]
  },
  {
      id: 15,
      name: "NARS Pure Radiant Tinted Moisturizer Broad Spectrum SPF 30",
      price: 49.00,
      description: "A lightweight tinted moisturizer that hydrates and smooths skin while brightening with vitamin C and protecting with SPF 30.",
      images: ["/assets/moi1.jpg", "/assets/moi2.jpg", "/assets/moi3.jpg"],
      shades: ["Light"]
  },
  {
      id: 16,
      name: "Rare Beauty by Selena Gomez Perfect Strokes Universal Volumizing Mascara",
      price: 22.00,
      description: "A universal mascara with a unique eye-hugging brush to lift, lengthen, curl, and volumize every lash type for a lusher look.",
      images: ["/assets/mas1.jpg", "/assets/mas2.jpg", "/assets/mas3.jpg"],
      shades: ["Volumizing, Curling, and Lengthening"]
  }

];

const skincare = [
  {
      id: 17,
      name: "Hydrating Serum",
      price: 59.99,
      description: "Intensive hydrating serum with hyaluronic acid.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Hydration", "Anti-aging", "Brightening"]
  },
  {
      id: 18,
      name: "Vitamin C Cream",
      price: 45.99,
      description: "Brightening cream with pure Vitamin C.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Brightening", "Anti-oxidant", "Even tone"]
  },
  {
      id: 19,
      name: "Night Repair Cream",
      price: 69.99,
      description: "Intensive night repair cream for all skin types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Repair", "Renewal", "Hydration"]
  },
  {
      id: 20,
      name: "Night Repair Cream",
      price: 69.99,
      description: "Intensive night repair cream for all skin types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Repair", "Renewal", "Hydration"]
  },
  {
      id: 21,
      name: "Night Repair Cream",
      price: 69.99,
      description: "Intensive night repair cream for all skin types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Repair", "Renewal", "Hydration"]
  },
  {
      id: 22,
      name: "Night Repair Cream",
      price: 69.99,
      description: "Intensive night repair cream for all skin types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Repair", "Renewal", "Hydration"]
  },
  {
      id: 23,
      name: "Night Repair Cream",
      price: 69.99,
      description: "Intensive night repair cream for all skin types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Repair", "Renewal", "Hydration"]
  },
  {
      id: 24,
      name: "Night Repair Cream",
      price: 69.99,
      description: "Intensive night repair cream for all skin types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Repair", "Renewal", "Hydration"]
  }
];

const hair = [
  {
      id: 25,
      name: "Repair Shampoo",
      price: 29.99,
      description: "Repairing shampoo for damaged hair.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Repair", "Strengthen", "Shine"]
  },
  {
      id: 26,
      name: "Leave-in Conditioner",
      price: 34.99,
      description: "Moisturizing leave-in conditioner for all hair types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Moisture", "Detangle", "Protect"]
  },
  {
      id: 27,
      name: "Hair Oil",
      price: 39.99,
      description: "Nourishing hair oil for shine and smoothness.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Shine", "Smooth", "Nourish"]
  },
  {
      id: 28,
      name: "Leave-in Conditioner",
      price: 34.99,
      description: "Moisturizing leave-in conditioner for all hair types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Moisture", "Detangle", "Protect"]
  },
  {
      id: 29,
      name: "Leave-in Conditioner",
      price: 34.99,
      description: "Moisturizing leave-in conditioner for all hair types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Moisture", "Detangle", "Protect"]
  },
  {
      id: 30,
      name: "Leave-in Conditioner",
      price: 34.99,
      description: "Moisturizing leave-in conditioner for all hair types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Moisture", "Detangle", "Protect"]
  },
  {
      id: 31,
      name: "Leave-in Conditioner",
      price: 34.99,
      description: "Moisturizing leave-in conditioner for all hair types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Moisture", "Detangle", "Protect"]
  },
  {
      id: 32,
      name: "Leave-in Conditioner",
      price: 34.99,
      description: "Moisturizing leave-in conditioner for all hair types.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      benefits: ["Moisture", "Detangle", "Protect"]
  }
];

const bath = [
  {
      id: 34,
      name: "Luxury Bath Bombs",
      price: 19.99,
      description: "Set of luxurious bath bombs with essential oils.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Lavender", "Rose", "Eucalyptus"]
  },
  {
      id: 35,
      name: "Body Butter",
      price: 24.99,
      description: "Rich and creamy body butter for deep hydration.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Vanilla", "Coconut", "Shea"]
  },
  {
      id: 36,
      name: "Shower Gel",
      price: 16.99,
      description: "Luxurious shower gel with natural extracts.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Ocean", "Citrus", "Floral"]
  },
  {
      id: 37,
      name: "Shower Gel",
      price: 16.99,
      description: "Luxurious shower gel with natural extracts.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Ocean", "Citrus", "Floral"]
  },
  {
      id: 38,
      name: "Shower Gel",
      price: 16.99,
      description: "Luxurious shower gel with natural extracts.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Ocean", "Citrus", "Floral"]
  },
  {
      id: 39,
      name: "Shower Gel",
      price: 16.99,
      description: "Luxurious shower gel with natural extracts.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Ocean", "Citrus", "Floral"]
  },
  {
      id: 40,
      name: "Shower Gel",
      price: 16.99,
      description: "Luxurious shower gel with natural extracts.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Ocean", "Citrus", "Floral"]
  },
  {
      id: 41,
      name: "Shower Gel",
      price: 16.99,
      description: "Luxurious shower gel with natural extracts.",
      images: ["/api/placeholder/400/500", "/api/placeholder/400/500", "/api/placeholder/400/500"],
      scents: ["Ocean", "Citrus", "Floral"]
  }
];


// Cart functionality
let cart = [];
let currentSlide = 0;
let currentCheckoutStep = 1;

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
  displayProducts('perfume-grid', perfumes);
  displayProducts('makeup-grid', makeup);
  displayProducts('skincare-grid', skincare);
  displayProducts('hair-grid', hair);
  displayProducts('bath-grid', bath);
  initializeSlider();
  setupEventListeners();
  setupCheckoutProcess();
});

// Display perfumes in grid
function displayProducts(gridClass, products) {
  const grid = document.querySelector(`.${gridClass}`);
  if (!grid) return;

  grid.innerHTML = products.map(product => `
      <div class="product-card" data-id="${product.id}">
          <div class="product-image">
              <img src="${product.images[0]}" alt="${product.name}">
          </div>
          <div class="product-info">
              <h3>${product.name}</h3>
              <div class="product-price">$${product.price}</div>
              <button class="add-to-cart-btn" data-id="${product.id}">
                  ${isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
          </div>
      </div>
  `).join('');
}

// Check if item is in cart
function isInCart(id) {
  return cart.some(item => item.id === id);
}

// Initialize slider
function initializeSlider() {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.add('active');

  setInterval(() => {
      nextSlide();
  }, 5000);
}

// Next slide
function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Previous slide
function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Setup event listeners
function setupEventListeners() {
  // Slider navigation
  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);

  // Product card clicks - Fixed to use proper selectors and work for all product types
  document.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      if (card && !e.target.classList.contains('add-to-cart-btn')) {
          const productId = parseInt(card.dataset.id);
          showProductModal(productId);
      }
  });

    // Add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart-btn')) {
          const productId = parseInt(e.target.dataset.id);
          addToCart(productId);
          e.target.textContent = 'Added to Cart';
          e.target.classList.add('added');
      }
  });

    // Cart toggle
    document.getElementById('cart-toggle').addEventListener('click', (e) => {
      e.preventDefault();
      toggleCart();
  });

    // Close modal buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
          document.getElementById('product-modal').style.display = 'none';
          document.getElementById('checkout-modal').style.display = 'none';
      });
  });

  // Close cart
  document.querySelector('.close-cart').addEventListener('click', toggleCart);

  // Checkout button
  document.getElementById('checkout-btn').addEventListener('click', () => {
      if (cart.length > 0) {
          openCheckoutModal();
      }
  });
}



