import facebookSvg from "../assets/images/icon-facebook.svg";
import instagramSvg from "../assets/images/icon-instagram.svg";
import twitterSvg from "../assets/images/icon-twitter.svg";
import youtubeSvg from "../assets/images/icon-youtube.svg";

const cardData = [
  {
    borderColor: "linear-gradient(hsl(208, 92%, 53%),hsl(208, 92%, 53%))",
    increase: true,
    svg: facebookSvg,
    nickname: "@ercumentlacin",
    followersCount: 1987,
    type: "followers",
    today: 12,
  },
  {
    borderColor:
      "linear-gradient(to right, hsl(37, 97%, 70%) , hsl(329, 70%, 58%))",
    increase: true,
    svg: instagramSvg,
    nickname: "@ercumentlacin",
    followersCount: 1044,
    type: "followers",
    today: 99,
  },
  {
    borderColor: "linear-gradient(hsl(203, 89%, 53%),hsl(203, 89%, 53%))",
    increase: true,
    svg: twitterSvg,
    nickname: "@ercumentlacin",
    followersCount: "11k",
    type: "followers",
    today: 1099,
  },
  {
    borderColor: "linear-gradient(hsl(348, 97%, 39%), hsl(348, 97%, 39%))",
    increase: false,
    svg: youtubeSvg,
    nickname: "ercumentlacin",
    followersCount: "8239",
    type: "subscribers",
    today: 144,
  },
];

export default cardData;
