import React, { lazy ,useState,useEffect} from 'react';
import './Aboutus.css';
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
import MemberImg from '/member.jpg';
import LazyLoad from 'react-lazyload';
import { GetAboutContent, GetAboutTeam } from '../../Routes/Routes';


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;   
};

const Aboutus = () => {
  const windowWidth = useWindowWidth();
  const [AboutTeamTitle,setAboutTeamTitle]=useState('')

  const [AboutTeam,setAboutTeam]=useState([])
  const [AboutContent,setAboutContent]=useState([])

  const isMobile = windowWidth <= 768;
  const TeamInfo = [
    {
      title: "Our Team",
      members: [
        {
          memberImg: MemberImg,
          memberName: "John Doe",
          memberDesignation: "Founder & CEO"
        },
        {
          memberImg: MemberImg,
          memberName: "Jane Smith",
          memberDesignation: "Co-Founder & COO"
        },
        {
          memberImg: MemberImg,
          memberName: "Emily Johnson",
          memberDesignation: "Chief Marketing Officer"
        },
        {
          memberImg: MemberImg,
          memberName: "Michael Brown",
          memberDesignation: "Chief Technology Officer"
        },
        {
          memberImg: MemberImg,
          memberName: "Jessica Davis",
          memberDesignation: "Chief Financial Officer"
        },
        {
          memberImg: MemberImg,
          memberName: "David Wilson",
          memberDesignation: "Chief Operations Officer"
        },
        {
          memberImg: MemberImg,
          memberName: "Laura Martinez",
          memberDesignation: "Chief Customer Officer"
        },
        {
          memberImg: MemberImg,
          memberName: "James Anderson",
          memberDesignation: "Chief Innovation Officer"
        }
      ]
    }
  ];

  const AboutusContents = [
    {
      title: "About Us",
      heading: "Welcome to Nextdoor",
      contentImg: MemberImg,
      contenttext: 
        "At Nextdoor, we transform the PG rental experience, offering a home away from home. Founded on community, convenience, and care, we ensure a seamless and affordable living solution. Our mission is to create a welcoming environment with modern amenities, making every resident feel valued and connected."
    },
    {
      title: "Our Mission",
      heading: "Committed to Your Comfort",
      contentImg: MemberImg,
      contenttext: 
        "We strive to provide top-notch PG rentals that cater to diverse needs. With a focus on cleanliness, safety, and exceptional service, we aim to make every stay comfortable and memorable. Our community spirit and personalized services make Nextdoor your preferred choice for quality living."
    },
    {
      title: "Our Vision",
      heading: "Innovating the Future of PG Rentals",
      contentImg: MemberImg,
      contenttext: 
        "Nextdoor aspires to be a trusted name in the PG rental industry, known for quality and innovation. We are committed to enhancing our services through technology and feedback, creating vibrant communities across cities and making quality accommodations accessible to all."
    },
    {
      title: "Our Values",
      heading: "Built on Trust and Respect",
      contentImg: MemberImg,
      contenttext: 
        "Integrity, transparency, and respect are the core of our values. We prioritize safety and well-being, ensuring secure and well-maintained properties. Our commitment to excellence drives us to deliver outstanding service and exceed our residents' expectations continuously."
    },
  ];



 


  useEffect(() => {
    Promise.all([GetAboutContent(),GetAboutTeam()])
      .then(([ContentDataRes,TeamDataRes]) => {
       setAboutContent(ContentDataRes.data || [])
       setAboutTeam(TeamDataRes.data || [])
       console.log(TeamDataRes)
      //  setAboutTeamTitle(TeamDataRes.data[0].title || "")

      setAboutTeamTitle(TeamDataRes.data?.[0]?.title || "");

      })
      .catch(err => {
        console.error("Error getting data", err);
      })
      
  
  }, []);


  useEffect(() => {
    if (AboutTeam.length > 0) {
      setAboutTeamTitle(AboutTeam[0].title);
      console.log(AboutTeamTitle)

    }
  }, []);


  return (
    <div className='aboutus_main'>
      <Header />
      {/* Main Content */}
      <div className="container">
        {AboutContent.map((ac, index) => (
          <div className="about-content" key={index}>
            <h3>{ac?.title}</h3>
            <div className="row content_section">
              {isMobile ||index % 2 === 0 ? (
                <>
                  <div className="col">
                    <div className="content_text_about">
                      <h6>{ac?.heading}</h6>
                      <p>{ac?.content_text}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="content_image_about">
                    <LazyLoad offset={200} height={3840}>
                      <img src={ac?.content_image} alt={ac?.title} />
                      </LazyLoad>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col">
                    <div className="content_image_about">
                    <LazyLoad offset={200} height={3840}>
                      <img src={ac?.content_image} alt={ac?.title} />
                      </LazyLoad>
                    </div>
                  </div>
                  <div className="col">
                    <div className="content_text_about">
                      <h6>{ac?.heading}</h6>
                      <p>{ac?.content_text}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

<div className="about_team_section">
<div className="team_title">
              <h3>{AboutTeamTitle}</h3>
            </div>

            <div className="all_team_Members">

            {AboutTeam.map((ti, index) => (
          <div className="about_team" key={index}>
           
            <div className="team">
                <div className="single_member" key={index}>
                            <LazyLoad offset={200} height={155}>
                  <img src={ti?.member_image} alt={ti?.member_name} />
                  </LazyLoad>
                  <h4>{ti?.member_name}</h4>
                  <p>{ti?.member_designation}</p>
                
            </div>
            </div>
           
          </div>
        ))}
            </div>

</div>
       
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
