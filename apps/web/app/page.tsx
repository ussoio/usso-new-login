import { Button } from "@workspace/ui/components/button";
import axios from "axios";

import { Configuration, AuthenticationApi } from "@workspace/usso/production";
const configuration = new Configuration();
const authenticationApi = new AuthenticationApi(configuration, configuration.basePath, axios);

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Hello World</h1>
                <Button size="sm">Button</Button>
            </div>
        </div>
    );
}
