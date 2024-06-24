import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Formik = () => {
	const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm()
        }
    });
	return (
		<div>
			<form>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						placeholder="First Name"
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
					/>
				</div>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						placeholder="First Name"
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
					/>
				</div>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						Email
					</label>
					<input
						type="text"
						name="email"
						placeholder="First Name"
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.email}
					/>
				</div>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						Password
					</label>
					<input
						type="text"
						name="password"
						placeholder="First Name"
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.password}
					/>
				</div>
				<div className="text-center w-[30%] mx-auto">
					<button className="bg-gray-800 text-white w-full py-2 rounded">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Formik;
