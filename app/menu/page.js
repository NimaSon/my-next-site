import Link from "next/link";

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 text-center">
      <h1 className="text-5xl font-bold mb-3 text-gray-800">Order & Eat</h1>
      <p className="text-lg mb-10 text-gray-700">Выберите еду</p>

      <div className="flex gap-8 flex-wrap justify-center">
        {/* Пицца */}
        <Link
          href="/pizza"
          className="w-44 h-44 flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-white/80 shadow-md hover:shadow-xl hover:scale-105 transition-all"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
            alt="Пицца"
            className="w-16 h-16 mb-3"
          />
          <span className="text-xl font-semibold text-gray-800">Пицца</span>
        </Link>

        {/* Бургеры */}
        <Link
          href="/burgers"
          className="w-44 h-44 flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-white/80 shadow-md hover:shadow-xl hover:scale-105 transition-all"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Бургер"
            className="w-16 h-16 mb-3"
          />
          <span className="text-xl font-semibold text-gray-800">Бургеры</span>
        </Link>

        {/* Салаты */}
        <Link
          href="/salads"
          className="w-44 h-44 flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-white/80 shadow-md hover:shadow-xl hover:scale-105 transition-all"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Салат"
            className="w-16 h-16 mb-3"
          />
          <span className="text-xl font-semibold text-gray-800">Салаты</span>
        </Link>
      </div>
    </main>
  );
}