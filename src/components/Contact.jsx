import { SocialNetworks } from './SocialNetworks'
import { TitleSection } from './TitleSection'
import { SendButton } from './SendButton'
import { FormInput } from './FormInput'
import { FormTextarea } from './FormTextArea'
import { useContactForm } from '../hooks/useContactForm'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

export const Contact = () => {
  const {
    form,
    errors,
    touched,
    globalError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm()

  const formRef = useRef()

  useGSAP(() => {
    gsap.from(formRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.3,
      filter: 'blur(10px)',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top bottom',
      },
    })
  }, [])

  return (
    <section
      id="contacto"
      className="w-full col-center mb-[680px] md:mb-[480px]"
    >
      <TitleSection title="CONTACTO" subtitle="HABLEMOS" />
      <SocialNetworks />

      <div
        ref={formRef}
        className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm px-8 py-12 w-[75vw] sm:w-[450px] mt-4"
      >
        <h1 className="text-2xl text-brand">Tu mensaje aquí!</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          <FormInput
            type="text"
            name="name"
            placeholder="NOMBRE"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />

          <FormInput
            type="email"
            name="email"
            placeholder="EMAIL"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />

          <FormTextarea
            name="message"
            placeholder="MENSAJE"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            touched={touched.message}
          />

          <SendButton />

          {globalError && (
            <p className="font-inter text-red-600 text-sm font-medium mt-2">
              {globalError}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
