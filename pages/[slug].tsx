import { useRouter } from 'next/router';
import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
    const router = useRouter();
    const slug = router.query.slug as string;

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={`${title()} capitalize`}>{slug}</h1>
                </div>
            </section>
        </DefaultLayout>
    );
}
