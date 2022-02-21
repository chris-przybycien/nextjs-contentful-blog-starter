import GlobalStyles from "./main.styles.js";
import Header from "@components/Header";
import Footer from "@components/Footer";
import PreviewBanner from "@components/PreviewBanner";

export default function MainLayout(props) {
  const { preview, logo } = props;
  return (
    <>
      {preview && <PreviewBanner />}
      <Header logo={logo} />
      <main>{props.children}</main>
      <Footer />

      <style jsx global>
        {GlobalStyles}
      </style>
    </>
  );
}
