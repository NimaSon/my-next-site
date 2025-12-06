"use client";
import Link from 'next/link';

export default function BurgersPage() {
  return (
    <div style={style.page}>
      <img
        src="/images/burgers.jpg"
        alt="Бургер"
        width="300"
        height="200"
        style={style.image}
      />

      <h1>Бургеры 🍔</h1>
      <p>Выберите категорию:</p>

      <div style={style.linksWrapper}>

        {/* Сэндвич */}
        <div style={style.item}>
          <Link href="./menu/burgers/sandwich">
            <button style={style.button}>Сэндвич 🥪</button>
          </Link>

          <p style={style.desc}>
            Вкусные сэндвичи с овощами, сыром, мясом и свежей зеленью.
          </p>
        </div>

        {/* Круассан */}
        <div style={style.item}>
          <Link href="/menu/burgers/croissant">
            <button style={style.button}>Круассан 🥐</button>
          </Link>

          <p style={style.desc}>
            Хрустящие круассаны с начинкой и мягким слоёным тестом.
          </p>
        </div>

      </div>
    </div>
  );
}

const style = {
  page: {
    textAlign: 'center',
  },


  linksWrapper: {
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
    marginTop: '20px'
  },

 image: {
  display: "block",
  margin: "0 auto",
},

  item: {
    width: '180px',
  },

  button: {
    padding: '12px 20px',
    backgroundColor: '#E5B04A',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
  },

  desc: {
    marginTop: '10px',
    fontSize: '15px',
    color: '#444',
  }

  
};
