// import Library
import React, { Suspense, useEffect, useState } from 'react'
import { getProduct, searchAndFilterProducts } from '../api/api'
import { FaExclamationCircle } from 'react-icons/fa';

// import Styles
import '../App.css'
import '../assets/styles/list.css'

// import Components
import Footer from '../components/Footer/Footer'
// import ListKosCard from '../components/ListKosCard/ListKosCard'
import NavbarList from '../components/Navbar/NavbarList'
import FilterSearch from '../components/SearchBar/FilterSearch'
import ScrollUp from '../components/ScrollUp/ScrollUp'
import ListKosCardShimmer from '../components/ListKosCardShimmer/ListKosCardShimmer'
import ButtonSearch from '../components/Button/ButtonSearch'

// import Assets

const ListKosCard = React.lazy(() => import('../components/ListKosCard/ListKosCard'));

const ListKos = () => {
    const [fixed, setFixed] = useState(false)
    const [products, setProduct] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)
    const [searching, setSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [productNotFound, setProductNotFound] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProduct().then((product) => {
            setProduct(product)
            setDataLoaded(true)
        })
    }, [])

    const ProductList = () => {
        if (!dataLoaded || !Array.isArray(products)) {
            return (
                <div className='list-cards'>
                    <ListKosCardShimmer />
                    <ListKosCardShimmer />
                    <ListKosCardShimmer />
                    <ListKosCardShimmer />
                    <ListKosCardShimmer />
                    <ListKosCardShimmer />
                    <ListKosCardShimmer />
                    <ListKosCardShimmer />
                </div>
            );
        }

        return products.map((product, i) => {
            return (
                <Suspense key={i} fallback={<ListKosCardShimmer />}>
                    <ListKosCard
                        foto_pemilik={`http://127.0.0.1:8000/${product.foto_pemilik}`}
                        pemilik={product.nama_pemilik}
                        nama_kos={product.nama_kos}
                        lokasi={product.lokasi_kos}
                        harga={product.harga_kos}
                        gambar={`http://127.0.0.1:8000/${product.foto_kos}`}
                    />
                </Suspense>
            )
        })
    }

    const changeFixed = () => {
        if (window.scrollY >= 45) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }
    window.addEventListener('scroll', changeFixed)

    const getAllProducts = async () => {
        try {
            const products = await getProduct();
            setProduct(products);
            setDataLoaded(true);
        } catch (error) {
            // Handle error here, if necessary
        }
    };

    useEffect(() => {
        if (!searchQuery) {
            getAllProducts();
        }
    }, [searchQuery]);

    const searchProduct = async () => {
        try {
            setSearching(true);
            setLoading(true);
            const filteredProducts = await searchAndFilterProducts(searchQuery, selectedType);
            // console.log(filteredProducts);
            setProduct(filteredProducts.data);
            setProductNotFound(filteredProducts.data === null);
        } catch (error) {
            // Handle error here, if necessary
        } finally {
            setSearching(false);
            setLoading(false);
        }
    }

    const handleFilterByType = async (event) => {
        const type = event.target.value;
        setSelectedType(type);

        try {
            setSearching(true);
            setLoading(true);
            const filteredProducts = await searchAndFilterProducts(searchQuery, type);
            // console.log(filteredProducts);
            setProduct(filteredProducts.data);
            setProductNotFound(filteredProducts.data === null);
        } catch (error) {
            // Handle error here, if necessary
        } finally {
            setSearching(false);
            setLoading(false);
        }
    };

    const resetProducts = async () => {
        try {
            setSearching(true);
            setLoading(true);
            setSearchQuery('');
            setSelectedType('');
            const products = await getProduct(); // Menggunakan getProduct untuk mengatur ulang ke seluruh produk
            setProduct(products);
            setProductNotFound(false); // Atur productNotFound kembali ke false
        } catch (error) {
            // Handle error here, if necessary
        } finally {
            setSearching(false);
            setLoading(false);
        }
    };

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
                            <select
                                name=""
                                id="type"
                                className='select-type'
                                value={selectedType}
                                onChange={handleFilterByType}
                            >
                                <option value="">Semua</option>
                                <option value="Putra">Khusus Putra</option>
                                <option value="Putri">Khusus Putri</option>
                                <option value="Campuran">Campuran</option>
                            </select>
                        </div>
                        <div className="filter-search">
                            <label htmlFor="">Cari Kost</label>
                            <FilterSearch
                                value={searchQuery}
                                onChange={({ target }) => setSearchQuery(target.value)}
                                disabled={searching}
                                onClearInput={resetProducts}
                            />
                        </div>
                        <div className="filter-button">
                            <ButtonSearch
                                button='Cari'
                                onClick={searchProduct}
                                disabled={searching}
                            />
                        </div>
                    </div>
                    <div className={fixed ? 'list-cards cards-fixed' : 'list-cards'}>
                        {loading ? (
                            <div className="list-cards">
                                <ListKosCardShimmer />
                                <ListKosCardShimmer />
                                <ListKosCardShimmer />
                                <ListKosCardShimmer />
                                <ListKosCardShimmer />
                                <ListKosCardShimmer />
                                <ListKosCardShimmer />
                                <ListKosCardShimmer />
                            </div>
                        ) :
                            productNotFound ? (
                                <div className="not-found-container">
                                    <FaExclamationCircle className="not-found-icon" />
                                    <p className="not-found-message">Kos tidak ditemukan</p>
                                </div>
                            ) : (
                                <ProductList />
                            )}
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollUp to='list-kost' />
        </>
    )
}

export default ListKos