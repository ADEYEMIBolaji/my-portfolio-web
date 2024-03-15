'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from './Button'
import { Toaster, toast } from 'sonner'


const EmailJS = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function MailIcon(props) {
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
          d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
          className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
    )
  }

  const handleSubmit = (
    e) => {
    const formValues = {
      name: name,
      email: email,
      message: message,
    }
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        "service_3s44ptq",
        "template_5hz8z9n",
        formValues,
        {
          publicKey: "V-TIu3xXj3gCnONXe",
        },
      )
      .then(
        (response) => {
          toast.success('Message was sent successfully!')
        },
        (err) => {
          toast.error('Message failed to send!')
        },
      )
      .finally(() => {
        setLoading(false)
        setName('')
        setEmail('')
        setMessage('')
      })
  }

  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <Toaster richColors position="bottom-right" />
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Send me a message</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        You can reach out to me via my email - <b>mudadesmond@gmail.com</b>{' '}
        at any time.
      </p>
      <div className="mt-6 flex">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Name"
          aria-label="name"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
      </div>
      <div className="mt-6 flex">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
      </div>
      <div className="mt-6 flex">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Message"
          aria-label="Message"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
      </div>

      <Button
        onClick={(e) => handleSubmit(e)}
        className="my-4 w-full flex-none"
      >
        {loading ? 'Loading....' : 'Submit'}
      </Button>
    </form>
  )
}

export default EmailJS
