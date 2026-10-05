<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fidanacogene elaparvovec&quot;,&quot;href&quot;:&quot;drugs/drug_fidanacogene_elaparvovec/&quot;},{&quot;label&quot;:&quot;Wojciechowski_2025 \u00b7 PD FIX activity&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# FIX activity — PD  <span class="pk-badge pk-badge--green">extracted</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Fidanacogene elaparvovec (the dose) drives FIX activity (in IU/dL): direct linear effect.

**Model:** No model was generated from this record.

> The model describes FIX activity (IU/dL) as a function of the fidanacogene elaparvovec dose (vg/kg) using a Hargrove-Schmidt compartmental model where the dose drives transgene translation to FIX protein via a first-order process, while transgene degradation is described by a separate first-order rate constant. Key parameters include a FIX synthesis half-life (ksyn) of 34.9 days, a transgene degradation half-life (kdeg) of 423 weeks, and a translation constant (kτ) of 24.0 IU/vg×10−13 h−1.
>
> <sub>in the paper's terms — summarised by qwen3.8:27b-mtp-q8_0 from the paper's text; not checked by a person</sub>

- **paper:** `Wojciechowski_2025`
- **model family:** `linear`
- **driver:** `dose_only`
- **tier:** population
- **effect:** unknown/unknown

## Citation
Wojciechowski J et al., Population Modeling of Factor IX Activi…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01535-y](https://doi.org/10.1007/s40262-025-01535-y)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Baseline (BASE) | `Q324` · not captured | {"value": 1.83, "unit": "IU/dL", "ci": [1.64, 2.03]} | IU/dL | not captured | exact (not captured) | Wojciechowski_2025:pdv3 |
| PD (effect) | Half-life of FIX synthesis (ksyn) | `Q327` · not captured | 34.9 | d | not captured | exact (not captured) | Wojciechowski_2025:pdv3 |
| — | Translation constant (kτ) | `Q100` · not captured | 24.0 | IU/vg×10−13 h−1 | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| PD (effect) | Half-life of transgene degradation (kdeg) | `Q328` · not captured | 423 | weeks | not captured | exact (not captured) | Wojciechowski_2025:pdv3 |
| — | Box-Cox transformation parameter on kτ (BXCXK) | `Q100` · not captured | -0.631 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| — | Log-odds of being assigned to constant FIX production (PNRSt) | `Q100` · not captured | 0.945 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| — | Effect of C037 studies on RUVADD | `Q100` · not captured | 0.305 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| — | Effect of B1821002 study on BASE | `Q100` · not captured | 0.788 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| — | Effect of B1821034 study on BASE | `Q100` · not captured | 0.994 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| — | Effect of B1821010 study on FIXA | `Q100` · not captured | 0.252 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| — | Effect of B1821036 study on FIXA | `Q100` · not captured | 0.173 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| PD (effect) | Effect of age on ksyn (referenced to 35 years) | `Q327` · not captured | -0.704 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |
| PD (effect) | Effect of age on kdeg (referenced to 35 years) | `Q328` · not captured | -1.57 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |
| — | Effect of age on FIXA (referenced to 35 years) | `Q100` · not captured | 0.0395 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| PD (effect) | Effect of manufacturing process 1 on ksyn | `Q327` · not captured | 0.356 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |
| PD (effect) | Effect of manufacturing process 2 on ksyn | `Q327` · not captured | 0.658 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |
| — | Effect of body weight on kτ (referenced to 70 kg) | `Q100` · not captured | 1.08 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| — | Random unexplained variability σres2(SD) | `Q100` · not captured | 1.00 | unknown | not captured | nil (not captured) | Wojciechowski_2025:pdv3 |
| variability | Effect of B1821002 study on RUV | `Q315` · not captured | 1.32 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |
| variability | Effect of B1821010 study on RUV | `Q315` · not captured | 0.545 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |
| variability | Effect of B1821034 study on RUV | `Q315` · not captured | 0.843 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |
| variability | Effect of B1821036 study on RUV | `Q315` · not captured | -0.245 | unknown | not captured | boundary (not captured) | Wojciechowski_2025:pdv3 |

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
<sub>← back to [fidanacogene elaparvovec](drugs/drug_fidanacogene_elaparvovec/)</sub>
