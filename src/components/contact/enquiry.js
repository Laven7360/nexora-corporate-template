import { services } from '../../data/navigation.js'

export const serviceOptions = [...services, 'Not sure yet']

export function validateEnquiry(values) {
  const errors = {}
  if (!values.name?.trim()) errors.name = 'Please enter your name.'
  if (!values.email?.trim()) errors.email = 'Please enter your work email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!serviceOptions.includes(values.service)) errors.service = 'Please select a service or “Not sure yet”.'
  if (!values.requirements?.trim()) errors.requirements = 'Please tell us about your requirements.'
  return errors
}
