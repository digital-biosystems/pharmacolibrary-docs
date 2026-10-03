<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;sodium bicarbonate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_bicarbonate/&quot;},{&quot;label&quot;:&quot;Taylor_2026 \u00b7 PD acute kidney injury&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# acute kidney injury — PD  <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Methotrexate (measured concentrations) drives acute kidney injury (in unknown): categorical (graded) response model.

**Model:** No model was generated from this record.

> The paper links estimated serum methotrexate concentrations (µmol/L), specifically the 4-h post-infusion concentration, to the binary occurrence of any-stage acute kidney injury via logistic regression (with the effect dependent on disease type); no Emax/IC50-type PD parameters or mechanism (e.g., production or elimination inhibition) are stated, and notably higher 8 g/m2 doses with higher 4-h MTX concentrations showed lower AKI frequency than ≤3.5 g/m2 doses (OR 3.58, 95% CI 1.1–10.8, p = 0.054).
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Taylor_2026`
- **model family:** `categorical`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Taylor ZL et al., Use of a Cystatin C-Based GFR Equation…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-026-01618-4](https://doi.org/10.1007/s40262-026-01618-4)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | CL (L/h) — Final model | `Q22` · not captured | 11.8 | L/h | not captured | exact (not captured) | Tab2:row2:col1 |
| PK (driver) | CL (L/h) — Final model | `Q22` · not captured | 5.1 | L/h | not captured | exact (not captured) | Tab2:row2:col2 |
| PK (driver) | CL (L/h) — Bootstrap | `Q22` · not captured | 11.8 | L/h | not captured | exact (not captured) | Tab2:row2:col4 |
| PK (driver) | CL (L/h) — Bootstrap | `Q22` · not captured | 10.8 | L/h | not captured | exact (not captured) | Tab2:row2:col5 |
| PK (driver) | V1 (L) — Final model | `Q63` · not captured | 42.2 | L | not captured | exact (not captured) | Tab2:row5:col1 |
| PK (driver) | V1 (L) — Final model | `Q63` · not captured | 6.4 | L | not captured | exact (not captured) | Tab2:row5:col2 |
| PK (driver) | V1 (L) — Bootstrap | `Q63` · not captured | 41.9 | L | not captured | exact (not captured) | Tab2:row5:col4 |
| PK (driver) | V1 (L) — Bootstrap | `Q63` · not captured | 37.8 | L | not captured | exact (not captured) | Tab2:row5:col5 |
| PK (driver) | Q (L/h) — Final model | `Q30` · not captured | 0.35 | L/h | not captured | exact (not captured) | Tab2:row6:col1 |
| PK (driver) | Q (L/h) — Final model | `Q30` · not captured | 11.6 | L/h | not captured | exact (not captured) | Tab2:row6:col2 |
| PK (driver) | Q (L/h) — Bootstrap | `Q30` · not captured | 0.35 | L/h | not captured | exact (not captured) | Tab2:row6:col4 |
| PK (driver) | Q (L/h) — Bootstrap | `Q30` · not captured | 0.29 | L/h | not captured | exact (not captured) | Tab2:row6:col5 |
| PK (driver) | V2 (L) — Final model | `Q64` · not captured | 6.67 | L | not captured | exact (not captured) | Tab2:row7:col1 |
| PK (driver) | V2 (L) — Final model | `Q64` · not captured | 10.4 | L | not captured | exact (not captured) | Tab2:row7:col2 |
| PK (driver) | V2 (L) — Bootstrap | `Q64` · not captured | 6.63 | L | not captured | exact (not captured) | Tab2:row7:col4 |
| PK (driver) | V2 (L) — Bootstrap | `Q64` · not captured | 5.56 | L | not captured | exact (not captured) | Tab2:row7:col5 |
| variability | IIV CL — Final model | `Q312` · not captured | 0.02 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col1 |
| variability | IIV CL — Final model | `Q312` · not captured | 24.3 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col2 |
| variability | IIV CL — Final model | `Q312` · not captured | 13.3 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col3 |
| variability | IIV CL — Bootstrap | `Q312` · not captured | 0.02 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col4 |
| variability | IIV CL — Bootstrap | `Q312` · not captured | 0.01 | not captured | not captured | llm_confirmed (not captured) | Tab2:row8:col5 |
| variability | IIV V2 — Final model | `Q312` · not captured | 0.03 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col1 |
| variability | IIV V2 — Final model | `Q312` · not captured | 23.9 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col2 |
| variability | IIV V2 — Final model | `Q312` · not captured | 31 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col3 |
| variability | IIV V2 — Bootstrap | `Q312` · not captured | 0.03 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col4 |
| variability | IIV V2 — Bootstrap | `Q312` · not captured | 0.02 | not captured | not captured | llm_confirmed (not captured) | Tab2:row9:col5 |
| variability | Residual error — Final model | `Q315` · not captured | 0.20 | not captured | not captured | llm (not captured) | Tab2:row10:col1 |
| variability | Residual error — Final model | `Q315` · not captured | 11.6 | not captured | not captured | llm (not captured) | Tab2:row10:col2 |
| variability | Residual error — Final model | `Q315` · not captured | 12.2 | not captured | not captured | llm (not captured) | Tab2:row10:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [sodium bicarbonate](drugs/drug_sodium_bicarbonate/)</sub>
