import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import { connect } from 'react-redux';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;

    const onChange = (e:any) => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = (e:any) => {
        e.preventDefault();

        // login(email,password)
    };
    return(
        <div>
            
        </div>
    )

};

export default connect()(Login);