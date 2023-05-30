import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'

const getRequest = useFetch("GET")
function Actvete() {
    const {token} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        console.log('123');
        getRequest(`/user/activate-account/${token}`).then(res => {
            if(res.ok) {
                navigate('/login')
            }
            // dispatch(setDoctors(res?.doctors))
          }).catch(err => {
            console.log(err);
          })
        console.log(token);
    },[])
  return (
    <div>
      <div class="tenor-gif-embed" data-postid="17258660" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/loading-slow-net-turtle-net-gif-17258660">Loading Slow Net Sticker</a>from <a href="https://tenor.com/search/loading-stickers">Loading Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </div>
  )
}

export default Actvete
