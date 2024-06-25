
import { Container } from '../components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '../components/SocialIcons'
import profilephoto from "../images/bj5.jpg"
import { Resume } from './Home'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={`${className} flex`}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={profilephoto}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Welcome to my portfolio! I am an adaptable and collaborative data enthusiast with a solid foundation in data science
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I hold a degree in Data Science from Manchester Metropolitan University, where I graduated with First Class honors, and I am a certified Associate Data Analyst.

I have also earned certifications from Google Cloud Platform, including Core Infrastructure Fundamentals and Big Data & Machine Learning Fundamentals. My technical proficiency includes Power BI, Python, and a variety of other analytical tools, making me adept at transforming complex data into actionable insights. I am skilled in data management, statistical experimentation, and visualization, with a commitment to delivering impactful solutions.

            </p>
            <p>
            With a strong background in cloud programming, databases, web technologies, and machine learning frameworks, I bring a comprehensive skill set to any project. My expertise extends to big data tools, version control, and data visualization tools, ensuring I can handle diverse data-related challenges.

            </p>
            <p>
            I am passionate about fostering teamwork and adaptability, and I am excited to apply my blend of technical expertise and collaborative spirit to roles that emphasize analytical sense and creative problem-solving. Thank you for visiting my portfolio!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul>
            <SocialLink href="https://www.instagram.com/_abolaji_ade?igsh=MTI3bWVmandtdnJ3Mg%3D%3D&utm_source=qr" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/ADEYEMIBolaji" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/adeyemiqbolaji/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mudadesmond@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              bolajiadewunmi24@gmail.com
            </SocialLink>
          </ul>
        </div>

      </div>
      <div className='mt-14'>
        <Resume />
      </div>

    </Container>
  )
}
