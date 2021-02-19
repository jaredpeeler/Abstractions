The **Abstraction Layer** is a public [NuGet](https://www.nuget.org/packages/DirectScale.Disco.Extension.Abstractions/) package. The Abstraction Layer contains a host of methods created by DirectScale that you can use in your own custom code.

For example, when creating a custom API:

```
namespace integration.Api
{
    public class TestCustomSources : IApiEndpoint
    {
        private readonly ISourceService _sourceService;
```

This snippet inherits from [IApiEndpoint](api/DirectScale.Disco.Extension.Api.IApiEndpoint.html) and uses [ISourceService](api/DirectScale.Disco.Extension.Services.ISourceService.html). Click each link to learn more.

The Abstractions is a public NuGet package included with your [Client Extension](https://developers.directscale.com/docs/what-is-the-client-extension).

> NuGet Package Link: [DirectScale.Disco.Extension.Abstractions](https://www.nuget.org/packages/DirectScale.Disco.Extension.Abstractions/)