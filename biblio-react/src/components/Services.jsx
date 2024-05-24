import React from "react";

function Services() {
  return (
    <>
      <section className="services mx-20 my-24">
        <div className="grid grid-cols-4 gap-20 justify-center items-center p-6 bg-gray-950 rounded-3xl shadow">
          <div className="flex flex-col items-center justify-center">
            <div className="circle flex items-center justify-center text-2xl w-12 h-12 bg-gray-400 mb-5">
              <ion-icon name="card-outline"></ion-icon>
            </div>
            <span>Affordable Price</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="circle flex items-center justify-center text-2xl w-12 h-12 bg-gray-400 mb-5">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <span>Best Quality</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="circle flex items-center justify-center text-2xl w-12 h-12 bg-gray-400 mb-5">
              <ion-icon name="headset-outline"></ion-icon>
            </div>
            <span>Customer Service</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="circle flex items-center justify-center text-2xl w-12 h-12 bg-gray-400 mb-5">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <span>Free Delivery</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
