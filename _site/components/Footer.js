import Link from 'next/link';

const Footer = ({ backToGuide = false, hideCta = false }) => {
  const callToAction = backToGuide
    ? 'Need to review the Bitcoin basics?'
    : 'Ready to take the plunge with the world’s greatest cryptocurrency?';
  const link = backToGuide ? '/' : '/resources';
  const linkText = backToGuide ? 'Back to the Guide' : 'Get started now';

  return (
    <footer>
      {!hideCta ? (
        <div className='container narrow'>
          <h2>{callToAction}</h2>
          <Link href={link}>
            <a className='button'>{linkText}</a>
          </Link>
        </div>
      ) : null}
      <ul>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/disclaimer'>
            <a>Disclaimer</a>
          </Link>
        </li>
        <li>
          <a
            href='mailto:hello@startwithbitcoin.org?subject=I have a question about Bitcoin'
            className='contact'
          >
            Get in touch
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
