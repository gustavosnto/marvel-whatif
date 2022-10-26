import {styled} from '../../styles'
import { Cointainer } from '../../styles/global'

export const HeaderStyle =styled("header", {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 96,
    borderBottom: '1px solid rgba(255, 255, 255, 0.2);',
    display: 'flex',
    alignItems: 'center',
    zIndex: 99,
    [`${Cointainer}`]: {
        height: '100%',
        borderLeft: '1px solid rgba(255, 255, 255, 0.2);',
        borderRight: '1px solid rgba(255, 255, 255, 0.2);',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ".logo": {
        position: 'relative',
        paddingLeft: 23,
        "&::before": {
            content: '',
            background: '$red800',
            boxShadow: '0px 2px 4px rgba(255, 4, 13, 0.16)',
            position: 'absolute',
            bottom: -28,
            left: 23,
            width: 104,
            height: 1,
        }
    },
    ".code": {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        padding: '0 23px',
        borderLeft: '1px solid rgba(255, 255, 255, 0.2);',
    }
})