import React from 'react'
import { Card } from '../components/Card'
import project1 from '../images/ml1.webp'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/make-06-00004-g004.png'
import project5 from '../images/predictive.jpeg'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

const projects = [
  {
    name: 'Machine Learning Models for Predicting Patient Vital Status',
    description:
      'This project provides a comprehensive overview of machine learning model development for predicting patient vital status.',
    link: { href: 'https://github.com/ADEYEMIBolaji/BIP_kaggle_challenge', label: 'Bolaji Adeyemi Exclusive' },
    logo: project1,
  },
  {
    name: 'Machine Learning Prediction of Trip Price',
    description:
      'The E-Hailing Ride Price Prediction System is a machine learning project aimed at predicting the price of e-hailing rides based on various factors such as pickup location...',
    link: { href: 'https://github.com/ADEYEMIBolaji/Predicting_Trip_Price', label: 'Bolaji Adeyemi Exclusive' },
    logo: project2,
  },
  {
    name: 'FMCG_Sales_Report',
    description:
      'In this task, we were provided with a synthetic dataset representing the UK Civil Society Almanac, a comprehensive database containing financial data pertaining..... ',
    link: { href: 'https://github.com/ADEYEMIBolaji/FMCG_Sales_Report', label: 'Bolaji Adeyemi Exclusive' },
    logo: project3,
  },
  {
    name: 'Loan Approval with Machine Learning Prediction',
    description:
      "Welcome to the Loan Approval Predictions project! Below you'll find essential information on how to navigate through the project, understand the data, and utilize the predictive model for determining loan eligibility..... ",
    link: { href: 'https://github.com/ADEYEMIBolaji/Loan_Approval', label: 'Bolaji Adeyemi Exclusive' },
    logo: project4,
  },
  {
    name: 'Customers Churn analysis and prediction using Random Forest Classifier',
    description:
      'Each row represents a customer, each column contains customer’s attributes described in the document..... ',
    link: { href: 'https://www.linkedin.com/posts/adeyemiqbolaji_telco-customer-churn-activity-7006814973565755392-UzDj/?utm_source=share&utm_medium=member_desktop', label: 'Bolaji Adeyemi Exclusive' },
    logo: project5,
  },

]


function LinkIcon(props) {

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Project = () => {
    const location = useLocation()

const displayedItems = location.pathname.includes('projects') ? projects : projects.slice(0, 3);
  return (
    <div>
      <h2 className='text-[30px] font-bold mb-8 dark:text-white'>Published Projects</h2>
      <ul
        className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      >
        {displayedItems.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-40 w-full items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img
                src={project.logo}
                alt=""
                className="h-full w-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
      <a href="/projects" className=' mt-12 block '>
      <Card.Cta>View All Projects</Card.Cta>
      </a>

    </div>
  )
}

export default Project
