//STIILIFAIL IMPORT
import "./Expenseitem.css"
import "./ExpenseDate"

function Expenseitem(props) {

    return (
        <div className="expense-item">
            <expenseDate date={props.expenseData.date}></expenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
        </div>
    )
}

export default Expenseitem
