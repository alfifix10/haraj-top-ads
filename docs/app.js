// JavaScript للواجهة الرئيسية لموقع إعلانات حراج الأكثر تفاعلاً

class HarajAdsViewer {
      constructor() {
                this.adsData = null;
                this.loading = document.getElementById('loading');
                this.error = document.getElementById('error');
                this.adsContainer = document.getElementById('adsContainer');
                this.init();
      }

    async init() {
              try {
                            await this.loadData();
                            this.renderStats();
                            this.renderAds();
                            this.hideLoading();
              } catch (err) {
                            console.error('Error loading data:', err);
                            this.showError();
              }
    }

    async loadData() {
              try {
                            // محاولة تحميل البيانات من ملف JSON المحدث
                  const response = await fetch('./haraj-top-ads.json');
                            if (!response.ok) {
