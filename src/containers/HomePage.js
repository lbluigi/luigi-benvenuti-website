import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Logo from '../components/Logo';

export default () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      contentfulHomePage {
        title
        email
        logo {
          description
          file {
            url
          }
        }
      }
    }
  `);

  const {
    contentfulHomePage: {
      title,
      email,
      logo: {
        file: { url },
        description,
      },
    },
  } = data;

  const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
    }
  `;

  const StyledMain = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 20px;

    h1,
    h2 {
      font-size: 1rem;
      line-height: 1.6;
      font-family: 'Inconsolata', monospace;
    }
  `;

  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledMain>
        <div>
          <h1>{`// ${title}`}</h1>
          <h2>{`// ${email}`}</h2>
          <Logo src={url} alt={description} />
        </div>
      </StyledMain>
    </React.Fragment>
  );
};
