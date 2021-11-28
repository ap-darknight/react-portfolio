import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import { useEffect, useState } from "react";


function App() {

  const location = useLocation();
  const [looks,setLooks] = useState(false);
  useEffect(() => {
    console.log("rendered");
    if((window.screen.width>400)) setLooks(true);
    else setLooks(false);
  }, [window.screen.width, window.screen.height])

  
  return (<>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    {looks && <SoundBar />}

    {/* For framer-motion animation on page change! */}
    {(!looks) && <h1>Use PC/Laptop for full view!</h1>}
    {looks && <AnimatePresence exitBeforeEnter>
    <Switch  location={location} key={location.pathname}>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/blog" component={BlogPage}/>
          <Route exact path="/work" component={WorkPage}/>
          <Route exact path="/skills" component={MySkillsPage}/>

        </Switch>
    </AnimatePresence>
    }
    
    </ThemeProvider>


    
    </>);
    
}

export default App

