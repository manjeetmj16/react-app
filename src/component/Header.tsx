import svg from "./svg"

export default function Header() {
    return (
        <>
            <div className='rz_mainHeader'>
                <div className='ps_conatiner-fluid'>
                    <div className='row'>
                        <div className='col-md-2 col-2'>
                            <div className='rz_logo'>
                                {/* <Link href="/">
                                    <span>{svg.app.logo}</span>
                                </Link> */}
                            </div>
                        </div>
                        <div className='col-md-8 px-0 col-8'>
                            <div className="rz_navMenu">
                                <div className='rz_nav_box'>
                                    {/* <div className={`rz_menuOverlay ${state.toggleBtn == true ? 'rz_show' : 'rz_hide'}`}
                                        onClick={() => 
                                            setMyState(setQuery, { toggleBtn: !state.toggleBtn }
                                                )}
                                    ></div> */}
                                    <div id="navbarScroll" className={'navbarScroll openMenu'} >
                                        <a className='navBarToggle'  >
                                            <span></span>
                                        </a>
                                        <ul
                                            className="navbar-scroll"
                                            style={{ maxHeight: '100px' }}
                                        >
                                            {/* { userData.role == 'User' ?  <> */}
                                            <li>
                                                <a onClick={(e) => {
                                                    // changePage(e, "/dashboard")
                                                }}
                                                    className={"nav-link active"}
                                                >
                                                    <span>{svg.app.dashBoard}</span>Dashboard
                                                </a>
                                            </li>

                                            <li>
                                                <a onClick={(e) => {
                                                    // changePage(e, "/create_post")
                                                }} className={"nav-link "}>
                                                    <span>{svg.app.create_post}</span>Create Post
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={(e) => {
                                                }} className={"nav-link "}>
                                                    <span>{svg.app.myReels}</span>Calendar
                                                </a>
                                            </li>
                                            {/* <li>
                                                            <a onClick={(e) => {
                                                            }} className={isActive("/Integrations") ? "nav-link active" : "nav-link "}>
                                                                <span>{svg.app.integration}</span>Integrations
                                                            </a>
                                                        </li> */}

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-2 col-2'>
                            <div className='rz_rightHeader'>


                                <div className='rz_profileDropdown'>
                                    <div className='rz_userDropdown'>
                                        {/* { userData.profile ? <span className='rz_userImg'> <img src={userData?.profile}/>    </span>
                                        :<span className='rz_userImg'> <img src='../assets/images/default_pro.png' /></span>}
                                        <p>{userData?.name}</p> */}
                                        <div style={{ marginLeft: "5px" }}>
                                            {svg.app.profile_dropdown}
                                            <div className='rz_dropdownHolder'>
                                                <ul>
                                                    <li><a className='rz_listMenu' onClick={(e) => {
                                                        // changePage(e, "/profile")
                                                    }}>My Account</a></li>

                                                    {/* <li><a className='rz_listMenu'>Account Setting</a></li> */}
                                                    <li>
                                                        <a className='rz_listMenu' onClick={() => { }}>
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}