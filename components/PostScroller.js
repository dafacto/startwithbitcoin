import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';
import PropTypes from 'prop-types';

const PostScroller = ({ items, horizontal }) => {
  const router = useRouter();
  const current = router.query.slug;

  const containerEl = useRef(null);
  const currentEl = useRef(null);

  useEffect(() => {
    const container = containerEl.current;
    const current = currentEl.current;

    if (container && current) {
      const offset = container.offsetWidth / 2 - current.offsetWidth / 2;

      container.scrollTo(current.offsetLeft - offset, 0);
    }
  }, [current]);

  if (!items || !items.length) return null;

  return (
    <ol
      ref={containerEl}
      className={cx(
        { 'reasons-horizontal': horizontal },
        { reasons: !horizontal }
      )}
    >
      {items.map(({ number, slug, title, intro }) => {
        const active = slug === current;
        return (
          <li key={slug} ref={active ? currentEl : null}>
            <Link href={`/${slug}`}>
              <a
                className='reason'
                className={cx('reason', { active: active })}
              >
                <div className='reason-index'>{number}</div>
                <div className='reason-title'>{title}</div>
                <div className='reason-intro'>{intro}</div>
              </a>
            </Link>
          </li>
        );
      })}
      {horizontal && <li />}
    </ol>
  );
};

PostScroller.defaultProps = {
  horizontal: false,
};

PostScroller.propTypes = {
  horizontal: PropTypes.bool,
};

export default PostScroller;
