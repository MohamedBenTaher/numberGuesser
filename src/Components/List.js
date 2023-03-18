import React ,{ useState }  from 'react'

const List = ({list}) => {
    const [listData,setListData]=useState(list)
    const [searchQuery,setSearchQuery]=useState('')
    let renderdList=listData.map((el)=>{
        return (<li key={el.id} >{el.name}</li> )
    })
    const handleChange=(e)=>{
        setSearchQuery(e.target.value);
        setListData(list.filter((el)=>el.name.includes(e.target.value)))
        console.log('list after type',listData)
    }
  return (
    <div>
        <input onChange={(e)=>handleChange(e)} />
        <ul>

            {list && searchQuery!=undefined ?
            listData.length>0 ? renderdList : <p>no matching items</p> :
            <p>the list unavailable</p>}
        </ul>
    </div>
  )
}

export default List