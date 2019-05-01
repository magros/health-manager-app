<template>
    <Page class="page">
        <TopBar></TopBar>

        <StackLayout style="margin: 20px 20px">

            <StackLayout orientation="horizontal" style="border-bottom-color: black; border-bottom-width: 1px; padding-bottom: 30px">
                <Label class="fa" :text="'fa-chevron-left' | fonticon"
                       style="font-size: 28px; padding: 60px 0 0 30px; color: black"
                       @tap="$navigateTo(Results)"></Label>
                <StackLayout style="margin-left: 40px">
                    <Label style="color: #00C3B0; font-size: 25px; font-weight: bold;">ROGELIO MENDOZA</Label>
                    <Label style="color: black; font-size: 12px;">DENTISTA ODONTOLOGO</Label>
                    <Label style="color: black; font-size: 12px;">Cedula Profesional: 12345678</Label>
                </StackLayout>
            </StackLayout>

            <Label class="text-primary" style="color: #00C3B0; font-size: 25px; font-weight: bold; padding-top: 30px">CALENDARIO</Label>
            <Label class="text-dark">Selecciona día para ver horarios.</Label>

            <StackLayout orientation="horizontal" class="m-b-20">
                <StackLayout style="width: 50%; padding-right: 20px">
                    <Label class="field-label" text="Selecciona mes"></Label>
                    <FilterSelect :items="state"
                                  class="filter-select"
                                  style="width: 100%"
                                  hint="Mayo 2019"
                                  searchHint="Buscar"
                                  modal_title="Ubicación"
                                  closeText="Cerrar"
                                  clearText="Limpiar"
                                  search_param="name"
                                  render="drop"
                                  primary_key="code">
                    </FilterSelect>
                </StackLayout>

                <StackLayout style="width: 50%; padding-right: 20px">
                    <Label class="field-label" text="Selecciona consultorio"></Label>
                    <FilterSelect :items="state"
                                  class="filter-select"
                                  style="width: 100%"
                                  hint="Juriquilla"
                                  searchHint="Buscar"
                                  modal_title="Ubicación"
                                  closeText="Cerrar"
                                  clearText="Limpiar"
                                  search_param="name"
                                  render="drop"
                                  primary_key="code">
                    </FilterSelect>
                </StackLayout>
            </StackLayout>

            <StackLayout height="50%" >
                <StackLayout orientation="horizontal" height="8%" style="text-align: center;">
                    <Label width="14.2857142857%">Dom</Label>
                    <Label width="14.2857142857%">Lun</Label>
                    <Label width="14.2857142857%">Mar</Label>
                    <Label width="14.2857142857%">Mier</Label>
                    <Label width="14.2857142857%">Jue</Label>
                    <Label width="14.2857142857%">Vier</Label>
                    <Label width="14.2857142857%">Sab</Label>
                </StackLayout>
                <FlexboxLayout flexWrap="wrap" height="80%">
                    <StackLayout v-for="week in weeks"
                                 height="auto"
                                 width="100%"
                                 orientation="horizontal">
                        <Label v-for="day in week"
                               width="12.8%"
                               :class="day.day === -1 ? 'calendar-day hidden': 'calendar-day'"
                               :text="day.day"
                               :key="day.day">
                        </Label>
                    </StackLayout>
                </FlexboxLayout>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import TopBar from './shared/TopBar';
    import Results from './Results';

    export default {
        name: 'Calendar',
        methods: {
            calculateWidth() {
            }
        },
        components: {
            TopBar
        },
        data() {
            return {
                Results,
                weeks: getWeeks(2019, 4)
            }
        },
    };

    function getWeeks(year, month) {
        let slices = getWeeksInMonth(year, month);
        let weeks = [];
        slices.forEach(slice => {
            let days = [];
            for (let i = slice.start; i <= slice.end; i++) {
                days.push({
                    day: i,
                    date: new Date(year, month, i),
                    dayOfWeek: new Date(year, month, i).getDay()
                })
            }
            weeks.push(days);
        });
        weeks = fillPendingDays(weeks);

        return weeks;
    }

    function fillPendingDays(weeks) {

        let firstWeek = weeks[0];

        for (let i = 7 - firstWeek.length; i < 7 - 1; i++) {
            firstWeek.splice(0, 0, {day: -1, date: null, dayOfWeek: i});
        }

        weeks[0] = firstWeek;

        return weeks;
    }

    function getWeeksInMonth(year, month) {

        const weeks = [];
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        let dayOfWeek = firstDay.getDay();
        let start;
        let end;

        for (let i = 1; i < daysInMonth + 1; i++) {

            if (dayOfWeek === 6 || i === 1) {
                start = i;
            }

            if (dayOfWeek === 5 || i === daysInMonth) {
                end = i;
                if (start !== end) {
                    weeks.push({
                        start: start,
                        end: end
                    });
                }
            }

            dayOfWeek = new Date(year, month, i).getDay();
        }

        return weeks;
    }
</script>

<style scoped lang="scss">
    @import '../app-variables';
    @import '../app-common';

    .calendar-day {
        color: #777777;
        text-align: center;
        border-width: 1px;
        border-color: $primary-color;
        border-radius: 2px;
        padding-top: 20px;
        margin: 5px;
        &.hidden{
            border-color: white;
            color: white;
        }
    }

    .field-label {
        color: black;
        font-size: 10px;
        font-weight: bold;
        padding-bottom: 5px;
        margin-top: 35px;
    }
</style>
