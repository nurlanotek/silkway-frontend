import React from 'react';
import {useSelector} from "react-redux";
import { FiSend } from "react-icons/fi";

const Entity = () => {

    const showEntity = useSelector(state=> state.switchRegTypes.showEntity);
    return (
        <div className="entity" style={{display: showEntity ? 'block' : 'none' }}>
            {/*<h3 className="entity__title">Регистрация юридического лица</h3>*/}

            <div className="entity__attention-div" >
                <p className="entity__attention-message">Внимание! Для регистрации в качестве юридического лица,
                    вам необходимо заполнить следующую форму. Отправленные Вами данные будут рассмотрены в течении суток,
                после чего с вами свяжется наш менеджер  </p>
            </div>

            <form className="entity__form">
                <h3 className="entity__form-title">Заполните форму
                    <span className="entity__imp-sign">*</span>
                </h3>

                <div className="entity__form-block">
                    <input type="text" required className="entity__text-input" placeholder="ФИО руководителя"/>
                    <input type="text" required className="entity__text-input" placeholder="Название компании"/>
                </div>

                <div className="entity__form-block">
                    <input type="tel" required  className="entity__text-input" placeholder="Номер телефона"/>
                    <input type="email"required className="entity__text-input" placeholder="email"/>

                </div>

                <h3 className="entity__form-subtitle">Документы необходимые для подтверждения
                    <span className="entity__imp-sign">*</span>
                </h3>

                <div className="entity__form-doc-block">
                    <label htmlFor='doc-input' className="entity__doc-label">Свидетельство о гос. регистрации :</label>
                    <input  id= 'doc-input'required type="file"   className="entity__doc-input" />
                </div>

                {/*свид о гос регистрации*/}
                {/*2) решение о создании Юр лица*/}
                {/*3) учредительный договор*/}
                {/*4) справка с налоговой о неимении задолженности*/}
                {/*5) справка с соц фонда о неимении задолженности*/}
                {/*6) копия паспорта директора*/}

                <div className="entity__form-doc-block">
                    <label htmlFor='doc-input' className="entity__doc-label">Решение о создании юридического лица :</label>
                    <input  id= 'doc-input' required type="file"   className="entity__doc-input" />
                </div>

                <div className="entity__form-doc-block">
                    <label htmlFor='doc-input' className="entity__doc-label">Учредительный договор :</label>
                    <input  id= 'doc-input' required type="file"   className="entity__doc-input" />
                </div>

                <div className="entity__form-doc-block">
                    <label htmlFor='doc-input' className="entity__doc-label">Справка с налоговой о неимении задолженности :</label>
                    <input  id= 'doc-input' required type="file"   className="entity__doc-input" />
                </div>

                <div className="entity__form-doc-block">
                    <label htmlFor='doc-input' className="entity__doc-label">Справка с соц. фонда о неимении задолженности :</label>
                    <input  id= 'doc-input'type="file"   className="entity__doc-input" />
                </div>

                <div className="entity__form-doc-block">
                    <label htmlFor='doc-input' className="entity__doc-label">Копия паспорта директора :</label>
                    <input  id= 'doc-input'type="file"   className="entity__doc-input" />
                </div>

                <div className="entity__submit-div">
                    <button type="submit" className="entity__submit-btn">Отправить <span className="entity__space-span"></span>
                    <FiSend/></button>
                </div>




            </form>

        </div>
    );
};

export default Entity;