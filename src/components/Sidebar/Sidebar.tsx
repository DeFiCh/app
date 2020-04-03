import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  NavLink as RRNavLink,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { I18n } from "react-redux-i18n";
import {
  MdAccountBalanceWallet,
  MdDns,
  MdViewWeek,
  MdCompareArrows
} from "react-icons/md";
import styles from "./Sidebar.module.scss";
import { SidebarProps, SidebarState } from "./Sidebar.interface";

class Sidebar extends Component<
  SidebarProps & RouteComponentProps,
  SidebarState
> {
  state = {
    balance: {
      available: "1,000"
    }
  };

  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.balance}>
          <div className={styles.balanceLabel}>
            {I18n.t("components.sideBar.balance")}
          </div>
          <div className={styles.balanceValue}>
            {this.state.balance.available} {I18n.t("components.sideBar.dfi")}
          </div>
        </div>
        <div className={styles.navs}>
          <Nav className={`${styles.navMain} flex-column nav-pills`}>
            <NavItem className={styles.navItem}>
              <NavLink
                to="/"
                exact
                tag={RRNavLink}
                className={styles.navLink}
                activeClassName={styles.active}
                isActive={(match, location) => {
                  return (
                    location.pathname.startsWith("/wallet") ||
                    location.pathname === "/"
                  );
                }}
              >
                <MdAccountBalanceWallet />
                {I18n.t("components.sideBar.wallet")}
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItem}>
              <NavLink
                to="/masternodes"
                tag={RRNavLink}
                className={styles.navLink}
                activeClassName={styles.active}
              >
                <MdDns />
                {I18n.t("components.sideBar.masterNodes")}
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItem}>
              <NavLink
                to="/blockchain"
                tag={RRNavLink}
                className={styles.navLink}
                activeClassName={styles.active}
              >
                <MdViewWeek />
                {I18n.t("components.sideBar.blockchain")}
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItem}>
              <NavLink
                to="/exchange"
                tag={RRNavLink}
                className={styles.navLink}
                activeClassName={styles.active}
              >
                <MdCompareArrows />
                {I18n.t("components.sideBar.exchange")}
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className={`${styles.navSub} flex-column nav-pills`}>
            <NavItem className={styles.navItem}>
              <NavLink
                to="/help"
                tag={RRNavLink}
                className={styles.navLink}
                activeClassName={styles.active}
              >
                {I18n.t("components.sideBar.help")}
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItem}>
              <NavLink
                to="/settings"
                tag={RRNavLink}
                className={styles.navLink}
                activeClassName={styles.active}
              >
                {I18n.t("components.sideBar.settings")}
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
