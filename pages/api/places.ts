import { IPlace } from "@/app/types/place";
import japanImg from "../../assets/images/japan.jpg";
import italyImg from "../../assets/images/italy.jpg";
import { NextApiRequest, NextApiResponse } from "next";

const places: IPlace[] = [
  {
    slug: "tokyo",
    description: "we[dlwpeojfpwokd wek pwekfpwk p[kwe[ kfwekf w",
    imagePath: japanImg.src,
    location: { country: "Japan", city: "Tokyo" },
    rating: 5,
    duration: "10 days",
    distance: 10142,
    googleMapLink: "wefefe",
    mapImage: "wwerw",
  },
  {
    slug: "venezia",
    description: "we[dlwpeojfpwokd wek pwekfpwk p[kwe[ kfwekf w",
    imagePath: italyImg.src,
    location: { country: "Italy", city: "Venezia" },
    rating: 5,
    duration: "7 days",
    distance: 9142,
    googleMapLink: "wefefe",
    mapImage: "wwerw",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
