import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
        <div>
                        
            <SkeletonTheme color="grey" highlightColor="#444">
            <p>
                <Skeleton height={250} width={300} count={1} />
            </p>

            </SkeletonTheme>
            <SkeletonTheme color="#990" highlightColor="#550">
            <p>
                <Skeleton height={250} width={300} count={1} />
            </p>

            </SkeletonTheme>
        </div>
    )
}

export default SkeletonCard
