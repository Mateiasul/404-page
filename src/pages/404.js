import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const PageWrapper = styled.div`
  margin: auto;
  position: relative;
  width: 1440px;
  height: 1080px;
  background: #FFFFFF;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 375px;
  }

`

const Wrapper = styled.div`
  justify-content: center;
  width: 100%;
  height: 503px;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 735px;

  }
`

const ContentWrapper = styled.div`
  justify-content: left;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: auto;
  }

`

const ScareCrowWrapper = styled.div`
  padding-top: 10px;
  justify-content: center;
  width: 50%;
  height: 100%;
  display: flex;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 60px;
  }
`

const Cta = styled.a`
  width: 216px;
  height: 68px;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;  

  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.035em;
  text-transform: uppercase;

  color: #FFFFFF;
`

const Title = styled.h3`
  width: 586px;
  height: 190px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;
  margin: 0 0 36px 0;

  color: #333333;

  /* I have bad news for you */
  @media (max-width: 480px) {
    width: 350px;
    height: 142px;  
    font-size: 48px;
    line-height: 71px;
  }
`


const Description = styled.p`
  margin: 36px 0 64px 0;
  width: 65%;
  font-family: Space Mono;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.56px;

  color: #4F4F4F;

  @media (max-width: 480px) {
    width: 328px;
    height: 81px;
    font-size: 18px;
    line-height: 27px;
  }

`


const PageTitle = styled.p`
  position: absolute;
  width: 133px;
  height: 25px;
  left: 77px;
  top: 40px;

  font-family: Inconsolata;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;

  color: #333333;

  @media (max-width: 480px) {
    left: 24px;
    top: 20px;
  }

`

const PageFooter = styled.p`
  position: absolute;
  height: 17px;
  left: 607px;
  top: 1024px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #333333;

  @media (max-width: 480px) {
    margin: auto;
    margin-top: 100px;
    position: relative;
    left: unset;
    top: unset;
  }


`

export default function Home ({ data }) {
  console.log(data);
  const sources = [
    data.file.mobileImage.fixed,
    {
      ...data.file.desktopImage.fixed,
      media: `(min-width: 480px)`,
    },
  ]

  return (
  <PageWrapper>
    <PageTitle>404 not found</PageTitle>
    <Wrapper>
      <ScareCrowWrapper>
        <Img
          fixed={sources}
          alt="A scarecrow scaring people away"
        />
      </ScareCrowWrapper>
      <ContentWrapper>
        <Title>I have bad news for you</Title>
        <Description>The page you are looking for might be removed or is temporarily unavailable</Description>
        <Cta href="/" type="button">Back to Homepage</Cta>
      </ContentWrapper>
      <PageFooter>mateipotcovaru@DevChallenges.io</PageFooter>
    </Wrapper>
  </PageWrapper>
  );
}

export const imgQuery = graphql`
  query MyQuery {
    file(relativePath: {eq: "Scarecrow.png"}) {
      desktopImage: childImageSharp {
        fixed(width: 539, height: 447) {
          ...GatsbyImageSharpFixed
        }
      }
      mobileImage: childImageSharp {
        fixed(width: 286, height: 238) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`