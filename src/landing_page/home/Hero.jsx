export default function Hero() {
  let heroContainer  = {display:"flex" , flexDirection : "column" , alignItems:"center" , justifyContent : "center"}
  return (
    <div className='container p-5 mb-5'>
      <div className='row'>
        <img src='assets/homeHero.png' alt='HeroImage'></img>
        <div style={heroContainer}>
        <h1>Invest in Everything</h1>
        <p>Online platform to invest in stocks , derivatives , mutual funds and more.</p>
        <button type="button" class="btn btn-primary px-5 py-2">Signup Now</button>
        </div>
      </div>
    </div>
  )
}
