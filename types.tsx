export interface WatchRecord {
  id: string;
  name: string;
  seen: boolean;
  timestamp?: string;
}

export interface WatchEvent {
  id: string;
  name: string;
  date: string;
  watchRecords: WatchRecord[];
}

export type RootStackParamList = {
  "Edit Watch Record": {
    record: WatchRecord;
  };
  Events: {
    events: string[];
  };
  Event: {
    event: WatchEvent;
  };
};
