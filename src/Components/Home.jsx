import React from "react";
import { Button, Carousel, CarouselItem, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Container">
      <section>
        <Carousel>
          <CarouselItem>
            <img src={require("./../images/living.jpg")} alt="living"></img>
          </CarouselItem>
          <CarouselItem>
            <img src={require("./../images/kitchen.jpg")} alt="kitchen"></img>
          </CarouselItem>
          <CarouselItem>
            <img src={require("./../images/bedroom.jpg")} alt="dining"></img>
          </CarouselItem>
          <CarouselItem>
            <img src={require("./../images/garden.jpg")} alt="bedroom"></img>
          </CarouselItem>
        </Carousel>
      </section>
      <section id="secondsec" className="Container">
        <p className="para">
          <h1>Welcome To Interior World</h1>
          Interior design is a multifaceted discipline that involves the art and
          science of enhancing the interior of a space to create a more
          aesthetically pleasing and functional environment. Interior designers
          are professionals who plan, research, coordinate, and manage interior
          design projects.
        </p>
        <img
          src={require("./../images/interior.jpg")}
          alt="interior"
          className="simg"
        ></img>
      </section>

      <section
        id="secondsec"
        className="bg-secondary Container"
        style={{ paddingTop: "100px" }}
      >
        <img
          src={require("./../images/gymdesign.jpg")}
          alt="int"
          className="sim"
        />

        <p className="para">
          Interior decorating is outfitting a space with aesthetically pleasing
          elements such as furniture, wall-coverings, accessories, rugs and
          more. Interior decorators do not work with architects to create new
          interior spaces; they embellish interior spaces that already exist.
          <Button className="btn" size="sm">
            Read
          </Button>
        </p>
      </section>
      <footer>
        <div className="container">
          <div className="footer-content">
            <p style={{ color: "black" }}>
              &copy; {new Date().getFullYear()} Your Company Name
            </p>
            <NavItem>
              {" "}
              <ul className="homefooter">
                <li>
                  <Link to="/" id="foot">
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/about" id="foot">
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/services" id="foot">
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/pagination" id="foot">
                    {" "}
                    Paginationdata{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/contact" id="foot">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </NavItem>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
