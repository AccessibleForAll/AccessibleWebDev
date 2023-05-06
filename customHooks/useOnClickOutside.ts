import { RefObject } from "react"
import { useEventListener } from "usehooks-ts"

type Handler = (event: MouseEvent) => void

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
	ulref: RefObject<T>,
	buttonref: RefObject<HTMLButtonElement>,
	handler: Handler,
	mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
	useEventListener(mouseEvent, (event) => {
		// Do nothing if clicking ref's element or descendent elements
		if (
			ulref?.current?.contains(event.target as Node) ||
			buttonref?.current?.contains(event.target as Node)
		) {
			return
		}

		handler(event)
	})
}

export default useOnClickOutside
