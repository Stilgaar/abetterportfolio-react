import { navbar } from '../../JSON/Array'

function Navbar() {

    return (

        <nav className="navbar mb-2">
            <div className="ml-2 mr-2 m-1 p-1 container-nav">
                <h1 className="site-title">
                    Jeff van Straelen Portfolio
                </h1>
                <ul className="display-f">
                    {navbar.map((i, index) => (
                        <div key={index} >
                            {i.cv ? <li className="ml-1 fb-br text-hover-white col-12-md">
                                <a href={i.href} download>{i.title}</a></li>
                                : <li className="ml-1 fb-br text-hover-white col-12-md">
                                    <a href={`#${i.href}`}>{i.title}</a></li>
                            }

                        </div>
                    ))}
                </ul>
            </div>
            <div className="hidden">
                <div className="ml-2 mr-2 container">
                    <h1 className="site-title">
                        Jf vS Porfolio
                    </h1>
                    <ul className="display-f fd-c">
                        {navbar.map((i, index) => (
                            <div key={index} >
                                {i.cv ? <li className="ml-1 fb-br text-hover-white col-12-md">
                                    <a href={i.href} download>{i.title}</a></li>
                                    : <li className="ml-1 fb-br text-hover-white col-12-md">
                                        <a href={`#${i.href}`}>{i.title}</a></li>
                                }
                            </div>

                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export { Navbar as default }