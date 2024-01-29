
// // File: src/App.js
// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import LoginForm from './components/LoginForm';
// import CartProvider  from './context/CartContext';

// //import UserContext, { UserProvider } from './context/UserContext'; 
// import './App.css';

// function App() {
//   //const { user } = useContext(UserContext);

//   return (
//     <Router>
//       {/* <UserProvider> */}
//         <CartProvider>
//           <div className="App">
//             <Header />
//             <Routes>
//               {user ? (
//                 <>
//                   <Route path="/" element={<HomePage />} />
//                   <Route path="/products" element={<ProductPage />} />
//                   {/* <Route path="/cart" element={<CartPage />} /> */}
//                   {/* Other routes as needed */}
//                 </>
//               ) : (
//                 <Route path="/" element={<LoginForm />} />
//               )}
//             </Routes>
//           </div>
//         </CartProvider>
//       {/* </UserProvider> */}
//     </Router>
//   );
// }

// export default App;



import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginForm from './components/LoginForm';
import { CartProvider } from './context/CartContext';
import UserContext, { UserProvider } from './context/UserContext';
import './App.css';

function App() {
 const { user } = useContext(UserContext);
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <LoginForm />
            <Routes> 
       
                <>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} /> 
                  {/* Other routes as needed */}
                </>

            </Routes>
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
//  import { CartProvider } from './context/CartContext';
//  import UserContext, { UserProvider } from './context/UserContext'; 
// import LoginForm from './components/LoginForm';
// import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       <UserProvider>
//         <CartProvider>
//           <div className="App">
//               <Header />
//               <LoginForm /> 
//             <main className="App-content">
//               <section className="product-section">
//                 <ProductList />
//               </section>
//               <aside className="cart-section">
//                 <Cart />
//               </aside>
//             </main>
//             <footer className="App-footer">
//               <p>© 2024 My E-Commerce App</p>
//             </footer>
//           </div>
//         </CartProvider>
//       </UserProvider>
//     </Router>
//   );
// }

// export default App;

// function App() {
//   return (
//     <CartProvider>
//       <div className="App">
//         <header className="App-header">
//           <h1>My E-Commerce App</h1>
//         </header>
//         <main>
//           <ProductList />
//           <Cart />
//         </main>
//       </div>
//     </CartProvider>
//   );
// }



// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(`You clicked ${count} times`);
//   }, [count]);
  
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

//export default App;
