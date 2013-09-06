Introduction
============

PINF is a toolchain platform that can host and interface with toolchains and the applications built with them.

The idea is that PINF is your **one root* toolchain from which you work on everything you do.

To achieve this,
PINF relies on a fundamental set of cross-domain standards that allow disparate code to run conflict-free within the same runtime.
These standards that center around composing programs out of packages which hold modules give rise to meta data that
is used to identify every aspect of a system.

The meta data is used by tooling to manipulate components externally and may be used by components internally
to obtain specific namespaces within the context of the whole application.

PINF is implemented in three layers:

  1) The **host** layer that provides the environment a toolchain and applications built with it run in.

  2) The **runtime** layer that can be integrated into the toolchain and applications built with it to interface with PINF.

  3) The **social** layer that collates meta data resulting from the interaction of the codebase with its community of users.

All layers must be available when developing an application. When fully integrated, any dependencies an application requires
are provisioned automatically and asynchronously as they are encountered.

Upon publishing the bundling process drastically reduces the host and runtime layers and trims the cached meta data
to produce optimized targeted distributions. PINF does this by taking all components from their *source* contexts and
re-assembling them into streamlined *runtime* contexts.

When PINF is fully leveraged, distributions made up of dynamically linked bundles that hold statically linked modules
may be generated just in time from any codebase.

LINKS:

  * https://github.com/pinf/require.async


Host Layer
----------

  * `PINF_*` UNIX environment variables
  * Dependency management
  * Runtime lifecycle management
  * Distribution


Runtime Layer
-------------

  * Module Loader
  * Insight Logging
  * Wildfire Communication
  * PINF [Contexts](./Contexts.md)


Roadmap
-------

The current focus of PINF is on JavaScript and more specifically NodeJS. This will expand
to PHP and other JavaScript runtimes in time. The goal is to eventually support
many different programming languages and runtimes.
