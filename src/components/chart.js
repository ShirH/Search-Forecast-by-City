import React from 'react';
import _ from 'lodash'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'; //diagram library

export default (props) =>{

    function avg(data){
        return _.round(_.sum(data)/data.length)
    }

    return(
        <div>
            <Sparklines hight={120} width={100} data={props.measurements}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{avg(props.measurements)} {props.units}</div>
        </div>
    );
}