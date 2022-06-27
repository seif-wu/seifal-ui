import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from '@seifal/ui';
import { ThemeProvider, useTheme } from '@seifal/system';

const Home: NextPage = () => {
  // const t = useTheme()
  // console.log(t)
  return (
    <>
      <Button>哈哈哈哈</Button>
    </>
    // <ThemeProvider theme={{}}>
    // </ThemeProvider>
  );
};

export default Home;
