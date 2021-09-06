import Link from 'next/link';

const bgColorIndex = [1, 2, 3, 4, 5, 6];

export default function Card({ chapter }) {
  bgColorIndex.push(bgColorIndex[chapter.index]);

  return (
    <Link key={chapter.index} href={`/${chapter.slug}`}>
      <a
        className={chapter.Desc ? 'card card--desc' : 'card'}
        bgcolor={bgColorIndex[chapter.index]}
      >
        <section className="card__content">
          {chapter.totalArticles == 0 && (
            <>
              <img
                src="/assets/icons/coming_soon.png"
                alt=""
                className="card__soon"
              />
              <span className="screen-reader-text">Coming Soon:</span>
            </>
          )}

          <picture className="card__image">
            <source
              srcSet={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${chapter.icon.url}`}
              media="(min-width: 640px)"
            />

            <img
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              alt=""
              width="150"
              height="120"
            />
          </picture>

          <h2 className="card__title">{chapter.title}</h2>
          {chapter.Desc && <p className="card__desc">{chapter.Desc}</p>}
        </section>
      </a>
    </Link>
  );
}
