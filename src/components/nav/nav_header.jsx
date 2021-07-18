import React, { Component } from 'react';
import styles from "./nav_header.module.css"

const NavHeader = (props) => {

  const searchRef = React.createRef()

  const onFetch = () => {
    props.onGrid()
    props.fetch(searchRef.current.value)
    searchRef.current.value = ""
  }

  const onKeyPress = (event) => {
    if(event.key === "Enter"){
      onFetch()
    }
  }

  const onSearch = () => {
    onFetch()
  }

return(
  <div className={styles.header}>
    <div className={styles.logo}>
      <img src= "./logo.png" alt="" className={styles.img} />
      <h1 className={styles.title}>Youtube</h1>
    </div>
    <input ref = {searchRef} type="text" className={styles.input} placeholder = "search..." onKeyPress={onKeyPress}/>
    <button className={styles.button} onClick = {onSearch}>
      <img src= "./search.png" className={styles.buttonImg}/>
    </button>
</div>
)}

export default NavHeader;