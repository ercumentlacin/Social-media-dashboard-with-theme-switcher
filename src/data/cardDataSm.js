import facebookSvg from "../assets/images/icon-facebook.svg";
import instagramSvg from "../assets/images/icon-instagram.svg";
import twitterSvg from "../assets/images/icon-twitter.svg";
import youtubeSvg from "../assets/images/icon-youtube.svg";

const cardDataSm = [
  {
    increase: true,
    svg: facebookSvg,
    name: "Page Views",
    count: 87,
    today: 3,
  },
  {
    increase: false,
    svg: facebookSvg,
    name: "Likes",
    count: 52,
    today: 2,
  },
  {
    increase: true,
    svg: instagramSvg,
    name: "Likes",
    count: 5462,
    today: 2257,
  },
  {
    increase: true,
    svg: instagramSvg,
    name: "Profile Views",
    count: "52k",
    today: 1375,
  },
  {
    increase: true,
    svg: twitterSvg,
    name: "Retweets",
    count: "117",
    today: 303,
  },
  {
    increase: false,
    svg: youtubeSvg,
    name: "Likes",
    count: "107",
    type: "subscribers",
    today: 19,
  },
  {
    increase: false,
    svg: youtubeSvg,
    name: "Total Views",
    count: "1407",
    type: "subscribers",
    today: 12,
  },
];

export default cardDataSm;
