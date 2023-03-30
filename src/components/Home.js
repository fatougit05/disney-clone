
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';

import Viewers from './Viewers';
import db from '../firebase';
import { doc, collection ,  onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { useEffect } from 'react';

function Home() {

    const dispatch = useDispatch();


    useEffect(() => {
      onSnapshot(collection(db, "Movies"), (snapshot) => {
       
        let populars = [];
        let hollywoods = [];
        let newTos = [];
        let kidsTvs = [];
        let originals = [];
        let trendings= [];
       
        let tempMovies = snapshot.docs.map((doc) => {
  
        
  
         switch (doc.data().type) {
  
  
  
          case "popular" :
            populars = [...populars,{id: doc.id, ...doc.data()}];
            break;
  
            case "hollywood" :
              hollywoods = [...hollywoods,{id: doc.id, ...doc.data()}];
              break;
  
              case "newTo" :
                newTos = [...newTos,{id: doc.id, ...doc.data()}];
                break;
  
                case "kidsTv" :
                  kidsTvs = [...kidsTvs ,{id: doc.id, ...doc.data()}];
                  break;
  
                  case "original" :
                    originals = [...originals ,{id: doc.id, ...doc.data()}];
                    break;
  
                    case "trending" :
                      trendings = [...trendings,{id: doc.id, ...doc.data()}];
                      break;
  
            default:
  
            break;
         }
  
        });
      
     
        dispatch(setMovies({
          popular: populars,
          hollywood: hollywoods,
          newTo: newTos,
          kidsTv: kidsTvs,
          original: originals,
          trending: trendings,
        }))
  
       
  
      })
     
    }, []);
  


  return (
   <Container>
<ImgSlider />
<Viewers />
<Movies />
   </Container>
  )
}

export default Home;

const Container = styled.main`
min-height: 930px;
padding: 0 48px;
position: relative;
overflow-x: hidden;
&:before {
  background: url("/images/home-background.png") center center / cover no-repeat fixed;
content : "";
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
}


`;