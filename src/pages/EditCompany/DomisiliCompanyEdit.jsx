import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import Select from 'react-select';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const DomisiliCompanyEdit = ({formData,setFormData,...props}) => {
  const [provinsiOptions, setProvinsiOptions] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [kabupatenOptions, setKabupatenOptions] = useState([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState('');
  const [kecamatanOptions, setKecamatanOptions] = useState([]);
  const [selectedKecamatan, setSelectedKecamatan] = useState('');
  const [desaOptions, setDesaOptions] = useState([]);
const [selectedDesa, setSelectedDesa] = useState('');
const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);
const [markerPosition, setMarkerPosition] = useState(null);


useEffect(() => {
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);
        setMarkerPosition({lat,lng})
      });
    }
  };

  getCurrentLocation();
}, []);
const handleMapReady = (mapProps, map) => {
  const center = map.getCenter();
  const lat = center.lat();
  const lng = center.lng();
  setMarkerPosition({ lat, lng });

  map.addListener('drag', () => {
    const center = map.getCenter();
    const lat = center.lat();
    const lng = center.lng();
    setMarkerPosition({ lat, lng });
    setLatitude(lat)
    setLongitude(lng)
    setFormData((prevData) => ({
      ...prevData,
      lat: lat,
      lng:lng
    }));
  });
  
};
console.log(latitude,longitude);


  useEffect(() => {
    fetch('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => response.json())
      .then((provinces) => {
        const options = provinces.map((provinsi) => ({
          value: provinsi.id,
          label: provinsi.name,
        }));
        setProvinsiOptions(options);
      });
  }, []);

  const handleProvinsiChange = (selectedOption) => {
    setSelectedProvinsi(selectedOption);
    setSelectedKabupaten('');
    setSelectedKecamatan('');
    // Mendapatkan kabupaten berdasarkan id provinsi yang dipilih
    fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedOption.value}.json`)
      .then((response) => response.json())
      .then((regencies) => {
        const options = regencies.map((kabupaten) => ({
          value: kabupaten.id,
          label: kabupaten.name,
        }));
        setKabupatenOptions(options);
        setFormData((prevData) => ({
          ...prevData,
          provinsi: selectedOption.label,
          kota: '',
          kecamatan: '',
          desa: '',
        }));
      });
  };

  const handleKabupatenChange = (selectedOption) => {
    setSelectedKabupaten(selectedOption);
    setSelectedKecamatan('');
    // Mendapatkan kecamatan berdasarkan id kabupaten yang dipilih
    fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedOption.value}.json`)
      .then((response) => response.json())
      .then((districts) => {
        const options = districts.map((kecamatan) => ({
          value: kecamatan.id,
          label: kecamatan.name,
        }));
        setKecamatanOptions(options);
        setFormData((prevData) => ({
          ...prevData,
          kota: selectedOption.label,
          kecamatan: '',
          desa: '',
        }));
      });
  };

  const handleKecamatanChange = (selectedOption) => {
    setSelectedKecamatan(selectedOption);
    // Mendapatkan desa berdasarkan id kecamatan yang dipilih
    fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedOption.value}.json`)
      .then((response) => response.json())
      .then((villages) => {
        const options = villages.map((desa) => ({
          value: desa.id,
          label: desa.name,
        }));
        setDesaOptions(options);
        setFormData((prevData) => ({
          ...prevData,
          kecamatan: selectedOption.label,
          desa: '',
        }));
      });
  };
  const handleDesaChange = (selectedOption) => {
    setSelectedDesa(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      desa: selectedOption.label,
    }));
  };
  // console.log(formData);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      backgroundColor:'slate'
    }),
  };
  return (
    <div className='w-full flex flex-col items-center gap-5 h-full'>
      <input type="text" placeholder='Masukkan Alamat' className='pl-2 w-full p-2 rounded-md bg-slate-200'value={formData.alamat} onChange={(e)=>setFormData({...formData,alamat:e.target.value})}/>
      <Select
      className='w-full rounded-md bg-slate-200 z-50'
        options={provinsiOptions}
        value={selectedProvinsi}
        onChange={handleProvinsiChange}
        styles={customStyles}
        placeholder='Pilih Provinsi'
      />
      <Select 
         className='w-full rounded-md bg-slate-200 z-40'
        options={kabupatenOptions}
        value={selectedKabupaten}
        onChange={handleKabupatenChange}
        styles={customStyles}
        placeholder='Pilih Kabupaten'
      />
      <Select 
         className='w-full rounded-md bg-slate-200 z-30'
        options={kecamatanOptions}value={selectedKecamatan}
        onChange={handleKecamatanChange}
        styles={customStyles}
        placeholder='Pilih Kecamatan'
      />
      <Select 
         className='w-full rounded-md bg-slate-200 z-20'
  options={desaOptions}
  value={selectedDesa}
  onChange={handleDesaChange}
  styles={customStyles}
  placeholder='Pilih Desa'
/>
<div className="map-container w-full h-[200px] md:h-[300px] rounded-md overflow-hidden relative ">
               <Map
            google={props.google}
            zoom={12}
            initialCenter={{ lat: latitude, lng: longitude }}
            centerAroundCurrentLocation
            onReady={handleMapReady}  
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          >
           {markerPosition && <Marker position={markerPosition}  />}
          </Map>
        
          </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBkHT9y6Ev4L14Ui41GAKpjJq5a1o8T9fE'
})(DomisiliCompanyEdit);

