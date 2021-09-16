import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import App from '../App';

/*test('Home work as expected', async() => {

  const {container} = render(<App/>)
  const gifLink = await findByLabelText(
    () => container.querySelector('.Gif-link')
  )
  expect(gifLink).toBeVisible()
})*/

test('search from could be used', async ()=>{
  render(<App/>)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, {target: { value: 'Anime'}})
  fireEvent.click(button)

  const title = await screen.findByText('Anime')
  expect(title).toBeVisible()
})