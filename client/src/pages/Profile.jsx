function Profile () {
  return (
    <div className="profile__panel-one">
        <div className="profile__image-container">
            <div className="general__darken-overlay" style="background-color: rgba(29, 37, 34, 0.65);"></div>
        </div>

        <div className="container">
            <div className="row" style="margin-left: 0; margin-right: 0px;">
                <div className="col-lg-7">
                    <div className="profile__content">
                        <h1 className="highlight__shadow">Jermaine Lamarr Cole</h1>
                        <h3>Student of King's College London | Programmer | Learner</h3>
                        <div className="profile__displace"></div>
                    </div>

                    <div className="profile__displace"></div>
                    <div className="container">
                        <div className="row justify-content-center" >
                            <div className="card" style="width: 90%;">
                                <div style="margin-bottom: 5%;"></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-9">
                                            <h5 style="padding-left: 6.5%;">My account</h5>
                                        </div>
                                        <div className="col-3">
                                            <a href="#" className="btn btn-primary">Edit profile</a>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                                
                                <!-- Add more -->

                                <div className="container">
                                    <h2>User Information</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label for="username" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username">
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter email">
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label for="firstName" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="Enter first name">
                                            </div>
                                            <div className="col">
                                                <label for="lastName" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" placeholder="Enter last name">
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="aboutMe" className="form-label">About Me</label>
                                            <textarea className="form-control" id="aboutMe" rows="3" placeholder="Tell us something about yourself"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                                <br>                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-5">
                    <div className="profile__displace"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="card" style="width: 100%;">
                                <div className="d-flex justify-content-center align-items-start" style="margin-bottom: 5%;">
                                    <img src="images/dog_sad.jpg" className="rounded-circle" style="width: 150px; height: 150px; margin-top: -50px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col">
                                            <div>
                                                <h4 className="text-center">Friends</h4>
                                                <p className="text-center">100</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div>
                                                <h4 className="text-center">Levels</h4>
                                                <p className="text-center">50</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div>
                                                <h4 className="text-center">Photos</h4>
                                                <p className="text-center">5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="card-body">
                                    <h4 className="card-title">Jermaine, University King's London</h4>
                                    <p className="card-text">Jermaine is a student that enjoys coding in his free time. He has 12 internships offers.</p>
                                    <a href="#" className="btn btn-outline-secondary" style="text-decoration: underline;">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>

    <div className="profile__panel-two">
        <div className="container">
            <footer className="footer py-3 text-white" style="background-color: #1d2522;">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>EXPerience</h5>
                            <p>A 2024 startup designed at King's College.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Shortcuts</h5>
                            <ul className="list-group">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Sign-in</a></li>
                            </ul>
                            <br>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 text-center">
                            <p>&copy; 2024 EXPerience. All rights reserved by Joel, Waseef, Paul, Aman, Haroon.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  );
}

export default Profile;