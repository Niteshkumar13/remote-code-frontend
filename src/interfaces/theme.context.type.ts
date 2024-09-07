export interface ThemeState {
    header: string
    body: string
    slider: string
    textColor: string
    output:string
}

export interface ChangeState {
    allTheme: ThemeState,
    setAllTheme: React.Dispatch<ThemeState>
}