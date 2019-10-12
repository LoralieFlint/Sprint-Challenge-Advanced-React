import DarkMode from "./DarkMode"
import React from 'react';
import { render } from '@testing-library/react';


describe('DarkMode component', () => {
    it('renders without crashing', () => {
        render(<DarkMode />)
    })
    
    it('shows button text', () => {
        const Text = render(<DarkMode/>);
        Text.getByText(/ON - OFF/ )
    })
})