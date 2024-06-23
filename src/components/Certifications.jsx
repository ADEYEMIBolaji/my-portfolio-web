import googlecloud from '../images/Logo-google-cloud-icon-vector-PNG (1).png'
import datacamp from '../images/datacampinc_logo.jpeg'
import linkedIn from '../images/linkedin_logo.jpeg'
import utivalogo from '../images/utiva_logo.jpeg'

const incentives = [
  {
    name: 'Launching into Machine Learning',
    imageSrc: googlecloud,
    description: "Issued: April 2024",
    credentials: "ID 9235603",
  },
  {
    name: 'Google Cloud Big Data and Machine Learning Fundamentals',
    imageSrc: googlecloud,
    description: "Issued: April 2024",
    credentials: "ID JEPT2Z4ZVYRS",
  },
  {
    name: 'Google Cloud Fundamentals: Core Infrastructure',
    imageSrc: googlecloud,
    description:
      "Issued: April 2024",
    credentials: "ID BHPZMFR7HLYJ",
  },
  {
    name: 'Introduction to AI and Machine Learning on Google Cloud',
    imageSrc: googlecloud,
    description: "Issued: April 2024",
    credentials: "ID 8787926",
  },
  {
    name: 'Data Analyst Associate(DataCamp)',
    imageSrc: datacamp,
    description: "Issued: August 2023",
    credentials: "ID DAA0016360721634",
  },
  {
    name: 'Python for Data Visualization',
    imageSrc: linkedIn,
    description: "Issued: December 2022",
    credentials: "",
  },
  {
    name: 'Machine Learning with Python',
    imageSrc: linkedIn,
    description: "Issued: November 2022",
    credentials: "",
  },
  {
    name: 'MySQL Essential Training',
    imageSrc: linkedIn,
    description: "Issued: November 2022",
    credentials: "",
  },
  {
    name: 'Data Science(Utiva)',
    imageSrc: utivalogo,
    description: "Issued: Jan 2019",
    credentials: "ID UDA/UTIVA/201809-183",
  },
]

export default function Certifications() {
  return (
    <div className="w-full text-zinc-800 dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-1">
        <div className="rounded-2xl px-6 pb-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <img className="mx-auto h-16 w-16" src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg" alt="" />
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100">
                Certifications
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:text-left lg:block lg:text-center">
                  <div className="">
                    <div className="flow-root">
                      <img className="mx-auto h-16 w-16 text-zinc-800 dark:text-zinc-100" src={incentive.imageSrc} alt="" />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm text-center font-medium text-zinc-800 dark:text-zinc-300">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-center text-zinc-800 dark:text-zinc-500">{incentive.description}</p>
                    <p className="mt-2 text-sm text-center text-zinc-800 dark:text-zinc-500">{incentive.credentials}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
