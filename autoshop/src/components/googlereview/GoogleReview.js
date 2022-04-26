import React from 'react'
import { ImStarEmpty } from "react-icons/im";

import {
    ReviewFrame,
    ReviewAvatar,
    ReviewName,
    ReviewStars,
    ReviewText,
    ReviewGroup,
    ReviewSection,
    ReviewStarFull,
    ReviewStarEmpty,
    ReviewExpandButton,
    ReviewArea,
    ReviewShadow1,
    ReviewShadow2,
    ReviewShadow3,
    ReviewGlass,

} from './GoogleReviewElements';

export const GoogleReview = () => {
    return (
        <ReviewArea>
            <ReviewGroup>
                <ReviewShadow1>
                <ReviewFrame>
                    <ReviewSection>
                        <ReviewAvatar />
                        <ReviewName >Josh Allen</ReviewName>
                    </ReviewSection>
                    <ReviewStars >
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarEmpty></ReviewStarEmpty>
                    <ReviewStarEmpty></ReviewStarEmpty>
                    </ReviewStars>
                    <ReviewText>
                        It is a good places.
                    </ReviewText>
                    <ReviewExpandButton>Expand</ReviewExpandButton>
                </ReviewFrame>
                </ReviewShadow1>

                <ReviewShadow2>
                <ReviewFrame>
                    <ReviewSection>
                        <ReviewAvatar />
                        <ReviewName >Josh Allen</ReviewName>
                    </ReviewSection>
                    <ReviewStars >
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarEmpty></ReviewStarEmpty>
                    <ReviewStarEmpty></ReviewStarEmpty>
                    </ReviewStars>
                    <ReviewText>
                        It is a good places.
                    </ReviewText>
                    <ReviewExpandButton>Expand</ReviewExpandButton>
                </ReviewFrame>
                </ReviewShadow2>
                                <ReviewShadow3>
                <ReviewFrame>
                    <ReviewSection>
                        <ReviewAvatar />
                        <ReviewName >Josh Allen</ReviewName>
                    </ReviewSection>
                    <ReviewStars >
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarEmpty></ReviewStarEmpty>
                    <ReviewStarEmpty></ReviewStarEmpty>
                    </ReviewStars>
                    <ReviewText>
                        It is a good places.
                    </ReviewText>
                    <ReviewExpandButton>Expand</ReviewExpandButton>
                </ReviewFrame>
                <ReviewGlass>
                </ReviewGlass>
                </ReviewShadow3>


  
            </ReviewGroup>
        </ReviewArea>
    )
}
