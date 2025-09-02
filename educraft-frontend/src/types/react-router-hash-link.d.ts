declare module 'react-router-hash-link' {
  import * as React from 'react';
  import { LinkProps } from 'react-router-dom';

  export interface HashLinkProps extends LinkProps {
    smooth?: boolean;
    scroll?: (el: Element) => void;
  }

  export const HashLink: React.FC<HashLinkProps>;
  export default HashLink;
}
