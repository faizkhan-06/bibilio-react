import React from "react";
import animalfarm from "../assets/images/Animal_Farm-transformed.jpeg";
function BestSelling() {
  return (
    <>
      <section class="best-selling-section flex justify-center items-center p-7">
        <div class="best-selling-books grid grid-cols-2 bg-gray-950 rounded-3xl p-6 py-12 mx-20">
          <div class="flex justify-center items-center">
            <div class="img-div">
              <img src={animalfarm} alt="err" />
            </div>
          </div>
          <div class="flex flex-col justify-center items-center">
            <div>
              <h2 class="mb-16 best-book-heading text-3xl text-gray-400">
                Best Selling Book
              </h2>
              <h3 class="mb-5 text-xl">Animal Farm</h3>
              <p class="mb-5 text-base text-gray-500">BY GEORGE ORWELL</p>
              <p class="mb-8 text-sm text-gray-600 best-book-text">
                Animal Farm depicts a farm's uprising, echoing the pitfalls of
                power as animals strive for equality, only to succumb to
                corruption and tyranny. Orwell's novella serves as a stark
                warning, illustrating the dangers of totalitarianism and the
                betrayal of ideals.
              </p>
              <a
                href="#"
                class="next-btn text-sm text-gray-700 flex items-center gap-2"
              >
                SHOP IT NOW
                <span class="text-lg font-medium flex justify-center items-center">
                  &#8594;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSelling;
