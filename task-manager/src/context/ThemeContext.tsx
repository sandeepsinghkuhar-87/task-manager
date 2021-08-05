import React from "react";

export type ThemeType = "light" | "dark";

interface ThemeInfo {
	background: string;
	color: string;
}

const Themes: Record<ThemeType, ThemeInfo> = {
	light: {
		background: "#fff",
		color: "#000"
	},
	dark: {
		background: "#000",
		color: "#fff"
	}
};

interface ThemeContextData {
	themeType: ThemeType;
	themeInfo: ThemeInfo;
	setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = React.createContext<ThemeContextData>({
	themeType: "light",
	themeInfo: Themes["light"],
	setTheme: (theme) => {}
});

export const ThemeProvider: React.FC = ({ children }) => {
	const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");
	return (
		<ThemeContext.Provider
			value={{
				themeType: currentTheme,
				themeInfo: Themes[currentTheme],
				setTheme: setCurrentTheme
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
