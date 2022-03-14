import React from 'react';
import Filter from "./Filter";

const FilterBlockFacilities = ({props, list}) => {
    return (
        <div className="filterBlock">
            <div className="filterBlock__block">
                <h4 className="filterBlock__title">{props}</h4>
                {list.map((el)=>{
                    return <Filter props={el}/>})}
                {/*<Filter props='Free internet'/>*/}
                {/*<Filter props='Swimming pool'/>*/}
                {/*<Filter props='Parking'/>*/}
                {/*<Filter props='Air-conditioning'/>*/}
                {/*<Filter props='Conference hall'/>*/}
                {/*<Filter props='Transfer'/>*/}
                {/*<Filter props='Bar or restaurant'/>*/}
                {/*<Filter props='Beach nearby'/>*/}
                {/*<Filter props='Kitchen'/>*/}
                {/*<Filter props='Fitness centre'/>*/}

            </div>

        </div>
    );
};

export default FilterBlockFacilities;