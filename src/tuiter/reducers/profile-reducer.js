const ProfileReducer = (state = {
    firstName: 'Sujith Naarayan',
    lastName: 'Hirendra babu',
    handle: '@sujithnaarayan',
    profilePicture: '/tuiter/assets/images/img.jpg',
    bannerPicture: '/tuiter/assets/images/img_1.png',
    bio: 'Graduate Student, Football head, Tech Enthusiast.',
    website: 'https://www.linkedin.com/in/sujith-naarayan/',
    location: 'Boston, MA',
    dateOfBirth: '1999-12-19',
    dateJoined: '2021-05-01',
    followingCount: 325,
    followersCount: 583,
    tuitCount: 5403
}, action) => {
    switch(action.type) {
        case 'update-profile':
            state = action.currentProfile;
            return state;
        default: return state;
    }
}
export default ProfileReducer;