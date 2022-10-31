import React from 'react'
import { MdLocationOn } from 'react-icons/md'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.item.imageUrl} alt={props.item.location} className='card-img'/>
        <section className='card-details' >
            <MdLocationOn className='icon-location'/>
            <span className='card-location'> {props.item.location} </span>
            <a href={props.item.googleMapsUrl} target="_blank" className='card-maps' >View on Google Maps </a>
            <h1 className='card-place'>{props.item.title}</h1>
            <h5 className='card-dates'>{props.item.startDate} - {props.item.endDate}</h5>
            <p className='card-desc'>
                {props.item.description}
            </p>
        </section>
    </div>
  )
}

export default Card