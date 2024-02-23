"use client";
export default function CollectionToMarketplaceButton({ handleAddMarket }) {
    return (
        <button className="bg-red-500" onClick={() => handleAddMarket}>
            Add to Marketplace
        </button>
    );
}
