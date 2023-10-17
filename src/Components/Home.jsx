import React from "react";
import { Button, Carousel, CarouselItem } from "react-bootstrap";
import Paginationdata from "./Paginationdata";
import "./Home.css";
import Footer from "./Footer";
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
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome To Interior World</h1>

            <p className="para">
              Interior design is a multifaceted discipline that involves the art
              and science of enhancing the interior of a space to create a more
              aesthetically pleasing and functional environment. Interior
              designers are professionals who plan, research, coordinate, and
              manage interior design projects.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={require("./../images/interior.jpg")}
              alt="interior"
              className="simg"
            ></img>
          </div>
        </div>
      </section>

      <section
        id="secondsec"
        className="bg-secondary Container"
        style={{ paddingTop: "100px" }}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src={require("./../images/gymdesign.jpg")}
              alt="int"
              className="sim"
            />
          </div>
          <div className="col-md-6">
            <p className="para">
              Interior decorating is outfitting a space with aesthetically
              pleasing elements such as furniture, wall-coverings, accessories,
              rugs and more. Interior decorators do not work with architects to
              create new interior spaces; they embellish interior spaces that
              already exist.
              <Button className="btn" size="sm">
                Read
              </Button>
            </p>
          </div>
        </div>
      </section>
      <br />
      <Paginationdata style={{ marginTop: "40px" }} />
      <Footer />
    </div>
  );
};

export default Home;
