import CustomNavbar from "./CustomNavbar";

const Base = ({title="welcome",children}) => {
    return (
      <div className="container-fluid p-0 m-0">
        <CustomNavbar />
            {children}
            <h1>Footer</h1>
      </div>
    );
}

export default Base