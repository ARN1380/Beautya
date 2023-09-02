import Header from "../components/ui/Header";
import Footer from "./../components/ui/Footer";
import "./landing.css";

const dataCategory = [
  {
    id: 0,
    img: "./images/cate1.png",
    title: "women make up",
    linkUrl: "#",
  },
  {
    id: 1,
    img: "./images/cate2.png",
    title: "women skincare",
    linkUrl: "#",
  },
  {
    id: 2,
    img: "./images/cate3.png",
    title: "gifts & sets",
    linkUrl: "#",
  },
];
const dataCarousel = [
  {
    id: 0,
    img: "./images/product-1.png",
    title: "Beautya Capture Total Dream skincare & Perfect",
    desc: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "76.00",
  },
  {
    id: 1,
    img: "./images/product-2.png",
    title: "Beautya Capture Total Dream skincare & Perfect",
    desc: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "76.00",
  },
  {
    id: 2,
    img: "./images/product-3.png",
    title: "Beautya Capture Total Dream skincare & Perfect",
    desc: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "76.00",
  },
  {
    id: 3,
    img: "./images/product-4.png",
    title: "Beautya Capture Total Dream skincare & Perfect",
    desc: "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "76.00",
  },
];
const dataBlog = [
  {
    id: 0,
    img: "./images/blog-1.png",
    title: "How to get clear skin fast",
    category: "skincare",
    author: "Dr, Wade Warren",
    date: "Jan 20, 2021",
    desc: "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
  },
  {
    id: 1,
    img: "./images/blog-2.png",
    title: "How to get clear skin fast",
    category: "skincare",
    author: "Dr, Wade Warren",
    date: "Jan 20, 2021",
    desc: "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
  },
  {
    id: 2,
    img: "./images/blog-3.png",
    title: "How to get clear skin fast",
    category: "skincare",
    author: "Dr, Wade Warren",
    date: "Jan 20, 2021",
    desc: "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
  },
];
export default function Landing() {
  return (
    <>
      <Header />
      <div className="landing-container">
        <div className="hero-container">
          <div>
            <h1>unlock your natural glow</h1>
            <button className="button-primary">know more</button>
          </div>
        </div>
        <div className="category-container">
          <h3>Products’ categories</h3>
          <div className="categories">
            {dataCategory.map((category) => {
              return (
                <div key={category.id} className="category">
                  <div className="category-image">
                    <img src={category.img} alt={category.title} />
                  </div>
                  <div className="category-title">{category.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skincare-container">
          <div className="skincare-info">
            <div className="skincare-info__title">
              <h2>NEW Virtual Skincare Analysis</h2>
            </div>
            <div className="skincare-info__detail">
              <p>
                Looking for a full skincare routine? Our NEW Virtual Skincare
                Analysis Tool evaluates your skin and provides the most
                personalized
                <br />
                recommendations.
              </p>
            </div>
            <div className="skincare-info__scan">
              <div className="skincare-info__scan-text">
                <h6>Scan with your phone to get started</h6>
                <p>Or</p>
                <button className="button-primary">
                  answer a few questions
                </button>
              </div>
              <div className="skincare-info__scan-barcode">
                <img src="./images/qrcode.svg" alt="alireza naghavi qrcode" />
              </div>
            </div>
          </div>
          <div className="skincare-image">
            <img src="./images/skin-type.png" alt="skin type" />
          </div>
        </div>
        <div className="productcarousel-container">
          {dataCarousel.map((product) => {
            return (
              <div key={product.id} className="carousel-product">
                <div className="carousel-product__image">
                  <img src={product.img} alt="" />
                </div>
                <div className="carousel-product__title">{product.title}</div>
                <div className="carousel-product__desc">{product.desc}</div>
                <div className="carousel-product__price">$ {product.price}</div>
              </div>
            );
          })}
        </div>
        <div className="newproduct-container">
          <h6 className="newproduct-title">new in</h6>
          <div className="newproduct">
            <div className="newproduct-hero">
              <img src="./images/newproduct-0.png" alt="" />
              <h4>Beautya La Mousse Off/On Foaming Cleaner</h4>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis en im velit mollit.
              </p>
            </div>
            {dataCarousel.slice(0, 2).map((product) => {
              return (
                <div key={product.id} className="newproduct-product">
                  <div className="newproduct-product__image">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="newproduct-product__title">
                    {product.title}
                  </div>
                  <div className="newproduct-product__desc">{product.desc}</div>
                  <div className="newproduct-product__price">
                    $ {product.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="specialoffer-container">
          <div className="socont">
            <img src="./images/specialoffer.png" alt="" />
            <div className="specialoffer-info">
              <h6>Special offers</h6>
              <h4>Save up to 50%</h4>
              <p className="myfirstp">
                Mother’s Day is coming! <br />
                For everything she’s given you, it's time to give back. Shower
                her with love, happiness, and the best of Beautya.{" "}
              </p>
              <p className="mysecp">
                visit your local beautya branches to find out more about our
                special offers in make up and skincare products.
              </p>
              <button className="button-secondary">find branches</button>
            </div>
          </div>
        </div>
        <div className="ourbrand">
          <div className="ourbrand-info">
            <h1 className="">our brand</h1>
            <p>
              We believe that beauty thrives in diversity and discovery. Our
              purpose is to expand the way the world sees beauty by empowering
              the Extraordinary in each of us.
            </p>
            <button className="button-primary">Discover More</button>
          </div>
          <div className="ourbrand-hero">
            <img src="./images/ourbrand.png" alt="" />
          </div>
        </div>
        <div className="ourblog">
          <div className="ourblog-title">
            <h2>Our Blog</h2>
            <button>View All</button>
          </div>
          <div className="ourblog-cards">
            {dataBlog.map((post) => {
              return (
                <div key={post.id} className="ourblog-card">
                  <img src={post.img} alt={post.title} />
                  <div className="ourblog-card__info">
                    <h2 className="ourblog-card__info-title">{post.title}</h2>
                    <div className="ourblog-card__info-detail">
                      <p>{post.category}</p>
                      <div className="blog-detail-verticalline"></div>
                      <p>{post.author}</p>
                      <div className="blog-detail-verticalline"></div>
                      <p>{post.date}</p>
                    </div>
                    <div className="ourblog-card__info-desc">
                      <p>{post.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
