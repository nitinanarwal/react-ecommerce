import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            doloremque tempora deleniti tenetur fugiat blanditiis ullam
            explicabo ipsum. Sed ab sequi et distinctio voluptatibus! Libero
            suscipit quaerat cum quo amet totam, corrupti consectetur sit
            tempora et soluta voluptatibus repudiandae excepturi voluptatem
            laudantium! Omnis voluptatem fuga blanditiis impedit corporis!
            Dicta, distinctio? Alias rerum quae, numquam, nihil quam nam aut
            temporibus sapiente natus distinctio odio at eum dignissimos
            repellendus deleniti. Dolorum, quis!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
