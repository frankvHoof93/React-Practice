const validationComponent = (props) => {
    const minLength = 5;
    return props.length >= minLength ? 'Text long enough' : 'Text too short';
}

export default validationComponent;