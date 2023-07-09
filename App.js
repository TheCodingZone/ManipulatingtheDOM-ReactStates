
import './App.css';
import ExpenseItem from './Componant/ExpenseItem';

function App() {
  const data = [
    {
      id: 1,
      expenseDate: new Date(2021,10,12),
      expenseDetail: 'CAR INSURANCE',
      
      expensePrice: '220$'
    },
    {
      id: 2,
      expenseDate:  new Date(2021,1,28),
      expenseDetail: 'TOILET PAPER',
     
      expensePrice: '20$',
      
    },
    {
      id: 3,
      expenseDate:  new Date(2022,7,10),
      expenseDetail: 'MOBILE',
      
      expensePrice: '130$'
    },
    {
      id: 4,
      expenseDate: new Date(2022,8,28),
      expenseDetail: 'BIKE',
      
      expensePrice: '500$'
    }
  ];
  return (
    <div className="App">
     {data.map((item)=>(
        <ExpenseItem
       
        expenseDate={item.expenseDate}
        expenseDetail={item.expenseDetail}
        expensePrice={item.expensePrice}
        />
      ))}
    </div>
  );
}

export default App;
