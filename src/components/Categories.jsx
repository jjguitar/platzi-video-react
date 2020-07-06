import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ children }) => (
  <div className="categories">
    <h3 className="title--main1">Mi lista</h3>
    {children}
  </div>
);

export default Categories;