import RichTextPageContent from "@components/RichTextPageContent";

export default function Form(props) {
    const { formData } = props;
    const { formFieldsCollection } = formData;
    
    return (
        <section>
            <h1>{formData.formTitle}</h1>
            <RichTextPageContent richTextBodyField={formData.formDescription} />
            <form>
            {
                formFieldsCollection.items.map(formField => {
                    return <input 
                        placeholder={formField.placeholder} 
                        title={formField.title}
                    />
                })
            }
            <button type="submit" onSubmit={console.log("submit")}>{formData.submitButton}</button>
            </form>
        </section>
    );
}