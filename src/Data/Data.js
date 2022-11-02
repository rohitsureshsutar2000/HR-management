// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";



// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Add New Task",
  },
 
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Complete",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "50%",
    png: UilUsdSquare,
    series: [
      {
        name: "Complete",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Ongoing",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "30%",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Ongoing",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Delay",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "20",
    png: UilClipboardAlt,
    series: [
      {
        name: "Delay",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


export const UpdatesData = [

];
