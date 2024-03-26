import './Card.css'

const Card = () => {
  return (
    <div className='MainDiv'>
      <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoXh7hxyKYPzVk5dQUvuj6p4qD2NwE-_2OGpggJmh-j2woM-rRLTRMgCuGoH3rWrxSws&usqp=CAU" alt="" />
        <div>
            <h2>Rushikesh Potale</h2>
            <h3>React Developer</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti? Quasi natus quis voluptatibus animi at consequatur corrupti accusantium officia qui ea praesentium molestiae, reiciendis similique hic, nesciunt expedita delectus?</p>
            <a href="">Follow Account</a>
        </div>
      </div>
    </div>
  )
}

export default Card
