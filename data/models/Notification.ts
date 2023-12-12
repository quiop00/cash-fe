export class Notification {
    id: number;
    title: String;
    content: String;
    image: String;
    smallIcon: String;
    status: String;
    type: String;
    noticeAt: String;
}

export const NotificationType = [
    'DAILY',
    'WEEKLY',
    'MONTHLY',
    'CUSTOM'
]