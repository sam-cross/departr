import PropTypes from 'prop-types';

type InferPropTypes<
    PropTypes,
    DefaultProps = {},
    Props = PropTypes.InferProps<PropTypes>
    > = {
        [Key in keyof Props]: Key extends keyof DefaultProps
        ? Props[Key] | DefaultProps[Key]
        : Props[Key]
    };

export default InferPropTypes;