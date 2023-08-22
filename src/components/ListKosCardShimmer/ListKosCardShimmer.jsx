import './ListKosCardShimmer.css';
import React from 'react';

const ListKosCardShimmer = () => {
    return (
        <div className="list-kos-card-shimmer">
            <div className="shimmer-image" />
            <div className="shimmer-content">
                <div className="shimmer-line shimmer-title" />
                <div className="shimmer-line shimmer-location" />
                <div className="shimmer-line shimmer-price" />
            </div>
        </div>
    );
};

export default ListKosCardShimmer;