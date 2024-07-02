import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>Волжский • Волгоград</h1>
                <p className='text-lead'>Доставка десертов и выпечки. Вас приветствует кафе-кондитерская «Булочная», где уже более 10 лет каждый день становится вкуснее! Откройте для себя мир из более чем 150 видов лакомств — от тортов и десертов до горячих завтраков. Всё приготовлено с душой и из лучших натуральных ингредиентов. Переходите в меню и выбирайте своё любимое угощение сейчас!</p>
            </div>
        </div>
    </header>
  )
}

export default Header