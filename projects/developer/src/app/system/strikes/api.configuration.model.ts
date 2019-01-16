export class StrikeConfiguration {
    private static build(data) {
        if (data) {
            return new StrikeConfiguration(
                data.workspace,
                data.monitor,
                data.files_to_ingest
            );
        }
    }
    public static transformer(data) {
        if (data) {
            return StrikeConfiguration.build(data);
        }
        return null;
    }
    constructor(
        public workspace: string,
        public monitor: any,
        public files_to_ingest: any
    ) {}
}
