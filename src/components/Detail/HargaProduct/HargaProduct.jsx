import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link as RouterLink } from 'react-router-dom'

const HargaProduct = ({ nama_kos, harga, productID }) => {
    const formattedPrice = harga.toLocaleString('id-ID');
    const [fixedPosition, setFixedPosition] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showDurasiOptions, setShowDurasiOptions] = useState(false);
    // const [selectedDurasi, setSelectedDurasi] = useState('1');
    const [isDateSelected, setIsDateSelected] = useState(false);
    const storedSelectedDurasi = localStorage.getItem('selectedDurasi');
    const initialSelectedDurasi = storedSelectedDurasi ? storedSelectedDurasi : '1';
    const [selectedDurasi, setSelectedDurasi] = useState(initialSelectedDurasi);

    const pemilikPhoneNumber = '%2B6287820025877';

    const toggleDurasiOptions = () => {
        setShowDurasiOptions(!showDurasiOptions);
        setShowCalendar(false);
    };

    const handleDurasiChange = (e) => {
        setSelectedDurasi(e.target.value);
        setShowDurasiOptions(false)
        localStorage.setItem('selectedDurasi', e.target.value);
    };

    const durasiOptions = [
        { value: '1', label: 'Per Bulan' },
        { value: '3', label: 'Per 3 Bulan' },
        { value: '6', label: 'Per 6 Bulan' },
        { value: '12', label: 'Per Tahun' }
    ];

    const redirectToWhatsApp = () => {
        const message = `Hai, saya mau sewa kamar di ${nama_kos}, untuk kamarnya apakah masih tersedia?`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://api.whatsapp.com/send?phone=${pemilikPhoneNumber}&text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    const fixed = () => {
        if (window.scrollY >= 570) {
            setFixedPosition(true)
        } else {
            setFixedPosition(false)
        }
    }
    window.addEventListener('scroll', fixed)

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
        setShowDurasiOptions(false);
    };

    const handleDateChange = date => {
        setSelectedDate(date);
        setIsDateSelected(true);
        const dateString = date.toISOString();
        localStorage.setItem('selectedDate', dateString);
        setShowCalendar(false);
    };

    return (
        <div className={fixedPosition ? 'harga-fixed' : ''}>

            <div
                // className={showCalendar ? 'harga calendar-open' : 'harga'}
                className={`harga ${showCalendar ? 'calendar-open' : ''} ${showDurasiOptions ? 'durasi-open' : ''}`}
            >
                <div className="isi-harga-detail">
                    <div className="nominal">
                        <p>Rp2.350.000</p>
                        <h1>{formattedPrice}<span>/Bulan</span></h1>
                    </div>

                    <div className="tanggal-mulai">
                        <div className="mulai-kos" onClick={toggleCalendar}>
                            {/* <p>Mulai kos</p> */}
                            <p>{selectedDate ? `${selectedDate.toLocaleDateString('id-ID')}` : 'Mulai Kos'}</p>
                            <Icon icon="mdi:calendar" color="#303030" height="20" />
                        </div>

                        <div className="perbulan" onClick={toggleDurasiOptions}>
                            {/* <p>Perbulan</p> */}
                            <p>{durasiOptions.find(option => option.value === selectedDurasi)?.label || ''}</p>
                            <Icon icon="gridicons:dropdown" color="#303030" height="20" />

                        </div>
                    </div>
                    {showDurasiOptions && (
                        <ul className='durasi-options'>
                            {durasiOptions.map(option => (
                                <li key={option.value}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="durasi"
                                            value={option.value}
                                            checked={selectedDurasi === option.value}
                                            onChange={handleDurasiChange}
                                        />
                                        {option.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                    {showCalendar && (
                        <div className="calendar-container">
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                            />
                        </div>
                    )}
                    <div className="button-harga-detail">

                        <button className="tanya-pemilik" onClick={redirectToWhatsApp}>
                            <Icon icon='mdi:whatsapp' color="#25d366" height="24" />
                            <p>Tanya Pemilik</p>
                        </button>
                        <RouterLink to={isDateSelected ? `/pembayaran/${productID}` : '#'}>
                            <button className={`ajukan-sewa ${isDateSelected ? '' : 'disabled'}`} disabled={!isDateSelected}>
                                Ajukan Sewa
                            </button>
                        </RouterLink>

                        {/* <RouterLink to={`/payment/${productID}`}>
                            <button className="ajukan-sewa">Ajukan Sewa</button>
                        </RouterLink> */}
                        {
                            /* <button className="ajukan-sewa" onClick={() => navigate('/pembayaran')} >
                                <p>Ajukan Sewa</p>
                            </button> */
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HargaProduct