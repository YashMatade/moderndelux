import React ,{lazy} from 'react'
import './FAQS.css'
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

const FAQS = () => {
  const faq=[
    {
      question:"Lorem Ipsum",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      question:"Lorem Ipsum",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },{
      question:"Lorem Ipsum",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },{
      question:"Lorem Ipsum",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },{
      question:"Lorem Ipsum",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },{
      question:"Lorem Ipsum",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ]
  return (
    <div>
        <Header/>

<main>
  <section className="frequently-asked-question">
    <h3>FAQs</h3>
    <div className="container">
    <div className="faqs_box">

{faq.map((f,index)=>(
  <div className="single_faq" key={index}>
    <h6>{f.question}</h6>
    <p>{f.answer}</p>
  </div>
))}
</div>
    </div>
   
  </section>
</main>
        <Footer/>
    </div>
  )
}

export default FAQS