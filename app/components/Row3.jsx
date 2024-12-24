import React,{ useState } from 'react';

export default function Row3() {
  //静态数据
  const staticData = [
    { id: 1, content: 'Slide 1 Content' },
    { id: 2, content: 'Slide 2 C2t1nt' },
    { id: 3, content: 'Slide 3 C2t3nt' },
    { id: 4, content: 'Slide 4 C24nt' },
    { id: 5, content: 'Slide 5 C2t5nt' },
    { id: 6, content: 'Slide 6 C2t6nt' },
    { id: 7, content: 'Product 7' },
    { id: 8, content: 'Product 8' },
    { id: 9, content: 'Product 9' },
    { id: 10, content: 'Product 10' },
  ];
  const [currentIndex,setCurrentIndex] = useState(0);

const nextSlide=()=>{
  setCurrentIndex((prevIndex) => (prevIndex + 1) % staticData.length);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex)=>
  prevIndex === 0 ? staticData.length - 1 : prevIndex - 1
);
};

   return (
    // <div style={{ textAlign: 'center', margin: '20px' }}>
    //   <h2>Carousel Component</h2>
    //   <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
    //     <h3>{staticData[currentIndex].content}</h3>
    //   </div>
    //   <div style={{ marginTop: '10px' }}>
    //     <button onClick={prevSlide} style={{ marginRight: '10px' }}>
    //       Previous
    //     </button>
    //     <button onClick={nextSlide}>Next</button>
    //   </div>
    // </div>
    <div style={{ textAlign:'center',margin:'20px'}}>
      <h2>Carousel Component</h2>
      <div 
        style={{ 
          display:'flex',
          overflow:'hidden',
          width:'80%',
          margin:'0 auto',
          border:'1px solid #ccc',
          borderRadius:'5px',
        }}
      >
        <div 
          style={{ 
            display:'flex',
            transform:`translateX(-${currentIndex *(100/4)}%)`,
            transition:'transform 0.5s ease-in-out',
            width:`${(staticData.length/4)*100}%`,
          }}
        >
          {staticData.map((item) => (
            <div
              key={item.id}
              style={{
                flex: '0 0 25%', // 每个产品占 25%
                boxSizing: 'border-box',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                {item.content}
              </div>
            </div>
          ))}

        </div>

      </div>
      <div style={{ marginTop:'10px'  }}>
        <button onClick={prevSlide} style={{ marginRight:'10px' }}>
          previous
        </button>
        <button onClick={nextSlide}> Next</button>
      </div>
    </div>
  );
}