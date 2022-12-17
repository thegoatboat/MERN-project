import { v4 as uuidv4 } from 'uuid';

export const data=[
  {
    id:uuidv4(),
    titel: "Haloween Jar",
    desc: "lkdfovkrepovre",
    img: "https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/49049246_2023199097971445_7723889651198459904_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=3jLai8HWyqAAX9mgk_-&_nc_ht=scontent.ftun2-2.fna&oh=00_AfBh6Gw3ozelhQ59xlMMCF2SMmy3zIALM9AV6ipR28gQyA&oe=63C322B9",
    categoties: [
        "Jar",
        "pottery"
    ],
    size: "15*20 cm",
    color: "oronge-green",
    price:80
},
  {
    id:uuidv4(),
    titel:"Kodoma Olla",
      desc:'...',
      img:"https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/241343123_2734509036840444_4034786733110498978_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=DtJpBWFRoMwAX8nawfw&_nc_ht=scontent.ftun2-2.fna&oh=00_AfAilQJnEcAoRvmh2DvXuf94u-PGTGaXJ2nfkcUfOk93TA&oe=63A0225F",
      categoties:{type:Array , required:true },
      size:'',
      color:'{type:String }',
      price:51
  },
  {
    id:uuidv4(),
    titel:"Pottery Workshop",
      desc:'...',
      img:"https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/68659243_2163322733959080_9023126273374814208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=pXS0m-EAU4sAX_cyowD&_nc_ht=scontent.ftun2-2.fna&oh=00_AfDK-fpIdeGTv_Iww345-MdcxEunTaKmHC3OaOQLZCrKBA&oe=63C2FE2A",
      categoties:{type:Array , required:true },
      size:'',
      color:'{type:String }',
      price:51
  },
  
]