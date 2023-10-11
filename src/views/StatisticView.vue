<template>
  <v-container class="my-0 mx-0 px-0 py-0">
    <v-row>
      <v-col>
        <v-hover v-slot="{ hover }" class="transition-swing">
          <v-sheet rounded :elevation="hover ? 8 : 2">
            <div id="chartdiv" ref="chartdiv">
            </div>
          </v-sheet>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }" class="transition-swing">
        <v-sheet rounded :elevation="hover ? 8 : 2">
          <div id="piechartdiv" ref="piechartdiv">
          </div>
        </v-sheet>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-hover v-slot="{ hover }" class="transition-swing">
        <v-sheet rounded :elevation="hover ? 8 : 2">
          <div id="ganttchartdiv" ref="ganttchartdiv">
          </div>
        </v-sheet>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }" class="transition-swing">
        <v-sheet rounded :elevation="hover ? 8 : 2">
          <div id="xychartdiv" ref="xychartdiv">
          </div>
        </v-sheet>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_animated from "@amcharts/amcharts5/themes/Animated";

import bubbleTreeJSON from "@/json/statistic/bubbleTreeJSON.json"
import pieChartJSON from "@/json/statistic/pieChartJSON.json"
import ganttChartJSON from "@/json/statistic/ganttChartJSON.json"
import xyChartJSON from "@/json/statistic/xyChartJSON.json"


export default {
  name: 'StatisticView',
  components: {},
  mounted() {
    this.bubbleTree()
    this.pieChart()
    this.ganttChart()
    this.xyChart()
  },
  methods: {
    bubbleTree() {
      let root = am5.Root.new(this.$refs.chartdiv);
      root.setThemes([am5themes_animated.new(root)]);
      // Create custom theme...
      var data = bubbleTreeJSON;
      // Create wrapper container
      var container = root.container.children.push(am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      }));
// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
      var series = container.children.push(am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 3,
        topDepth: 1,
        initialDepth: 3,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -30,
        centerStrength: 1
      }));
      series.get("colors").setAll({
        step: 2
      });
      series.links.template.set("strength", 1);
      series.data.setAll([data]);
      series.set("selectedDataItem", series.dataItems[0]);
// Make stuff animate on load
      series.appear(1000, 100);
    },
    pieChart() {
      let root = am5.Root.new(this.$refs.piechartdiv);
      root.setThemes([am5themes_animated.new(root)]);
      // Create custom theme...
      var data = pieChartJSON;
// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout
      }));
// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
      }));
// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll(data);
    },
    ganttChart() {
      let root = am5.Root.new(this.$refs.ganttchartdiv);
      root.setThemes([am5themes_animated.new(root)]);
      root.dateFormatter.setAll({
        dateFormat: "yyyy-MM-dd",
        dateFields: ["valueX", "openValueX"]
      });
// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_animated.new(root)
      ]);
// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
      }));
// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
      var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      }))
      var colors = chart.get("colors");
// Data
      var data = [
        {
          category: "John",
          fromDate: "2018-01-01 08:00",
          toDate: "2018-01-01 10:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(0), 0)
          }
        },
        {
          category: "John",
          fromDate: "2018-01-01 12:00",
          toDate: "2018-01-01 15:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(0), 0.4)
          }
        },
        {
          category: "John",
          fromDate: "2018-01-01 15:30",
          toDate: "2018-01-01 21:30",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(0), 0.8)
          }
        },

        {
          category: "Jane",
          fromDate: "2018-01-01 09:00",
          toDate: "2018-01-01 12:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(2), 0)
          }
        },
        {
          category: "Jane",
          fromDate: "2018-01-01 13:00",
          toDate: "2018-01-01 17:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(2), 0.4)
          }
        },

        {
          category: "Peter",
          fromDate: "2018-01-01 11:00",
          toDate: "2018-01-01 16:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(4), 0)
          }
        },
        {
          category: "Peter",
          fromDate: "2018-01-01 16:00",
          toDate: "2018-01-01 19:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(4), 0.4)
          }
        },

        {
          category: "Melania",
          fromDate: "2018-01-01 16:00",
          toDate: "2018-01-01 20:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(6), 0)
          }
        },
        {
          category: "Melania",
          fromDate: "2018-01-01 20:30",
          toDate: "2018-01-02 00:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(6), 0.4)
          }
        },

        {
          category: "Donald",
          fromDate: "2018-01-01 13:00",
          toDate: "2018-01-02 00:00",
          columnSettings: {
            fill: am5.Color.brighten(colors.getIndex(8), 0)
          }
        }
      ];
// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var yAxis = chart.yAxes.push(
          am5xy.CategoryAxis.new(root, {
            categoryField: "category",
            renderer: am5xy.AxisRendererY.new(root, {inversed: true}),
            tooltip: am5.Tooltip.new(root, {
              themeTags: ["axis"],
              animationDuration: 200
            })
          })
      );
      yAxis.data.setAll([
        {category: "John"},
        {category: "Jane"},
        {category: "Peter"},
        {category: "Melania"},
        {category: "Donald"}
      ]);
      var xAxis = chart.xAxes.push(
          am5xy.DateAxis.new(root, {
            baseInterval: {timeUnit: "minute", count: 1},
            renderer: am5xy.AxisRendererX.new(root, {strokeOpacity: 0.1})
          })
      );
// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        openValueXField: "fromDate",
        valueXField: "toDate",
        categoryYField: "category",
        sequencedInterpolation: true
      }));
      series.columns.template.setAll({
        templateField: "columnSettings",
        strokeOpacity: 0,
        tooltipText: "{category}: {openValueX.formatDate('yyyy-MM-dd HH:mm')} - {valueX.formatDate('yyyy-MM-dd HH:mm')}"
      });
      series.data.processor = am5.DataProcessor.new(root, {
        dateFields: ["fromDate", "toDate"],
        dateFormat: "yyyy-MM-dd HH:mm"
      });
      series.data.setAll(data);
// Add scrollbars
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));
// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
      chart.appear(1000, 100);
    },
    xyChart() {
      let root = am5.Root.new(this.$refs.xychartdiv);
      root.setThemes([am5themes_animated.new(root)]);
// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_animated.new(root)
      ]);
// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true
      }));
// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);
// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xRenderer = am5xy.AxisRendererX.new(root, {minGridDistance: 30});
      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
      });
      xRenderer.grid.template.setAll({
        location: 1
      })
      var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));
      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
      }));
// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));
      series.columns.template.setAll({cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0});
      series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });
      series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
      });
// Set data
      var data = xyChartJSON;
      xAxis.data.setAll(data);
      series.data.setAll(data);
// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
    }
  }
}
</script>
<style>
#chartdiv {
  width: 100%;
  height: 300px;
}

#piechartdiv {
  width: 100%;
  height: 300px;
}

#ganttchartdiv {
  width: 100%;
  height: 300px;
}

#xychartdiv {
  width: 100%;
  height: 300px;
}
</style>
