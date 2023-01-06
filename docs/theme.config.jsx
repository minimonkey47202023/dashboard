import Example from './components/Example'
import Pre from './components/Pre'
import ColorsTable from './components/ColorsTable'
import FlagsTable from './components/FlagsTable'
import PaymentsTable from './components/PaymentsTable'

export default {
  logo: (
		<>
		  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="34"><g fill="none" fillRule="nonzero"><path fill="#212529" d="M54.645 23.75c.21 0 .473.105.631.316.21.21.316.526.316.895 0 .473-.263.842-.737 1.157-.473.316-1.052.474-1.684.474-.947.053-1.842-.21-2.632-.684-.736-.421-1.052-1.421-1.052-2.842v-6.948h-1.158c-.737.053-1.368-.579-1.421-1.315v-.106c0-.368.158-.736.42-1 .264-.263.633-.368 1-.368h1.159v-1.632c0-.42.158-.79.42-1.105a1.24 1.24 0 0 1 1.106-.42c.421 0 .79.157 1.053.42.263.316.42.684.42 1.105v1.632h1.79c.737-.053 1.369.579 1.421 1.316v.105c0 .737-.631 1.368-1.368 1.368h-1.842v6.843c0 .368.105.631.263.789.21.158.421.263.737.263.158 0 .316-.052.579-.105.21-.105.368-.158.579-.158Zm14.737-10.895c.79 0 1.473.632 1.526 1.421v10.79c0 .42-.158.79-.421 1.105-.263.316-.632.421-1.105.421a1.47 1.47 0 0 1-1.053-.42c-.263-.317-.421-.685-.421-1.106a5.663 5.663 0 0 1-1.684 1.263c-.685.316-1.474.526-2.263.526a5.96 5.96 0 0 1-3.158-.894c-.948-.632-1.737-1.474-2.21-2.474a7.842 7.842 0 0 1-.843-3.632c0-1.368.263-2.526.79-3.631.473-1 1.263-1.895 2.21-2.527.947-.579 2-.894 3.105-.894 1.527 0 2.948.526 4.053 1.579 0-.421.158-.79.42-1.106a1.144 1.144 0 0 1 1.054-.42Zm-5.106 11.21c1.106 0 2-.42 2.685-1.21a4.737 4.737 0 0 0 1.052-3c0-1.21-.368-2.21-1.052-3.052a3.316 3.316 0 0 0-2.685-1.21c-1.105 0-1.947.42-2.631 1.21-.684.842-1.053 1.947-1.053 3.052 0 1.21.369 2.21 1 3 .684.79 1.684 1.263 2.684 1.21Zm16.895-11.21a5.96 5.96 0 0 1 3.158.895c.947.632 1.737 1.474 2.21 2.474.58 1.105.843 2.368.843 3.631 0 1.369-.264 2.527-.79 3.632-.474 1-1.263 1.895-2.21 2.526-.948.58-2 .895-3.106.895a5.45 5.45 0 0 1-2.263-.474c-.684-.316-1.263-.684-1.79-1.21v.158c0 .42-.157.79-.42 1.105-.264.316-.632.42-1.106.42-.79 0-1.473-.63-1.526-1.42V9.434c0-.42.158-.79.421-1.105a1.24 1.24 0 0 1 1.105-.421c.421 0 .79.158 1.106.42.263.317.42.685.42 1.106v5.263c.474-.579 1.053-1 1.685-1.315.684-.369 1.474-.527 2.263-.527Zm-.368 11.21c1.105 0 1.947-.42 2.631-1.21.684-.842 1.053-1.947 1.053-3.052 0-1.21-.316-2.21-1-3a3.405 3.405 0 0 0-2.684-1.21c-1.106 0-2 .42-2.685 1.21a4.842 4.842 0 0 0-1.052 3c0 1.21.316 2.21 1.052 3.052.685.79 1.685 1.263 2.685 1.21Zm12.42 1c0 .422-.157.79-.42 1.106-.264.316-.685.421-1.106.421a1.47 1.47 0 0 1-1.052-.42c-.263-.317-.421-.685-.421-1.106V9.434c0-.42.158-.79.42-1.105.317-.316.685-.474 1.106-.421.421 0 .79.158 1.053.42.315.317.42.685.42 1.106v15.632Zm15.422-5.526c0 .422-.158.737-.474 1-.316.264-.632.369-1.053.369h-8.315a3.805 3.805 0 0 0 3.842 3.158c.684 0 1.21-.053 1.631-.21.316-.106.632-.211.948-.422l.473-.263c.264-.158.58-.21.842-.21.369 0 .632.105.895.368s.369.526.369.895c0 .473-.21.894-.685 1.21a6.366 6.366 0 0 1-1.894 1c-.79.263-1.58.421-2.421.421-1.421 0-2.632-.316-3.685-.894-1.052-.58-1.842-1.422-2.42-2.422a6.73 6.73 0 0 1-.843-3.526c0-1.474.316-2.737.895-3.79a6.563 6.563 0 0 1 2.421-2.526c1-.579 2.053-.894 3.21-.894 1.106 0 2.158.315 3.158.894 1.843 1.264 3.106 3.474 3.106 5.842Zm-6.421-3.947c-1.948 0-3.106.895-3.474 2.737h6.632v-.158c-.053-.737-.474-1.368-1.053-1.842a3.306 3.306 0 0 0-2.105-.737Zm15.947-2.737c.526 0 .947.158 1.263.421.316.263.527.632.527 1 0 .527-.106.895-.422 1.158-.263.263-.578.421-.947.369-.263 0-.526-.053-.842-.158l-.316-.106c-.631-.157-1.316-.052-1.842.316-.42.316-.79.737-1 1.21-.263.632-.42 1.264-.368 1.948v6c0 .421-.158.79-.421 1.105-.264.316-.632.421-1.106.421-.473 0-.79-.157-1.105-.42-.263-.316-.42-.685-.42-1.106V14.645c0-.421.157-.79.42-1.106a1.24 1.24 0 0 1 1.105-.42c.421 0 .79.157 1.106.42.315.316.42.685.42 1.106v.316c.37-.685.948-1.211 1.685-1.58.684-.368 1.474-.526 2.263-.526Z"/><path fill="#206BC4" d="M32.68 7.423A9.226 9.226 0 0 0 26 .743a58.385 58.385 0 0 0-18.577 0 9.226 9.226 0 0 0-6.68 6.68A58.385 58.385 0 0 0 .744 26a9.226 9.226 0 0 0 6.68 6.68c6.158.991 12.42.991 18.577 0A9.226 9.226 0 0 0 32.68 26a58.385 58.385 0 0 0 0-18.577Z"/><path fill="#FFF" d="M16.346 17.912a18.435 18.435 0 0 1-5.792 5.74 2.526 2.526 0 0 1-3.81-2.035c0-.887.47-1.722 1.253-2.14a12.41 12.41 0 0 0 3.183-2.765 14.623 14.623 0 0 0-3.183-2.766 2.4 2.4 0 0 1-.887-3.288s0-.052.052-.052c.73-1.148 2.244-1.565 3.392-.835 2.348 1.461 4.28 3.392 5.792 5.688.47.73.47 1.722 0 2.453Zm8.298 5.062h-5.95c-1.095 0-1.982-.522-1.982-1.566 0-1.043.887-1.565 1.983-1.565h5.949c1.096 0 1.983.522 1.983 1.565 0 1.044-.887 1.566-1.983 1.566Z"/><path fill="#FFF" d="M16.487 18.066a18.593 18.593 0 0 1-5.842 5.79 2.547 2.547 0 0 1-3.842-2.053c0-.895.473-1.737 1.263-2.158a12.517 12.517 0 0 0 3.21-2.79c-.947-1.105-2-2-3.21-2.79a2.421 2.421 0 0 1-.895-3.315s0-.053.053-.053c.737-1.158 2.263-1.579 3.42-.842 2.37 1.474 4.317 3.421 5.843 5.737a2.33 2.33 0 0 1 0 2.474Zm8.368 5.105h-6c-1.105 0-2-.526-2-1.579s.895-1.579 2-1.579h6c1.106 0 2 .526 2 1.58 0 1.052-.894 1.578-2 1.578Z"/></g></svg>
		</>
  ),
  project: {
	 link: 'https://github.com/tabler/tabler',
  },
  primaryHue: 213,
  docsRepositoryBase: 'https://github.com/tabler/tabler/blob/docs/pages',
  components: {
	 Example,
	 ColorsTable,
	 // pre: Pre,
	 FlagsTable,
	 PaymentsTable
  }
}