import "./Expenses.css"

function Expenses(){

    return(

        <div className="expense-card">

            <h2>Add Expense</h2>

            <select>
                <option>Examples</option>
                <option>Food</option>
                <option>Gas</option>
                <option>Entertainment</option>
            </select>

            <input placeholder="Amount" />

            <input placeholder="Description" />

            <button>Add Expense</button>

            <hr />

            <h3>Recent Expenses</h3>

            <ul>
                <li> Placeholders* </li>
                <li>Food - $15</li>
                <li>Coffee - $7</li>
                <li>Gas - $42</li>
            </ul>

        </div>

    );
}

export default Expenses;