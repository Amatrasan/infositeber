import React, { useEffect, useState } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
// import chartohtml from 'htmlspecialchars';
import dataJson from '../data.json';
import './aboutWeek.css';

const AboutWeekS = (props) => {
    const [data, setData] = useState(dataJson);
    useEffect(() => {
        console.log('Загрузилась информация о неделе')
        console.log(data.dataforweek[props.week]);
    }, [])
    //<Link activeClass="active" to={i} spy={true} smooth={true} offset={0} duration= {500}>{data.title}</Link>

    const textMap = (textdata, i) => {
            if (textdata.paragraph){
                return(
                    <div className="text_info_week" dangerouslySetInnerHTML={{__html: textdata.paragraph}} />
                )
            }
            if (textdata.image){
                return(
                    <div style={{ backgroundImage: `url('${'d'}')` }} className="div_img_about_week" >
                        <img src={textdata.image} alt="" className="img_about_week" />
                    </div>
                )
            }
            if (textdata.list_ul){
                return (
                    <ul className="ul_about_week">
                        {textdata.list_ul.map((temp) => (<li>{temp}</li>))}
                    </ul>
                )
            }
            if (textdata.list_ol){
                return (
                    <ol className="ol_about_week">
                        {textdata.list_ol.map((temp) => (<li>{temp}</li>))}
                    </ol>
                )
            }
    };
   // const Show = () => data.dataforweek[props.week].data.map(Each);
    const EachText = (data, i) => {
        if (data.title){
            return (
                <div className="title_info_week" name={i}>{data.title}</div>
            )
        }
            return(
                <>
                <div className="about_week__grid">
                    <div style={{gridArea: 'text' }}>
                        {data.text.map(textMap)}
                    </div>
                    <div style={{gridArea: 'icon' }}>
                        <div style={{ backgroundImage: `url('${'d'}')` }} className="div_img_about_week" >
                            <img src={data.image_plod} alt="" className="img_about_week" />
                        </div>
                        <div className="text_for_icon" dangerouslySetInnerHTML={{__html: data.text_for_icon}} />
                        <div style={{ backgroundImage: `url('${'d'}')` }} className="div_img_about_week for_icon">
                            <img src={data.image_icon} alt="" className="img_about_week" />
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url('${'d'}')` }} className="div_img_about_week bootom_img">
                            <img src={data.image_bottom} alt="" className="img_about_week" />
                </div>
                </>
            )
        }
    //             {Show()} перед шовтекст
    const ShowText = () => data.dataforweek[props.week].data.map(EachText);
    return(
        <div className="changeWeek">
            <div className="calc_button" id="back_from_change_week" onClick={props.backToWeek}>Назад</div>
            <div className="week_title">PregnancyHelper</div>

            {ShowText()}
            <div className="flex_for_button mobile_back">
                        <button className="button_calculation" onClick={props.backToWeek}>Назад</button>
            </div>
        </div>
    )
}

export default AboutWeekS;