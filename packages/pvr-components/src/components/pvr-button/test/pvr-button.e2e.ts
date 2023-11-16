import { newE2EPage } from '@stencil/core/testing';

describe('pvr-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pvr-button></pvr-button>');

    const element = await page.find('pvr-button');
    expect(element).toHaveClass('hydrated');
  });
});
