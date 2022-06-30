import React, { useState } from "react";
import IconSwitch from "../IconSwitch";
import ListView from "../ListView";
import CardsView from "../CardsView";
import { products } from "../Data";

export default function Store() {
    const  [icon, iconState] = useState('view_list');
    const onSwitch = ()=> {
      iconState((icon) => icon === 'view_list'? 'view_module': 'view_list')
    }
    let activeView = ((icon === 'view_list') ? <ListView items={products}/> : <CardsView cards={products}/>)
    //console.log(icon)

    return (
      <div className="container">
      <IconSwitch className={icon} icon={icon} onSwitch={onSwitch}/>
      {activeView}
      </div>
    )
}