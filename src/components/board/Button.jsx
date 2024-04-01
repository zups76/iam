// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useContext } from 'react'
import { Theme, Flex, Text, Button } from '@radix-ui/themes';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { ReactReduxContext } from 'react-redux'


function App() {

  const navigate = useNavigate();
  const location = useLocation();


  // const state = useContext(ReactReduxContext).store.getState()
  console.log('------', persistStore)
  // console.log('------', persistReducer)
  // console.log('------', state.posts.loadingTest)
  // state.posts.loadingTest = 'asdsd'

  const goList = () => {
      navigate('.');
  };
  const goWrite = () => {
      navigate('./form');
  };
  const goDetail = () => {
      navigate('./detail');
  };
  const goDelete = () => {
      navigate('./detail');
  };

  // const mapStateToProps = state => ({
  //   counter: state.counterReducer.counter
  // });
  // const mapDispatchToProps = dispatch => ({
  //   increasement: () => dispatch(increasement())
  // });
  return (
    <>
        <Flex direction="column" gap="2">

          <Link to={"."}>...</Link>
          { ["/board/form", "/board/detail"].includes(location.pathname) && <Button onClick={goList}>List</Button> }
          
          { ["/board", "/board/"].includes(location.pathname) && <Button onClick={goWrite}>Write</Button> }
          { ["/board", "/board/"].includes(location.pathname) && <Button onClick={goDetail}>Detail</Button> }

          { ["/board/detail"].includes(location.pathname) && <Button onClick={goDelete}>delete</Button> }
          {/* <Button onClick={goWrite}>Write</Button>
          <Button onClick={goDetail}>Detail</Button> */}
        </Flex>
    </>
  )
}

{/* <Route path="/" element={<List/>} />
<Route path="/detail" element={<Detail/>} />
<Route path="/form" element={<Form/>} /> */}
export default App