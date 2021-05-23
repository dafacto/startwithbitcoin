import PostScroller from './PostScroller';
import Footer from './Footer';
import Link from 'next/link';

const Layout = ({ content, children }) => {
  return (
    <>
      <header className='bg'>
        <div className='container narrow'>
          <Link href='/'>
            <a>
              <img src='/images/logo.svg' />
            </a>
          </Link>
          {children}
        </div>
      </header>
      <main>
        <section className='bg'>
          <div className='container'>
            <PostScroller items={content} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
