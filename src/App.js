
import './App.css';
import Button from './button';
import Card from './card';
import Cart from './mycomponent/Cart'


function App() {
   const products= {title:"shoe", des: "this is my nice shoe" , price: 3000};
   const  handleProduct = () =>
   {
     alert(`${products.title}  ${':'} ${products.price}`);
   };
  return (
    <div className="App"><br></br>
      <Button  text = "loading page"/>
      <Button  text = "start-up page"/>
      <Button  text = "load more"/>
        <Card myProduct ={products} myClick = {handleProduct}/>
        <p> this is my name</p>
      
        <Cart />

    </div>
  
  );
}


export default App;
