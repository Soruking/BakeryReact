import images from "./images";
import {FaStar, FaLeaf, FaCookie, FaGift, FaReceipt, FaRegBookmark, FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt, FaFileAlt} from "react-icons/fa";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#white-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaStar style = {{ fill: gradient }} />,
        title: "10 лет вместе",
        text: "Уже более 10 лет мы радуем наших гостей вкусом и качеством."
    },
    {
        id: 2,
        icon: <FaLeaf style = {{ fill: gradient }} />,
        title: "Чисто. Натурально",
        text: "Всё, что мы создаем, начинается с натуральных ингредиентов, никаких добавок— только чистый вкус."
    },
    {
        id: 3,
        icon: <FaCookie style = {{ fill: gradient }} />,
        title: "Ассортимент",
        text: "От изысканных десертов до сытных завтраков. Более 200 позиций в меню."
    },
    {
        id: 4, 
        icon: <FaGift style = {{ fill: gradient }} />,
        title: "Заказные торты за 72 часа",
        text: "Воплотим в жизнь любой торт мечты."
    },
    {
        id: 5,
        icon: <FaReceipt style = {{ fill: gradient }} />,
        title: "Искусство и Точность",
        text: "Мы обеспечиваем безупречность каждого рецепта благодаря передовым технологиям."
    },
    {
        id: 6,
        icon: <FaRegBookmark style = {{ fill: gradient }} />,
        title: "Знак Качества",
        text: "Качество продукции подтверждено комплектом Деклараций о соответствии"
    }
];

const about = [
    {
        id: 7,
        text: "Булочная - это кафе кондитерская, идеальное место для всех, кто обожает сладкое и просто хочет вкусно поесть. Уже с 2010 года мы радуем вас нашими десертами. У нас вы найдете более 150 видов всего самого вкусного: от изысканных тортов до нежнейших десертов и пирожных, а также пышной выпечки, пирогов, конфет и печенья, сделанных с любовью и из натуральных ингредиентов. Никаких химических добавок — только чистый вкус! Любите пиццу? У нас для вас есть итальянская на тонком тесте и пицца Scrocchiarella с томатной или сливочной основой. И не только! В нашем меню — всякое горячее: каши, омлеты, пельмени и вареники, все собственного приготовления. А если у вас скоро праздник и нужен особенный торт или сладкий стол, наши кондитеры с удовольствием воплотят в жизнь любые ваши идеи. Свадьбы, юбилеи, детские праздники или корпоративы — мы сделаем все, чтобы ваше событие было незабываемым! Мы всегда счастливы видеть вас у нас. Начните свой день с Булочной!"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Выпечка под заказ",
        text: "Готовы исполнить любое ваше желание"
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Без выходных",
        text: "Работаем каждый день с 9:00 до 21:00"
    }
];

const features = [
    {
        id: 10,
        title: "Торты",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 11,
        title: "Пироги",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 12,
        title: "Пирожные",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 13,
        title: "Сладкая выпечка",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }, 
    {
        id: 14,
        title: "Хлеб",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 15,
        title: "Завтраки и обеды",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }
];

const portfolio = [
    {
        id: 16,
        title: "Хлеб",
        text: "Выпекаем вкусный хлеб",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Пицца",
        text: "Обязательно попробуйте нашу пиццу",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Домашние ПОЛУФАБРИКАТЫ",
        text: "Если у вас нет времени приготовить ужин, то это ваше спасение",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Торты",
        text: "Торт Шоколадник",
        image: images.dessert_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Пироги",
        text: "Торт Сметанный",
        image: images.dessert_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Пирожные",
        text: "Клубника-лайм-базилик",
        image: images.dessert_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Сладкая выпечка",
        text: "Улитка",
        image: images.dessert_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Гастрономическая выпечка",
        text: "Слойка курица-сыр",
        image: images.dessert_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Сэндвичи",
        text: "Панини с ветчиной",
        image: images.dessert_img_6,
        rating: 4
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "8 800 550 61 20",
        text: "ЕДИНЫЙ НОМЕР. (доставка, заказ торта, и любые др. вопросы)"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "https://t.me/bulochnaya34ru",
        text: "Пишите нам в телеграм"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "Волжский ул. Карбышева, 63 ",
        text: "Наш адрес"
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;