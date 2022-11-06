import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProfileComponent = () => {

    const profileData = useSelector(state => state.profile);


    return (
        <div className="border border-top-0 border-bottom-0" style={{ height: '100vh' }}>
            <div className="row ps-3 pe-3">
                <div className="col-1">
                    <h4><strong><i className="bi bi-arrow-left"></i></strong></h4>
                </div>
                <div className="col-10">
                    <div className="fw-bold fs-5">{profileData.name}</div>
                    <div className="text-secondary" style={{}}>300 tuits</div>
                </div>
            </div>
            <div className="col-12">
                <img src={`/images/${profileData.bannerPicture}`} width="100%" alt="banner" />
                <img src={`/images/${profileData.profilePicture}`} className="rounded-circle ms-4" width="120" height="120" alt="profilepic" style={{ marginTop: '-60px' }} />
                <Link to="/tuiter/edit-profile"><button className="btn float-end mt-3 me-4 fw-bold border rounded-pill ps-3 pe-3" >Edit Profile</button>
                </Link>
            </div>
            <div className="col-12 ps-3 pe-3 mt-3">
                <h4 className="fw-bold">{profileData.name}</h4>
                <p className="text-secondary" style={{ marginTop: '-10px', fontSize: '90%' }}>{profileData.handle}</p>
                <p className="text-secondary">{profileData.bio}</p>
                <div>
                    <span>
                        <i className="bi bi-geo-alt"></i>
                        <span className="text-secondary mx-1">{profileData.location}</span>
                    </span>
                    <span className="ps-3">
                        <i className="bi bi-balloon"></i>
                        <span className="text-secondary">{profileData.dateOfBirth}</span>
                    </span>
                    <span className="ps-3">
                        <i className="bi bi-calendar"></i>
                        <span className="text-secondary mx-1">
                            {profileData.dateJoined}
                        </span>
                    </span>
                </div>
                <div>
                    <span>
                        <strong>{profileData.followingCount}</strong>
                        <span className="text-secondary mx-1">Following</span>
                    </span>
                    <span className="ps-4"><strong>{profileData.followersCount}</strong>
                        <span className="text-secondary mx-1">Followers</span>
                    </span>
                </div>
            </div>
        </div >

    );
};
export default ProfileComponent;