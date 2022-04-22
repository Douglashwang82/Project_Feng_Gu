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

} from './GoogleReviewElements';

export const GoogleReview = () => {
    return (
        <ReviewArea>
            <ReviewGroup>
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

                <ReviewFrame>
                    <ReviewSection>
                        <ReviewAvatar />
                        <ReviewName >Josh Allen</ReviewName>
                    </ReviewSection>
                    <ReviewStars >
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarEmpty></ReviewStarEmpty>
                    </ReviewStars>
                    <ReviewText>
                        It is a good places. It is a good places. It is
                    </ReviewText>
                </ReviewFrame>

                <ReviewFrame>
                    <ReviewSection>
                        <ReviewAvatar />
                        <ReviewName >Josh Allen</ReviewName>
                    </ReviewSection>
                    <ReviewStars >
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    <ReviewStarFull></ReviewStarFull>
                    </ReviewStars>
                    <ReviewText>
                        It is a good places.
                    </ReviewText>
                </ReviewFrame>

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
            </ReviewGroup>
        </ReviewArea>
    )
}
