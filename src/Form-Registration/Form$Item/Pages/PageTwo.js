import { Field } from 'react-final-form'

const PageOne = () => {
    return (
        <>
            <div>
                <label>Country</label>
                <Field
                    name="country"
                    component="input"
                    type="text"
                    placeholder="Country"
                />
            </div>
            <div>
            <label>City</label>
                <Field
                    name="city"
                    component="input"
                    type="text"
                    placeholder="City"
                />
            </div>
            <div>
                <label>Adress</label>
                <Field
                    name="adress"
                    component="input"
                    type="text"
                    placeholder="Adress"
                />
            </div>
        </>
    )
}

export default PageOne