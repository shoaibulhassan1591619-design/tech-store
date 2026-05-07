export default function App() {
  const products = [
    {
      name: 'Gaming Mobile Cooler',
      price: 'Rs 2,499',
      image:
        'https://i.ibb.co/jNYX5q1/Untitleddesign-b5316c67-60b3-4cbb-bbea-7cbc4fa8b799.webp',
    },
    {
      name: 'Wireless Headphones',
      price: 'Rs 4,999',
      image:
        'https://i.ibb.co/0hTQ6Vf/NIA-Ji-ANC-Headphone.webp',
    },
    {
      name: 'Audionic Airbuds',
      price: 'Rs 3,299',
      image:
        'https://i.ibb.co/0q3v2xv/ARCHVIBECOOL1.webp',
    },
  ];

  return (
    <div style={{background:'#000', color:'#fff', minHeight:'100vh', fontFamily:'Arial', padding:'30px'}}>
      <h1 style={{fontSize:'48px'}}>TECH STORE</h1>
      <p>Professional Online Tech Gadgets Store</p>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'20px', marginTop:'40px'}}>
        {products.map((product,index)=>(
          <div key={index} style={{background:'#111', borderRadius:'20px', padding:'20px'}}>
            <img src={product.image} alt={product.name} style={{width:'100%', borderRadius:'15px', background:'#fff'}} />
            <h2>{product.name}</h2>
            <p style={{color:'#00ff99'}}>{product.price}</p>
            <button style={{padding:'12px 20px', border:'none', borderRadius:'10px', background:'#2563eb', color:'#fff'}}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
