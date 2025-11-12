import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 to-pink-300 text-center py-10">
      <h1 className="text-5xl font-bold mb-4">Order & Eat</h1>
      <p className="text-lg text-gray-800 mb-8">Выберите еду</p>

      <div className="flex justify-center gap-8 flex-wrap">
        <Link href="/menu/pizza" className="bg-white shadow-md rounded-2xl border-2 border-green-400 hover:scale-105 transition p-6 w-52">
          <img src="/images/pizza.jpg" alt="Пицца" className="w-24 h-24 mx-auto mb-2" />
          <h2 className="text-xl font-semibold">Пицца</h2>
        </Link>

        <Link href="/menu/burgers" className="bg-white shadow-md rounded-2xl border-2 border-green-400 hover:scale-105 transition p-6 w-52">
          <img src="/images/burger.jpg" alt="Бургер" className="w-24 h-24 mx-auto mb-2" />
          <h2 className="text-xl font-semibold">Бургеры</h2>
        </Link>

        <Link href="/menu/salads" className="bg-white shadow-md rounded-2xl border-2 border-green-400 hover:scale-105 transition p-6 w-52">
          <img src="/images/salad.jpg" alt="Салат" className="w-24 h-24 mx-auto mb-2" />
          <h2 className="text-xl font-semibold">Салаты</h2>
        </Link>
      </div>
    </div>
  );
}
