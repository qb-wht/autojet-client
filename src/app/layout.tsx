import { Roboto } from 'next/font/google';
import { Footer } from '@/3_widgets/footer';
import { Header } from '@/3_widgets/header';
import { cn } from '@/0_shared/libs/classNames';
import '@/0_shared/styles/globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={cn(roboto.className, 'column').build()}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
