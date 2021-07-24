import Head from "next/head";
import Image from "next/image";
import ScrollableSection from "../components/ScrollableSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kristoffer Kirkerud</h1>

        <p className={styles.description}>Fullstack developer</p>

        <div className={styles.gridFull}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          magna id tellus efficitur placerat non vitae nulla. Cras accumsan,
          nibh nec dignissim lobortis, felis quam volutpat diam, id cursus magna
          ante vitae mauris. Nullam suscipit aliquet lobortis. Maecenas lobortis
          turpis lorem, id sodales nisi dictum eu. Nunc condimentum dolor sem,
          ut mattis ex facilisis eget. Vestibulum molestie massa arcu, vitae
          varius lectus mollis vel. Sed augue lacus, suscipit aliquet
          sollicitudin eu, rutrum varius lacus. Donec rhoncus sapien pulvinar mi
          egestas tempor. Nam rutrum dolor eu quam posuere, quis ultricies massa
          rutrum. Morbi vel faucibus orci. Donec placerat, sem nec sodales
          rutrum, enim mi convallis turpis, vel porta sapien quam sed leo. Duis
          elementum eget lacus lacinia eleifend. Nullam ac elit tortor. Integer
          feugiat nunc dictum enim laoreet, id convallis lectus commodo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae;
        </div>
        <div className={styles.gridFull}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          magna id tellus efficitur placerat non vitae nulla. Cras accumsan,
          nibh nec dignissim lobortis, felis quam volutpat diam, id cursus magna
          ante vitae mauris. Nullam suscipit aliquet lobortis. Maecenas lobortis
          turpis lorem, id sodales nisi dictum eu. Nunc condimentum dolor sem,
          ut mattis ex facilisis eget. Vestibulum molestie massa arcu, vitae
          varius lectus mollis vel. Sed augue lacus, suscipit aliquet
          sollicitudin eu, rutrum varius lacus. Donec rhoncus sapien pulvinar mi
          egestas tempor. Nam rutrum dolor eu quam posuere, quis ultricies massa
          rutrum. Morbi vel faucibus orci. Donec placerat, sem nec sodales
          rutrum, enim mi convallis turpis, vel porta sapien quam sed leo. Duis
          elementum eget lacus lacinia eleifend. Nullam ac elit tortor. Integer
          feugiat nunc dictum enim laoreet, id convallis lectus commodo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae;
        </div>
        <div className={styles.gridFull}>
          <ScrollableSection>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
              magna id tellus efficitur placerat non vitae nulla. Cras accumsan,
              nibh nec dignissim lobortis, felis quam volutpat diam, id cursus
              magna ante vitae mauris. Nullam suscipit aliquet lobortis.
              Maecenas lobortis turpis lorem, id sodales nisi dictum eu. Nunc
              condimentum dolor sem, ut mattis ex facilisis eget. Vestibulum
              molestie massa arcu, vitae varius lectus mollis vel. Sed augue
              lacus, suscipit aliquet sollicitudin eu, rutrum varius lacus.
              Donec rhoncus sapien pulvinar mi egestas tempor. Nam rutrum dolor
              eu quam posuere, quis ultricies massa rutrum. Morbi vel faucibus
              orci. Donec placerat, sem nec sodales rutrum, enim mi convallis
              turpis, vel porta sapien quam sed leo. Duis elementum eget lacus
              lacinia eleifend. Nullam ac elit tortor. Integer feugiat nunc
              dictum enim laoreet, id convallis lectus commodo. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae;
            </p>
          </ScrollableSection>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}