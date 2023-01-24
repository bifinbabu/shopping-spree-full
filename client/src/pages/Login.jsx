import React from 'react'
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(225, 225, 225, 0.5),
      rgba(225, 225, 225, 0.5)
    ),
    url("https://img.freepik.com/premium-photo/shopping-cart-ejected-from-mobile-phone-with-many-shopping-bag_307211-459.jpg?w=1380")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;
const Link =styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Log In</Button>
          <Link>Forgot password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login