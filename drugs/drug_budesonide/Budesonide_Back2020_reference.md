<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;budesonide&quot;,&quot;href&quot;:&quot;drugs/drug_budesonide/&quot;},{&quot;label&quot;:&quot;Back_2020 \u00b7 adults with moderate asthma&quot;}]"></div>

# budesonide — `Budesonide_Back2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — fulltext.** the record was built from the abstract alone, so reported summary statistics stood in for a fitted model<br><sub>evidence: `provenance.source=abstract-only`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked.

**Steps:**
1. Not a curation fix — fulltext limitation.
2. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
3. Parent/metabolite records commonly miss the formation link.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `budesonide/formoterol`, measured `budesonide`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Back HM; Lee JB; Kim A; Park SJ; Kim J; Chae JW; et al. et al. (2020). Pharmaceutics 12
  ·  DOI: [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336)

## Model component
<dbs-pgx drug="budesonide" model-id="Budesonide_Back2020_reference" status="rejected" stale="false" population="adults with moderate asthma" measured-compound="budesonide" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | exact (1.0) | Back_2020:abstract, Back_2020:abstract | — | not captured |
| CL (L·hr−1) | `Q22` · CL | —(suppressed) | L·hr−1 | — | [l] / [h] | not captured | exact (1.0) | Back_2020:abstract, Back_2020:abstract | — | not captured |
| ka,Lung (hr−1) | `Q49` · kabs | —(suppressed) | hr−1 | — | [1] / [h] | not captured | llm_confirmed (0.6) | Back_2020:abstract | — | not captured |
| Vp,BUD (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | llm_confirmed (0.6) | Back_2020:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('ka,Gut (hr−1)', value 0) — already have one for this compound
- dropped unlinked row (NIL): 'BASE' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped PD-category row 'IC50 (ng·mL−1)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract'])
- dropped PD-category row 'EC50 (pg·mL−1)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract'])
- dropped PD-category row 'kout (hr−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract', 'Back_2020:abstract'])
- dropped value-less row: 'Sex (male/female), n/n (%/%)' (captured trailing unit '%/%' for child rows)
- dropped unlinked row (NIL): 'Age (years), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Weight (kg), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Height (cm), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped value-less row: 'ADRB2 genotype (n), AA/AG/GG'
- dropped unlinked row (NIL): 'Asthma duration (years), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline FEV1 (%), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline sputum eosinophil cationic protein (µg·L−1), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline Asthma control test score, mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc (L)); Q22 (CL (L·hr−1)); Q64 (Vp,BUD (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=budesonide
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Back_2020_extracted.txt (21 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Back_2020:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Back_2020:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.4 | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.4 L/h | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 216 L | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 106 L | not captured | not captured | ['Back_2020:abstract'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_budesonide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Back_2020` / `Back_2020::adults with moderate asthma`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
