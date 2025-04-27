import React from 'react'
import { SmartSearchBar } from '../SmartSerachBar/SmartSearchBar'
import { SmartMovieSuggestions } from '../SmartMovieSuggestions/SmartMovieSuggestions'
import cover from '../../assets/cover.jpg'

export const SmartSearch = () => {
  return (
    <div>
        <div>
        <img className="fixed -z-10" src={cover} alt="cover-photo" />
      </div>
        <SmartSearchBar/>
        <SmartMovieSuggestions/>
    </div>
  )
}

