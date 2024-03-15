export default function ({ children, buttons, wrapperkind = 'menu' }) {
    const Wrapper = wrapperkind;
    return <>
        <Wrapper>
            {buttons}
        </Wrapper>
        {children}
    </>;
}