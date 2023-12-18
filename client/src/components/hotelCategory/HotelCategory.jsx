import React from "react";

const categories = [
    {
        id: 1,
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
        label: "Villa",
    },
    {
        id: 2,
        image: "https://cf.bstatic.com/xdata/images/hotel/max500/66684635.jpg?k=9b1b60f904d3e322de625ecff805a034d181271eff2fe9612213b482f0723149&o=&hp=1",
        label: "Guest House",
    },
    {
        id: 3,
        image: "https://cf.bstatic.com/xdata/images/hotel/square600/463760349.webp?k=fbbaf7f22a84c7c2f2972bc11ef843232159d43a30bcddb84aeb586c182e2d40&o=",
        label: "Apartment",
    },
    {
        id: 4,
        image: "https://cf.bstatic.com/xdata/images/hotel/square600/116080734.webp?k=8e00aebcbbe5246685a74764241d0f1fcb861b72d5bd241651c6de6a2d4c3d9d&o=",
        label: "Luxury Tent",
    },
    {
        id: 5,
        image: "https://cf.bstatic.com/xdata/images/hotel/square600/364288875.webp?k=34e94de29a95abf059a5051a7cd772c0205f4c54824a452ada5c2afed11636d5&o=",
        label: "Resort",
    },
    {
        id: 6,
        image: "https://cf.bstatic.com/xdata/images/hotel/square600/216712786.webp?k=f10775b4514853f8e0a87c7bb06d96be1aa88ff636c1af66f92be138b374eea9&o=",
        label: "Hostel",
    },
];

const HotelCategorySelector = () => {
    return (
      <div className="p-8">
        <div className="bg-gray-900 text-white rounded-3xl p-6 min-h-full">
          <h2 className="text-5xl text-center mb-12">
            Popular properties to book <br /> by category
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="relative group">
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full rounded-xl h-[280px]"
                />
                <div className="overlay absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-white text-center py-2">{category.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default HotelCategorySelector;
