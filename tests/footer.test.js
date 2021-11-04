import { h } from 'preact';
import { render } from '@testing-library/preact';

import { Footer } from '../public/components/footer';

test('verifies the footer is a container', () => {
  const containerClassName = 'container';
  const { container } = render(<Footer />);
  expect(container.firstChild).toHaveClass(containerClassName);
});
