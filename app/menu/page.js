"use client";
import Image from "next/image";

export default function MenuPage() {
  const items = [
    { name: "Пицца", img: "/images/pizza.jpg" },
    { name: "Бургер", img: "/images/burger.jpg" },
    { name: "Салад", img: "/images/salad.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-pink-100 p-6">
      <h1 className="text-4xl font-bold mb-2">Меню <span className="text-rose-600">Order & Eat</span></h1>
      <p className="text-lg text-gray-700 mb-8">Выберите еду</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-green-400 flex flex-col items-center"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={200}
              height={200}
              className="rounded-xl object-contain"
            />
            <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}