import {
  Fragment,
} from 'react';
import Link from 'next/link';
import Head from 'next/head';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Burgeon Adaire Portal',
  'alternateName': 'BAPOR',
  'url': 'https://portal.burgeonadaire.com'
}

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link
          rel="canonical"
          href="https://portal.burgeonadaire.com"
          key="canonical"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="follow" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="font-medium text-lg sm:text-2xl">Burgeon Adaire <span className="font-normal">Portal</span></p>

        <Link className='blog-link' href="https://burgeonadaire.com" target='_blank' rel='noopener'>
          <p className="mt-3 font-normal">Coming Soon</p>
        </Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Fragment>
  );
}
