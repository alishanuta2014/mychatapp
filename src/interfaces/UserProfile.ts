export interface UserProfile {
    username: string,
    fullProfile: {
        email: string,
        backgroundImageId: string,
        city: string,
        firstname: string,
        lastname: string,
        learning: [
            string
        ],
        speaks: [
            string
        ],
        role: [
            string
        ],
        currentlyTeaches: string,
        bio: string,
        story: {
            0: {
                date: string,
                comment: string,
                ImageId: string
            },
            1: {
                date: string,
                comment: string,
                ImageId: string
            },
            2: {
                date: string,
                comment: string,
                ImageId: string
            },
            3: {
                date: string,
                comment: string,
                ImageId: string
            }
        },
        profileGreetings: string
    },
    userRatings: {
        ratingStars: string,
        numOfRatings: string,
        hoursTaught: string,
        FiveReviewComments: {
            0: {
                nameOfReviewer: string,
                review: string,
                ratingStars: string,
                dateReviewed: string
            },
            1: {
                nameOfReviewer: string,
                review: string,
                ratingStars: string,
                dateReviewed: string
            },
            2: {
                nameOfReviewer: string,
                review: string,
                ratingStars: string,
                dateReviewed: string
            },
            3: {
                nameOfReviewer: string,
                review: string,
                ratingStars: string,
                dateReviewed: string
            },
            4: {
                nameOfReviewer: string,
                review: string,
                ratingStars: string,
                dateReviewed: string
            }
        }
    },
    myFiveRecentTeachers: {
        0: {
            teacherFullname: string,
            teacherUsername: string
        },
        1: {
            teacherFullname: string,
            teacherUsername: string
        },
        2: {
            teacherFullname: string,
            teacherUsername: string
        },
        3: {
            teacherFullname: string,
            teacherUsername: string
        },
        4: {
            teacherFullname: string,
            teacherUsername: string
        }
    },
    isOnline: false,
    currentlyRequestingTeachers: {
        0: {
            teacherUsername: string,
            teacherEmail: string
        },
        1: {
            teacherUsername: string,
            teacherEmail: string
        },
        2: {
            teacherUsername: string,
            teacherEmail: string
        },
        3: {
            teacherUsername: string,
            teacherEmail: string
        },
        4: {
            teacherUsername: string,
            teacherEmail: string
        },
        5: {
            teacherUsername: string,
            teacherEmail: string
        }
    },
    dynamicInfo: {
        hasTeachRequest: string,
        isCurrentlyInTutoring: string
    },
    dateLastOnline: string,
    isBanned: string,
    roleDetails: {
        currentRole: string,
        teachingFees: string,
        isVerifiedUser: {
            driverLicenseSubmitted: string
        },
        hasDegreeSubmitted: string,
        teacherResponseTimeToAcceptRequests: string
    }
}