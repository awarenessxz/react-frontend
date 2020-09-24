/*
const PLACEHOLDER_KEY = "{{placeholder}}";

const defaultMenuItems = {
    items: [
        {
            id: _.uniqueId('nav-store-'),
            title: 'search',
            icon: 'something',
            route: '/'
            items: PLACEHOLDER_KEY
        }
    ]
};

const getCurrentROute = () => {
    window.location.hash.replace(/#/, '');
};

// object for checking menu item state
export const menuItemStateHelper = {
    isOpen: menuItem => {
        const path = getCurrentROute();
        const pathname = path[0] === '/' && path.length !== 1 ? path.substr(1): path;
        return _.startswidth(pathname, menuitem.route) || menuItemStateHelper.hasOpenChildren(menuItem)
    },
    hasOpenchild: menuItem => _.some(menuitem.items, child => menuItemStateHelper.isOpen(child)),
    isActive: menuItem => getCurrentROute() === menuItem.route || (menuItemStateHelper.isOpen(menuItem) && !menuItem.parent),
    isSibling: (menuItemA, menuItemB) => menuItemA.id !== menuItemB.id && menuItemA.parent && _.some(menuItemA.parent.items, child => child.id === menuItemB.id && child.id !== menuItemA.id),
    isParentOf: (menuItemA, menuItemB) => menuItemA.items && _.some(menuItemA.items, _item => _item.id === menuItemB.id || menuItemStateHelper.isParentOf(_item, menuItemB)),
};
 */