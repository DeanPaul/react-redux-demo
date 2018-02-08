import React from 'react'
import {Link, browserHistory} from 'react-router'

export default function App({children}) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand active">React Demo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03"
                        aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/message" className="nav-link">MessageBoard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/todo" className="nav-link disabled">Todo</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0" style={{display: 'none'}}>
                        <input className="form-control" type="text" placeholder="Search"/>
                    </form>
                </div>
            </nav>
            <div style={{display: 'none'}}>
                <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
            </div>
            <div style={{marginTop: '1.5em'}}>{children}</div>
        </div>
    )
}
