// components/Contact/useContactForm.js
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { schema } from '../libs/validationSchema'

export const useContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [globalError, setGlobalError] = useState('')

  const toastStyle = {
    style: {
      border: '1px solid #713200',
      padding: '12px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  }

  const isFormEmpty =
    !form.name.trim() && !form.email.trim() && !form.message.trim()

  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

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
      err.inner.forEach((e) => (newErrors[e.path] = e.message))
      setErrors(newErrors)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isFormEmpty) {
      setGlobalError('Todos los campos son obligatorios.')
      return
    }

    const isValid = await validateForm()
    if (!isValid) {
      setGlobalError('Ingresar todos los campos correctamente.')
      return
    }

    toast.loading('Enviando mensaje...', toastStyle)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.dismiss()
          toast.success('¡Mensaje enviado correctamente!', toastStyle)
          setForm({ name: '', email: '', message: '' })
          setTouched({})
          setErrors({})
          setGlobalError('')
        },
        () => {
          toast.dismiss()
          toast.error('Hubo un error al enviar el mensaje.', toastStyle)
        }
      )
  }

  return {
    form,
    errors,
    touched,
    globalError,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}
