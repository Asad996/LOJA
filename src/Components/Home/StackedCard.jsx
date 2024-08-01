import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import Card from "./Card";

const StackedCard = ({ image, setImages, images }) => {
  const [imagesExhausted, setImagesExhausted] = useState(false);

  useEffect(() => {
    // Check if there are no more images in the current category
    const remainingImages = images.filter((p) => p.category === image.category);
    if (remainingImages.length === 0 || remainingImages.every((p) => !p.url)) {
      setImagesExhausted(true);
    }
  }, [images, image.category]);

  const outOfFrame = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="w-full relative">
      {images
        .filter((p) => p.category === image.category)
        .map((p, index) => (
          <div key={p.id}>
            {p.url === undefined ? (
              <>
                <Card imageExhausted={imagesExhausted} category={p.category} />
              </>
            ) : (
              <>
                {index === 0 ? (
                  <div
                    className="absolute top-0 left-0 w-full h-full transform"
                    style={{
                      zIndex: images.length - index,
                    }}
                  >
                    <TinderCard onCardLeftScreen={() => outOfFrame(p.id)}>
                      <Card url={p.url} category={p.category} />
                    </TinderCard>
                  </div>
                ) : index % 2 === 0 && index > 0 ? (
                  <div
                    className="absolute top-0 left-0 w-full h-full transform rotate-[5deg]"
                    style={{
                      zIndex: images.length - index,
                    }}
                  >
                    <TinderCard onCardLeftScreen={() => outOfFrame(p.id)}>
                      <Card url={p.url} category={p.category} />
                    </TinderCard>
                  </div>
                ) : (
                  <div
                    className="absolute top-0 left-0 w-full h-full transform -rotate-[5deg]"
                    style={{
                      zIndex: images.length - index,
                    }}
                  >
                    <TinderCard onCardLeftScreen={() => outOfFrame(p.id)}>
                      <Card url={p.url} category={p.category} />
                    </TinderCard>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      <h2 className="text-[28px] mt-12 text-center font-light tracking-wide">
        {image.category.toLocaleUpperCase()}
      </h2>
    </div>
  );
};

export default StackedCard;
