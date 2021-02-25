import { Field } from 'react-final-form'

const PageThree = () => {
    return (
        <>
            <div>
                <label>Favorite Color</label>
                <Field name="favoriteColor" component="select">
                    <option />
                    <option value="#ff0000">❤️ Red</option>
                    <option value="#00ff00">💚 Green</option>
                    <option value="#0000ff">💙 Blue</option>
                </Field>
            </div>
            <div>
                <label>Category 2</label>
                <Field name="favoriteColor" component="select">
                    <option />
                    <option></option>
                    <option></option>
                    <option></option>
                </Field>
            </div>
            <div>
                <label>Category 3</label>
                <Field name="favoriteColor" component="select">
                    <option />
                    <option></option>
                    <option></option>
                    <option></option>
                </Field>
            </div>
        </>
    )
}



export default PageThree