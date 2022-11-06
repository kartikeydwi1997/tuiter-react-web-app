import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "./profile-reducer";

const EditProfile = () => {
    const profileData = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [openEditDate, setOpenEditDate] = useState(false);
    const [data, setData] = useState({
        name: profileData.name,
        handle: profileData.handle,
        bio: profileData.bio,
        location: profileData.location,
        website: profileData.website,
        dateOfBirth: profileData.dateOfBirth,
        dateJoined: profileData.dateJoined,
        followingCount: profileData.followingCount,
        followersCount: profileData.followersCount,
        profilePicture: profileData.profilePicture,
        bannerPicture: profileData.bannerPicture
    });
    const handleOnChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const handleUpdateProfile = () => {
        dispatch(updateProfile(data));
    };

    const handleBirthDateChange = () => {
        setOpenEditDate(!openEditDate);
    };
    return (
        <div className="border border-top-0 border-bottom-0" style={{ height: '100vh' }}>
            <div className="row ps-3 pe-3">
                <div className="col-1 mt-1">
                    <h4>  <strong><Link to="/tuiter/profile"><i className="bi bi-x-lg" style={{ color: "black" }}></i></Link></strong></h4>
                </div>
                <div className="col-9">
                    <h5 className="fw-bold mt-1">{data.name}</h5>
                </div>
                <div className="col-2">
                    <Link to="/tuiter/profile"><button className="btn float-end text-end fw-bold bg-dark border text-light rounded-pill " onClick={handleUpdateProfile}>Save</button>
                    </Link>
                </div>
            </div>

            <div className="col-12" style={{ marginTop: '10px' }}>
                <div style={{ position: 'relative' }}>
                    <img src={`/images/${data.bannerPicture}`} width="100%" style={{ filter: 'brightness(66%)' }} alt="" />
                    <i className="bi bi-camera text-white" style={{ background: 'rgba(0, 0, 0, 0.7)', padding: '5px 10px', borderRadius: '50%', position: 'absolute', top: '45%', left: '44%' }}></i>
                    <i className="bi bi-x-lg text-white" style={{ background: 'rgba(0, 0, 0, 0.7)', padding: '5px 10px', borderRadius: '50%', position: 'absolute', top: '45%', left: '52%' }}></i>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={`/images/${data.profilePicture}`} className="rounded-circle ms-4" width="120" height="120" alt="" style={{ marginTop: '-60px', filter: 'brightness(65%)', display: 'block' }} /><i className="bi bi-camera text-white" style={{ background: 'rgba(0, 0, 0, 0.7)', padding: '5px 10px', borderRadius: '50%', position: 'absolute', top: '45px', left: '65px' }}></i>
                </div>

            </div>
            <div className="col-12 ps-3 pe-3 mt-3">
                <div style={{ position: 'relative' }}>
                    <input type="text" className="form-control" placeholder="Name" id="name" name="name" value={data.name} style={{ padding: '15px 5px' }} onChange={handleOnChange} />
                    <label for="name" className="form-label" style={{ position: 'absolute', top: '0', left: '0', fontSize: '14px', color: 'gray', marginBottom: '10px', padding: '0px 5px' }}>Name</label>
                </div>
                <div style={{ position: 'relative' }} class="mt-4">
                    <input type="text" className="form-control" placeholder="Bio" id="bio" name="bio" value={data.bio} style={{ padding: '15px 5px' }} onChange={handleOnChange} />
                    <label for="bio" className="form-label" style={{ position: 'absolute', top: '0', left: '0', fontSize: '14px', color: 'gray', marginBottom: '10px', padding: '0px 5px' }}>Bio</label>
                </div>
                <div style={{ position: 'relative' }} class="mt-4">
                    <input type="text" className="form-control" placeholder="Location" id="location" name="location" value={data.location} style={{ padding: '15px 5px' }} onChange={handleOnChange} />
                    <label for="location" className="form-label" style={{ position: 'absolute', top: '0', left: '0', fontSize: '14px', color: 'gray', marginBottom: '10px', padding: '0px 5px' }}>Location</label>
                </div>
                <div style={{ position: 'relative' }} class="mt-4">
                    <input type="text" className="form-control" placeholder="Website" id="website" name="website" value={data.website} style={{ padding: '15px 5px' }} onChange={handleOnChange} />
                    <label for="website" className="form-label" style={{ position: 'absolute', top: '0', left: '0', fontSize: '14px', color: 'gray', marginBottom: '10px', padding: '0px 5px' }}>Website</label>
                </div>
                {openEditDate ? <div style={{ position: 'relative' }} class="mt-4">
                    <input type="text" className="form-control" placeholder="DOB" id="dateOfBirth" name="dateOfBirth" value={data.dateOfBirth} style={{ padding: '15px 5px' }} onChange={handleOnChange} />
                    <label for="dateOfBirth" className="form-label" style={{ position: 'absolute', top: '0', left: '0', fontSize: '14px', color: 'gray', marginBottom: '10px', padding: '0px 5px' }}>DOB</label>
                </div>
                    : <div className="mt-4">
                        <span style={{ display: 'flex' }}>
                            <span className="mr-2">Birth date  .</span>
                            <p className="mx-2" onClick={handleBirthDateChange} style={{ cursor: 'pointer', color: '#0000EE' }}>Edit</p>
                        </span>
                        <span className="fw-bold">{data.dateOfBirth}</span>
                    </div>
                }
                <div className="mt-2">
                    <span style={{ display: 'flex' }}>
                        <span className="mr-2 fw-bold" >Switch to professional </span>
                    </span>
                </div>
            </div >
        </div>
    );
}
export default EditProfile;