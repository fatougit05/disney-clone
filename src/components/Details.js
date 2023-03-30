import React , {useEffect , useState}from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { setDoc, doc, documentId } from 'firebase/firestore';
function Detail() {

    const { id } = useParams();
    const [detailData , setDetailData] = useState({});

useEffect(() => {
db.collection("Movies").doc(id).get().then((doc) => {
    if(doc.exists) {
        setDetailData(doc.data());
    }
    else {
        console.log("no such document in firebase");
    }
}).catch((error) => {
    console.log("Error getting document :" , error)
})
}, [id])
  return (
<>

{detailData && (

    <>

            <Background style={{background: `url(${detailData.BackgroundImg})`}}>
            <Container>
            <ImageTitle><img src={detailData.TitleImg}  alt="detail/imgtitle" ></img>
            </ImageTitle>



             
            
            <Controls>

            <PlayButton>
            <img src='/images/play-icon-black.png' ></img>
            <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src="/images/play-icon-white.png" ></img>
            <span>Trailer</span>
            </TrailerButton>
            
            <AddButton>
               <span>+</span> 
            </AddButton>
            <GroupWatchButton>
                <img src='/images/group-icon.png' ></img>
            </GroupWatchButton>
            
            
            </Controls>
            
            <SubTitle>
               {detailData.Genres}
            </SubTitle>
            
            <Description>
               {detailData.Description}
            </Description>
            
                </Container>
            </Background>
            
          
    </>
)}
                </>
        )
   
    
  
}

export default Detail;

const Container = styled.div`
min-height: calc(100vh- 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`;

const ImageTitle = styled.div`
height: 30vh ;
min-height: 170px;
width: 35vw;
min-width: 200px;

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}


`;

const Controls = styled.div`
display: flex;
align-items: center;

`;

const PlayButton = styled.button`

border-radius: 4px;
font-size: 15px;
display: flex;
padding: 0px 24px;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
margin: 0 24px;
letter-spacing: 1.8px;
cursor: pointer;

&:hover {
    background: rgb(198, 198, 198)
}

`;

const TrailerButton = styled.button`
border-radius: 4px;
font-size: 15px;
height: 56px;
display: flex;
align-items: center;
background: rgba(0, 0, 0, 0.3);
padding: 0px 24px;
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
cursor: pointer;
margin: 0 24px;
&:hover {
    background: rgb(198, 198, 198);
    color: black;
}
`;

const AddButton = styled.button`

width: 44px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
margin: 0 24px;
span {
    font-size: 30px;
}

&:hover {
    color: black;
    background-color : white;
    opacity: 0.8;
}

`;

const GroupWatchButton = styled.button`
background: rgb(0, 0, 0);
height: 50px;
cursor: pointer;
border-radius: 100%;
border: 2px solid white;

&:hover {
    
    background-color : rgb(198, 198, 198);
    opacity: 0.8;
}


`;

const SubTitle = styled.div`

color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`;

const Description = styled.div`

line-height: 1.4;
font-size: 20px;
margin-top: 16px;
max-width: 568px;


`;
