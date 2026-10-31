const THEME_KEY = "bigFaveTheme";
const CART_KEY = "bigFaveCart";

// Add products here. Use colors: [] when a product has no color choices.
const products = {
  fan1: {
  name: "Cooler Star High Spped Electric fan",
  category: "Electric Fan",
  price:9000,
  images: [
    "fanc2-removebg-preview.png",
    "fanc1-removebg-preview.png"
  ],
  description: "the DUDU High Speed Brushless Motor Fan. It is a modern, personal cooling fan built around a high-performance brushless motor, which allows it to deliver stronger, more concentrated airflow than typical handheld pocket fans..",
  colors: []
},

  fan2: {
  name: "Mini Handheld Fan",
  category: "Electric Fan",
  price:6000,
  images: [
    "minif-removebg-preview.png",
    "minif3-removebg-preview.png"
  ],
  description: "It is a compact, personal cooling device designed to be portable and versatile, featuring a built-in water misting spray function (indicated by the spray icon and water tank design) to provide enhanced cooling through a fine nano-mist..",
  colors: []
} ,
 fan3: {
  name: "Salamu clip on fan",
  category: "Electric Fan",
  price:7500,
  images: [
    "salamu2.jpeg",
    "salamu.jpeg"
  ],
  description: "It is a compact, personal cooling device designed to be portable and versatile, featuring a built-in water misting spray function (indicated by the spray icon and water tank design) to provide enhanced cooling through a fine nano-mist..",
  colors: []
},
fan4: {
  name: "Mini handheld fan 5-speed USB",
  category: "Electric Fan",
  price:6000,
  images: [
    "fivespeed2.jpg",
    "fivespeed3.jpg"
  ],
  description: "This portable fan is designed to be compact and foldable, making it easy to carry and use wherever you go. It also serves as a phone holder, allowing you to enjoy hands-free comfort.This fan is equipped with a built-in lithium battery, which can work continuously for 8-12 hours on a single charge. Say goodbye to frequent supplements and enjoy uninterrupted cooling.",
  colors: ["pink","white","black","purple"]
},

fan5: {
  name: "Handheld MT09 mini fan",
  category: "Electric Fan",
  price:4000,
  images: [
   "loves.jfif",
    "loves3.jfif"
  ],
  description: "Rechargeable Handheld mini fan is a USB port rechargeable model. It is portable and light-weight and can be put in the bag when you go out especially during summer. USB cable can be charged with computer, mobile power, power bank and so on.",
  colors: ["pink","blue"]
},
fan6: {
  name: "Iwin Eco E Rechargeable Desktop Fan",
  category: "Electric Fan",
  price:8000,
  images: [
   "iwis2-removebg-preview.png",
    "iwis3-removebg-preview.png"
  ],
  description: "The IWIN ECO E-Power Rechargeable Desktop Fan (Model: IWS018) is an 8-inch (200mm) portable cooling solution featuring a stable performance motor, a rechargeable lithium-ion battery with DC 5V fast charging, a built-in LED night light, a 1-year warranty, and official SONCAP certification for standard quality.",
  colors: ["pink"]
},

fan7: {
  name: "The DUDU Mini Fan",
  category: "Electric Fan",
  price:11000,
  images: [
   "dudub2.jpeg",
    "dudub1-removebg-preview.png"
  ],
  description: "The DUDU Mini Fan is a light and portable cooling solution that features an integrated digital status display, quiet air blowing operation, USB charging capabilities, and long battery life to give summer a different cool.",
  colors: []
},
fan8: {
  name: "Neck-fan",
  category: "Electric Fan",
  price:9000,
  images: [
      "china-removebg-preview.png"
  ],
  description: "These rechargeable, bladeless personal fans loop comfortably around your neck like a pair of headphones, providing 360-degree surrounding airflow without risking hair catching or pinching. They are commonly used during outdoor activities, workouts, office work, or commuting.",
  colors: []
},
fan9: {
  name: "salamu f-32 Solar Fan",
  category: "Electric/solar Fan",
  price:32000,
  images: [
      "salamu-solar-removebg-preview.png"
  ],
  description: "The SALAMU F32 Multi-Functional Air Circulation Fan is an innovative, dual-powered cooling system engineered to work seamlessly both on and off the grid. This versatile appliance features a unique 3-in-1 transformative body equipped with an extendable support pole, allowing it to instantly convert between a low-profile desktop fan, a mid-level table fan, and a tall floor pedestal fan depending on your space requirements. At its core, the unit is powered by a high-capacity rechargeable battery designed for long-range performance, providing sustained airflow during extended power outages. To ensure continuous operation regardless of grid stability, the fan features a hybrid charging system that can replenish its battery using standard electricity or directly through an external solar panel kit, making it an exceptionally reliable climate control solution for homes, offices, and remote locations alike.",
  colors: []
},
 audio1: {
  name: "CYXG Wireless",
  category: "Audio Accessories",
  price:10500,
  images: [
    "high2.jpg",
    "high3.jpg"
  ],
  description: "Experience the perfect blend of affordability, modern design, and premium audio technology with CYXG Wireless TWS Earbuds. Engineered for dynamic lifestyles, these budget-friendly earbuds deliver high-fidelity sound, stable connectivity, and exceptional comfort without breaking the bank. Whether you are working out at the gym, commuting through busy city streets, or taking hands-free business calls, CYXG Wireless offers a tailored audio solution for your everyday needs.",
  colors: []
},

audio2: {
  name: "Jamax Sports Earpods",
  category: "Audio Accessories",
  price:6500,
  images: [
    "jamax2.jpg",
    "jamax3.jpg"
  ],
  description: "The Jamax Max Buds 6 Sport Wireless Earbuds are entry-level, true wireless audio devices engineered specifically for workouts and outdoor fitness. They balance a budget-friendly price point with high-stability physical hardware to prevent them from slipping out during intense movements.",
  colors: []
},

audio3: {
  name: "JBL Super Bass 112",
  category: "Audio Accessories",
  price:6000,
  images: [
    "supper1.jfif",
    "supper2.jpeg"
  ],
  description: "The JBL i12 Super Bass is a budget-friendly, over-ear wireless Bluetooth headphone designed to deliver heavy low-end audio at an affordable price point. It features a lightweight, foldable plastic frame with padded ear cups and a cushioned headband for comfortable, on-the-go listening.",
  colors: []
},

audio4: {
  name: "Ultrapods max",
  category: "Audio Accessories",
  price:3800,
  images: [
    "ultra3.jpg",
    "ultra2.jpg"
  ],
  description: "The Ultrapods Max 5.3 are ultra-budget, true wireless stereo (TWS) earbuds most recognizable for their distinctive, see-through transparent design that reveals the inner components of both the earbuds and the charging case. They use Bluetooth 5.3 to deliver a stable wireless connection, faster pairing, and low battery consumption at an entry-level price point.",
  colors: ["blck","pink"]
},

audio5: {
  name: "JAMAX Beyond Sound Wireless Bluetooth Earphones ",
  category: "Audio Accessories",
  price:4000,
  images: [
    "beyond1.jpg",
    "beyound2.jfif"
  ],
  description: "The JAMAXBeyond SoundWireless Bluetooth Earphones are highly affordable True Wireless Stereo (TWS) in-ear earbuds widely available across the Nigerian market. Known for their entry-level pricing and modern styling, they aim to deliver reliable mobile audio and casual everyday performance without breaking the bank.",
  colors: []
},

audio6: {
  name: "Ear-X",
  category: "Audio Accessories",
  price:2500,
  images: [
    "ear-x2.jpg",
    "ear-x3.jpg"
  ],
  description: "The Ear X is an affordable wired in-ear earpiece designed with a contoured plastic shape that mirrors the human ear for a secure fit Smart Gadget Shop. It features a lightweight cable with an integrated in-line remote capsule for hands-free calling and volume control, while delivering clear vocal clarity and punchy bass for casual everyday music listening . Available with a Lightning connector, it serves as a straightforward, budget-friendly replacement accessory for modern iOS smartphones.",
  colors: []
},
audio7: {
  name: "Jamax earpiece",
  category: "Audio Accessories",
  price:2500,
  images: [
  "sss.webp",
    "jamaxear1"
  ],
  description: "The Jamax earpiec is an affordable wired in-ear earpiece designed with a contoured plastic shape that mirrors the human ear for a secure fit Smart Gadget Shop. It features a lightweight cable with an integrated in-line remote capsule for hands-free calling and volume control, while delivering clear vocal clarity and punchy bass for casual everyday music listening .It serves as a straightforward, budget-friendly replacement accessory for modern smartphones.",
  colors: []
},
audio8: {
  name: "Itel MG-S28",
  category: "Audio Accessories",
  price:6500,
  images: [
    "mg-28-removebg-preview.png"
  ],
  description: "The itel MG-S28 is a set of true wireless earbuds designed to offer powerful sound and seamless mobile connectivity in a portable package. Packaged in a distinctive red box with metallic accents, these stem-style earbuds feature a sleek black finish paired with a compact, matching charging case. Built around a massive 13.2mm horn driver, the audio hardware is engineered to deliver an enhanced Shock Bass performance while maintaining high-definition voice clarity and digital noise reduction during calls. For user convenience, the earbuds feature quick automatic pairing right out of the charging box alongside touch-sensitive panels on the stems to smoothly handle music playback and incoming phone calls.",
  colors: []
},

audio9: {
  name: "Jamax MaxBuds16 BETTER LISTENING",
  category: "Audio Accessories",
  price:6500,
  images: [
    "jamax-removebg-preview.png",
     "jamax2.jfif"
  ],
  description: "The JAMAX MaxBuds16 is a compact set of true wireless earbuds highlighted by a modern translucent casing aesthetic. Packaged in a bright green box, these wireless headphones feature standard black stem-style earbuds housed in a transparent, open-view pocket charging capsule. Mechanically, the acoustic system is fine-tuned under a Better Listening profile to deliver balanced stereophonic sound, crisp high frequencies, and deep bass accents. The earbuds employ built-in touch-sensor paths along their stems for seamless, hands-free management of music play cycles, track indexing, and cell calls. For power configuration, the pocket dock utilizes a universal USB Type-C charging port along its base and supplies a robust hybrid runtime, yielding between 20 to 25 hours of total cumulative playback capacity on a full cycle.",
  colors: []
},

charger1: {
  name: "SH-3536T Super Fast Type-c Charger",
  category: "Complete Charger",
  price:5000,
  images: [
    "sh2.JPG",
    "sh3.jpg"
  ],
  description: "The SHPLUS SH-A3536T is a high-performance 65W wall charger adapter built for ultra-fast power delivery across mobile devices and accessories. Engineered with an focus on speed and safety, it serves as a powerful single-port solution for modern power-hungry gadgets.",
  colors: []
},
charger2: {
  name: "SH-A1031 Super Fast Type-c Charger",
  category: "Complete Charger",
  price:4000,
  images: [
    "shplu452",
    "shplu4522.jpg"
  ],
  description: "this is a high-speed UK-plug wall adapter packaged with a Type-C cable, designed to safely and rapidly power up smartphones and tablets. It features 45W maximum output and an Intelligent Auto-ID chip that automatically detects your connected device to deliver the optimal, safest charging speed. For added safety, the unit is constructed with a fire-retardant housing to protect against over-voltage and overheating.",
  colors: []
},

charger3: {
  name: "SH-A3547AC Super Fast Type-c Charger",
  category: "Complete Charger",
  price:4000,
  images: [
    "Sh-A3547AC2.jpeg",
    "Sh-A3547AC.jpeg"
  ],
  description: "This is a high-power wall adapter designed for quick and efficient charging. It delivers up to 65W of output power, making it capable of handling smartphones, tablets, and compatible laptops.",
  colors: []
},

charger4: {
  name: "SH-A5007T Super Fast 6in1 Charger",
  category: "Complete Charger",
  price:6500,
  images: [
    "SH-A5007T2.jpeg",
    "SH-A5007T.jpeg"
  ],
  description: "this is a multi-port wall adapter designed to power several devices simultaneously while saving outlet space. It features PD (Power Delivery) and Qualcomm Quick Charge 3.0 technologies for rapid charging.",
  colors: []
},

charger5: {
  name: "SH-USB Fast car Charger",
  category: "Complete Charger",
  price:3000,
  images: [
    "car2.jpeg",
    "car1.jpeg"
  ],
  description: "The is the ultimate road-trip essential designed to keep your busy life fully powered while you drive. No more carrying a tangled mess of different cords or arguing over who gets to charge their phone.",
  colors: []
},

charger6: {
  name: "AAA Fast car Charger",
  category: "Complete Charger",
  price:3000,
  images: [
    "ccar2.jpeg",
    "car1.jpeg"
  ],
  description: "The is the ultimate road-trip essential designed to keep your busy life fully powered while you drive. No more carrying a tangled mess of different cords or arguing over who gets to charge their phone.",
  colors: []
},
charger7: {
  name: "WINS 45W Utral Speed Charger",
  category: "Complete Charger",
  price:6000,
  images: [
    "45w2.jpg",
    "45w.jpg"
  ],
  description: " A highly portable, versatile dual-port wall adapter designed for rapid and efficient power delivery across multiple devices.",
  colors: ["Black","White"]
},
audio4: {
  name: "Ultrapods max",
  category: "Audio Accessories",
  price:3800,
  images: [
    "ultra3.jpg",
    "ultra2.jpg"
  ],
  description: "The Ultrapods Max 5.3 are ultra-budget, true wireless stereo (TWS) earbuds most recognizable for their distinctive, see-through transparent design that reveals the inner components of both the earbuds and the charging case. They use Bluetooth 5.3 to deliver a stable wireless connection, faster pairing, and low battery consumption at an entry-level price point.",
  colors: ["blck","pink"]
},

audio4: {
  name: "Ultrapods max",
  category: "Audio Accessories",
  price:3800,
  images: [
    "ultra3.jpg",
    "ultra2.jpg"
  ],
  description: "The Ultrapods Max 5.3 are ultra-budget, true wireless stereo (TWS) earbuds most recognizable for their distinctive, see-through transparent design that reveals the inner components of both the earbuds and the charging case. They use Bluetooth 5.3 to deliver a stable wireless connection, faster pairing, and low battery consumption at an entry-level price point.",
  colors: ["blck","pink"]
},

cable1: {
  name: "SH-2A fast lighten Cable",
  category: "Charging Cable",
  price:1500,
  images: [
    "shplusiphone.jfif",
    "shplus iphone.jpg"
  ],
  description: "2A Fast Charging – Powers up your device quickly and efficiently 1M Length – Perfect for flexible use at home, in the office, or in the car.",
    types: ["iPhone", "Micro-USB","Type-c"],

},
cable2: {
  name: "New-age 1.5m Fast Lighten Cable",
  category: "Charging Cable",
  price:2000,
  images: [
    "New-age1.5m2.jpeg",
    "New-age1.5m.jpeg"
  ],
  description: "This is 1.5M USB-A to Lightning Fast Cable is a premium, high-performance charging solution built for everyday durability and convenience. Measuring an extra-long 1.5 meters, it eliminates the hassle of short cords, giving you the freedom to comfortably use your iPhone or iPad while it charges from the bed, couch, or office desk. Engineered with an intelligent high-quality chip, it ensures stable, high-speed data transmission and optimized fast charging without overheating or harming your device's battery health. Designed for universal compatibility across Lightning-enabled iPhones, iPads, and iPods, its reinforced, heavy-duty build withstands daily bends and twists, making it a reliable and long-lasting alternative to standard cables.",
  colors: []
},
cable3: {
  name: "SH-1m type-c to Lighten Cable",
  category: "Charging Cable",
  price:2000,
  images: [
    "shplust-i2.jpeg",
    "shplust-i.jpeg"
  ],
  description: "This one-meter aftermarket cable is designed specifically for Apple devices using a Lightning port, such as iPhone 8 through iPhone 14 models. It supports Power Delivery (PD) fast charging and high-speed data transmission when paired with a compatible USB-C wall adapter. The box highlights that it is a certified, reliable choice for standard everyday charging needs.",
  colors: []
},
cable4: {
  name: "New Life 3A Fast Type-C Cable",
  category: "Charging Cable",
  price:2000,
  images: [
    "newlifec2.jpeg",
    "newlifec.jpeg"
  ],
  description: "This is 3A USB-A to Type-C Quick Charge Cable (Model: N-005) is built to deliver blazing-fast power and reliable performance for your modern devices. Boasting a powerful 3A Quick Charge output, it fuels up your Type-C smartphones, tablets, and accessories significantly faster than standard cords while supporting rapid, error-free data transfers. It features a generous 1200mm (1.2 meters) length, giving you the perfect balance of flexibility and tangle-free convenience at home, in the office, or on the go. Crafted with premium, heavy-duty materials, this robust cable is built to handle daily bending, and it comes backed by an exceptional 365-day warranty for total quality assurance and ultimate peace of mind.",
  colors: []
},

cable5: {
  name: "Meeplus 60W Fast Type-C to Type-C Cable",
  category: "Charging Cable",
  price:2000,
  images: [
    "meeplusback.jpeg",
    "meeplus-removebg-preview.png"
  ],
  description: "Crafted with an ultra-durable, premium braided nylon jacket, it is built to resist fraying, tangling, and heavy daily wear, giving it a significantly longer lifespan than standard cords. The heavy-duty reinforced SR connectors are specialized to prevent snapping at the joints under constant bending. Supporting both ultra-fast charging and high-speed data syncing in one sleek, robust package, this cable is the perfect blend of extreme durability and high-speed reliability for the home, office, or travel.",
  types: ["type-c","iPhone"]
},

cable6: {
  name: "BLUSMART 30W Type-C to Lightning  Cable",
  category: "Charging Cable",
  price:2000,
  images: [
    "meeplusback.jpeg",
    "meeplus-removebg-preview.png"
  ],
  description: "This BLUSMART 30W Type-C to Lightning Charge Cable (Model: BS-014) is the ideal high-speed charging accessory engineered to get your Apple devices powered up in no time. Delivering a powerful 30W output, it fully utilizes Power Delivery (PD) fast charging to juice up your iPhone or iPad significantly faster than standard cords—taking your battery from zero to half full in just minutes.",
   types: ["type-c","iPhone"]
},

cable7: {
  name: "BLUSMART 65W Type-C to Lightning  Cable",
  category: "Charging Cable",
  price:3500,
  images: [
    "blus652-removebg-preview.png",
    "blus65-removebg-preview.png"
  ],
  description: "This BLUSMART 65W Type-C to Type-c (Model: BS-0001) is the ideal high-speed charging accessory engineered to get your Apple devices powered up in no time. Delivering a powerful 30W output, it fully utilizes Power Delivery (PD) fast charging to juice up your iPhone or iPad significantly faster than standard cords—taking your battery from zero to half full in just minutes.",
    types: ["type-c","iPhone"]
},
cable8: {
  name: "Shplus Iphone Cable B036",
  category: "Charging Cable",
  price:1500,
  images: [
  
    "shplusiosw.jpg"
  ],
  description: "2A Fast Charging – Powers up your device quickly and efficiently 1M Length – Perfect for flexible use at home, in the office, or in the car.",
  types: ["Micro-USB","iPhone"],
   
},

cable9: {
  name: " New Life NA-71 Lightning Cable",
  category: "Charging Cable",
  price:1500,
  images: [
  
    "newlife2-removebg-preview.png",
    "newlife1.jpeg"
  ],
  description: "Thi Lightning Cable is a 1-meter third-party charging and data sync accessory designed for Apple devices. It features a standard USB-A to Lightning interface and supports up to 3A current output to facilitate faster charging when connected to a compatible power adapter. This aftermarket cable is commonly distributed through retail technology shops across Nigeria for everyday mobile use.",
  colors: []
},
adapter1: {
  name: "iPhone 17 Pro Max 35W Power Adapter",
  category: "Power Bank",
  price:5000,
  images: [
  
    "adapter2-removebg-preview.png",
    "adapter1-removebg-preview.png"
  ],
  description: "Upgrade your charging setup with this high-efficiency 35W USB-C Power Adapter. Designed with a sleek, minimalist aesthetic inspired by modern smartphone packaging, this aftermarket wall brick offers reliable power delivery for your mobile devices. It features a high-speed Type-C port engineered to quickly juice up compatible smartphones, tablets, and accessories. Compact and lightweight, it makes a perfect backup charger for your home, office, or travel bag.",
  colors: []
},

bank1: {
  name: "ZHY 22.5W 20000mAh Fast Charging Power Bank ",
  category: "Power Bank",
  price:18500,
  images: [
  "zhy.webp",
    "zhy1-removebg-preview.png",
    "zhy3.jpeg"
  ],
  description: "ZHY 3-in-1 Fast Charging Power Bank (Model: ZHY-211) is a highly versatile, all-in-one charging solution designed for travel and daily convenience. By combining a high-capacity portable battery, a wall adapter, and built-in charging cables into a single compact device, it eliminates the need to carry multiple separate accessories.",
  colors: []
},

bank2: {
  name: "FrankDisk 22.5w 20000mAh Fast Charging Power Bank ",
  category: "Power Bank",
  price:16500,
  images: [
  
    "frankp.jpg",
  ],
  description: "FrankDisk 22.5W Fast Charging Power Bank (Model: FD-08) is a high-performance, compact portable charger built for modern multi-device users. Combining a dense battery pool with rapid power-delivery technology and an integrated cable setup, it offers an efficient way to keep your essential electronics running on the move.",
  

},

bank3: {
  name: "FrankDisk 22.5w 30000mAh Fast Charging Power Bank",
  category: "Power Bank",
  price:24500,
  images: [
  
    "frank30.webp",
  ],
  description: "FrankDisk 22.5W Fast Charging Power Bank  is a high-performance, compact portable charger built for modern multi-device users. Combining a dense battery pool with rapid power-delivery technology and an integrated cable setup, it offers an efficient way to keep your essential electronics running on the move.",

},

bank4: {
  name: "oraimo PowerJet 501 50000mAh Power Bank",
  category: "Power Bank",
  price:62500,
  images: [
    "oriamo502.webp",
    "oriamo501.webp"
  ],
  description: "The Oraimo PowerJet 501 (OPB-750SQ) is an ultra-high capacity, 50,000mAh (185Wh) portable power bank engineered by Oraimo to deliver heavy-duty backup power for smartphones, tablets, and compatible Type-C laptops",

},
  bank5: {
  name: "Poga (65000mAh) Powerbank ",
  category: "Power Bank",
  price:50900,
  images: [
    "poga65.png",
    "poga652-removebg-preview.png"
  ],
  description: "65,000mAH Fast charge Power bank with LED display and torchlight. 5V/2.1A triple USB outputs. 22.5W PD. Type-C & Micro-USB inputs. Temperature and Overcharge protection. Large capacity Polymer batteries. with handling Strap.",

},
    bank6: {
  name: "Yotta10 10,000mAh Powerbank ",
  category: "Power Bank",
  price:11500,
  images: [
    "yotta.jpg"
  ],
  description: "The Yotta10 delivers 10,000mAh of reliable power with 22.5W PD fast charging, dual USB outputs, and Micro-USB input, letting you charge two devices simultaneously. Its sleek, wear-resistant design, analog power display, and temperature and overcharge protection make it a dependable everyday charging companion.Stay powered. Stay ready. Get your Yotta10 today.",

},
};



// Shared cart helpers
function readCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
}

function updateCartCount() {
  const cartCount = document.querySelector("#cartCount");
  if (!cartCount) return;

  const total = readCart().reduce(
    (sum, item) => sum + (Number(item.quantity) || 0),
    0
  );

  cartCount.textContent = total;
}

// Dark and bright mode
const themeToggle = document.querySelector("#themeToggle");

function applyTheme(theme) {
  const selectedTheme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = selectedTheme;

  if (themeToggle) {
    const isLight = selectedTheme === "light";
    themeToggle.innerHTML = isLight
      ? '🌙 <span>Dark mode</span>'
      : '☀️ <span>Bright mode</span>';
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to bright mode"
    );
  }
}

applyTheme(localStorage.getItem(THEME_KEY) || "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.body.dataset.theme === "dark" ? "light" : "dark";

    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

// Footer year
const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Home page product slider
const productSlider = document.querySelector("#productSlider");
const productsPrev = document.querySelector("#productsPrev");
const productsNext = document.querySelector("#productsNext");

if (productSlider && productsPrev && productsNext) {
  productsPrev.addEventListener("click", () => {
    productSlider.scrollBy({
      left: -productSlider.clientWidth * 0.8,
      behavior: "smooth"
    });
  });

  productsNext.addEventListener("click", () => {
    productSlider.scrollBy({
      left: productSlider.clientWidth * 0.8,
      behavior: "smooth"
    });
  });
}

// Product preview page
const productId = new URLSearchParams(window.location.search).get("id");
const product = products[productId];

const productName = document.querySelector("#productName");
const productCategory = document.querySelector("#productCategory");
const productPrice = document.querySelector("#productPrice");
const productImage = document.querySelector("#productImage");
const productDescription = document.querySelector("#productDescription");
const productColor = document.querySelector("#productColor");
const productType = document.querySelector("#productType");
const productQuantity = document.querySelector("#productQuantity");
const quantityMinus = document.querySelector("#quantityMinus");
const quantityPlus = document.querySelector("#quantityPlus");
const addToCartButton = document.querySelector("#addToCart");
const cartMessage = document.querySelector("#cartMessage");
const thumbnails = document.querySelectorAll(".thumbnail");


function formatNaira(amount) {
  return `₦${Number(amount).toLocaleString("en-NG")}`;
}

function showProduct() {
  // These elements only exist on product.html.
  if (!productName) return;

  if (!product) {
    productName.textContent = "Product not found";
    if (productCategory) productCategory.textContent = "";
    if (productPrice) productPrice.textContent = "";
    if (productDescription) {
      productDescription.textContent =
        "Go back to the shop and choose a product.";
    }
    if (addToCartButton) addToCartButton.disabled = true;
    return;
  }

  productName.textContent = product.name;
  if (productCategory) productCategory.textContent = product.category;
  if (productDescription) {
    productDescription.textContent = product.description;
  }
  if (productPrice) {
    productPrice.textContent = formatNaira(product.price);
  }

  const images = product.images || [];

  if (productImage && images.length > 0) {
    productImage.src = images[0];
    productImage.alt = product.name;
  }

  thumbnails.forEach((thumbnail, index) => {
    const imagePath = images[index];

    if (!imagePath) {
      thumbnail.hidden = true;
      return;
    }

    thumbnail.hidden = false;
    thumbnail.dataset.image = imagePath;

    const thumbnailImage = thumbnail.querySelector("img");
    if (thumbnailImage) {
      thumbnailImage.src = imagePath;
      thumbnailImage.alt = `${product.name}, image ${index + 1}`;
    }

    thumbnail.classList.toggle("active", index === 0);
  });

  const colors = Array.isArray(product.colors) ? product.colors : [];
  const colorLabel = document.querySelector('label[for="productColor"]');

  if (productColor) {
    const showColors = colors.length > 0;
    productColor.hidden = !showColors;
    if (colorLabel) colorLabel.hidden = !showColors;

    productColor.innerHTML = colors
      .map(color => `<option value="${color}">${color}</option>`)
      .join("");
  }
  const types = Array.isArray(product.types) ? product.types : [];
  const typeLabel = document.querySelector('label[for="productType"]');

  if (productType) {
    const showTypes = types.length > 0;
    productType.hidden = !showTypes;
    if (typeLabel) typeLabel.hidden = !showTypes;

    productType.innerHTML = types
      .map(type => `<option value="${type}">${type}</option>`)
      .join("");
  }
}

showProduct();

// Click a thumbnail to show that image larger.
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    if (!productImage || !thumbnail.dataset.image) return;

    productImage.src = thumbnail.dataset.image;
    thumbnails.forEach(item => item.classList.remove("active"));
    thumbnail.classList.add("active");
  });
});

// Quantity buttons
function setQuantity(value) {
  if (!productQuantity) return;
  productQuantity.value = Math.max(1, Number(value) || 1);
}

if (quantityMinus) {
  quantityMinus.addEventListener("click", () => {
    setQuantity(Number(productQuantity.value) - 1);
  });
}

if (quantityPlus) {
  quantityPlus.addEventListener("click", () => {
    setQuantity(Number(productQuantity.value) + 1);
  });
}

if (productQuantity) {
  productQuantity.addEventListener("change", () => {
    setQuantity(productQuantity.value);
  });
}

// Add the chosen product, color, and quantity to the saved cart.
if (addToCartButton) {
  addToCartButton.addEventListener("click", () => {
    if (!product) return;

    const quantity = Math.max(1, Number(productQuantity?.value) || 1);
    const color = product.colors?.length ? productColor.value : "";
    const type = product.types?.length ? productType.value : "";
    const cart = readCart();

    const matchingItem = cart.find(
      item => item.id === productId && item.color === color && item.type === type
    );

    if (matchingItem) {
      matchingItem.quantity =
        (Number(matchingItem.quantity) || 0) + quantity;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: Number(product.price),
        image: product.images?.[0] || "",
        color,
        type,
        quantity
      });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();

    if (cartMessage) {
      const selectedType = product.types?.length ? ` (${type})` : "";
      cartMessage.textContent = `${product.name}${selectedType} added to your cart.`;
    }
  });
}

updateCartCount();


const productRequestForm = document.querySelector("#productRequestForm");

if (productRequestForm) {
  productRequestForm.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(productRequestForm);
    const name = String(formData.get("name") || "").trim();
    const productName = String(formData.get("product") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const details = String(formData.get("details") || "").trim();

    const message = [
      "Hello Big-Fave, I would like to request a product.",
      `My name: ${name}`,
      `Product: ${productName}`,
      `Category: ${category}`,
      details ? `Details: ${details}` : ""
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/2347069214732?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    const messageElement = document.querySelector("#requestMessage");
    if (messageElement) {
      messageElement.textContent = "WhatsApp opened with your request. Review it and press Send to send it to Big-Fave.";
    }
  });
}// Cart page: display saved items and manage quantities.
const cartItemsContainer = document.querySelector("#cartItems");
const cartSubtotalElement = document.querySelector("#cartSubtotal");
const cartDeliveryFeeElement = document.querySelector("#cartDeliveryFee");
const cartGrandTotalElement = document.querySelector("#cartGrandTotal");
const DELIVERY_FEE = 1000;
const cartCheckoutForm = document.querySelector("#cartCheckoutForm");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutMessage = document.querySelector("#checkoutMessage");
const transferModal = document.querySelector("#transferModal");
const transferBankName = document.querySelector("#transferBankName");
const transferAccountName = document.querySelector("#transferAccountName");
const transferAccountNumber = document.querySelector("#transferAccountNumber");
const transferAccountDetails = document.querySelector("#transferAccountDetails");
const transferDetailsPending = document.querySelector("#transferDetailsPending");
const transferOrderReferenceElement = document.querySelector("#transferOrderReference");
const transferOrderTotalElement = document.querySelector("#transferOrderTotal");
const transferWhatsAppButton = document.querySelector("#transferWhatsAppButton");
const closeTransferModalButton = document.querySelector("#closeTransferModal");

// Fill in these three values when you provide your bank details.
const BANK_DETAILS = {
  bankName: "Moniepoint",
  accountName: "Christian Favour Ogemdi",
  accountNumber: "7069214732"
};

let pendingOrderMessage = "";
let pendingOrderReference = "";
let pendingOrderTotal = 0;
let transferWhatsAppSent = false;

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function renderCart() {
  if (!cartItemsContainer) return;

  const cart = readCart();
  cartItemsContainer.replaceChildren();

  if (cart.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-cart";
    empty.innerHTML = '<p>Your cart is empty.</p><a class="button button-secondary" href="shop.html">Browse the shop</a>';
    cartItemsContainer.appendChild(empty);
    if (cartSubtotalElement) cartSubtotalElement.textContent = formatNaira(0);
    if (cartDeliveryFeeElement) cartDeliveryFeeElement.textContent = formatNaira(0);
    if (cartGrandTotalElement) cartGrandTotalElement.textContent = formatNaira(0);
    if (checkoutButton) checkoutButton.disabled = true;
    return;
  }

  if (checkoutButton) checkoutButton.disabled = false;

  cart.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "cart-item";

    const image = document.createElement("img");
    image.className = "cart-item-image";
    image.src = item.image || "";
    image.alt = item.name || "Cart product";
    image.hidden = !item.image;
    row.appendChild(image);

    const details = document.createElement("div");
    details.className = "cart-item-details";

    const title = document.createElement("h3");
    title.textContent = item.name || "Product";
    details.appendChild(title);

    const options = [];
    if (item.color) options.push(`Color: ${item.color}`);
    if (item.type) options.push(`Type: ${item.type}`);
    if (options.length) {
      const optionText = document.createElement("p");
      optionText.className = "cart-item-options";
      optionText.textContent = options.join(" · ");
      details.appendChild(optionText);
    }

    const unitPrice = document.createElement("p");
    unitPrice.className = "cart-item-unit-price";
    unitPrice.textContent = `${formatNaira(item.price)} each`;
    details.appendChild(unitPrice);

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.className = "cart-quantity-button";
    minus.textContent = "−";
    minus.setAttribute("aria-label", `Decrease quantity of ${item.name}`);

    const quantity = document.createElement("span");
    quantity.className = "cart-item-quantity";
    quantity.textContent = String(item.quantity || 1);

    const plus = document.createElement("button");
    plus.type = "button";
    plus.className = "cart-quantity-button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `Increase quantity of ${item.name}`);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "cart-remove-button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      const nextCart = readCart();
      nextCart.splice(index, 1);
      saveCart(nextCart);
      renderCart();
    });

    minus.addEventListener("click", () => changeCartQuantity(index, -1));
    plus.addEventListener("click", () => changeCartQuantity(index, 1));

    controls.append(minus, quantity, plus, remove);
    details.appendChild(controls);

    const lineTotal = document.createElement("strong");
    lineTotal.className = "cart-item-total";
    lineTotal.textContent = formatNaira(Number(item.price) * (Number(item.quantity) || 1));

    row.append(details, lineTotal);
    cartItemsContainer.appendChild(row);
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * (Number(item.quantity) || 1),
    0
  );
  const deliveryFee = cart.length > 0 ? DELIVERY_FEE : 0;
  if (cartSubtotalElement) cartSubtotalElement.textContent = formatNaira(subtotal);
  if (cartDeliveryFeeElement) cartDeliveryFeeElement.textContent = formatNaira(deliveryFee);
  if (cartGrandTotalElement) cartGrandTotalElement.textContent = formatNaira(subtotal + deliveryFee);
}

function changeCartQuantity(index, amount) {
  const cart = readCart();
  if (!cart[index]) return;

  cart[index].quantity = Math.max(1, (Number(cart[index].quantity) || 1) + amount);
  saveCart(cart);
  renderCart();
}

function showTransferModal(reference, total) {
  if (!transferModal) return;

  const hasBankDetails = Boolean(
    BANK_DETAILS.bankName && BANK_DETAILS.accountName && BANK_DETAILS.accountNumber
  );
  if (transferBankName) transferBankName.textContent = BANK_DETAILS.bankName;
  if (transferAccountName) transferAccountName.textContent = BANK_DETAILS.accountName;
  if (transferAccountNumber) transferAccountNumber.textContent = BANK_DETAILS.accountNumber;
  if (transferAccountDetails) transferAccountDetails.hidden = !hasBankDetails;
  if (transferDetailsPending) transferDetailsPending.hidden = hasBankDetails;
  if (transferOrderReferenceElement) transferOrderReferenceElement.textContent = reference;
  if (transferOrderTotalElement) transferOrderTotalElement.textContent = formatNaira(total);

  transferModal.hidden = false;
  document.body.classList.add("transfer-modal-open");
}

function hideTransferModal() {
  if (!transferModal) return;
  transferModal.hidden = true;
  document.body.classList.remove("transfer-modal-open");
}

if (cartCheckoutForm) {
  cartCheckoutForm.addEventListener("submit", event => {
    event.preventDefault();
    const cart = readCart();
    if (!cart.length) return;

    const formData = new FormData(cartCheckoutForm);
    const customerName = String(formData.get("name") || "").trim();
    const customerPhone = String(formData.get("phone") || "").trim();
    const address = String(formData.get("address") || "").trim();
    const landmark = String(formData.get("landmark") || "").trim();
    const note = String(formData.get("note") || "").trim();
    pendingOrderReference = `BF-${Date.now().toString(36).toUpperCase()}`;
    const subtotal = cart.reduce(
      (sum, item) => sum + Number(item.price) * (Number(item.quantity) || 1),
      0
    );
    const deliveryFee = cart.length > 0 ? DELIVERY_FEE : 0;
    pendingOrderTotal = subtotal + deliveryFee;
    const orderLines = cart.map(item => {
      const options = [item.color && `Color: ${item.color}`, item.type && `Type: ${item.type}`]
        .filter(Boolean)
        .join(", ");
      const optionText = options ? ` (${options})` : "";
      const quantity = Number(item.quantity) || 1;
      return `- ${item.name}${optionText} × ${quantity}: ${formatNaira(Number(item.price) * quantity)}`;
    });

    pendingOrderMessage = [
      "Hello Big-Fave, I would like to place this order by bank transfer.",
      `Order reference: ${pendingOrderReference}`,
      `Name: ${customerName}`,
      `Phone/WhatsApp: ${customerPhone}`,
      `Delivery area/address: ${address}`,
      landmark ? `Nearby landmark: ${landmark}` : "",
      "Items:",
      ...orderLines,
      `Items total: ${formatNaira(subtotal)}`,
      `Delivery fee: ${formatNaira(deliveryFee)}`,
      `Order total: ${formatNaira(pendingOrderTotal)}`,
      note ? `Note: ${note}` : ""
    ].filter(Boolean).join("\n");

    transferWhatsAppSent = false;
    if (transferWhatsAppButton) transferWhatsAppButton.disabled = false;
    showTransferModal(pendingOrderReference, pendingOrderTotal);
    if (checkoutMessage) {
      checkoutMessage.textContent = `Transfer details opened for order ${pendingOrderReference}.`;
    }
  });
}

if (closeTransferModalButton) {
  closeTransferModalButton.addEventListener("click", hideTransferModal);
}

if (transferModal) {
  transferModal.addEventListener("click", event => {
    if (event.target.matches("[data-close-transfer]")) hideTransferModal();
  });
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideTransferModal();
});

if (transferWhatsAppButton) {
  transferWhatsAppButton.addEventListener("click", () => {
    if (!pendingOrderMessage || transferWhatsAppSent) return;

    const hasBankDetails = Boolean(
      BANK_DETAILS.bankName && BANK_DETAILS.accountName && BANK_DETAILS.accountNumber
    );
    const confirmation = hasBankDetails
      ? "I have completed the bank transfer. I am attaching my transfer receipt here. Please confirm the payment for this order."
      : `Please send me the bank transfer details for order ${pendingOrderReference}. I understand payment on delivery is not available.`;
    const finalMessage = `${pendingOrderMessage}\n\n${confirmation}`;
    const whatsappUrl = `https://wa.me/2347069214732?text=${encodeURIComponent(finalMessage)}`;
    const whatsappTab = window.open(whatsappUrl, "_blank");

    if (!whatsappTab) {
      if (checkoutMessage) {
        checkoutMessage.textContent = "WhatsApp was blocked by the browser. Allow popups, then click the WhatsApp button again.";
      }
      return;
    }

    whatsappTab.opener = null;
    transferWhatsAppSent = true;
    transferWhatsAppButton.disabled = true;

    localStorage.removeItem(CART_KEY);
    updateCartCount();
    renderCart();
    hideTransferModal();

    if (checkoutMessage) {
      checkoutMessage.textContent = `Order ${pendingOrderReference} opened in WhatsApp. Your cart has been cleared.`;
    }
  });
}

renderCart();







