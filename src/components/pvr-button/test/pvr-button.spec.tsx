import { newSpecPage } from '@stencil/core/testing';
import { PvrButton } from '../pvr-button';

describe('pvr-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PvrButton],
      html: `<pvr-button></pvr-button>`,
    });
    expect(page.root).toEqualHtml(`
      <pvr-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pvr-button>
    `);
  });
});
