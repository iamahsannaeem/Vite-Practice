import React from "react";

const Card = () => {
  const list = [
    {
      key: 1,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg",
    },
  ];
  return (
    <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="relative overflow-hidden bg-cover bg-no-repeat">
        <img class="rounded-t-lg" src="" alt="" />
      </div>
      <div class="p-6">
        <p class="text-base text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card;
