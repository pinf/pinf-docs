Terminology
===========

  * **Person** - A being capable of using a computer to access a *Toolchain* or *Application*.

  * **Toolchain** - Everything needed to build an *Application*.

    * **Context** - 

  * **Codebase** - The complete source code and associated meta data of an *Application*.

    * **Goals** - The features that a *Program*, *Package* or *Module* must implement.

    * **Project** - A subset of *Programs* and *Packages* from the *Codebase* that together achieve specific *Goals*.

    * **Context** - 

    * **Program** - 

    * **Package** - 

    * **Module** - 

  * **Application** - The result of applying the *Codebase* to fulfill a *Purpose*. 

    * **Purpose** - The reason for existence of the *Application*.

    * **Goals** - The features that a *Program*, *Package* or *Module* must implement to fulfill the *Purpose*.

    * **Implementation** - The subset of the *Codebase* that glues together the remaining *Codebase* to achieve specific *Goals*.

    * **Dependencies** - The subset of the *Codebase* that provides *Components* which when combined in *Implementation* meet the *Goals*.

    * **Interface** - All methods that may be used to interact with the *Application*.

    * **UI** - The visual interactive display a *Person* would use to access the *Interface*.

    * **API** - The methods an *Application* would use to access the *Interface*.

    * **Profile** - A set of data that may be used by *Components* to customize the *Interface* for the *User*.

    * **User** - The *Person* or *Application* accessing an *Interface*.

    * **Data** - 

    * **Cache** - 

    * **Context** - 

    * **Component** - An encapsulated unit of functionality with a specified *Interface* that uses a *Codebase* *Package*.

  * **Runtime** - Everything needed to execute an application.

    * **Context** - 

    * **Engine** - The code execution implementation that executes the application and provides APIs to interact with operating system.

    * **State** - 

    * **Context** - 

    * **Sandbox** - 
