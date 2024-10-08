import { Dropin as DropinComponent, AdyenCheckout, components } from '../../../src';
import { MetaConfiguration, PaymentMethodStoryProps, StoryConfiguration } from '../types';
import { Container } from '../Container';
import { DropinConfiguration } from '../../../src/components/Dropin/types';
import { getStoryContextCheckout } from '../../utils/get-story-context-checkout';
import './customization.scss';

type DropinStory = StoryConfiguration<DropinConfiguration>;

const meta: MetaConfiguration<DropinConfiguration> = {
    title: 'Dropin/Default',
    argTypes: {
        componentConfiguration: {
            control: 'object'
        }
    },
    args: {
        componentConfiguration: {
            showRadioButton: false,
            instantPaymentTypes: ['googlepay'],
            showRemovePaymentMethodButton: false,
            paymentMethodsConfiguration: {
                googlepay: {
                    buttonType: 'plain'
                }
            }
        }
    }
};

export const Auto: DropinStory = {
    render: (args: PaymentMethodStoryProps<DropinConfiguration>, context) => {
        const { componentConfiguration } = args;

        // Register all Components
        const { Dropin, ...Components } = components;
        const Classes = Object.keys(Components).map(key => Components[key]);
        AdyenCheckout.register(...Classes);

        const checkout = getStoryContextCheckout(context);
        const dropin = new DropinComponent(checkout, componentConfiguration);
        return <Container element={dropin} />;
    }
};

export const StyleCustomization: DropinStory = {
    render: (args: PaymentMethodStoryProps<DropinConfiguration>, context) => {
        const { componentConfiguration } = args;
        // Register all Components
        const { Dropin, ...Components } = components;
        const Classes = Object.keys(Components).map(key => Components[key]);
        AdyenCheckout.register(...Classes);

        const checkout = getStoryContextCheckout(context);
        const dropin = new DropinComponent(checkout, componentConfiguration);
        return (
            <div className={'dropin-customization'}>
                <Container element={dropin} />
            </div>
        );
    }
};

export default meta;
