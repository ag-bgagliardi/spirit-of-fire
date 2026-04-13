const emailTemplates = {
    "updates": {
        subject: "Signup Successful",
        body: `<p style="padding-top: 16px; border-top: 1px solid #eaeaea">Hi {{name}},</p>
                <p>
                    Thank you for signing up for Spirit of Fire updates, we will reach out with upcoming events!
                </p>`,
        id: "template_t8991ij"
    },
    "auditionUser": {
        subject: "{{production}} Audition Notification",
        body: `<p style="padding-top: 16px; border-top: 1px solid #eaeaea">Hi {{name}},</p>
                <p>
                    Thank you for signing up for {{production}} audition notifications, we will reach out as soon as casting calls are open!
                </p>`,
        id: "template_t8991ij"
    },
    "auditionSOF": {
        subject: "{{name}} signed up for {{production}} Audition Notifications",
        body: `<p style="padding-top: 16px; border-top: 1px solid #eaeaea">{{name}} would like to be alerted when casting calls are made for {{production}}</p>
                <p>
                    Phone: {{phone}}
                </p>
                <p>
                    Experience: {{experience}}
                </p>
                <p>
                    Training: {{training}}
                </p>
                <p>
                    Notes: {{note}}
                </p>`,
        id: "template_t8991ij"
    },
    "projectUser": {
        subject: "{{title}} Submission Successful",
        body: `<p style="padding-top: 16px; border-top: 1px solid #eaeaea">Hi {{name}},</p>
                <p>
                    Thank you for submitting your project {{title}}! We have recieved it and will review it soon.
                </p>`,
        id: "template_t8991ij"
    },
    "projectSOF": {
        subject: "{{name}} submitted a {{type}} called {{title}}",
        body: `<p style="padding-top: 16px; border-top: 1px solid #eaeaea">Project Information:</p>
                <p>
                    Type: {{type}}
                </p>
                <p>
                    Title: {{title}}
                </p>
                <p>
                    Description: {{logline}}
                </p>
                <p>
                    Status: {{draft}}
                </p>
                <p>
                    Name: {{name}}
                </p>
                <p>
                    Email: {{email}}
                </p>
                <p>
                    Notes: {{note}}
                </p>`,
        id: "template_t8991ij"
    },
    "crewUser": {
        subject: "Application Submitted",
        body: `<p style="padding-top: 16px; border-top: 1px solid #eaeaea">
                    Thank you {{name}} for applying to our crew! We wlll reach out to you shortly.
                </p>
                <p>
                    You applied for the following roles: {{roles}}.
                </p>`,
        id: "template_t8991ij"
    },
    "crewSOF": {
        subject: "{{name}} Applied to Join the Crew",
        body: `<p style="padding-top: 16px; border-top: 1px solid #eaeaea">{{name}} would like to assist with the following roles</p>
                <p>
                    Roles: {{roles}}
                </p>
                <p>
                    Email: {{email}}
                </p>
                <p>
                    Availability: {{availability}}
                </p>
                <p>
                    Experience: {{experience}}
                </p>
                <p>
                    Notes: {{note}}
                </p>`,
        id: "template_t8991ij"
    },
};
export default emailTemplates;