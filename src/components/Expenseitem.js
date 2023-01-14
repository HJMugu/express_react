//STIILIFAIL IMPORT
import "./Expenseitem.css"
import "./ExpenseDate"
import "./ExpenseDate.css"
import ExpenseDate from "./ExpenseDate";


function Expenseitem(props) {






    return (
        <div className="expense-item">
            <ExpenseDate date={props.axpenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
        </div>
    )
}

export default Expenseitem
