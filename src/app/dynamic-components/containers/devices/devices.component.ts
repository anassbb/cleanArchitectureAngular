import { TreeViewComponent } from "./../../components/tree-view/tree-view.component";
import { BlueDeviceComponent } from "./../../components/blue-device/blue-device.component";
import { GreenDeviceComponent } from "./../../components/green-device/green-device.component";
import { RedDeviceComponent } from "./../../components/red-device/red-device.component";
import { ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
})
export class DevicesComponent implements OnInit, OnDestroy {
  @ViewChild("dynamicLoadDevicesComponenet", { read: ViewContainerRef, static: true }) public entry: ViewContainerRef;
  ComponentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.createComponent("green");
  }

  public createComponent(type: string) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(this.defineComponent(type));
    this.ComponentRef = this.entry.createComponent(factory);
  }

  public defineComponent(type: string) {
    return {
      red: RedDeviceComponent,
      green: GreenDeviceComponent,
      blue: BlueDeviceComponent,
      tree: TreeViewComponent,
    }[type];
  }

  ngOnDestroy(): void {
    this.ComponentRef.destroy();
  }
}
