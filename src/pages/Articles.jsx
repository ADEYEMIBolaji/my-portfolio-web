import { Card } from '../components/Card'
import { SimpleLayout } from '../components/SimpleLayout'
import { formatDate } from '../lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on product management, leadership, product design, and more, collected in chronological order.',
}

export default function ArticlesIndex() {
  const art = [
    {
      title:
        'Bento Africa — Unsolicited Redesign',
      slug: 'https://medium.com/design-bootcamp/bento-africa-unsolicited-redesign-48893e148cf0?source=user_profile---------2----------------------------',
      description:
        'A story of how i redesigned a cloud-based salaries and benefits solution App. About Several months ago, my employer switch our salary payment solution to Bento, I finally set up a Bento Africa account and...',
      date: '2022-04-10',
    },
    {
      title: 'Password Recovery Flow for a Cryptocurrency App',
      slug: 'https://medium.com/design-bootcamp/password-recovery-flow-for-a-cryptocurrency-app-b3ba68f448ae?source=user_profile---------0----------------------------',
      description:
        'Background A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized...',
      date: '2022-05-02',
    },
    {
      title: 'In-app card request flow for UBA',
      slug: 'https://medium.com/design-bootcamp/in-app-card-request-flow-for-uba-9d0d2153726f?source=user_profile---------1----------------------------',
      description:
        'This is a short story about how I attempted to design an In-app card request flow for a traditional bank. Background Since the emergence of mobile-only banking and mobile money operators or agency banking...',
      date: '2022-05-02',
    },
    
  ]

  return (
    <SimpleLayout
      title="Writing on Product Management, Artificial Intelligence, and the Tech industry."
      intro="All of my long-form thoughts on leadership, product design, AI and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {art.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
