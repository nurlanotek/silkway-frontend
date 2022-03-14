import React from 'react';
import hotel from '../../images/hotel.png'
import stars from '../../images/stars.png'

const HotelCard = () => {
    return (
        <div className="hotelCard">
            <img src={hotel} alt="hotel" className='hotelCard__img'/>
            <div className="hotelCard__text-content">
                <div className="hotelCard__name-star">
                    <h4 className="hotelCard__title">My Hotel</h4>
                    <img src={stars} alt="raiting..." className="hotelCard__raiting"/>
                </div>

                <p className="hotelCard__address">Moscow street, Karakol</p>

                <p className='hotelCard__description'>Стандартный двухместный номер с 1 кроватью <br/>
                    1 большая двуспальная кровать</p>

                <div className="hotelCard__bottom-sec">
                    <button className="hotelCard__more-btn">Подробнее</button>
                </div>
            </div>

        </div>
    );
};

export default HotelCard;