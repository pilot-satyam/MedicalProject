import axios from 'axios';

const ProfilePage = ({ initialProfileData }) => {
    //profile data has to be send from the FromFortient submit data
    const [profileData, setProfileData] = useState(initialProfileData);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            // Send updated profile data to backend
            const response = await axios.put('url', profileData);
            // Update profile data in state
            setProfileData(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
        }
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    return (
        <div>
            <h1>Profile</h1>
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <label>
                        Name:
                        <input type="text" value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} />
                        </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" value={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                    <div>
                        <p>Name: {profileData.name}</p>
                        <p>Email: {profileData.email}</p>
                        <button type="button" onClick={handleEdit}>Edit</button>
                    </div>
                )}
        </div>
    );
}