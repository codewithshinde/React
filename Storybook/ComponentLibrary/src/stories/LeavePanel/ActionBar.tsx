import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Panel } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@fluentui/react-hooks';

const ActionBar: React.FunctionComponent = () => {
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

    return (
        <div>
            <DefaultButton text="Apply Leave" onClick={openPanel} />
            <Panel
                headerText="Sample panel"
                isOpen={isOpen}
                onDismiss={dismissPanel}
                // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
                closeButtonAriaLabel="Close"
            >
                <p>Content goes here.</p>
            </Panel>
        </div>
    );
};

export default ActionBar;
