declare namespace SingleTaskViewProp {
    interface TaskInfoProps {
        Name?: string = null;
        ExitCode?: int32 = null;
        ScriptPath?: string = null;
        Script?: string = null;
        FinishedTime?: Date = null;
        CreateTime?: Date = null;
    }
}