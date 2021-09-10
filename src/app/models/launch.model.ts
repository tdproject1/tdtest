
export interface IRocket {
    rocket_id: string,
    rocket_name: string,
    rocket_type: string,
    first_stage: {
        cores: [{
            reused: boolean;
        }]
    };
    second_stage: {
        payloads: [{
            reused: boolean;
        }]
    };
    fairings: {
        reused: boolean;
    }
}

export interface ILaunch {
    flight_number: number;
    mission_name: string;
    launch_date_utc: Date;
    rocket: IRocket;
    launch_success: boolean;
    links: {
        mission_patch_small: string
    };
}
