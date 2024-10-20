import { Button } from "@chakra-ui/react"
import React from "react"

interface ILoadingButton {
    text: string
    loadingText: string
    colorScheme?: string
    variant?: string
    width?: string
    onClick?: () => void
}


export const LoadingButton = ({ text, loadingText, colorScheme = 'teal', variant = 'solid', width, onClick }: ILoadingButton) => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => {
        setShow(!show)
        if(typeof onClick === "function")
            onClick()
    }
    return (
        <Button
            // isLoading={show}
            loadingText={loadingText}
            colorScheme={colorScheme}
            variant={variant}
            onClick={handleClick}
            width={width}
        >
            {text}
        </Button>
    )
}