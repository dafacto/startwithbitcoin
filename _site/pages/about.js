import Link from 'next/link';
import Footer from '../components/Footer';

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <div className='container narrow'>
          <Link href='/'>
            <a>
              <img src='/images/logo.svg' />
            </a>
          </Link>
          <h1>About this site</h1>
          <p>Teaching through simplicity</p>
        </div>
      </header>
      <main>
        <section>
          <div className='container narrow'>
            <p>
              As someone interested in information design, and inspired by a
              conversation between Peter McCormack and Dan Held about the lack
              “top of the funnel” Bitcoin informational resources, I created
              this site as the beginner’s guide that I would send to, say, my
              mother.
            </p>
            <p>
              It specifically avoids confusing technology that’s not essential
              for the average person to get involved—even the word “blockchain”,
              which you’ll only see if you happen to find your way to the
              technical explainer!
            </p>
            <p>
              To avoid decision paralysis, the resources section isn’t intended
              to be exhaustive, but rather to present a modest spectrum of solid
              options for the beginner.
            </p>
            <p>
              <strong>
                If you enjoy the site, please share it with others!
              </strong>
            </p>
            <p>
              You can learn more about me{' '}
              <a href='https://matthenderson.me'>at my personal site</a>, find
              me <a href='http://twitter.com/dafacto'>on Twitter</a>, or{' '}
              <a
                href='mailto:hello@startwithbitcoin.org?subject=I have a question about Bitcoin'
                className='contact'
              >
                send an email
              </a>
              .
            </p>
            <p>
              For anyone interested in donating to the effort of maintaining
              this resource:{' '}
              <a href='bitcoin:bc1qkpwc8jwjpgmee72enuq4cze8pgwqwfqy6wt3gh'>
                bc1qkpwc8jwjpgmee72enuq4cze8pgwqwfqy6wt3gh
              </a>
            </p>
            <p>
              Just in case it’s necessary, this entire site is copyright{' '}
              {currentYear}!
            </p>
          </div>
        </section>
      </main>
      <Footer hideCta={true} />
    </>
  );
};

export default About;
