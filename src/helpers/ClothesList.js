import a1 from "../assets/clothes/women/a1.jpg"
import a1a from "../assets/clothes/women/1a.jpg"

import a2 from "../assets/clothes/women/2a.jpg"
import a22 from "../assets/clothes/women/a2.jpg"

import a3 from "../assets/clothes/women/3a.jpg"
import a33 from "../assets/clothes/women/a3.jpg"

import a4 from "../assets/clothes/women/4a.jpg"
import a44 from "../assets/clothes/women/a4.jpg"

import a5 from "../assets/clothes/women/5a.jpg"
import a55 from "../assets/clothes/women/a5.jpg"

import a6 from "../assets/clothes/women/6a.jpg"
import a66 from "../assets/clothes/women/a6.jpg"
const ClothesList = () => {
    return (
        [
            {
                id: 1,
                name: "EMBROIDERED LAWN PR-944",
                url: a1a,
                url2: a1,
                price: 49.99,
              },
              {
                id: 2,
                name: "PRINTED LAWN PR-946",
                url: a2,
                url2: a22,
                price: 19.99,
              },
              {
                id: 3,
                name: "PRINTED LAWN PR-937",
                url: a3,
                url2: a33,
                price: 59.99,
              },
              {
                id: 4,
                name: "EMBROIDERED LAWN PR-961",
                url: a4,
                url2: a44,
                price: 39.99,
              },
              {
                id: 5,
                name: "EMBROIDERED LAWN PR-962",
                url: a5,
                url2: a55,
                price: 39.99,
              },
              {
                id: 6,
                name: "PRINTED LAWN PR-954",
                url: a6,
                url2: a66,
                price: 29.99,
              }
        ]
    )
}

export default ClothesList;
