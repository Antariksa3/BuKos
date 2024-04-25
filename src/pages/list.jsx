// import Library
import React, { Suspense, useEffect, useState } from 'react'
import { getProduct, searchAndFilterProducts } from '../api/api'
import { FaExclamationCircle } from 'react-icons/fa';
import { api } from '../api/api';

// import Styles
import '../App.css'
import '../assets/styles/list.css'
import 'react-select-search/style.css'

// import Components
import Footer from '../components/Footer/Footer'
// import ListKosCard from '../components/ListKosCard/ListKosCard'
import NavbarList from '../components/Navbar/NavbarList'
import FilterSearch from '../components/SearchBar/FilterSearch'
import ScrollUp from '../components/ScrollUp/ScrollUp'
import ListKosCardShimmer from '../components/ListKosCardShimmer/ListKosCardShimmer'
import ButtonSearch from '../components/Button/ButtonSearch'
import SelectSearch from 'react-select-search';

// import Assets

const ListKosCard = React.lazy(() => import('../components/ListKosCard/ListKosCard'));

const ListKos = () => {
    const [fixed, setFixed] = useState(false)
    const [products, setProduct] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)
    const [searching, setSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedKecamatan, setSelectedKecamatan] = useState('');
    const [productNotFound, setProductNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedDesa, setSelectedDesa] = useState('');

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

        const approvedProducts = products.filter((product) => product.approved === "1" || product.approved === 1);

        return approvedProducts.map((product, i) => {
            return (
                <Suspense key={i} fallback={<ListKosCardShimmer />}>
                    <ListKosCard
                        foto_pemilik={`${process.env.REACT_APP_API_URL}/${product.foto_pemilik}`}
                        pemilik={product.nama_pemilik}
                        nama_kos={product.nama_kos}
                        lokasi={product.lokasi_kos}
                        harga={product.harga_kos}
                        gambar={`${process.env.REACT_APP_API_URL}/${product.foto_kos}`}
                        id={product.id}
                        favorite={product.favorite}
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
            const filteredProducts = await searchAndFilterProducts(searchQuery, selectedType, selectedAddress, selectedKecamatan);
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
            const filteredProducts = await searchAndFilterProducts(searchQuery, type, selectedAddress, selectedKecamatan);
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

    const handleFilterByDesa = async (event) => {
        const address = event.target.value;
        setSelectedAddress(address);

        try {
            setSearching(true);
            setLoading(true);
            const filteredProducts = await searchAndFilterProducts(searchQuery, selectedType, address, selectedKecamatan);
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

    const handleFilterByKecamatan = async (event) => {
        const kecamatan = event.target.value;
        setSelectedKecamatan(kecamatan);

        try {
            setSearching(true);
            setLoading(true);
            const filteredProducts = await searchAndFilterProducts(searchQuery, selectedType, selectedAddress, kecamatan);
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
            setSelectedAddress('');
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

    const handleDesaChange = (value) => {
        setSelectedDesa(value);
        handleFilterByDesa({ target: { value } });
    };

    const options = [
        { name: 'Semua Desa', value: '' },
        { name: 'Bacin', value: 'Bacin' },
        { name: 'Besito', value: 'Besito' },
        { name: 'Demaan', value: 'Demaan' },
        { name: 'Jepang', value: 'Jepang' },
        { name: 'Getas', value: 'Getas' },
        { name: 'Ngembal', value: 'Ngembal' },
        { name: 'Nganguk', value: 'Nganguk' },
        { name: 'Purwosari', value: 'Purwosari' },
    ];

    return (
        <>
            <NavbarList />
            <div className="list-kost" id='list-kost'>
                <div className="list-content">
                    <div className={fixed ? 'list-filter list-fixed' : 'list-filter'}>
                        <div className="filter-location">
                            <label htmlFor="">Pilih Kecamatan</label>
                            <select
                                name=""
                                id="location"
                                className='select-location'
                                value={selectedKecamatan}
                                onChange={handleFilterByKecamatan}
                            >
                                <option value="">Semua Kecamatan</option>
                                <option value="Bae">Bae</option>
                                <option value="Gebog">Gebog</option>
                                <option value="Kota Kudus">Kota Kudus</option>
                                <option value="Jati">Jati</option>
                                <option value="Mejobo">Mejobo</option>
                            </select>
                        </div>
                        <div className="filter-location">
                            <label htmlFor="">Pilih Desa</label>
                            {/* <SelectSearch
                                options={options}
                                value={selectedDesa}
                                onChange={handleDesaChange}
                                placeholder="Cari desa..."
                                search
                                className={'selected-search'}
                            /> */}
                            <select
                                name=""
                                id="location"
                                className='select-location'
                                value={selectedAddress}
                                onChange={handleFilterByDesa}
                            >
                                <option value="">Semua Desa</option>
                                <option value="Bacin">Bacin</option>
                                <option value="Besito">Besito</option>
                                <option value="Demaan">Demaan</option>
                                <option value="Jepang">Jepang</option>
                                <option value="Getas">Getas</option>
                                <option value="Ngembal">Ngembal</option>
                                <option value="Nganguk">Nganguk</option>
                                <option value="Purwosari">Purwosari</option>
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
                                <option value="">Semua Tipe</option>
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