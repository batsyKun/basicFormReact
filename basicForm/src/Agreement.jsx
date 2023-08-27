const Agreement = ({ handleChange, formData }) => {
    return ( 
        <>
            <label htmlFor="agreement">I agree to the terms and conditions:</label>
            <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
            /><br />
        </>
   );
}

export default Agreement;
