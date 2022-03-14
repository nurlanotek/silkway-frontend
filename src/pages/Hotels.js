import React from 'react';
import FilterBlockFacilities from "../components/hotels_page/FilterBlockFacilities";
import FilterBlockAccom from "../components/hotels_page/FilterBlockAccom";
import HotelCard from "../components/hotels_page/HotelCard";
import {useSelector} from "react-redux";

const Hotels = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    return (
        <div className="hotels" style={{display : isMenuShown ? 'none' : 'block'}} >
            <div className="hotels__filters">
                <FilterBlockFacilities props="Рейтинг" list={["5 звезд", "4 звезды", "3 звезды", "2 звезды", "1 звезда"]}/>
                <FilterBlockFacilities props="Питание" list={["Всё включено", "Завтрак + обед или ужин включены", "Завтрак, обед и ужин включены", "Завтрак включён", "Питание не включено"]}/>
                <FilterBlockFacilities props="Удобства и услуги" list={['Пляж рядом', "Горнолыжный склон рядом", "Спа-услуги", "Конференц-зал", "Бар или ресторан", "Фитнес", "Бассейн", "Парковка", "Трансфер", "Бесплатный интернет"]}/>
                <FilterBlockFacilities props="Номера" list={["Двухместный полулюкс", "Комфортный двухместный номер"]}/>
                <FilterBlockFacilities props="В номере" list={["Кондиционер", "Ванная комната в номере", "Окно в номере", "Кухня", "Балкон", "Вид из окна\n"]}/>

            </div>

            <div className="hotels__cards">
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>

            </div>
        </div>
    );
};

export default Hotels;