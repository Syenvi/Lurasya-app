const responseData =  
    {
        data :[
            {
                namaMakanan : 'Soto Betawi',
                Daerah : 'Yogyakarta',
                Deskripsi:'Enakkk',
                Gambar :'https://ioasodajsd'
            },
            {
                namaMakanan : 'Soto Betawi',
                Daerah : 'Jakarta',
                Deskripsi:'Enakkk',
                Gambar :'https://ioasodajsd'
            },{
                namaMakanan : 'Soto Betawi',
                Daerah : 'Solo',
                Deskripsi:'Enakkk',
                Gambar :'https://ioasodajsd'
            }
        ]
    }

    const Hewan ={
        darat :['ayam','bebel','kucing'],
        laut :['ikan']
    }

    console.log(Hewan.darat);
    const mapped = responseData.data.map((item)=>{
       return item.Daerah
    });
    console.log(mapped);