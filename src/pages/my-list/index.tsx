import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout/layout'

const MyList: NextPage = () => {
  const { list } = useSelector((store: any) => store.myListPage)
  useEffect(()=> {
console.log(list)
  },[])
  return (
    <Layout activePage='My List'>
      <div> he thete</div>
    </Layout>
  )
}

export default MyList