import React, { Component } from 'react';
import './DataEntryForm.css'

export default class DataEntryForm extends Component {
    constructor(props) {
        super(props);
        this.provinces = [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Northwest Territories',
            'Nunavut',
            'Yukon',
        ];
        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            terms: false,
            submitted: false,
        };
    }

    onValueChanged = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]:
                event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value,
        });
    };

    onSubmitForm = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
    };

    render() {
        return (
            <div className='container'>
                <h1>Data Entry Form</h1>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                                placeholder="Enter Email "
                                size={"35"}
                            />
                        </div>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                name="name"
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                                placeholder="Full Name"
                                size={"35"}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input
                            name="address"
                            type="text"
                            onChange={(e) => this.onValueChanged(e)}
                            placeholder="1234 Main St"
                        />
                    </div>

                    <div className="form-group">
                        <label>Address 2</label>
                        <input
                            name="address2"
                            type="text"
                            onChange={(e) => this.onValueChanged(e)}
                            placeholder="Apartment, studio, floor"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>City</label>
                            <input
                                name="city"
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Province</label>
                            <select
                                name="province"
                                onChange={(e) => this.onValueChanged(e)}
                            >
                                {this.provinces.map((province) => (
                                    <option
                                        key={province}
                                        value={province}
                                    >
                                        {province}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Postal Code</label>
                            <input
                                name="postalCode"
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            name="terms"
                            type="checkbox"
                            onChange={(e) => this.onValueChanged(e)}
                        />
                        <label htmlFor="terms">
                            I accept the terms and conditions
                        </label>
                    </div>

                    <div className="form-group">
                        <input
                            name="btnSubmit"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>

                {this.state.submitted && (
                    <div className="display-section">
                        <p>Email: {this.state.email}</p>
                        <p>Full Name: {this.state.name}</p>
                        <p>Address: {this.state.address}</p>
                        <p>Apartment, studio, floor: {this.state.address2}</p>
                        <p>City: {this.state.city}</p>
                        <p>Province: {this.state.province}</p>
                        <p>Postal Code: {this.state.postalCode}</p>
                    </div>
                )}
            </div>
        );
    }
}
