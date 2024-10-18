import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DocsRootlayout({ children }) {
  return (
    <>
      {children}
      <div>Docs layout render footer</div>
    </>
  );
}
