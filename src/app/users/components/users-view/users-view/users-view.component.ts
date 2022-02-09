import { ChangeDetectionStrategy, Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "app-users-view",
  templateUrl: "./users-view.component.html",
  styleUrls: ["./users-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersViewComponent {
  @Input() users: any[] = [];
  @Input() userTemplate: TemplateRef<HTMLElement>;
}
