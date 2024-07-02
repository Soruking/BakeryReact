import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text'>Все материалы взяты с Bulochnaya34.ru © 2010-2023г. Все права защищены Сайт использует файлы cookies и другие сервисы сбора технических данных его Посетителей</p>
                <span className='text'>&copy; {date.getFullYear().toString()} Superduperboi.</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
