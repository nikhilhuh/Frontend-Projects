import AgencyImg from "./images/Agency.png"
import RealEstateImg from "./images/RealEstate.png"
import BlogImg from "./images/Blog.png"
import BlogSimpleImg from "./images/BlogSimple.png"
import ProductPageImg from "./images/ProductPage.png"
import PortfolioImg from "./images/Portfolio.png"
import ECommerceImg from "./images/ECommerce.png"
import NewsMagazineImg from "./images/NewsMagazine.png"

type Project = {
    name: string,
    image: string,
    path: string;
}

export const projects : Project[] = [
    {
        name: "Agency",
        image: AgencyImg,
        path: "/agency",
    },
    {
        name: "Blog-Simple",
        image: BlogSimpleImg,
        path: "/blog-simple",
    },
    {
        name: "Blog",
        image: BlogImg,
        path: "/blog",
    },
    {
        name: "E-Commerce",
        image: ECommerceImg,
        path: "/e-commerce",
    },
    {
        name: "News Magazine",
        image: NewsMagazineImg,
        path: "/news-magazine",
    },
    {
        name: "Portfolio",
        image: PortfolioImg,
        path: "/portfolio",
    },
    {
        name: "Product Page",
        image: ProductPageImg,
        path: "/product-page",
    },
    {
        name: "Real Estate",
        image: RealEstateImg,
        path: "/real-estate",
    },
]