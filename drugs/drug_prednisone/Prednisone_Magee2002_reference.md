<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;prednisone&quot;,&quot;href&quot;:&quot;drugs/drug_prednisone/&quot;},{&quot;label&quot;:&quot;Magee_2002 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prednisone_Bouazza2025_reference&quot;,&quot;label&quot;:&quot;Bouazza_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisone/Prednisone_Bouazza2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_Magee2002_reference&quot;,&quot;label&quot;:&quot;Magee_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisone/Prednisone_Magee2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Prednisone_Sassen2020_reference&quot;,&quot;label&quot;:&quot;Sassen_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisone/Prednisone_Sassen2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# prednisone — `Prednisone_Magee2002_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The prednisone/prednisolone record was held back because the model builder assumed F=1, Fm=1 and no molar correction, making the apparent metabolite clearance CLm/F of 13.5 L/h unacceptable, and the record was built from the abstract alone.

<div class="pk-model-meta" hidden drug="prednisone" model-id="Prednisone_Magee2002_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="prednisolone" parameterization="apparent" topology="1C"></div>

## Citation
Magee MH, Blum RA, Lates CD, Jusko WJ. Pharmacokinetic/pharmacodynamic model for prednisolone inhibition of whole blood lymphocyte proliferation. British journal of clinical pharmacology 53(5):474–484 (2002).
  ·  DOI: [10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;=32.

**Dosing:** 18.9 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed prednisone, measured prednisolone.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_prednisone/Prednisone_Magee2002_reference/Prednisone_Magee2002_reference.svg" alt="Prednisone_Magee2002_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k a (hx1) | kabs | 5.62 | 1/h |
| t lag (h) | tlag | 0.283 | h |
| V c /F(l) | V/F | 44.8 | l |
| CL/F(lhx1) | CLm/F | 13.5 | L/h |
| t 1/2 (h) | t1/2z | 2.33 | h |
| AUC(ngmlx1h) | AUC | 1638 | ng·h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The prednisone/prednisolone record was held back because the model builder assumed F=1, Fm=1 and no molar correction, making the apparent metabolite clearance CLm/F of 13.5 L/h unacceptable, and the record was built from the abstract alone.**

The record was built from the paper's abstract only, so summary statistics (kabs 5.62 1/h, tlag 0.283 h, V/F 44.8 L, CLm/F 13.5 L/h, t1/2z 2.33 h, AUC 1638 ng·h/mL for prednisolone) stood in for a fitted model. The failed check concerns the apparent-parameter assumption: F=1, Fm=1 and no molar correction were substituted, which was judged not acceptable for the metabolite clearance CLm/F. A second reader also disagreed on the dose compound (prednisone vs unknown), the primary analyte (prednisolone vs unknown), the model links (none recorded vs a prednisone-to-prednisolone metabolism link), and the placement of the AUC and CL/F values. Extracted — prednisolone: kabs 5.62 1/h, tlag 0.283 h, V/F 44.8 l, CLm/F 13.5 L/h, t1/2z 2.33 h, AUC 1.64e+03 ng·h/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has prednisone, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k a (hx1) | `Q49` · kabs | 5.62 | 1/h | 0.001561 | 1/s | 1/h | exact (1) | Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract |
| t lag (h) | `Q83` · tlag | 0.283 | h | 1019 | s | h | exact (1) | Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract |
| V c /F(l) | `Q76` · V/F | 44.8 | l | 0.0448 | m3 | l | exact (1) | Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract |
| CL/F(lhx1) | `Q351` · CLm/F | 13.5 | L/h | 3.75e-06 | m3/s | L/h | exact (1) | Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract |
| t 1/2 (h) | `Q57` · t1/2z | 2.33 | h | 8388 | s | h | space_fold (0.95) | Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract |
| AUC(ngmlx1h) | `Q88` · AUC | 1638 | ng·h/mL |  |  | ng·h/mL | exact (1) | Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract, Magee_2002:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- unit_dimension_unknown: 'hx1' (kabs)
- unit_dimension_unknown: 'lkgx1' (V1/F)
- dropped duplicate Q290 ('V\nc\n/F/TBW(lkgx1)', value 0.59) — already have one for this compound
- unit_dimension_unknown: 'lhx1' (CL/F)
- unit_dimension_unknown: 'lhx1kgx1' (CL/F)
- dropped duplicate Q27 ('CL/F/TBW(lhx1kgx1)', value 0.178) — already have one for this compound
- unit_dimension_unknown: 'ngmlx1h' (AUC)
- unit_dimension_unknown: 'lhx1kg' (CL/F)
- dropped duplicate Q27 ('CL/F/TBW(lhx1kg)', value 0.788) — already have one for this compound
- implicit units: 'k\na\n(hx1)' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (kabs). In population pharmacokinetics, first-order rate constants are conv')
- implicit units: 'CL/F(lhx1)' → L/h (from the popPK convention: 'The parameter is total clearance (CL/F). In population pharmacokinetics, clearance is conventionally expressed in volume')
- implicit units: 'AUC(ngmlx1h)' → ng·h/mL (from the popPK convention: 'The parameter is Area Under the Curve (AUC). In population pharmacokinetics, AUC is conventionally expressed as concentr')
- metabolite prednisolone: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=prednisolone
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V
c
/F(l)' is the general volume)
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 48 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'prednisolone', not prednisone — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Magee_2002_extracted.txt (64 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc (ngmlx1h) wm]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | 1638 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (lhx1) wm]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 13.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a (hx1) wm]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 5.62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 (h) wm]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 2.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag (h) wm]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0.283 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c /f (l) wm]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c /f]` | 44.8 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | prednisone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | prednisolone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 44.8 L | ['Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract', 'Magee_2002:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=prednisolone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_prednisone/Prednisone_Magee2002_reference/Prednisone_Magee2002_reference_modelica.zip" download>Prednisone_Magee2002_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_prednisone/Prednisone_Magee2002_reference/Prednisone_Magee2002_reference_fmi.zip" download>Prednisone_Magee2002_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3604 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1019 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.89e-05 | kg |
| input | model | `Cl` | 3.75e-06 | m3/s |
| input | model | `VdPerKg` | 0.00064 | m3/kg |
| input | model | `ka` | 0.001561 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Magee MH, Blum RA, Lates CD, Jusko WJ. Pharmacokinetic/pharmacodynamic model for prednisolone inhibition of whole blood lymphocyte proliferation. British journal of clinical pharmacology 53(5):474–484 (2002). [doi:10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x)

**This record:** Pharmacolibrary v26.09, model `Prednisone_Magee2002_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_prednisone/Prednisone_Magee2002_reference>

```bibtex
@misc{pharmacolibrary_PrednisoneMagee2002reference,
  title  = {{Pharmacolibrary model Prednisone_Magee2002_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_prednisone/Prednisone_Magee2002_reference},
  note   = {Parameters from doi:10.1046/j.1365-2125.2002.01567.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 18.9 mg, single dose, first-order absorption (ka 5.62 /h, lag 17 min, F 1). Dose in the paper: 18.9 mg.

<dbs-fmusim paramsurl="drugs/drug_prednisone/Prednisone_Magee2002_reference/Prednisone_Magee2002_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_prednisone/Prednisone_Magee2002_reference/Prednisone_Magee2002_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Prednisone_Magee2002_reference_params.json` · controls `Prednisone_Magee2002_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprednisone%5D%20Prednisone_Magee2002_reference&body=Drug%3A%20prednisone%0ARecord%3A%20Prednisone_Magee2002_reference%0APaper%3A%20Magee_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_prednisone/Prednisone_Magee2002_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 19:50 UTC</sub>
