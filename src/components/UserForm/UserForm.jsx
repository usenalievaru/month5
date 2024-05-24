import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

const UserForm = () => {
    const dispatch = useDispatch()
    const {register,handleSubmit,reset} = useForm()
    const sendUser = (data) => {
        dispatch({type:'UPDATE_USER', payload: {name: data.name, age:data.age, gender:data.gender, profile:data.status}})
    }

    return (
        <form onSubmit={handleSubmit(sendUser)}>
            <input
                type="text"
                placeholder='name'
                {...register('name')}
            />
            <input
                type="number"
                placeholder='age'
                {...register('age')}

            />
            <select
                {...register('gender')}
            >
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <select
                {...register('status')}
            >
                <option value="public">public</option>
                <option value="private">private</option>
            </select>
            <input type="submit"/>
        </form>
    );
};

export default UserForm;