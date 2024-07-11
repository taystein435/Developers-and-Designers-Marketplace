import Chat from '@/components/shared/Chat'
import Details from '@/components/shared/Details'
import Gigs from '@/components/shared/Gigs'
import ReviewList from '@/components/shared/ReviewList'
import React from 'react'

const Profile = () => {
  return (
    <div><Details/>
    <Gigs/>
    <Chat/>
    <ReviewList/>
    </div>
  )
}

export default Profile