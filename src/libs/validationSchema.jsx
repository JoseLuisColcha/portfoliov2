import * as yup from 'yup'

export const schema = yup.object().shape({
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
