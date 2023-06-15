import '../App.css'
import '../assets/styles/list.css'
import Footer from '../components/Footer/Footer'
import ListKosCard from '../components/ListKosCard/ListKosCard'
import NavbarList from '../components/Navbar/NavbarList'
import PopularCard from '../components/PopularCard/PopularCard'
import SearchBar1 from '../components/SearchBar/SearchBar1'
import FilterSearch from '../components/SearchBar/FilterSearch'
import Button6 from '../components/Button/Button6'
import React, {useEffect, useState} from 'react'
import ScrollUp from '../components/ScrollUp/ScrollUp'
import { getProduct } from '../api/api'

const ListKos = () =>{
    const [fixed, setFixed] = useState (false)
    const [products, setProduct] = useState ([])

    useEffect(() =>{
        getProduct().then((product) => {
            setProduct(product)
        })
    }, [])

    const ProductList = () => {
        return products.map((product, i) => {
            return(
                <ListKosCard
                key={i}
                pemilik={product.nama_pemilik}
                nama_kos={product.nama_kos}
                lokasi={product.lokasi_kos}
                harga={product.harga_kos}
                gambar={`http://127.0.0.1:8000/${product.foto_kos}`}
                />
            )
        })
    }

    // console.log({product: product})

    const changeFixed = () =>{
        if (window.scrollY >= 45){
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    window.addEventListener('scroll', changeFixed)

    return (
        <>
            <NavbarList />
            <div className="list-kost" id='list-kost'>
                <div className="list-content">
                    <div className={fixed ? 'list-filter list-fixed' : 'list-filter'}>
                        <div className="filter-location">
                            <label htmlFor="">Pilih Lokasi</label>
                            <select name="" id="location" className='select-location'>
                                {/* <option value="0">Semua Desa</option> */}
                                <option value="1">Bacin</option>
                                <option value="2">Besito</option>
                                <option value="3">Demaan</option>
                                <option value="4">Jepang</option>
                                <option value="5">Getas</option>
                                <option value="6">Ngembal</option>
                                <option value="7">Nganguk</option>
                                <option value="8">Purwosari</option>
                            </select>
                        </div>
                        <div className="filter-type">
                            <label htmlFor="">Tipe Kost</label>
                            <select name="" id="type" className='select-type'>
                                <option value="">Khusus Putra</option>
                                <option value="">Khusus Putri</option>
                                <option value="">Campur</option>
                            </select>
                        </div>
                        <div className="filter-search">
                            <label htmlFor="">Cari Kost</label>
                            <FilterSearch />
                        </div>
                        <div className="filter-button">
                            <Button6 button='Cari'/>
                        </div>
                    </div>
                    <div className={fixed ? 'list-cards cards-fixed' : 'list-cards'}>
                        <ProductList />
                        {/* 
                        <ListKosCard 
                        pemilik='Dimas' 
                        nama_kos='Kos Basyir'
                        lokasi='Jl. Raya Jurang'
                        harga='1.000.000'
                        />
                        <ListKosCard 
                        pemilik='Dimas' 
                        nama_kos='Kos Basyir'
                        lokasi='Jl. Raya Jurang'
                        harga='1.000.000'
                        />
                        <ListKosCard 
                        pemilik='Dimas' 
                        nama_kos='Kos Basyir'
                        lokasi='Jl. Raya Jurang'
                        harga='1.000.000'
                        />
                        <ListKosCard 
                        pemilik='Dimas' 
                        nama_kos='Kos Basyir'
                        lokasi='Jl. Raya Jurang'
                        harga='1.000.000'
                        />
                        <ListKosCard 
                        pemilik='Dimas' 
                        nama_kos='Kos Basyir'
                        lokasi='Jl. Raya Jurang'
                        harga='1.000.000'
                        /> 
                        */}
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollUp />
        </>
    )
}

export default ListKos