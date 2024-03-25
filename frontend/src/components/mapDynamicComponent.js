"use client"
import { useEffect, useReducer, useRef, useState } from "react";
import { key } from '../key';

const option = {
    authOptions: {
        authType: key
    }
};
export default function MapComponent() {
    const reactMapRef = useRef(null);
    const [key, setKey] = useState("");
    const forceUpdate = useReducer(() => ({}), {})[1];

    useEffect(() => {
        import("react-azure-maps").then(module => {
            reactMapRef.current = module;
            forceUpdate();
        });
    }, []);

    return (
        <div>
            {!key && (
                <div>
                    <form
                        onSubmit={v => {
                            setKey(v.target[0].value);
                        }}
                    >
                        <label htmlFor="key">Subscription Key  </label>
                        <input
                            id="key"
                            name="key"
                            type="text"
                            autoComplete="azure-maps-key"
                            required
                        />
                        <button type="submit">Add key</button>
                    </form>
                </div>
            )}
            {!!reactMapRef.current && key && (
                <div>
                    <p>Module is ready</p>
                    <div style={{ height: "300px" }}>
                        <reactMapRef.current.AzureMapsProvider>
                            <reactMapRef.current.AzureMap
                                options={{
                                    option,
                                    ...{ ...option.authType, ...{ subscriptionKey: key } }
                                }}
                            />
                        </reactMapRef.current.AzureMapsProvider>
                    </div>
                </div>
            )}
        </div>
    );
}