export const SITE = {
  name: "ACQUA FUSION",
  shortName: "Acqua Fusion",
  tagline: "Pure Water. Fresh Living.",
  taglines: [
    "Pure Water. Fresh Living.",
    "Clean Water for Everyday Life.",
    "Stay Hydrated. Live Better.",
    "Good Water. Brighter Days.",
  ],
  type: "Water Refilling Station",
  location: "Retail A, Azure North",
  city: "San Fernando, Pampanga",
  mapQuery: "Azure North, San Fernando, Pampanga",
  mapEmbed:
    "https://maps.google.com/maps?q=Azure%20North%20San%20Fernando%20Pampanga&t=&z=15&ie=UTF8&iwloc=&output=embed",
  phone: "",
  facebook: "",
  hours: "Please inquire for current hours",
  delivery: "Azure North and nearby — please inquire",
};

export const NAV = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#prices", id: "prices", label: "Price List" },
  { href: "#products", id: "products", label: "Products" },
  { href: "#location", id: "location", label: "Location" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const NA = "Not Available";

export type PriceRow = {
  size: string;
  refill: string;
  perCase?: string;
  withBottle: string;
};

export const PURIFIED: PriceRow[] = [
  { size: "5 gal.", refill: "₱40.00", perCase: NA, withBottle: "₱230.00" },
  { size: "10 lit.", refill: "₱25.00", perCase: NA, withBottle: NA },
  { size: "4 lit.", refill: "₱20.00", perCase: NA, withBottle: NA },
  { size: "3 lit.", refill: "₱18.00", perCase: NA, withBottle: NA },
  { size: "1 lit.", refill: "₱15.00", perCase: "₱192.00", withBottle: "₱16.00" },
  { size: "500ml", refill: "₱10.00", perCase: "₱216.00", withBottle: "₱9.00" },
  { size: "350ml", refill: "₱10.00", perCase: "₱192.00", withBottle: "₱8.00" },
];

export const MINERAL: PriceRow[] = [
  { size: "5 gal.", refill: "₱30.00", withBottle: "₱230.00" },
  { size: "10 lit.", refill: "₱23.00", withBottle: NA },
  { size: "4 lit.", refill: "₱20.00", withBottle: NA },
  { size: "3 lit.", refill: "₱18.00", withBottle: NA },
  { size: "1 lit.", refill: "₱13.00", withBottle: NA },
  { size: "500ml", refill: "₱10.00", withBottle: NA },
  { size: "350ml", refill: "₱10.00", withBottle: NA },
];

export const ALKALINE: PriceRow[] = [
  { size: "5 gal.", refill: "₱50.00", withBottle: "₱260.00" },
  { size: "10 lit.", refill: "₱30.00", withBottle: NA },
  { size: "4 lit.", refill: "₱23.00", withBottle: NA },
  { size: "3 lit.", refill: "₱20.00", withBottle: NA },
  { size: "1 lit.", refill: "₱17.00", withBottle: NA },
  { size: "500ml", refill: "₱13.00", withBottle: NA },
  { size: "350ml", refill: "₱10.00", withBottle: NA },
];

export const PRICE_NOTE =
  "Prices may change without prior notice. For bulk orders and delivery inquiries, please contact Acqua Fusion directly.";

export const ORDER_TYPES = [
  "5-Gallon Refill",
  "Bottle Refill",
  "Refill with Bottle",
  "Per Case",
  "Bulk Order",
  "Delivery",
  "Retail Pick-Up",
] as const;

export const WATER_TYPES = ["Purified", "Mineral", "Alkaline"] as const;

export const PRODUCTS = [
  {
    name: "5-Gallon Refill",
    blurb: "The everyday round — homes, offices, and dispensers. Purified, mineral, or alkaline.",
    image: "/images/gallon-5.jpg?v=10",
    orderType: "5-Gallon Refill",
    from: "From ₱30",
  },
  {
    name: "10-Liter Refill",
    blurb: "A mid-size jug for smaller households and pantry counters.",
    image: "/images/gallon-10.jpg?v=10",
    orderType: "Bottle Refill",
    from: "From ₱23",
  },
  {
    name: "4-Liter Refill",
    blurb: "Easy to carry, easy to store. Ideal for compact kitchens.",
    image: "/images/bottle-4l.jpg?v=10",
    orderType: "Bottle Refill",
    from: "From ₱20",
  },
  {
    name: "3-Liter Refill",
    blurb: "A lighter refill for daily drinking without the bulk.",
    image: "/images/gallon-small.jpg?v=10",
    orderType: "Bottle Refill",
    from: "From ₱18",
  },
  {
    name: "1-Liter Bottle",
    blurb: "Personal size for bags, desks, and on-the-go hydration.",
    image: "/images/bottle-1l.jpg?v=10",
    orderType: "Bottle Refill",
    from: "From ₱13",
  },
  {
    name: "500ml Bottle",
    blurb: "Compact bottled water for short trips, meetings, and kids.",
    image: "/images/bottle-500.jpg?v=10",
    orderType: "Bottle Refill",
    from: "From ₱10",
  },
  {
    name: "350ml Bottle",
    blurb: "The smallest sip — handy, affordable, and always cold-ready.",
    image: "/images/bottle-350.jpg?v=10",
    orderType: "Bottle Refill",
    from: "From ₱8",
  },
  {
    name: "Case Orders",
    blurb: "Stock the pantry or the pantry cabinet. Purified cases available.",
    image: "/images/case.jpg?v=10",
    orderType: "Per Case",
    from: "From ₱192",
  },
] as const;

export const SERVICES = [
  {
    title: "Purified Water Refill",
    text: "Clean, crisp drinking water through multi-stage filtration — the everyday staple.",
    icon: "droplets",
  },
  {
    title: "Mineral Water Refill",
    text: "Refreshing mineral water with a balanced taste, from 5-gallon down to 350ml.",
    icon: "mountain",
  },
  {
    title: "Alkaline Water Refill",
    text: "Higher pH drinking water for those who prefer a smoother alkaline sip.",
    icon: "flask",
  },
  {
    title: "5-Gallon Container Refill",
    text: "Bring your round — we refill quickly for homes, offices, and dispensers.",
    icon: "container",
  },
  {
    title: "Bottled Water Options",
    text: "1 liter, 500ml, and 350ml bottles, plus refill-with-bottle when you need a new one.",
    icon: "bottle",
  },
  {
    title: "Office and Household Supply",
    text: "Standing orders for tenants, families, and nearby workplaces at Azure North.",
    icon: "building",
  },
  {
    title: "Bulk Orders and Delivery",
    text: "Larger quantities and delivery inquiries — message us with your volume and area.",
    icon: "truck",
  },
  {
    title: "Retail Pick-Up",
    text: "Walk in at Retail A, Azure North. Refill, pick up a case, and head home.",
    icon: "store",
  },
] as const;
