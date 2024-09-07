import { FC, ReactNode, createContext, useContext, useState } from "react";
import { language, languageState, startedSnippet } from "../interfaces/select.lan.context";
const Lanaguage = createContext<languageState | null>(null);
export const useLanguage = () => {
    const context = useContext(Lanaguage)
    if (!context) {
        throw new Error("useLanguage must be used within a LanaguageProvider")
    }
    return context
};
const LanguageContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [lan, setLan] = useState<language>({
        language: 'python',
        snippet: ``,
        Output:{language:'',output:''},
        userInput:undefined
    })
    return (
        <Lanaguage.Provider value={{ lan, setLan }}>
            {children}
        </Lanaguage.Provider>
    )
}
// started snippet
export const def_code: startedSnippet = {
    c: `#include <stdio.h>
      int main() {
         printf("Hello, World! ❓");
         return 0;
      }`,
    python: `# some example\nprint("Hello World")`,
    javascript: `//some code snippet\nconsole.log("Hello javascript 💐");`,
    typescript: 
`function Say(){
    console.log("Hello, Typescript 💐")
}
Say();
    `,
    java:
        `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");

        int userInput = scanner.nextInt();
        System.out.println("You entered: " + userInput);
        
        scanner.close();
    }
}
      `,
    cpp:
        `// Your First C++ Program
      #include <iostream>
      int main() {
          std::cout << "Hello World! 🔖";
          return 0;
      }
      `,
    html: 
`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
    `
};

export default LanguageContext;