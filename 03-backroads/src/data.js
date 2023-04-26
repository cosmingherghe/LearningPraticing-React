import tourimg1 from "./images/tour-1.jpeg";
import tourimg2 from "./images/tour-2.jpeg";
import tourimg3 from "./images/tour-3.jpeg";
import tourimg4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialMediaLinks = [
  { id: 1, href: "https://www.twitter.com", text: "fab fa-twitter" },
  { id: 2, href: "https://www.facebook.com/", text: "fab fa-facebook" },
  { id: 3, href: "https://www.squarespace.com/", text: "fab fa-squarespace" },
];

export const articles = [
  {
    id: 1,
    fas: "fas fa-wallet fa-fw",
    title: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    fas: "fas fa-tree fa-fw",
    title: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    fas: "fas fa-socks fa-fw",
    title: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tourimg1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    days: "6 days",
    price: "$2100",
  },
  {
    id: 2,
    img: tourimg2,
    date: "october 1th, 2020",
    title: "best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    days: "11 days",
    price: "$1400",
  },
  {
    id: 3,
    img: tourimg3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    days: "8 days",
    price: "$5000",
  },
  {
    id: 4,
    img: tourimg4,
    date: "september 15th, 2020",
    title: "kenya highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    days: "20 days",
    price: "$3300",
  },
];
