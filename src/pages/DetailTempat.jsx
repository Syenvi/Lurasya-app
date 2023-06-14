import React, { useEffect, useState } from 'react'
import {BsShareFill} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlineComment} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'
import {IoBookmarksOutline} from 'react-icons/io5'
import {IoSend} from 'react-icons/io5'
import {GoKebabVertical} from 'react-icons/go'
import gambarwaifu from '../assets/Dummy/Kafe.jpg'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import Komentar from '../component/Komentar'
import {BiEditAlt} from 'react-icons/bi'
import {BsTrash3Fill} from 'react-icons/bs'
import { useStateContext } from '../Context/StateContext'
import likeFalse from '../assets/icons/heart.png'
import likeTrue from '../assets/icons/heart Cl.png'
import instance from '../API/Api'
import Swal from 'sweetalert2'
import mapsIcons from '../assets/map.png'
const DetailTempat = ({setShowDetail,selectedId,showDetail,selectedUsername}) => {

  const [loading, setLoading] = useState(false)
  const {currentLogin} =useStateContext()
  const [modal, setModal] = useState(false)
  const animateModal = () =>(modal?'':'translate-y-full')
  const backgroundModal = ()=> (modal?'flex':'hidden')
  const [bookmark, setBookmark] = useState(false)
  const [like, setLike] = useState(false)
  const changeBookmark = ()=>(bookmark? <BsBookmarksFill className='text-[#1fa0e2]'/> : <IoBookmarksOutline/>)
  const changeLike = ()=>(like?<img src={likeTrue} alt="" />:<img src={likeFalse} alt="" />)
  // const [fixId, setFixId] = useState('')
  // const [fixUsername, setFixUsername] = useState('')

// ---------- STATE UNTUK MENAMPUNG DATA DARI BE ----------
  const [detailCompany, setDetailCompany] = useState([])
  const [komentarCompany, setKomentarCompany] = useState([])
  const [totalLike,setTotalLike]=useState('')
// ---------- STATE UNTUK MENAMPUNG DATA DARI BE END ----------

    const navigate = useNavigate()
    const {username,id} = useParams()
    // console.log(selectedId);
    
    
    // ------MENGAMBIL DATA DARI BACKEND ------
    // ------ PENGEN KAYA IG TAPI BLM FIX ------
// useEffect(()=>{
//   const checkId = () =>{
//   if(selectedId !== ''){
//     setFixId(selectedId)
//     setFixUsername(selectedUsername)
//     getData()
//   }else{
//     setFixId(id)
//     setFixUsername(username)
//     console.log(fixUsername);
//     getData()
//   }
// }
// checkId()
// },[])
// const getData = ()=>{
//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: `/read-detail/${fixUsername}/${fixId}`,
//     headers: { },
//   };
  
//   instance.request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }
    // ------ PENGEN KAYA IG TAPI BLM FIX ------
  const getData =()=>{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `/read-detail/${username}/${id}`,
      headers: {
        'Authorization' : `Bearer ${currentLogin.token}`
      },
    };
    
    instance.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setDetailCompany(response.data.user)
      setKomentarCompany(response.data.comments)
      setLike(JSON.parse(response.data.like_status))
      setBookmark(JSON.parse(response.data.bookmark_status))
      setTotalLike(response.data.total)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)

    })
  }
  useEffect(()=>{
    setLoading(true)
    getData()
  },[])
  

// ------MENGAMBIL DATA DARI BACKEND END ------


//---------- FUNGSI UNTUK MENJALANKAN FEATURE LIKE DAN KOMEN ----------
  const handleLike =(username,id)=>{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `/create-like/${username}/${id}`,
      headers: {'Authorization':`Bearer ${currentLogin.token}`
      },
    };
    
    instance.request(config)
    .then((response) => {
      setLike(!like)
      console.log(JSON.stringify(response.data));
      getData()
    })
    .catch((error) => {
      console.log(error);
    });    
  }
  const handleBookmark =(username,id)=>{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `/create-bookmark/${username}/${id}`,
      headers: {'Authorization':`Bearer ${currentLogin.token}`
      },
    };
    
    instance.request(config)
    .then((response) => {
      setBookmark(!bookmark)
      console.log(JSON.stringify(response.data));
      getData()
    })
  }
//---------- FUNGSI UNTUK MENJALANKAN FEATURE LIKE DAN KOMEN END----------

//---------- FUNGSI UNTUK KOMENTAR ----------
const [tambahKomentar, setTambahKomentar] = useState('')
const handleKomentar = ()=>{
  let data = new FormData();
data.append('comment', tambahKomentar);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `/create-comment/${username}/${id}`,
  headers: { 
    'Authorization': `Bearer ${currentLogin.token}`
  },
  data : data
};

instance.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  getData()
  setTambahKomentar('')
})
.catch((error) => {
  console.log(error);
});

}
//---------- FUNGSI UNTUK MKOMENTAR END ----------

//---------- FUNGSI UNTUK MENGHAPUS -----------
const handleDelete = (id,username)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `/delete-company/${username}/${id}`,
        headers: { 
          'Authorization': `Bearer ${currentLogin.token}`
        }
      };
      
      instance.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
          Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      navigate(`/${currentLogin.username}`)
      })
      .catch((error) => {
        console.log(error);
      });
    
    }
  })
  
}
//---------- FUNGSI UNTUK MENGHAPUS -----------


//{*------ Copy Link ------*}
const handleCopy = async () => {
  try {
    const currentURL = window.location.href;
    await navigator.clipboard.writeText(currentURL);
    console.log('URL berhasil disalin ke clipboard:', currentURL);
    // Tambahkan notifikasi atau tindakan lain untuk memberi tahu pengguna bahwa URL telah disalin
  } catch (error) {
    console.error('Gagal menyalin URL ke clipboard:', error);
    // Tambahkan notifikasi atau tindakan lain untuk menangani kesalahan saat menyalin
  }
};
//{*------ Copy Link End------*}


  return (
    <div className= {`w-full h-screen fixed z-50 flex  justify-center items-center `}>
      {
        loading?<div className="w-full h-screen flex justify-center items-center fixed z-50">
          <div class="spinner"></div>
        </div>:null
      }
     {
      detailCompany.map((item,id)=>{
        return(
          <div className='relative md:fixed z-50 w-full md:w-[85%] h-screen md:h-[80%] rounded-lg  flex justify-center items-center md:flex-row flex-col md:rounded-xl md:overflow-hidden md:shadow-2xl'>
    <div className='w-full h-full flex flex-col md:flex-row z-40 items-center gap-3 bg-white relative md:gap-0'>
      {/* ------ KIRI ------- */}
      <div className="left md:w-[55%] md:relative md:h-full w-full">
        <nav className='w-full flex justify-between p-5 absolute z-50 top-0'>
            <span className='bg-white rounded-[50%] p-2 ' onClick={()=>{
               if (window.innerWidth > 768 ) {
                 navigate('/')
                // setShowDetail(false)
              
              } else if(window.innerWidth < 768 ){
                navigate('/')
              
              }
              }}><IoIosArrowBack/></span>
      {
         currentLogin.username === item.username? <button className=' group relative'>
         <span className='bg-white rounded-[50%] p-2 flex justify-center items-center md:hidden'><GoKebabVertical/></span>
         <ul className='hidden group-focus:flex absolute flex-col gap-2 p-3  right-0 top-10 bg-white  rounded-md text-sm w-[150px]'>         
           <li className='flex items-center gap-2 ' onClick={()=>handleDelete(item.id,item.username)}>
             <BsTrash3Fill/>
             <p>Hapus</p>
           </li>
         </ul>
       </button>:null
      }
           
        </nav>
      <div className="img-container w-full  overflow-hidden rounded-b-2xl shadow-lg max-h-[75vh] md:max-h-full md:h-full md:rounded-none relative z-10">
        <img src={item.images} className='w-full h-full object-cover' />
        <Link to={`https://www.google.com/maps/search/?api=1&query=${item.lat},${item.long}`} target='_blank' className="maps flex justify-center items-center   w-16 h-16 absolute rounded-xl bg-white right-4 bottom-4"><img src={mapsIcons} alt="" className='w-[70%] h-[70%]' /></Link>
      </div>
      </div>
      {/* ------ KANAN ------- */}
      <div className='w-[90%] flex-flex-col gap-2 md:w-[45%] md:h-full '>
       <div className="flex justify-between w-full items-center md:flex-col md:items-start md:h-full">
          <div className="title  md:h-[20%] md:p-3 md:flex w-full md:justify-between md:bg-slate-100  items-center">
        <div className="judul w-full ">
          {/* ------ PEMILIK ------ */}
          <button className="author flex items-center gap-3" onClick={()=>navigate(`/${item.username}`)}>
            <span className='w-10 h-10 rounded-full overflow-hidden'>
              <img src={item.profile} className='w-full h-full object-cover' alt="" />
            </span>
          <h1 className='text-base font-medium'>{item.username}</h1> 
          </button>
          {/* ------ PEMILIK ------ */}

        <h2 className='font-medium text-sm'>{item.CompanyName}</h2>
          <p className='text-xs'>{`${item.CompanyType} - ${item.CompanyDistrict},${item.CompanyRegency},${item.CompanyProvince}`}</p>
        </div>

        {
          currentLogin.username === item.username? <button className=' group relative hidden md:flex'>
          <span className='bg-white rounded-[50%] w-10 h-10 flex justify-center items-center'><GoKebabVertical/></span>
          <ul className='hidden group-focus:flex absolute flex-col gap-2 p-3  right-0 top-10 bg-white  rounded-md text-sm w-[150px]'>
            <li className='flex items-center gap-2 ' onClick={()=>handleDelete(item.id,item.username)}>
              <BsTrash3Fill/>
              <p>Hapus</p>
            </li>
          </ul>
        </button> :null
        }
         
          </div>
          {/* ------ Komentar Desktop */}
          <div className="hidden md:flex min-h-[60%] max-h-[65%] border w-full flex-col overflow-y-scroll">
          {  
                komentarCompany.map((komen,id)=>(
                  <Komentar key={id} nama={komen.username} komentar={komen.comment} profile={komen.profile}/>
                ))
              }
          </div>
          {/* ----- Komentar Desktop */}
          <div className='flex w-full items-center gap-2 md:flex-col md:h-[20%] md:items-start md:p-2'>
          <div className="icon flex gap-2 w-full justify-end items-center">
            <p className='text-xs font-semibold text-[#1fa0e2]'>{totalLike}</p>
          <span className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' onClick={()=>handleLike(item.username,item.id)}>{changeLike()}</span>
          <span  className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%]'onClick={()=>handleBookmark(item.username,item.id)} >{changeBookmark()}</span>
          <span onClick={()=>{
            if (window.innerWidth < 768){
            setModal(true)}}} className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' ><AiOutlineComment/></span>
          <span className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' ><BsShareFill/></span>
          </div>
              <div className="add-comment w-full  h-10 md:flex  items-center hidden justify-between">
                <div className="profilPhoto w-10 h-10 overflow-hidden rounded-full ">
                  <img src={currentLogin.images} className='w-full h-full object-cover' alt="" />
                </div>
              <input  type="text" className='w-[85%] h-full outline-none rounded-lg bg-slate-200 pl-3 text-xs' value={tambahKomentar} onChange={(e)=>setTambahKomentar(e.target.value)}/>
              <IoSend className='w-auto text-lg'onClick={()=>handleKomentar()}/>
              </div>
          </div>
       </div>
        <div className= 'md:hidden'>
            <h3 className='font-semibold'>Deskripsi</h3>
            <p className='text-xs'>{item.deskripsi}</p>
        </div>
      </div>
    </div>
    <div className='w-full h-screen md:hidden z-50'>
      
            <div className={`w-full h-auto rounded-t-3xl bg-white flex flex-col justify-center  z-50 fixed bottom-0 duration-300 ease-in-out ${animateModal()}`}>
             <div className='flex items-center justify-center border-b-2 relative p-3 '>
              <h2>Reactions</h2>
              <MdOutlineCancel className='absolute top-3 right-3 text-xl text-[#1fa0e2]' onClick={()=>setModal(false)}/>
             </div>
             <div className='w-full max-h-[50vh] flex flex-col p-3 items-center overflow-y-scroll relative'>
             {  
                komentarCompany.map((komen)=>(
                  <Komentar key={komen.id} nama={komen.username} komentar={komen.comment} profile={komen.profile}/>
                ))
              }
             </div> 
            <div className='flex w-full gap-5 items-center p-3 sticky bottom-0 shadow-lg border-t-2'>
              <input   type="text" className='w-full outline-none bg-slate-200 rounded-2xl text-xs p-2 pl-3' value={tambahKomentar} onChange={(e)=>setTambahKomentar(e.target.value)}/>
              <span onClick={()=>handleKomentar()}  className='bg-slate-200 shadow-md rounded-[50%] text-[#1fa0e2] p-2 ' >
              <IoSend/>
              </span>
            </div>
          </div>
          <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ${backgroundModal()} z-20 `} onClick={()=>setModal(false)}>
            </div>
          </div>
          {/* <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[rgba(0,0,0,0.8)] hidden md:flex  z-20 `} onClick={
            ()=>{
             if(showDetail){
            setShowDetail(false)
            navigate('/')}}
            } >
            </div> */}
          </div>
        )
      })
     }
    </div>
  )
}

export default DetailTempat
