// Confirmed contribution: content strategy and publishing.
// Supplied previews are curated brand content, not a live feed or design credits.
export type Brand = {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: string;
  color: string;
  background: string;
  image?: string;
  imageAlt?: string;
  previewNote?: string;
};

export const currentBrands: Brand[] = [
  {
    id: "isdin", name: "ISDIN India", handle: "isdin.india",
    url: "https://www.instagram.com/isdin.india/", category: "Skincare",
    color: "#493a25", background: "#e8dfce",
    image: "/isdinportfolio.webp", imageAlt: "Curated ISDIN brand content featuring skincare products, sun care and lifestyle imagery",
    previewNote: "Product stories, skincare routines and lifestyle imagery.",
  },
  {
    id: "neolayr", name: "Neolayr Pro", handle: "neolayrpro",
    url: "https://www.instagram.com/neolayrpro/", category: "Skin & hair care",
    color: "#155c62", background: "#dceceb",
    image: "/insta-handle.jpg", imageAlt: "Neolayr Pro Instagram portfolio preview in a phone mockup",
    previewNote: "Skincare tips, product content and everyday routines.",
  },
  {
    id: "nmfe", name: "NMF-E", handle: "nmfepalsons",
    url: "https://www.instagram.com/nmfepalsons/", category: "Skincare",
    color: "#24583a", background: "#e4ebd9",
    image: "/nmfe-ig.jpg", imageAlt: "NMF-E Instagram portfolio preview showing moisturising skincare content",
    previewNote: "Moisturising skincare, product education and daily care.",
  },
  {
    id: "qsera", name: "Q-Sera", handle: "qserapalsons",
    url: "https://www.instagram.com/qserapalsons/", category: "Hair care",
    color: "#67462c", background: "#ece0d2",
    image: "/qsera-ig.jpg", imageAlt: "Q-Sera Instagram portfolio preview showing hair care products and educational posts",
    previewNote: "Hair care education, seasonal topics and product stories.",
  },
  {
    id: "wizderm", name: "Wizderm", handle: "wizderm",
    url: "https://www.instagram.com/wizderm/", category: "Brand channel",
    color: "#5b4370", background: "#e9e1ef",
  },
  {
    id: "wizderm-hair", name: "Wizderm Hair Sciences", handle: "wizderm_hair_sciences",
    url: "https://www.instagram.com/wizderm_hair_sciences/", category: "Hair sciences",
    color: "#294951", background: "#dce8e9",
  },
  {
    id: "palsons", name: "Palsons Derma", handle: "palsons_derma",
    url: "https://www.instagram.com/palsons_derma/", category: "Company channel",
    color: "#7e2638", background: "#efdee0",
  },
  {
    id: "sunmate", name: "Sunmate", handle: "sunmategelcream",
    url: "https://www.instagram.com/sunmategelcream/", category: "Sun care",
    color: "#754316", background: "#f6e6bb",
  },
];

export const mindsChannels = [
  { name: "Instagram", mark: "IG", url: "https://www.instagram.com/themindsjournal/" },
  { name: "Facebook", mark: "f", url: "https://www.facebook.com/themindsjournal" },
  { name: "Pinterest", mark: "P", url: "https://in.pinterest.com/themindsjournal/" },
  { name: "YouTube", mark: "YT", url: "https://www.youtube.com/@TheMindsJournal" },
  { name: "X", mark: "X", url: "https://x.com/TheMindsJournal" },
  { name: "Threads", mark: "@", url: "https://www.threads.com/@themindsjournal" },
  { name: "Tumblr", mark: "t", url: "https://www.tumblr.com/themindsjournalposts" },
  { name: "Snapchat", mark: "S", url: "https://www.snapchat.com/@mindsjournal" },
];

// Board themes visible in the screenshot supplied by the portfolio owner.
// These are account topics, not a claim of individual board or image authorship.
export const pinterestBoards = [
  { name: "Lifestyle Inspiration", type: "Lifestyle", tone: "rose" },
  { name: "Zodiac Signs Prediction", type: "Astrology", tone: "ink" },
  { name: "Psychology Facts About Human Behavior", type: "Psychology", tone: "sand" },
  { name: "Self-Love, Healing & Emotional Growth", type: "Wellbeing", tone: "peach" },
  { name: "Spiritual Seeker", type: "Spirituality", tone: "plum" },
  { name: "Teach Me Life - Life Lessons", type: "Life lessons", tone: "cream" },
];
