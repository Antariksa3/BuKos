import '../assets/styles/list.css'
import Footer from '../components/Footer/Footer'
import NavbarList from '../components/Navbar/NavbarList'
import PopularCard from '../components/PopularCard/PopularCard'

const ListKos = () =>{
    return (
        <>
            <NavbarList />
            {/* <div className="popular section">
                <div className="popular-content">
                    <div className="popular-header">
                        <h2>Kos Terpopuler</h2>
                        <div className="popular-search">
                            <Button3 button='Lihat Semua'/>
                            <SearchBar1 />
                        </div>
                    </div>
                    <div className="popular-cards">
                        <PopularCard />
                        
                    </div>
                </div>
            </div> */}
            <div className="list-kost">
                <div className="list-content">
                    <div className="list-header"></div>
                    <div className="list-cards">
                        <PopularCard/>
                        <PopularCard/>
                        <PopularCard/>
                        <PopularCard/>
                        <PopularCard/>
                        <PopularCard/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ListKos