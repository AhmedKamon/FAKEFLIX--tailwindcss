
const Header =() => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10 " >
        <img src='https://i.ibb.co/5KH9K3G/netflix.png' width={100} height={100} alt="" className=" cursor-pointer object-contain " />
        <ul className=" hidden space-x-4 md:flex " >
          <li className="headerLink" >Home</li>
          <li className="headerLink" >TV Shows</li>
          <li className="headerLink" >Movies</li>
          <li className="headerLink" >New & Populer</li>
          <li className="headerLink" >My List</li>
        </ul>
      </div>
      <div>
          
      </div>
    </header>
  )
}

export default Header