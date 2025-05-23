import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      desktop_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/b46907da8240ce6876a26173b60027617c11c33567d56fcd75359c2ab35d85db.png",
      tablet_backgroud_image: "",
      mobile_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/695c4f23117621dbf43efc8328a5abe2cd7ae2655ebb332dbaa54742c25632f2.png",
      redirect_url: "https://www.carrefour.ke/mafken/en/c/ken-cocacola-apr25",
      redirect_url_app: "https://eud4.adj.st/my/path?adjust_t=iriv2w4&adjust_deep_link=carrefour.ke/mafken/en/c/ken-cocacola-apr25",
      redirect_target: "_self",
      tablet_background_image: "",
      app_background_image: "",
      fallback_image: "",
      background_image: "",
      logo_image: "",
      placement_id: "hb2"
    },
    {
      desktop_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/7f83d6926314ce11576edb4b3a4fde770b2c0e4ae65e91c1fc5f0cb501eeb990.jpg",
      tablet_backgroud_image: "",
      mobile_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/e83b270eab7c52bf77a94ab7692b9670295afae9532aa9bb491f11bf1c0dbdf8.jpg",
      redirect_url: "https://www.carrefour.ke/mafken/en/n/c/clp_ken-royco-recipe",
      redirect_url_app: "https://eud4.adj.st/my/path?adjust_t=iriv2w4&adjust_deep_link=carrefour.ke/mafken/en/n/c/clp_ken-royco-recipe",
      redirect_target: "_self",
      tablet_background_image: "",
      app_background_image: "",
      fallback_image: "",
      background_image: "",
      logo_image: "",
      placement_id: "hb3"
    },
    {
      desktop_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/b87bfc304c6d5aed79ca1863dcaa88dd53aa7c102a2137eb29a4dd031728630d.jpg",
      tablet_backgroud_image: "",
      mobile_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/ee9c27e980547975235365673a65c24e900f0f5b833b2bb6005be87e12e190c6.jpg",
      redirect_url: "https://www.carrefour.ke/mafken/en/n/c/clp_ken-knorr-recipe",
      redirect_url_app: "https://eud4.adj.st/my/path?adjust_t=iriv2w4&adjust_deep_link=carrefour.ke/mafken/en/n/c/clp_ken-knorr-recipe",
      redirect_target: "_self",
      tablet_background_image: "",
      app_background_image: "",
      fallback_image: "",
      background_image: "",
      logo_image: "",
      placement_id: "hb4"
    },
    {
      desktop_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/32673ba41b54a1ed21da5b8a689a8cc9aa79ed113d416bc0c1b44ea4008f5153.png",
      tablet_background_image: "",
      mobile_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/44ce8dd65d3e8e62004a71bb5c392c20bca9d8a4c0eedd1afcf2ee346fc8bea5.png",
      redirect_url: "https://www.carrefour.ke/mafken/en/c/ken-hanan-apr25",
      redirect_url_app: "https://eud4.adj.st/my/path?adjust_t=iriv2w4&adjust_deep_link=carrefour.ke/mafken/en/c/ken-hanan-apr25",
      redirect_target: "_self",
      app_background_image: "",
      fallback_image: "",
      background_image: "",
      logo_image: "",
      placement_id: "ssl1"
    },
    {
      desktop_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/bc241421934dfded1fae7edede916949d0917db06fe936ae8259e800ef8db0b8.jpg",
      tablet_backgroud_image: "",
      mobile_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/7516f8c6ea5a328d8c393f6d692e8fcbee649c6c200f3c20cd688ee0e7449af3.jpg",
      redirect_url: "https://www.carrefour.ke/mafken/en/n/c/clp_ken-royco-recipe",
      redirect_url_app: "https://eud4.adj.st/my/path?adjust_t=iriv2w4&adjust_deep_link=carrefour.ke/mafken/en/n/c/clp_ken-royco-recipe",
      redirect_target: "_self",
      tablet_background_image: "",
      app_background_image: "",
      fallback_image: "",
      background_image: "",
      logo_image: "",
      placement_id: "ssl2"
    },
    {
      desktop_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/65b0aaebb3d1ceea36f33dcf63f7a8fd94fa794117e5e20917c89cce66f8550a.png",
      tablet_background_image: "",
      mobile_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/ea551beca5a76e74b9e2a2c068f54c2421ad52b7247c661257ce9b0b66178467.png",
      redirect_url: "https://www.carrefour.ke/mafken/en/c/ken-bio-food",
      redirect_url_app: "https://eud4.adj.st/my/path?adjust_t=iriv2w4&adjust_deep_link=carrefour.ke/mafken/en/c/ken-bio-food",
      redirect_target: "_self",
      app_background_image: "",
      fallback_image: "",
      background_image: "",
      logo_image: "",
      placement_id: "hb5"
    },
    {
      desktop_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/c9b50d313e8bed9052986fa9da1a3c3cc1a3858cf9b79a573388c72a7a086488.png",
      tablet_background_image: "",
      mobile_background_image: "https://retailmedia-static.criteo.com/creativeassets-live/f518c0d2fdd6c5b56406ba6370c9ac49cac7cf60f5313849bc8f845926f70bfe.png",
      redirect_url: "https://www.carrefour.ke/mafken/en/c/ken-carex",
      redirect_url_app: "https://eud4.adj.st/my/path?adjust_t=iriv2w4&adjust_deep_link=carrefour.ke/mafken/en/c/ken-carex",
      redirect_target: "_self",
      app_background_image: "",
      fallback_image: "",
      background_image: "",
      logo_image: "",
      placement_id: "hb6"
    }
  ];

  return NextResponse.json({
    meta: {
      message: "success",
      statusCode: 200
    },
    data
  });
}