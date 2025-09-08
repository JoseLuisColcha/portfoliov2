import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import { PrimaryButton } from './PrimaryButton'
import { SocialNetworks } from './SocialNetworks'
import { TitleSection } from './TitleSection'

// 📌 Esquema de validaciones con Yup
const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio.'),
  email: yup
    .string()
    .required('El correo es obligatorio.')
    .email('El correo no es válido.'),
  message: yup
    .string()
    .required('El mensaje es obligatorio.')
    .min(10, 'El mensaje debe tener al menos 10 caracteres.'),
})

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [globalError, setGlobalError] = useState('')

  const isFormEmpty =
    !form.name.trim() && !form.email.trim() && !form.message.trim()

  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })

    if (touched[name]) {
      try {
        await schema.validateAt(name, { ...form, [name]: value })
        setErrors({ ...errors, [name]: '' })
      } catch (err) {
        setErrors({ ...errors, [name]: err.message })
      }
    }
    setGlobalError('')
  }

  const handleBlur = async (e) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })

    try {
      await schema.validateAt(name, form)
      setErrors({ ...errors, [name]: '' })
    } catch (err) {
      setErrors({ ...errors, [name]: err.message })
    }
  }

  const validateForm = async () => {
    try {
      await schema.validate(form, { abortEarly: false })
      setErrors({})
      return true
    } catch (err) {
      const newErrors = {}
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message
      })
      setErrors(newErrors)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isFormEmpty) {
      setGlobalError('⚠️ Todos los campos están vacíos.')
      toast.error('⚠️ Todos los campos están vacíos.')
      return
    }

    const isValid = await validateForm()
    if (!isValid) {
      setGlobalError('⚠️ Ingresar todos los campos correctamente.')
      toast.error('⚠️ Ingresar todos los campos correctamente.')
      return
    }

    toast.loading('📨 Enviando mensaje...')

    emailjs
      .send(
        'TU_SERVICE_ID', // 👈 reemplaza
        'TU_TEMPLATE_ID', // 👈 reemplaza
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'TU_PUBLIC_KEY' // 👈 reemplaza
      )
      .then(
        () => {
          toast.dismiss()
          toast.success('✅ ¡Mensaje enviado correctamente!')
          setForm({ name: '', email: '', message: '' })
          setTouched({})
          setErrors({})
          setGlobalError('')
        },
        () => {
          toast.dismiss()
          toast.error('❌ Hubo un error al enviar el mensaje.')
        }
      )
  }

  // Botón deshabilitado si el formulario está vacío o con errores
  const isButtonDisabled =
    isFormEmpty || Object.values(errors).some((err) => err && err.length > 0)

  return (
    <div id="contacto" className="w-full col-center mb-[570px] md:mb-[480px]">
      <TitleSection title="CONTACTO" subtitle="HABLEMOS" />
      <SocialNetworks />

      <div className="bg-brand/10 font-inter border border-brand/15 backdrop-blur-sm px-8 py-12 w-[75vw] sm:w-[450px] mt-4">
        <h1 className="text-2xl text-brand">Tu mensaje aquí!</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          {/* Nombre */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="NOMBRE"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input-style ${
                errors.name && touched.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input-style ${
                errors.email && touched.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <textarea
              name="message"
              placeholder="MENSAJE"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input-style pb-14 ${
                errors.message && touched.message ? 'border-red-500' : ''
              }`}
            />
            {errors.message && touched.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Mensaje global */}
          {globalError && (
            <p className="text-red-600 text-sm font-medium mt-2">
              {globalError}
            </p>
          )}

          <PrimaryButton
            className={`py-[14px] ${
              isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            valuesPolygon="0 0, 95% 0, 100% 35%, 100% 100%, 5% 100%, 0% 65%"
            title="ENVIAR MENSAJE"
            disabled={isButtonDisabled}
          />
        </form>
      </div>
    </div>
  )
}
