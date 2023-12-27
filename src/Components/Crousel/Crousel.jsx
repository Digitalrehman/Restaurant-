import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import img1 from "../../assets/IMG/dish-1.jpg";
import img2 from "../../assets/IMG/dish-2.jpg";
import img3 from "../../assets/IMG/dish-3.jpg";
const items = [
  {
    src: img1,
    altText: "Achari Karahi",
    caption: "Achari Karahi",
    key: 1,
  },
  {
    src: img2,
    altText: "Vegetable SandWhich",
    caption: "Vegetable SandWhich",
    key: 2,
  },
  {
    src: img3,
    altText: "Vegetable Chart",
    caption: "Vegetable Chart",
    key: 3,
  },
];

function Crousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{
            height: window.innerWidth < 768 ? "50vh" : "90vh",
            width: "100%",
            borderRadius: "5px",
          }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionNavbar={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="container" style={{ height: "110vh" }}>
      <div className="row ">
        <div className="text-center">
          <h1 className="fw-bold text-bg-warning">Famous Dishes</h1>
        </div>
        <div className="col-11 m-4">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Crousel;
