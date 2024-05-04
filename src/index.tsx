/* @refresh reload */
import { render } from 'solid-js/web';
import { Tooltip } from '@kobalte/core/tooltip';

const root = document.getElementById('root');

render(
	() => (
		<Tooltip openDelay={0} closeDelay={0} ignoreSafeArea>
			<Tooltip.Trigger>Trigger</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content>Content</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip>
	),
	root!
);
