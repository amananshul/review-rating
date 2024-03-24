import React from 'react'

const ReviewsDetails = ({data}) => {
  return (
    <div className='secondCont'>
    <div className='nameReviewContent'>
        <div className="prof-image">
            <img className='profCard' src={'https://xsgames.co/randomusers/assets/avatars/female/22.jpg'} height={50} width={50} />
        </div>
        <div className='reviewTitleBody'>
            <div className="company-name">{data?.name}</div>
            <div className="created-on">{new Date(data?.createdAt).toLocaleString()}</div>
            <p className="bodyTextReview">{data?.description}</p>
            <div className='ratingFilled'>
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={`star ${index < Math.round(data?.rating) ? 'filled' : 'notFilled'}`}>★</span>
                ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default ReviewsDetails
