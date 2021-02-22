# Welcome Developers

The Abstraction Layer contains a host of methods created by DirectScale that you can use in your custom code.

> [View Abstractions documentation](xref:DirectScale.Disco.Extension)

For example, when creating a custom API:

```csharp
namespace integration.Api
{
    public class TestCustomSources : IApiEndpoint
    {
        private readonly ISourceService _sourceService;
```

This snippet inherits from [IApiEndpoint](xref:DirectScale.Disco.Extension.Api.IApiEndpoint) and uses [ISourceService](xref:DirectScale.Disco.Extension.Services.ISourceService), two interfaces available in the Abstraction Layer. *Click each link to learn more.*

The Abstraction Layer is a public NuGet package included with your [Client Extension](https://developers.directscale.com/docs/what-is-the-client-extension).

> [!NOTE] 
> NuGet Package Link: [DirectScale.Disco.Extension.Abstractions](https://www.nuget.org/packages/DirectScale.Disco.Extension.Abstractions/)

