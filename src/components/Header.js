import { useState } from "react";
import {moneyFormat} from './Helpers';


function Header({ total,money}){
    return(
        <div>
            {total > 0 && money - total !== 0 && (
				<div className="header">Harcayacak <span> {moneyFormat(money - total)}₺</span> paranız kaldı!</div>
			)}
			{total === 0 && (
				<div className="header">Harcamak için <span> {moneyFormat(money)}₺</span> paranız var!</div>
			)}
			{money - total === 0 && (
				<div className="header empty">Paran bitti, parasız insan boş insandır!</div>
			)}
        </div>
    )
}

export default Header