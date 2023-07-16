import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { snackEmoji } from './helpers/snackEmoji'


test('A aplicação possui essa string', () => {
  render(<App />)
  const linkElement = screen.getByText(/Cadu/i)
  expect(linkElement).toBeInTheDocument()
})

test('A aplicação possui essa string no alt', async () => {
  render(<App />)
  const linkElement = await screen.findAllByAltText(/logo/i)
  expect(linkElement.length).toBeGreaterThan(0)
})

test('A função snackEmoji retorna o emoji correto para cada nome de lanche', () => {
  expect(snackEmoji('hambúrguer')).toBe('🍔');
  expect(snackEmoji('pizza')).toBe('🍕');
  expect(snackEmoji('bebida')).toBe('🥤');
  expect(snackEmoji('sorvete')).toBe('🍨');
  expect(snackEmoji('batata')).toBe('🍟');
  expect(snackEmoji('desconhecido')).toBe('🤔');
})









