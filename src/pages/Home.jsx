
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import {
  LinkedInIcon, GitHubIcon, InstagramIcon
} from '../components/SocialIcons'
import tundeImg from '../images/bj4.jpg'
import bj1 from '../images/bj6.jpg'
import bj2 from '../images/bj2.jpg'
import gal1 from '../images/gallery1.jpeg'
import gal2 from '../images/gallery2.jpeg'
import gal3 from '../images/gallery3.jpeg'
import gal4 from '../images/gallery4.jpg'
import gal5 from '../images/gallery5.jpeg'
import tradedepot from '../images/logos/tradedepot_logo.jpeg'
import manchester from '../images/logos/manchesterunilogo.jpeg'
import borderline from '../images/logos/borderlinesupportuk_logo.jpeg'
import Project from '../components/Project'
import EmailJS from '../components/EmailJs'
import Certifications from '../components/Certifications'


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[gal1, gal2, gal3, gal4, gal5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={`
              relative aspect-[9/10] h-56 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800,
              ${rotations[imageIndex % rotations.length]},
            `}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group block -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}


function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center  justify-center border-2 border-red rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img src={role.logo} alt="" className="h-full w-full object-contain rounded-full " unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

export function Resume() {
  let resume = [
    {
      company: 'Research Assistant',
      title: 'Borderline Support UK CIC',
      logo: borderline,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'The University of Manchester',
      title: 'Data Scientist(Internship)',
      logo: manchester,
      start: 'Oct-2021',
      end: 'Sep-2023',
    },
    {
      company: 'TradeDepot',
      title: 'Data Analyst',
      logo: tradedepot,
      start: 'Jul-2022',
      end: 'Jul-2023',
    },
    {
      company: 'TradeDepot',
      title: 'City Lauch Support',
      logo: tradedepot,
      start: 'Apr-2022',
      end: 'Jun-2022',
    },
    {
      company: 'TradeDepot ',
      title: 'Distribution Data Analyst',
      logo: tradedepot,
      start: 'Jul-2021',
      end: 'Jun-2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}


export default function Home() {
  return (
    <>
      <Container className="-mt-20">
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <div className="max-w-2xl md:w-[60%] ">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Experienced Data Scientist with Technical Background and an Msc
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-100">
            I am Proficient in Python and advanced visualization tools like Seaborn, my analytical strategies led to a 20% reduction in data processing time and a decrease in logistics costs at TradeDepot. These efforts align with my goal to streamline data processes and elevate analytical precision within organizations.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/ADEYEMIBolaji"
                aria-label="Follow on Github"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.instagram.com/_abolaji_ade?igsh=MTI3bWVmandtdnJ3Mg%3D%3D&utm_source=qr"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/adeyemiqbolaji/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
          <div className="h-[502px] w-[439px] ">
            <img
              src={tundeImg}
              alt="tunde"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
      <div className="my-40">
        <Photos />
      </div>
      <Container className='mt-24 md:mt-28'>
        <Project />
      </Container>
      <Container className="mt-28">
        <div className="flex flex-col gap-10 lg:flex-row md:gap-4">
          <div className="pr-6 md:w-[60%]">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I'm Your Dedicated Data Scientist
            </h2>
            <p className="my-4 dark:text-zinc-100 text-zinc-800">
              I am an adaptable and collaborative data enthusiast with a solid foundation in data science, statistical experimentation, and data analysis.
            </p>
            <p className='dark:text-zinc-100 text-zinc-800'>
              I hold a degree in Data Science from Manchester Metropolitan University, where I graduated with first class honors, and I am a certified Associate Data Analyst. I have also earned certifictions from Google Cloud Platform, including core infrastructure fundamentals.

            </p>
            <a href="/about" className="my-4 block">
              <Card.Cta>Learn more about me</Card.Cta>
            </a>
          </div>
          <div className="flex gap-2">
            <div className="h-[400px] w-[200px]">
              <img
                src={bj1}
                alt="aboutimg"
                className="h-full rounded-md object-cover"
              />
            </div>
            <div className="mt-6 h-[400px] w-[200px]">
              <img
                src={bj2}
                alt="aboutimg"
                className="h-full rounded-md object-cover"
              />
            </div>
          </div>
          <div></div>
        </div>
      </Container>
      <Container className="mt-14 md:mt-10">
        <div className="">
          <Certifications />
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Resume />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <EmailJS />
          </div>
        </div>
      </Container>
    </>
  )
}
