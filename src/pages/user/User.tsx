import { Single } from '../../components/single/Single'
import { singleUser } from '../../data'
import './user.scss'

export const User = () => {

  //fetch data and send to Single Comp
  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}
