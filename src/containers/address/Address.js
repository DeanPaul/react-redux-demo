import React from "react";
import AddressController from './AddressController';
import SearchBar from "../../components/address/SearchBar";
import AddressList from "../../components/address/AddressList";

class Address extends React.Component {
    render() { // Every react component has a render method.
        return ( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <div>
                Hello World Address
                <AddressController {...props}>
                    <SearchBar/>
                    <AddressList/>
                </AddressController>
            </div>
        );
    }
}

export default Address;
