import Image from "next/image";
import loader from "@/assets/images/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} height={300} width={300} alt="Loading..." loading="lazy" />
    </div>
  );
};

export default LoadingPage;
