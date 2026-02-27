import switch_device_1 from '../../../assets/image/networking_device/switch_device_01.png';
import switch_device_2 from '../../../assets/image/networking_device/switch_device_02.png';
import switch_device_3 from '../../../assets/image/networking_device/switch_device_03.png';

const data = [
  {
    id: "sdn-switch",  
    linkTo: '/products/networking-devices/sdn-switch',
    title: 'SDN Switch',
    image: switch_device_1,
    features: [
        'Developed on FPGA and ARM processor technology.',
        'Data Plane switching functions - OpenFlow 1.3 - 1.3.4 implemented on FPGA.',
        'Control Plane functions implemented on ARMs, fully self-developed.',
        'Self-build OS, self-develop Firmware, Driver, fully self-integrate the system.',
        'Hardware options: Self-purchase components, design, and produce boards; or buy white boards and implement.',
        'Company design orientation: Design with sufficient strong specifications and competitive pricing. Fully self-reliant on solutions and technology.'
        ]
    },

    {
    id: "Layer-2-3-4-Switch",
    linkTo: '/products/networking-devices/layer-2-3-4-switch',
    title: 'Layer 2/3/4 Switch',
    image: switch_device_2,
    features: [
        'Developed on FPGA and ARM processor technology.',
        'Layer 2 switching functions - MAC',
        'Layer 3 switching functions - IP routing',
        'Layer 4 switching functions - Protocol',
        'Control Plane functions implemented on ARMs, fully self-developed',
        'Self-build OS, self-develop Firmware, Driver, fully self-integrate the system.',
        'Configurations: 8 Ports; 16 Ports, 24 Ports - 10/100/1G and 10G SFP.'
        ]
    },

    {
    id: "BGS",
    title: 'BGS - Bidirection Gate Security',
    linkTo: '/',
    image: switch_device_3,
    features: [
        'Develop a device with internal-external network structure, allowing comprehensive data transmission, specifically:',
        'Isolate two networks from Layer 1 - Layer 4; seamless from Layer 5 - Layer 7',
        'Establish Air-Gap in between, with functions to recreate Layer 1-4 functions between internal and external networks.',
        'Develop data storage base between two networks, ensuring safety during file data transmission',
        'The device ensures security for:',
        '- Small systems: thousands of connections, bandwidth 1G-5G',
        '- Medium systems: tens of thousands of connections, bandwidth 5G -10G',
        '- Medium systems: tens of thousands of connections, bandwidth 5G -10G'
        ]
    }
]

export { data };