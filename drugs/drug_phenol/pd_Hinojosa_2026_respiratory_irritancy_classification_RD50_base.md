<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;phenol&quot;,&quot;href&quot;:&quot;drugs/drug_phenol/&quot;},{&quot;label&quot;:&quot;Hinojosa_2026 \u00b7 PD respiratory irritancy classification (RD50-based)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenol_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenol/Phenol_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# respiratory irritancy classification (RD50-based) — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from keyword rules on the title and abstract — no LLM answer yet).

## What this record describes

**As extracted:** Test chemicals (34 organic chemicals; e.g. phenol, butyric acid, cyclohexylamine) drive respiratory irritancy classification (RD50-based) (in RD50 class): direct sigmoid Emax (Hill) effect.

**Model:** No model was generated from this record.

- **paper:** `Hinojosa_2026`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Hinojosa M et al., Classification of industrial chemicals…, Archives of toxicology (2026)
  ·  DOI: [10.1007/s00204-025-04288-6](https://doi.org/10.1007/s00204-025-04288-6)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| model term | EC20 (M) — 1.3. ethanol | `Q900` · not captured | 2.2E-01 | M | not captured | llm (not captured) | Tab2:row0:col6 |
| PD (effect) | EC20 (M) — 7.1. ammonium dodecyl sulfate | `Q321` · not captured | 4.2E-08 | M | not captured | llm (not captured) | Tab2:row0:col37 |
| PD (effect) | Emax (% of Capsaicin) — Capsaicin | `Q320` · not captured | 100 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col2 |
| PD (effect) | Emax (% of Capsaicin) — 1.1. 1-propanol | `Q320` · not captured | 95 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col4 |
| PD (effect) | Emax (% of Capsaicin) — 1.2. allyl alcohol | `Q320` · not captured | 63 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col5 |
| PD (effect) | Emax (% of Capsaicin) — 1.3. ethanol | `Q320` · not captured | 62 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col6 |
| PD (effect) | Emax (% of Capsaicin) — 1.4. isopropanol | `Q320` · not captured | 53 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col7 |
| PD (effect) | Emax (% of Capsaicin) — 1.5. methanol | `Q320` · not captured | 59 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col8 |
| PD (effect) | Emax (% of Capsaicin) — 2.1. 2-butanone | `Q320` · not captured | 84 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col10 |
| PD (effect) | Emax (% of Capsaicin) — 2.2. 2-heptanone | `Q320` · not captured | 66 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col11 |
| PD (effect) | Emax (% of Capsaicin) — 2.3. 2-hexanone | `Q320` · not captured | 59 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col12 |
| PD (effect) | Emax (% of Capsaicin) — 2.4. 4-methyl-2-pentanone | `Q320` · not captured | 84 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col13 |
| PD (effect) | Emax (% of Capsaicin) — 2.5. 5-methyl-2-hexanone | `Q320` · not captured | 66 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col14 |
| PD (effect) | Emax (% of Capsaicin) — 2.6. 5-methyl-3-heptanone | `Q320` · not captured | 59 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col15 |
| PD (effect) | Emax (% of Capsaicin) — 2.7. acetone | `Q320` · not captured | 61 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col16 |
| PD (effect) | Emax (% of Capsaicin) — 2.8. cyclohexanone | `Q320` · not captured | 112 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col17 |
| PD (effect) | Emax (% of Capsaicin) — 3.1. acetic acid | `Q320` · not captured | 65 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col19 |
| PD (effect) | Emax (% of Capsaicin) — 3.2. butyric acid | `Q320` · not captured | 95 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col20 |
| PD (effect) | Emax (% of Capsaicin) — 4.1. acetaldehyde | `Q320` · not captured | 110 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col22 |
| PD (effect) | Emax (% of Capsaicin) — 4.2. formaldehyde | `Q320` · not captured | 92 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col23 |
| PD (effect) | Emax (% of Capsaicin) — 5.1. allylamine | `Q320` · not captured | 134 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col25 |
| PD (effect) | Emax (% of Capsaicin) — 5.2. cyclohexylamine | `Q320` · not captured | 132 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col26 |
| PD (effect) | Emax (% of Capsaicin) — 5.3. diethylamine | `Q320` · not captured | 125 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col27 |
| PD (effect) | Emax (% of Capsaicin) — 5.4. ethylamine | `Q320` · not captured | 109 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col28 |
| PD (effect) | Emax (% of Capsaicin) — 5.5. triethylamine | `Q320` · not captured | 117 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col29 |
| PD (effect) | Emax (% of Capsaicin) — 5.6. ammonia | `Q320` · not captured | 118 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col30 |
| PD (effect) | Emax (% of Capsaicin) — 6.1. phenol | `Q320` · not captured | 114 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col32 |
| PD (effect) | Emax (% of Capsaicin) — 7.1. ammonium dodecyl sulfate | `Q320` · not captured | 133 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col37 |
| PD (effect) | Emax (% of Capsaicin) — 7.2. sodium dodecyl sulfate | `Q320` · not captured | 123 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col38 |
| PD (effect) | Emax (% of Capsaicin) — 8.1. allyl acetate | `Q320` · not captured | 52 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col40 |
| PD (effect) | Emax (% of Capsaicin) — 8.2. allyl chloride | `Q320` · not captured | 38 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col41 |
| PD (effect) | Emax (% of Capsaicin) — 8.3. dimethyl sulfoxide | `Q320` · not captured | 92 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col42 |
| PD (effect) | Emax (% of Capsaicin) — 8.4. methyl acetate | `Q320` · not captured | 108 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col43 |
| PD (effect) | Emax (% of Capsaicin) — 8.5. propyl acetate | `Q320` · not captured | 65 | % of Capsaicin | not captured | exact (not captured) | Tab2:row1:col44 |
| PD (effect) | Conc. at Emax (M) — Capsaicin | `Q321` · not captured | 1.0E-07 | M | not captured | llm_corrected (not captured) | Tab2:row2:col2 |
| PD (effect) | Conc. at Emax (M) — 1.1. 1-propanol | `Q320` · not captured | 1.5E-01 | M | not captured | llm_confirmed (not captured) | Tab2:row2:col4 |
| PD (effect) | Conc. at Emax (M) — 1.2. allyl alcohol | `Q321` · not captured | 3.2E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col5 |
| PD (effect) | Conc. at Emax (M) — 2.2. 2-heptanone | `Q321` · not captured | 2.7E-02 | M | not captured | llm_corrected (not captured) | Tab2:row2:col11 |
| PD (effect) | Conc. at Emax (M) — 2.3. 2-hexanone | `Q321` · not captured | 3.0E-02 | M | not captured | llm_corrected (not captured) | Tab2:row2:col12 |
| PD (effect) | Conc. at Emax (M) — 2.4. 4-methyl-2-pentanone | `Q321` · not captured | 2.7E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col13 |
| PD (effect) | Conc. at Emax (M) — 2.5. 5-methyl-2-hexanone | `Q321` · not captured | 2.4E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col14 |
| PD (effect) | Conc. at Emax (M) — 2.6. 5-methyl-3-heptanone | `Q320` · not captured | 2.1E-01 | M | not captured | llm_confirmed (not captured) | Tab2:row2:col15 |
| PD (effect) | Conc. at Emax (M) — 2.7. acetone | `Q321` · not captured | 1.5E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col16 |
| PD (effect) | Conc. at Emax (M) — 2.8. cyclohexanone | `Q321` · not captured | 3.2E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col17 |
| PD (effect) | Conc. at Emax (M) — 3.1. acetic acid | `Q320` · not captured | 2.4E-03 | M | not captured | llm_confirmed (not captured) | Tab2:row2:col19 |
| PD (effect) | Conc. at Emax (M) — 3.2. butyric acid | `Q320` · not captured | 2.1E-06 | M | not captured | llm_confirmed (not captured) | Tab2:row2:col20 |
| PD (effect) | Conc. at Emax (M) — 4.1. acetaldehyde | `Q321` · not captured | 5.9E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col22 |
| PD (effect) | Conc. at Emax (M) — 4.2. formaldehyde | `Q321` · not captured | 4.0E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col23 |
| PD (effect) | Conc. at Emax (M) — 5.1. allylamine | `Q321` · not captured | 1.5E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col25 |
| PD (effect) | Conc. at Emax (M) — 5.2. cyclohexylamine | `Q321` · not captured | 1.5E-05 | M | not captured | llm_corrected (not captured) | Tab2:row2:col26 |
| PD (effect) | Conc. at Emax (M) — 5.3. diethylamine | `Q321` · not captured | 1.6E-05 | M | not captured | llm_corrected (not captured) | Tab2:row2:col27 |
| PD (effect) | Conc. at Emax (M) — 5.4. ethylamine | `Q321` · not captured | 2.2E-02 | M | not captured | llm_corrected (not captured) | Tab2:row2:col28 |
| — | Conc. at Emax (M) — 5.5. triethylamine | `Q100` · not captured | 7.2E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col29 |
| PD (effect) | Conc. at Emax (M) — 5.6. ammonia | `Q321` · not captured | 2.8E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col30 |
| PD (effect) | Conc. at Emax (M) — 6.1. phenol | `Q321` · not captured | 1.3E-02 | M | not captured | llm_corrected (not captured) | Tab2:row2:col32 |
| PD (effect) | Conc. at Emax (M) — 7.1. ammonium dodecyl sulfate | `Q321` · not captured | 1.8E-05 | M | not captured | llm_corrected (not captured) | Tab2:row2:col37 |
| PD (effect) | Conc. at Emax (M) — 7.2. sodium dodecyl sulfate | `Q321` · not captured | 4.3E-03 | M | not captured | llm_corrected (not captured) | Tab2:row2:col38 |
| PD (effect) | Conc. at Emax (M) — 8.1. allyl acetate | `Q320` · not captured | 2.1E-01 | M | not captured | llm_confirmed (not captured) | Tab2:row2:col40 |
| PD (effect) | Conc. at Emax (M) — 8.2. allyl chloride | `Q320` · not captured | 1.5E-02 | M | not captured | llm_confirmed (not captured) | Tab2:row2:col41 |
| — | Conc. at Emax (M) — 8.5. propyl acetate | `Q100` · not captured | 2.9E-01 | M | not captured | llm_corrected (not captured) | Tab2:row2:col44 |
| model term | EC20 + CZ (M) — 1.1. 1-propanol | `Q900` · not captured | 8.6E-03 | M | not captured | llm (not captured) | Tab2:row3:col4 |
| model term | EC20 + CZ (M) — 1.2. allyl alcohol | `Q900` · not captured | 1.6E-01 | M | not captured | llm (not captured) | Tab2:row3:col5 |
| model term | EC20 + CZ (M) — 1.3. ethanol | `Q900` · not captured | 5.5E-01 | M | not captured | llm (not captured) | Tab2:row3:col6 |
| model term | EC20 + CZ (M) — 1.4. isopropanol | `Q900` · not captured | 2.6E-01 | M | not captured | llm (not captured) | Tab2:row3:col7 |
| model term | EC20 + CZ (M) — 2.1. 2-butanone | `Q900` · not captured | 1.6E-01 | M | not captured | llm (not captured) | Tab2:row3:col10 |
| model term | EC20 + CZ (M) — 2.2. 2-heptanone | `Q900` · not captured | 1.4E-02 | M | not captured | llm (not captured) | Tab2:row3:col11 |
| model term | EC20 + CZ (M) — 2.8. cyclohexanone | `Q900` · not captured | 7.6E-03 | M | not captured | llm (not captured) | Tab2:row3:col17 |
| model term | EC20 + CZ (M) — 3.1. acetic acid | `Q900` · not captured | 6.8E-04 | M | not captured | llm (not captured) | Tab2:row3:col19 |
| model term | EC20 + CZ (M) — 4.1. acetaldehyde | `Q900` · not captured | 2.0E-01 | M | not captured | llm (not captured) | Tab2:row3:col22 |
| model term | EC20 + CZ (M) — 5.6. ammonia | `Q900` · not captured | 2.0E-03 | M | not captured | llm (not captured) | Tab2:row3:col30 |
| model term | EC20 + CZ (M) — 8.2. allyl chloride | `Q900` · not captured | 2.1E-01 | M | not captured | llm (not captured) | Tab2:row3:col41 |
| PD (effect) | Emax + CZ (% of Capsaicin) — Capsaicin | `Q320` · not captured | 20 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col2 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 1.1. 1-propanol | `Q320` · not captured | 66 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col4 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 1.2. allyl alcohol | `Q320` · not captured | 47 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col5 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 1.3. ethanol | `Q320` · not captured | 44 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col6 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 1.4. isopropanol | `Q320` · not captured | 44 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col7 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 1.5. methanol | `Q320` · not captured | 46 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col8 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.1. 2-butanone | `Q320` · not captured | 58 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col10 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.2. 2-heptanone | `Q320` · not captured | 51 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col11 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.3. 2-hexanone | `Q320` · not captured | 20 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col12 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.4. 4-methyl-2-pentanone | `Q320` · not captured | 64 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col13 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.5. 5-methyl-2-hexanone | `Q320` · not captured | 59 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col14 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.6. 5-methyl-3-heptanone | `Q320` · not captured | 47 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col15 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.7. acetone | `Q320` · not captured | 34 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col16 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 2.8. cyclohexanone | `Q320` · not captured | 81 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col17 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 3.1. acetic acid | `Q320` · not captured | 56 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col19 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 3.2. butyric acid | `Q320` · not captured | 75 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col20 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 4.1. acetaldehyde | `Q320` · not captured | 98 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col22 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 4.2. formaldehyde | `Q320` · not captured | 57 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col23 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 5.1. allylamine | `Q320` · not captured | 116 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col25 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 5.2. cyclohexylamine | `Q320` · not captured | 106 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col26 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 5.3. diethylamine | `Q320` · not captured | 95 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col27 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 5.4. ethylamine | `Q320` · not captured | 109 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col28 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 5.5. triethylamine | `Q320` · not captured | 116 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col29 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 5.6. ammonia | `Q320` · not captured | 88 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col30 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 6.1. phenol | `Q320` · not captured | 100 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col32 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 7.1. ammonium dodecyl sulfate | `Q320` · not captured | 107 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col37 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 7.2. sodium dodecyl sulfate | `Q320` · not captured | 120 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col38 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 8.1. allyl acetate | `Q320` · not captured | 43 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col40 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 8.2. allyl chloride | `Q320` · not captured | 32 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col41 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 8.3. dimethyl sulfoxide | `Q320` · not captured | 63 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col42 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 8.4. methyl acetate | `Q320` · not captured | 94 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col43 |
| PD (effect) | Emax + CZ (% of Capsaicin) — 8.5. propyl acetate | `Q320` · not captured | 62 | % of Capsaicin | not captured | llm_confirmed (not captured) | Tab2:row4:col44 |
| PD (effect) | Conc. at Emax + CZ (M) — Capsaicin | `Q321` · not captured | 1.0E-07 | M | not captured | llm_corrected (not captured) | Tab2:row5:col2 |
| PD (effect) | Conc. at Emax + CZ (M) — 1.1. 1-propanol | `Q321` · not captured | 1.5E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col4 |
| PD (effect) | Conc. at Emax + CZ (M) — 1.2. allyl alcohol | `Q321` · not captured | 3.2E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col5 |
| PD (effect) | Conc. at Emax + CZ (M) — 2.2. 2-heptanone | `Q321` · not captured | 2.4E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col11 |
| PD (effect) | Conc. at Emax + CZ (M) — 2.3. 2-hexanone | `Q321` · not captured | 3.0E-02 | M | not captured | llm_corrected (not captured) | Tab2:row5:col12 |
| PD (effect) | Conc. at Emax + CZ (M) — 2.4. 4-methyl-2-pentanone | `Q321` · not captured | 2.7E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col13 |
| PD (effect) | Conc. at Emax + CZ (M) — 2.5. 5-methyl-2-hexanone | `Q321` · not captured | 2.4E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col14 |
| PD (effect) | Conc. at Emax + CZ (M) — 2.6. 5-methyl-3-heptanone | `Q321` · not captured | 2.1E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col15 |
| model term | Conc. at Emax + CZ (M) — 2.7. acetone | `Q900` · not captured | 1.5E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col16 |
| PD (effect) | Conc. at Emax + CZ (M) — 2.8. cyclohexanone | `Q321` · not captured | 1.1E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col17 |
| PD (effect) | Conc. at Emax + CZ (M) — 3.1. acetic acid | `Q321` · not captured | 7.2E-03 | M | not captured | llm_corrected (not captured) | Tab2:row5:col19 |
| PD (effect) | Conc. at Emax + CZ (M) — 3.2. butyric acid | `Q321` · not captured | 6.2E-06 | M | not captured | llm_corrected (not captured) | Tab2:row5:col20 |
| PD (effect) | Conc. at Emax + CZ (M) — 4.1. acetaldehyde | `Q321` · not captured | 5.9E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col22 |
| PD (effect) | Conc. at Emax + CZ (M) — 4.2. formaldehyde | `Q321` · not captured | 4.0E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col23 |
| PD (effect) | Conc. at Emax + CZ (M) — 5.1. allylamine | `Q321` · not captured | 4.9E-02 | M | not captured | llm_corrected (not captured) | Tab2:row5:col25 |
| — | Conc. at Emax + CZ (M) — 5.2. cyclohexylamine | `Q100` · not captured | 4.4E-05 | M | not captured | llm_corrected (not captured) | Tab2:row5:col26 |
| PD (effect) | Conc. at Emax + CZ (M) — 5.3. diethylamine | `Q321` · not captured | 1.8E-06 | M | not captured | llm_corrected (not captured) | Tab2:row5:col27 |
| PD (effect) | Conc. at Emax + CZ (M) — 5.4. ethylamine | `Q321` · not captured | 2.2E-02 | M | not captured | llm_corrected (not captured) | Tab2:row5:col28 |
| PD (effect) | Conc. at Emax + CZ (M) — 5.6. ammonia | `Q321` · not captured | 9.3E-02 | M | not captured | llm_corrected (not captured) | Tab2:row5:col30 |
| PD (effect) | Conc. at Emax + CZ (M) — 6.1. phenol | `Q321` · not captured | 1.3E-02 | M | not captured | llm_corrected (not captured) | Tab2:row5:col32 |
| PD (effect) | Conc. at Emax + CZ (M) — 7.1. ammonium dodecyl sulfate | `Q321` · not captured | 1.5E-03 | M | not captured | llm_corrected (not captured) | Tab2:row5:col37 |
| PD (effect) | Conc. at Emax + CZ (M) — 7.2. sodium dodecyl sulfate | `Q321` · not captured | 1.3E-02 | M | not captured | llm_corrected (not captured) | Tab2:row5:col38 |
| PD (effect) | Conc. at Emax + CZ (M) — 8.1. allyl acetate | `Q321` · not captured | 2.1E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col40 |
| model term | Conc. at Emax + CZ (M) — 8.5. propyl acetate | `Q900` · not captured | 2.9E-01 | M | not captured | llm_corrected (not captured) | Tab2:row5:col44 |
| model term | pH of Conc. at Emax — 1.1. 1-propanol | `Q900` · not captured | 6.97 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col4 |
| — | pH of Conc. at Emax — 1.2. allyl alcohol | `Q100` · not captured | 6.58 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col5 |
| model term | pH of Conc. at Emax — 1.3. ethanol | `Q900` · not captured | 7.15 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col6 |
| — | pH of Conc. at Emax — 1.4. isopropanol | `Q100` · not captured | 7.10 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col7 |
| model term | pH of Conc. at Emax — 1.5. methanol | `Q900` · not captured | 6.95 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col8 |
| model term | pH of Conc. at Emax — 2.1. 2-butanone | `Q900` · not captured | 7.32 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col10 |
| model term | pH of Conc. at Emax — 2.2. 2-heptanone | `Q900` · not captured | 7.29 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col11 |
| — | pH of Conc. at Emax — 2.3. 2-hexanone | `Q100` · not captured | 7.01 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col12 |
| model term | pH of Conc. at Emax — 2.4. 4-methyl-2-pentanone | `Q900` · not captured | 7.39 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col13 |
| model term | pH of Conc. at Emax — 2.5. 5-methyl-2-hexanone | `Q900` · not captured | 7.40 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col14 |
| model term | pH of Conc. at Emax — 2.6. 5-methyl-3-heptanone | `Q900` · not captured | 7.29 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col15 |
| — | pH of Conc. at Emax — 2.7. acetone | `Q100` · not captured | 7.09 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col16 |
| model term | pH of Conc. at Emax — 2.8. cyclohexanone | `Q900` · not captured | 7.13 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col17 |
| — | pH of Conc. at Emax — 3.1. acetic acid | `Q100` · not captured | 4.29 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col19 |
| model term | pH of Conc. at Emax — 3.2. butyric acid | `Q900` · not captured | 7.05 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col20 |
| — | pH of Conc. at Emax — 4.1. acetaldehyde | `Q100` · not captured | 5.89 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col22 |
| model term | pH of Conc. at Emax — 4.2. formaldehyde | `Q900` · not captured | 11.93 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col23 |
| model term | pH of Conc. at Emax — 5.1. allylamine | `Q900` · not captured | 11.50 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col25 |
| model term | pH of Conc. at Emax — 5.2. cyclohexylamine | `Q900` · not captured | 7.11 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col26 |
| — | pH of Conc. at Emax — 5.3. diethylamine | `Q100` · not captured | 7.10 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col27 |
| — | pH of Conc. at Emax — 5.4. ethylamine | `Q100` · not captured | 9.26 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col28 |
| model term | pH of Conc. at Emax — 5.5. triethylamine | `Q900` · not captured | 11.51 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col29 |
| — | pH of Conc. at Emax — 5.6. ammonia | `Q100` · not captured | 11.52 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col30 |
| model term | pH of Conc. at Emax — 6.1. phenol | `Q900` · not captured | 6.92 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col32 |
| — | pH of Conc. at Emax — 7.1. ammonium dodecyl sulfate | `Q100` · not captured | 6.88 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col37 |
| model term | pH of Conc. at Emax — 7.2. sodium dodecyl sulfate | `Q900` · not captured | 7.39 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col38 |
| model term | pH of Conc. at Emax — 8.1. allyl acetate | `Q900` · not captured | 6.97 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col40 |
| — | pH of Conc. at Emax — 8.2. allyl chloride | `Q100` · not captured | 7.25 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col41 |
| — | pH of Conc. at Emax — 8.3. dimethyl sulfoxide | `Q100` · not captured | 7.11 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col42 |
| model term | pH of Conc. at Emax — 8.4. methyl acetate | `Q900` · not captured | 6.79 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col43 |
| — | pH of Conc. at Emax — 8.5. propyl acetate | `Q100` · not captured | 7.43 | not captured | not captured | llm_corrected (not captured) | Tab2:row6:col44 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [phenol](drugs/drug_phenol/)</sub>
