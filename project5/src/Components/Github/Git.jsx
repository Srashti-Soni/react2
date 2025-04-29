import React, { useEffect, useState } from 'react'

function Git() {
    const [data, setdata] = useState({}) // should be object, not array

    useEffect(() => {
        fetch("https://github.com/Srashti-Soni")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setdata(data)
            })
    }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
            GitHub Followers: {data.followers}
            <img className='text-center'src={data.avatar_url} alt='git'/>
        </div>
    )
}

export default Git
