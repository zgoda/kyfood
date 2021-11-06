import { h } from 'preact';
import { render } from '@testing-library/preact';

import { Footer } from '../public/components/footer';

describe('Footer', () => {
  test('should behave as container', () => {
    const elementClassName = 'container';
    const { container } = render(<Footer />);
    expect(container.firstChild).toHaveClass(elementClassName);
  });
});
