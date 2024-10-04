const FormCard = ({question}, {placeholder}) => {
    return (
        <>
            <div className="container-sm">
                <form>
                    <label className="mt-3" style={{minHeight: "40vh"}}>
                        <p>{ question }</p>
                        <textarea 
                            style={{width: "100%", }} 
                            className="mt-3"
                            defaultValue={placeholder}
                            rows={1}
                            />
                    </label>
                    <hr></hr>
                </form>
            </div>
        </>
    )
}

export default FormCard;