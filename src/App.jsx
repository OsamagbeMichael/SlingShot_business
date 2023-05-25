
import Page1 from "./components/Pag1/Page1";
import './App.css';
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";
import Page5 from "./components/Page5/Page5";
import Footer from "./components/Footer/Footer.jsx";
import BlogPost from "./components/BlogPost/BlogPost";





function App() {
  return (
   <div className="App">
      <div className="sections">
      

      <Page1/>
      <Page2/>
     
      <Page3/>
     
      <Page4/>
      <BlogPost />
      <Page5/>
      

      <Footer/>
 
      </div>
    </div>



// <BrowserRouter>
// <div className="App">
//   <div className="sections">
//     <Routes>
//       <Route exact path="/Page1" component={Page1} />
//       <Route path="/Page2" component={Page2} />
//       <Route path="/page3" component={Page3} />
//       <Route path="/page4" component={Page4} />
//       <Route path="/blogpost" component={BlogPost} />
//       <Route path="/page5" component={Page5} />
//     </Routes>
//     <Footer />
//   </div>
// </div>
// </BrowserRouter>

  );
}

export default App;
