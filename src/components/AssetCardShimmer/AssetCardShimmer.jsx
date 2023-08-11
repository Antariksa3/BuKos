import React from 'react';
import './AssetCardShimmer.css';

const AssetCardShimmer = () => {
    return (
        <div className="asset-card-shimmer">
            <div className="asset-shimmer-image" />
            <div className="shimmer-content">
                <div className="shimmer-line shimmer-title" />
                <div className="shimmer-line shimmer-location" />
                <div className="shimmer-line shimmer-price" />
            </div>
        </div>
    );
};

export default AssetCardShimmer;
