import {Source} from "@/news/model/source.entity.js";
import {LogoApiService} from "@/shared/logo-api.service.js";

const logoApi = new LogoApiService();

export class SourceAssembler {
    static toEntitiesFromResponse(response) {
        if (response.data.status !== "ok") {
            console.error(`${response.status}, ${response.code}, ${response.message}`);
            return [];
        }
        const sourceResponse = response.data;
        return sourceResponse.sources.map((source) => {
            return this.toEntityFromResponse(source);
        })
    }

    static toEntityFromResponse(resource) {
        let source = new Source({...resource});
        source.urlToLogo = source.url !== '' ? logoApi.getUrlToLogo(source) : '';
        return source;
    }
}