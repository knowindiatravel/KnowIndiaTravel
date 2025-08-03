import { useState } from "react";
import "./DestinationsCarousel.css";

const destinations = [
  {
    name: "Delhi",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1727352314555",
    link: "#",
  },
  {
    name: "Amritsar",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-gurdwara-sri-tarn-taran-sahib-or-gurdwara-sri-darbar-sahib-amritsar-punjab-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Leh",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/7-choglamsar-leh-ladakh-city-hero-new?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Srinagar",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-jammu-&-kashmir-2-attr-hero?qlt=82&ts=1726816668703",
    link: "#",
  },
  {
    name: "Manali",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/hidimba-temple-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Chandigarh",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/hand-monument-chandigarh-chandigarh-city-1-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Gurugram",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/baoli-ghaus-ali-shah-gurugram-haryana-city-3-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Udaipur",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-2-new-attr-hero?qlt=82&ts=1727353101958",
    link: "#",
  },
  {
    name: "Haridwar",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/ganga-ghat-haridwar-uttarakhand-1-attr-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Varanasi",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/dashashwamedh-ghat-varanasi-uttar-pradesh-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Bhubaneswar",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Sri Vijaya Puram",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-netaji-subash-chandra-bose-islands-port-blair-andaman-nicobar-islands-attr-hero?qlt=82&ts=1726816791188",
    link: "#",
  },
  {
    name: "Darjeeling",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/happy-valley-tea-estate-darjeeling-west%20bengal-1-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Patna",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/buddha-smriti-park-patna-bihar-1-new-attr-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Goa",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/vagator-beach-goa-city-1-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Mumbai",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-bandra-worli-sea-ink-mumbai-maharashtra-attr-hero?qlt=82&ts=1727355264966",
    link: "#",
  },
  {
    name: "Diu",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-diu-fort-diu-attr-hero-1?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Dwarka",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-dwarka-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Indore",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/rajwada-indore-mp-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Raipur",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/shaheed%20veer%20narayan%20singh%20international%20cricket%20stadium-raipur-chhattisgarh-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Ranchi",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/jonha-falls-ranchi-jharkhand-new?qlt=82&ts=1727010871094",
    link: "#",
  },
  {
    name: "Hyderabad",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Hampi",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Kavaratti",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/kalpeni-kavaratti-lakshwadeep-3-musthead-hero?qlt=82&ts=1727011703260",
    link: "#",
  },
  {
    name: "Tirupati",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-sri-venkateswara-swamy-vaari-temple-2-attr-hero?qlt=82&ts=1726816589608",
    link: "#",
  },
  {
    name: "Rameswaram",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-rameswaram-temple-rameswaram-tamilnadu-hero-1?qlt=82&ts=1727162277643",
    link: "#",
  },
  {
    name: "Puducherry",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/auroville-puducherry?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Kochi",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/cherai-beach-kochi-kerala-2-attr-hero?qlt=82&ts=1727367654509",
    link: "#",
  },
  {
    name: "Guwahati",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/pobitora-wildlife-sanctuary-guwahati-dispur-assam-4-attr-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Cherrapunjee",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-1-attr-hero?qlt=82&ts=1727354895991",
    link: "#",
  },
  {
    name: "Gangtok",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/lingdum-monastery-gangtok-sikkim-1-attr-hero?qlt=82&ts=1727355148782",
    link: "#",
  },
  {
    name: "Dimapur",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/the-kachari-rajbari-ruins-dimapur-nagaland-2-attr-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Imphal",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-kangla-fort-imphal-manipur-2-city-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Agartala",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/rudrasagar-lake-melaghar-2-attr-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Serchhip",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/tuirihiau-serchhip-mizoram-city-1-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
  {
    name: "Mechuka",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726761927494",
    link: "#",
  },
];

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = destinations[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="image-container">
      <img src={current.image} alt={current.name} />

      {/* Top Titles */}
      <div className="inc-title-overlay">
        <h2>DESTINATIONS</h2>
        <h3>for every bucket list</h3>
      </div>

      {/* Bottom Navigation and Button */}
      <div className="destination-footer">
        <div className="city-nav">
          <button className="prev-btn" onClick={prevSlide}>
            &#8592; {/* ← */}
          </button>
          <h4>{current.name}</h4>
          <button className="next-btn" onClick={nextSlide}>
            &#8594; {/* → */}
          </button>
        </div>
        {/* <a
          href={current.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover more
        </a> */}
      </div>
    </div>
  );
}
