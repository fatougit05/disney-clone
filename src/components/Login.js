import React from 'react'
import styled from 'styled-components';
function Login() {
  return (
<Container>
    <Content>
<CTA>
    <CTALogoOne src='/images/cta-logo-one.svg' />
    <SignUp>GET ALL THERE</SignUp>
<Description >Get acess to Raya and the last dragon for an additional fee with a disney + subscription.As of 03/02/23
 the price of the Disney+ and the Disney Bundle will increase by 1$  .    
 </Description>

 <CtaLogoTwo src='/images/cta-logo-two.png' ></CtaLogoTwo>
</CTA>

  <BgImage />

    </Content>
</Container>

  )
}

export default Login;
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;

`
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`
const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: -1;
`

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`;



const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
cursor: pointer;
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
font-size: 18px;
letter-spacing: 1.5px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 13px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`

const CtaLogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align : bottom;
width: 100%;
`