import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Tabs from './Tabs.jsx';

export default function () {
    const [selectedTopic, setSelectedTopic] = useState();

    function onClickHere(key) {
        // string => 'components', 'jsx', ...
        setSelectedTopic(key); // request to updata a value.
        // console.log(selectedTopic); // previous value before update.
    }

    const tabContent = (selectedTopic ? <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>
            {EXAMPLES[selectedTopic].code}
        </code></pre>
    </div> : <p>Please Select a Topic!</p>);

    return (<Section title="Examples" id="examples">
        <Tabs
            wrapperkind="menu"
            buttons={<>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => onClickHere('components')}>Components</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => onClickHere('jsx')}>JSX</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => onClickHere('props')}>Props</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => onClickHere('state')}>States</TabButton>
            </>}>{tabContent}</Tabs>
    </Section>);
}