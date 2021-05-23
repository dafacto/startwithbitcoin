import Link from 'next/link';
import Footer from '../components/Footer';

const Disclaimer = () => {
  return (
    <>
      <header>
        <div className='container narrow'>
          <Link href='/'>
            <a>
              <img src='/images/logo.svg' />
            </a>
          </Link>
          <h1>Not Financial Advise</h1>
          <p>You are responsible for your own actions.</p>
        </div>
      </header>
      <main>
        <section>
          <div className='container narrow'>
            <p>
              The information contained on this website and the resources
              mentioned on this website is not intended as, and shall not be
              understood or construed as, financial advice. I am not an
              attorney, accountant or financial advisor, nor am I holding myself
              out to be, and the information contained on this website is not a
              substitute for financial advice from a professional.
            </p>
            <p>
              I have done my best to ensure that the information provided on
              this website and the resources listed are accurate and provide
              valuable information. Regardless of anything to the contrary,
              nothing available on or through this website should be understood
              as a recommendation that you should not consult with a financial
              professional to address your particular information. I expressly
              recommend that you seek advice from a professional.
            </p>
            <p>
              I shall not be held liable or responsible for any errors or
              omissions on this website or for any damage you may suffer as a
              result of failing to seek competent financial advice from a
              professional.
            </p>
          </div>
        </section>
      </main>
      <Footer hideCta={true} />
    </>
  );
};

export default Disclaimer;
