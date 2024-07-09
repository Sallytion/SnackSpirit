import React, { useEffect } from "react";
import { useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      title: "Chicken Fried Rice",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: 250,
    },
    {
      title: "Veg Fried Rice",
      image:
        "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 200,
    },
    {
      title: "Fish Biryani",
      image:
        "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
      price: 300,
    },
    {
      title: "Chicken Biryani",
      image:
        "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
      price: 280,
    },
    {
      title: "Veg Biryani",
      image:
        "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
      price: 230,
    },
    {
      title: "Prawns Fried Rice",
      image:
        "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
      price: 270,
    },
    {
      title: "Chilli Paneer",
      image:
        "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
      price: 220,
    },
    {
      title: "Paneer 65",
      image:
        "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
      price: 240,
    },
    {
      title: "Chicken Tikka",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 260,
    },
    {
      title: "Paneer Tikka",
      image:
        "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
      price: 230,
    },
    {
      title: "Chicken Cheese Pizza",
      image:
        "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
      price: 320,
    },
    {
      title: "Mix Veg Pizza",
      image:
        "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
      price: 300,
    },
  ]);

  useEffect(() => {}, [cart]);

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <>
      <div className="max-w-[75vw] mx-auto bg-black shadow-lg rounded-lg overflow-hidden border-2 border-white p-4 mt-10">
        {cart.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    className="object-cover w-full rounded-lg h-[200px]"
                    src={item.image}
                    alt="Cart"
                  />
                </div>
                <div className="w-2/3 p-4 flex justify-between items-center">
                  <div>
                    <h1 className="text-gray-300 font-bold text-xl">
                      {item.title}
                    </h1>
                    <h2 className="text-gray-500 text-lg pt-10">{item.price}</h2>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {index < cart.length - 1 && <hr className="border-gray-700 my-4" />}
          </div>
        ))}
      </div>
      <center>
        <h1 className="text-white">
          cart total: {cart.reduce((acc, item) => acc + item.price, 0)}
        </h1>
      </center>
    </>
  );
};

export default CartPage;
