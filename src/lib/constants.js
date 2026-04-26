export const WHATSAPP_NUMBER = "2348035239489";
export const WHATSAPP_NUMBER_2 = "2348168478036";

export const getWhatsAppUrl = (productName) => {
  const message = encodeURIComponent(
    `Hello Kay Amazing Grace Global, I am captivated by the ${productName}. Is this exclusive piece still available?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getWhatsAppGeneralUrl = () => {
  const message = encodeURIComponent(
    "Hello Kay Amazing Grace Global, I'd like to inquire about your products."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const CATEGORIES = [
  { id: "mens_wear", label: "Men's Wear", short: "MEN" },
  { id: "ladies_wear", label: "Ladies Wear", short: "LADIES" },
  { id: "childrens_wear", label: "Children's Wear", short: "KIDS" },
  { id: "corporate_wear", label: "Corporate Wear", short: "CORP" },
  { id: "casual_wear", label: "Casual Wear", short: "CASUAL" },
  { id: "sportswear", label: "Sportswear", short: "SPORT" },
  { id: "shoes_slippers", label: "Shoes & Slippers", short: "SHOES" },
  { id: "bags_accessories", label: "Bags & Accessories", short: "BAGS" },
  { id: "underwear_nightwear", label: "Underwear & Nightwear", short: "INTIMATE" }
];

export const TAG_LABELS = {
  new_drop: "NEW DROP",
  best_seller: "BEST SELLER",
  grade_a: "GRADE A+",
  rare_find: "RARE FIND",
  available: "AVAILABLE"
};

export const LOGO_URL = "https://media.base44.com/images/public/user_69c2c1a7c09615849dd82919/1e658ba0e_KAYAMAZINGGRACE.png";