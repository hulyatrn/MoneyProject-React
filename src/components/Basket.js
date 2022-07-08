import {useState} from 'react';
import BasketItem from './BasketItem';
import {moneyFormat} from './Helpers';



function Basket ({basket,products,total,resetBasket}) {
    return(
        <>
        			<div className="basket-container container">
				<h3>Alışveriş Detayları</h3>
				<ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
					Toplam: ₺{moneyFormat(total)}
				</div>
				<button className="basket-reset-btn" onClick={resetBasket}>Sepeti Sıfırla</button>
			</div>
    </>
    )
}
export default Basket