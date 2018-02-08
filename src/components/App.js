import React from 'react'
import {Link, browserHistory} from 'react-router'

export default function App({children}) {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
              <a class="navbar-brand" href="#"><Link to="/">React Demo</Link></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link"><Link to="/message">MessageBoard</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled"><Link to="/todo">Todo</Link></a>
                  </li>
                  <li class="nav-item dropdown" style={{display:'none'}}>
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown03">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <form class="form-inline my-2 my-md-0" style={{display:'none'}}>
                  <input class="form-control" type="text" placeholder="Search"/>
                </form>
              </div>
            </nav>
            <div style={{display:'none'}}>
                <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
            </div>
            <div style={{marginTop: '1.5em'}}>{children}</div>
        </div>
    )
}
