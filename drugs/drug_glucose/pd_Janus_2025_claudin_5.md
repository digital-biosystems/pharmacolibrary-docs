<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;glucose&quot;,&quot;href&quot;:&quot;drugs/drug_glucose/&quot;},{&quot;label&quot;:&quot;Janus_2025 \u00b7 PD claudin-5&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# claudin-5 — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** NX210c drives claudin-5 (in unknown) (inhibition; the model form was not identified).

**Model:** No model was generated from this record.

> NX210c concentrations act on plasma claudin-5 via an indirect response model in which the drug inhibits (reduces) the release of claudin-5, described by a sigmoidal concentration–response curve with an IC80 of 20.20 nM; no Imax, kin, kout, or ke0 values are given.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Janus_2025`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Janus A et al., Safety, Tolerability and Pharmacokineti…, Neurology and therapy (2025)
  ·  DOI: [10.1007/s40120-024-00691-w](https://doi.org/10.1007/s40120-024-00691-w)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | AUCinf — Unit | `Q17` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row2:col2 |
| PK (driver) | AUCinf — N | `Q17` · not captured | 378.8 | not captured | not captured | exact (not captured) | Tab3:row2:col3 |
| PK (driver) | AUCinf — Mean | `Q17` · not captured | 348.6 | not captured | not captured | exact (not captured) | Tab3:row2:col4 |
| PK (driver) | AUCinf — Geometricmean | `Q17` · not captured | 154.32 | not captured | not captured | exact (not captured) | Tab3:row2:col5 |
| PK (driver) | AUCinf — SD | `Q17` · not captured | 40.7 | not captured | not captured | exact (not captured) | Tab3:row2:col6 |
| PK (driver) | AUCinf — CV (%) | `Q17` · not captured | 44.3 | not captured | not captured | exact (not captured) | Tab3:row2:col7 |
| PK (driver) | AUCinf — GeometricCV (%) | `Q17` · not captured | 343 | not captured | not captured | exact (not captured) | Tab3:row2:col8 |
| PK (driver) | AUCinf — Median | `Q17` · not captured | 140 | not captured | not captured | exact (not captured) | Tab3:row2:col9 |
| PK (driver) | AUCinf — Min | `Q17` · not captured | 634 | not captured | not captured | exact (not captured) | Tab3:row2:col10 |
| PK (driver) | CL — Unit | `Q22` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row3:col2 |
| PK (driver) | CL — N | `Q22` · not captured | 1416.5 | not captured | not captured | exact (not captured) | Tab3:row3:col3 |
| PK (driver) | CL — Mean | `Q22` · not captured | 1282.0 | not captured | not captured | exact (not captured) | Tab3:row3:col4 |
| PK (driver) | CL — Geometricmean | `Q22` · not captured | 646.18 | not captured | not captured | exact (not captured) | Tab3:row3:col5 |
| PK (driver) | CL — SD | `Q22` · not captured | 45.6 | not captured | not captured | exact (not captured) | Tab3:row3:col6 |
| PK (driver) | CL — CV (%) | `Q22` · not captured | 48.6 | not captured | not captured | exact (not captured) | Tab3:row3:col7 |
| PK (driver) | CL — GeometricCV (%) | `Q22` · not captured | 1405 | not captured | not captured | exact (not captured) | Tab3:row3:col8 |
| PK (driver) | CL — Median | `Q22` · not captured | 589 | not captured | not captured | exact (not captured) | Tab3:row3:col9 |
| PK (driver) | CL — Min | `Q22` · not captured | 2990 | not captured | not captured | exact (not captured) | Tab3:row3:col10 |
| PK (driver) | Cmax — Unit | `Q32` · not captured | 35 | not captured | not captured | exact (not captured) | Tab3:row4:col2 |
| PK (driver) | Cmax — N | `Q32` · not captured | 2481.4 | not captured | not captured | exact (not captured) | Tab3:row4:col3 |
| PK (driver) | Cmax — Mean | `Q32` · not captured | 2218.6 | not captured | not captured | exact (not captured) | Tab3:row4:col4 |
| PK (driver) | Cmax — Geometricmean | `Q32` · not captured | 1156.89 | not captured | not captured | exact (not captured) | Tab3:row4:col5 |
| PK (driver) | Cmax — SD | `Q32` · not captured | 46.6 | not captured | not captured | exact (not captured) | Tab3:row4:col6 |
| PK (driver) | Cmax — CV (%) | `Q32` · not captured | 53.0 | not captured | not captured | exact (not captured) | Tab3:row4:col7 |
| PK (driver) | Cmax — GeometricCV (%) | `Q32` · not captured | 2163 | not captured | not captured | exact (not captured) | Tab3:row4:col8 |
| PK (driver) | Cmax — Median | `Q32` · not captured | 663 | not captured | not captured | exact (not captured) | Tab3:row4:col9 |
| PK (driver) | Cmax — Min | `Q32` · not captured | 4683 | not captured | not captured | exact (not captured) | Tab3:row4:col10 |
| PK (driver) | Ctrough — Unit | `Q37` · not captured | 23 | not captured | not captured | exact (not captured) | Tab3:row5:col2 |
| PK (driver) | Ctrough — N | `Q37` · not captured | 0.0 | not captured | not captured | exact (not captured) | Tab3:row5:col3 |
| PK (driver) | Ctrough — Geometricmean | `Q37` · not captured | 0.00 | not captured | not captured | exact (not captured) | Tab3:row5:col5 |
| PK (driver) | Ctrough — GeometricCV (%) | `Q37` · not captured | 0 | not captured | not captured | exact (not captured) | Tab3:row5:col8 |
| PK (driver) | Ctrough — Median | `Q37` · not captured | 0 | not captured | not captured | exact (not captured) | Tab3:row5:col9 |
| PK (driver) | Ctrough — Min | `Q37` · not captured | 0 | not captured | not captured | exact (not captured) | Tab3:row5:col10 |
| PK (driver) | Vz — Unit | `Q61` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row6:col2 |
| PK (driver) | Vz — N | `Q61` · not captured | 595.5 | not captured | not captured | exact (not captured) | Tab3:row6:col3 |
| PK (driver) | Vz — Mean | `Q61` · not captured | 541.3 | not captured | not captured | exact (not captured) | Tab3:row6:col4 |
| PK (driver) | Vz — Geometricmean | `Q61` · not captured | 280.13 | not captured | not captured | exact (not captured) | Tab3:row6:col5 |
| PK (driver) | Vz — SD | `Q61` · not captured | 47.0 | not captured | not captured | exact (not captured) | Tab3:row6:col6 |
| PK (driver) | Vz — CV (%) | `Q61` · not captured | 46.2 | not captured | not captured | exact (not captured) | Tab3:row6:col7 |
| PK (driver) | Vz — GeometricCV (%) | `Q61` · not captured | 580 | not captured | not captured | exact (not captured) | Tab3:row6:col8 |
| PK (driver) | Vz — Median | `Q61` · not captured | 268 | not captured | not captured | exact (not captured) | Tab3:row6:col9 |
| PK (driver) | Vz — Min | `Q61` · not captured | 1369 | not captured | not captured | exact (not captured) | Tab3:row6:col10 |
| PK (driver) | t1/2 — Unit | `Q57` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row7:col2 |
| PK (driver) | t1/2 — N | `Q57` · not captured | 0.2993 | not captured | not captured | exact (not captured) | Tab3:row7:col3 |
| PK (driver) | t1/2 — Mean | `Q57` · not captured | 0.2983 | not captured | not captured | exact (not captured) | Tab3:row7:col4 |
| PK (driver) | t1/2 — Geometricmean | `Q57` · not captured | 0.02438 | not captured | not captured | exact (not captured) | Tab3:row7:col5 |
| PK (driver) | t1/2 — SD | `Q57` · not captured | 8.1 | not captured | not captured | exact (not captured) | Tab3:row7:col6 |
| PK (driver) | t1/2 — CV (%) | `Q57` · not captured | 8.2 | not captured | not captured | exact (not captured) | Tab3:row7:col7 |
| PK (driver) | t1/2 — GeometricCV (%) | `Q57` · not captured | 0.302 | not captured | not captured | exact (not captured) | Tab3:row7:col8 |
| PK (driver) | t1/2 — Median | `Q57` · not captured | 0.257 | not captured | not captured | exact (not captured) | Tab3:row7:col9 |
| PK (driver) | t1/2 — Min | `Q57` · not captured | 0.341 | not captured | not captured | exact (not captured) | Tab3:row7:col10 |
| PK (driver) | tmax — Unit | `Q56` · not captured | 35 | not captured | not captured | exact (not captured) | Tab3:row8:col2 |
| PK (driver) | tmax — GeometricCV (%) | `Q56` · not captured | 0.1100 | not captured | not captured | exact (not captured) | Tab3:row8:col8 |
| PK (driver) | tmax — Median | `Q56` · not captured | 0.0800 | not captured | not captured | exact (not captured) | Tab3:row8:col9 |
| PK (driver) | tmax — Min | `Q56` · not captured | 0.1967 | not captured | not captured | exact (not captured) | Tab3:row8:col10 |
| PK (driver) | AUCinf — Unit | `Q17` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row10:col2 |
| PK (driver) | AUCinf — N | `Q17` · not captured | 908.3 | not captured | not captured | exact (not captured) | Tab3:row10:col3 |
| PK (driver) | AUCinf — Mean | `Q17` · not captured | 823.8 | not captured | not captured | exact (not captured) | Tab3:row10:col4 |
| PK (driver) | AUCinf — Geometricmean | `Q17` · not captured | 422.58 | not captured | not captured | exact (not captured) | Tab3:row10:col5 |
| PK (driver) | AUCinf — SD | `Q17` · not captured | 46.5 | not captured | not captured | exact (not captured) | Tab3:row10:col6 |
| PK (driver) | AUCinf — CV (%) | `Q17` · not captured | 47.6 | not captured | not captured | exact (not captured) | Tab3:row10:col7 |
| PK (driver) | AUCinf — GeometricCV (%) | `Q17` · not captured | 877 | not captured | not captured | exact (not captured) | Tab3:row10:col8 |
| PK (driver) | AUCinf — Median | `Q17` · not captured | 348 | not captured | not captured | exact (not captured) | Tab3:row10:col9 |
| PK (driver) | AUCinf — Min | `Q17` · not captured | 1914 | not captured | not captured | exact (not captured) | Tab3:row10:col10 |
| PK (driver) | CL — Unit | `Q22` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row11:col2 |
| PK (driver) | CL — N | `Q22` · not captured | 1052.4 | not captured | not captured | exact (not captured) | Tab3:row11:col3 |
| PK (driver) | CL — Mean | `Q22` · not captured | 946.4 | not captured | not captured | exact (not captured) | Tab3:row11:col4 |
| PK (driver) | CL — Geometricmean | `Q22` · not captured | 535.99 | not captured | not captured | exact (not captured) | Tab3:row11:col5 |
| PK (driver) | CL — SD | `Q22` · not captured | 50.9 | not captured | not captured | exact (not captured) | Tab3:row11:col6 |
| PK (driver) | CL — CV (%) | `Q22` · not captured | 47.7 | not captured | not captured | exact (not captured) | Tab3:row11:col7 |
| PK (driver) | CL — GeometricCV (%) | `Q22` · not captured | 850 | not captured | not captured | exact (not captured) | Tab3:row11:col8 |
| PK (driver) | CL — Median | `Q22` · not captured | 488 | not captured | not captured | exact (not captured) | Tab3:row11:col9 |
| PK (driver) | CL — Min | `Q22` · not captured | 2295 | not captured | not captured | exact (not captured) | Tab3:row11:col10 |
| PK (driver) | Cmax — Unit | `Q32` · not captured | 33 | not captured | not captured | exact (not captured) | Tab3:row12:col2 |
| PK (driver) | Cmax — N | `Q32` · not captured | 6835.2 | not captured | not captured | exact (not captured) | Tab3:row12:col3 |
| PK (driver) | Cmax — Mean | `Q32` · not captured | 5880.3 | not captured | not captured | exact (not captured) | Tab3:row12:col4 |
| PK (driver) | Cmax — Geometricmean | `Q32` · not captured | 3703.66 | not captured | not captured | exact (not captured) | Tab3:row12:col5 |
| PK (driver) | Cmax — SD | `Q32` · not captured | 54.2 | not captured | not captured | exact (not captured) | Tab3:row12:col6 |
| PK (driver) | Cmax — CV (%) | `Q32` · not captured | 63.4 | not captured | not captured | exact (not captured) | Tab3:row12:col7 |
| PK (driver) | Cmax — GeometricCV (%) | `Q32` · not captured | 6363 | not captured | not captured | exact (not captured) | Tab3:row12:col8 |
| PK (driver) | Cmax — Median | `Q32` · not captured | 1687 | not captured | not captured | exact (not captured) | Tab3:row12:col9 |
| PK (driver) | Cmax — Min | `Q32` · not captured | 13783 | not captured | not captured | exact (not captured) | Tab3:row12:col10 |
| PK (driver) | Ctrough — Unit | `Q37` · not captured | 21 | not captured | not captured | exact (not captured) | Tab3:row13:col2 |
| PK (driver) | Ctrough — N | `Q37` · not captured | 13.7 | not captured | not captured | exact (not captured) | Tab3:row13:col3 |
| PK (driver) | Ctrough — Mean | `Q37` · not captured | 287.0 | not captured | not captured | exact (not captured) | Tab3:row13:col4 |
| PK (driver) | Ctrough — Geometricmean | `Q37` · not captured | 62.63 | not captured | not captured | exact (not captured) | Tab3:row13:col5 |
| PK (driver) | Ctrough — SD | `Q37` · not captured | 458.3 | not captured | not captured | exact (not captured) | Tab3:row13:col6 |
| PK (driver) | Ctrough — GeometricCV (%) | `Q37` · not captured | 0 | not captured | not captured | exact (not captured) | Tab3:row13:col8 |
| PK (driver) | Ctrough — Median | `Q37` · not captured | 0 | not captured | not captured | exact (not captured) | Tab3:row13:col9 |
| PK (driver) | Ctrough — Min | `Q37` · not captured | 287 | not captured | not captured | exact (not captured) | Tab3:row13:col10 |
| PK (driver) | Vz — Unit | `Q61` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row14:col2 |
| PK (driver) | Vz — N | `Q61` · not captured | 437.6 | not captured | not captured | exact (not captured) | Tab3:row14:col3 |
| PK (driver) | Vz — Mean | `Q61` · not captured | 395.1 | not captured | not captured | exact (not captured) | Tab3:row14:col4 |
| PK (driver) | Vz — Geometricmean | `Q61` · not captured | 223.24 | not captured | not captured | exact (not captured) | Tab3:row14:col5 |
| PK (driver) | Vz — SD | `Q61` · not captured | 51.0 | not captured | not captured | exact (not captured) | Tab3:row14:col6 |
| PK (driver) | Vz — CV (%) | `Q61` · not captured | 46.1 | not captured | not captured | exact (not captured) | Tab3:row14:col7 |
| PK (driver) | Vz — GeometricCV (%) | `Q61` · not captured | 337 | not captured | not captured | exact (not captured) | Tab3:row14:col8 |
| PK (driver) | Vz — Median | `Q61` · not captured | 215 | not captured | not captured | exact (not captured) | Tab3:row14:col9 |
| PK (driver) | Vz — Min | `Q61` · not captured | 981 | not captured | not captured | exact (not captured) | Tab3:row14:col10 |
| PK (driver) | t1/2 — Unit | `Q57` · not captured | 30 | not captured | not captured | exact (not captured) | Tab3:row15:col2 |
| PK (driver) | t1/2 — N | `Q57` · not captured | 0.2859 | not captured | not captured | exact (not captured) | Tab3:row15:col3 |
| PK (driver) | t1/2 — Mean | `Q57` · not captured | 0.2844 | not captured | not captured | exact (not captured) | Tab3:row15:col4 |
| PK (driver) | t1/2 — Geometricmean | `Q57` · not captured | 0.02956 | not captured | not captured | exact (not captured) | Tab3:row15:col5 |
| PK (driver) | t1/2 — SD | `Q57` · not captured | 10.3 | not captured | not captured | exact (not captured) | Tab3:row15:col6 |
| PK (driver) | t1/2 — CV (%) | `Q57` · not captured | 10.8 | not captured | not captured | exact (not captured) | Tab3:row15:col7 |
| PK (driver) | t1/2 — GeometricCV (%) | `Q57` · not captured | 0.293 | not captured | not captured | exact (not captured) | Tab3:row15:col8 |
| PK (driver) | t1/2 — Median | `Q57` · not captured | 0.229 | not captured | not captured | exact (not captured) | Tab3:row15:col9 |
| PK (driver) | t1/2 — Min | `Q57` · not captured | 0.330 | not captured | not captured | exact (not captured) | Tab3:row15:col10 |
| PK (driver) | tmax — Unit | `Q56` · not captured | 33 | not captured | not captured | exact (not captured) | Tab3:row16:col2 |
| PK (driver) | tmax — GeometricCV (%) | `Q56` · not captured | 0.1400 | not captured | not captured | exact (not captured) | Tab3:row16:col8 |
| PK (driver) | tmax — Median | `Q56` · not captured | 0.0800 | not captured | not captured | exact (not captured) | Tab3:row16:col9 |
| PK (driver) | tmax — Min | `Q56` · not captured | 0.1400 | not captured | not captured | exact (not captured) | Tab3:row16:col10 |

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
<sub>← back to [glucose](drugs/drug_glucose/)</sub>
