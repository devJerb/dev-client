import Bits from "../assets/videos/bits.mp4";

const Detail = () => {
  return (
    <video autoPlay muted loop>
      <source src={Bits} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Detail;
