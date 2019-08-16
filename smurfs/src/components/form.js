import React from "react";
import axios from "axios"
import {Form, Field, withFormik} from "formik"
import * as Yup from 'yup';



const SmurfForm = ({errors, touched}) => {
    
    return (
        <>
            <Form>
                <Field type= "text" name = "name" placeholder = "Smurf's Name"></Field>
                {touched.name && errors.name && <p >{errors.name}</p>}
                <Field type= "text" name = "age" placeholder = "Smurf's Age"></Field>
                {touched.age && errors.age && <p >{errors.age}</p>}
                <Field type= "text" name = "height" placeholder = "Smurf's Height"></Field>
                {touched.height && errors.height && <p >{errors.height}</p>}
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({name, age, height}){
        return {
            name: name || "",
            age: age || "",
            height: height || "",
        }
    },

    validationShema: Yup.object().shape({
        name: Yup.string().required("Name is required"),
        age: Yup.string().required("Age is required" ),
        height: Yup.string().required("height is required" )
    }),
    handleSubmit(values, {resetForm}){
        axios
            .post("http://localhost:3333/smurfs", values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        resetForm()
    }

})(SmurfForm);

export default FormikSmurfForm;