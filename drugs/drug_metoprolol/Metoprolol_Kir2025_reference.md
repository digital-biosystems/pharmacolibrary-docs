<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;metoprolol&quot;,&quot;href&quot;:&quot;drugs/drug_metoprolol/&quot;},{&quot;label&quot;:&quot;Kir_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metoprolol — `Metoprolol_Kir2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The metoprolol/atenolol rat model was held back because its simulated Cmax (0.0498) and tmax (1.81) fail to match the paper's reported values (e.g. 0.025 and 5.0), and the absorption rate was invented rather than reported.**

Simulated as the paper dosed it, the model's peak concentration exceeds the reported values by ratios of 1.9928, 2.1851, 2.4185 and 3.484 (expected 0.025, 0.0228, 0.0206, 0.0143 vs obtained 0.04982117140128287), and the time of the peak is 1.8062765240005605 against an expected 5.0 (ratio 0.3613), with a minutes-versus-hours unit mismatch noted. The absorption rate constant was defaulted because it was not reported in the source, an invented absorption that was judged not acceptable, and bioavailability and lag time were also left at defaults. Additionally, one reported parameter's unit could not be converted to SI, so that parameter entered the model without an SI value, and a second reader disagreed on the analyte naming and on whether the clearance (16.04 mL/min/kg), absorption rate (1.19 mg/min/kg) and volume of distribution (1.41 L/kg) values belong to this record. Extracted — atenolol and metoprolol: CL 16 mL/min/kg, kabs 1.19 mg/min/kg, V 1.41 L/kg.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:39:00.182353+00:00) predates the upstream re-run (2026-10-07 00:07:54.133168+00:00). Current validate status: `rejected`.

## Citation
Kir F et al., Minimal Physiologically-Based Pharmacok…, European journal of drug me… (2025)
  ·  DOI: [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6)

## Model component
<dbs-pgx drug="metoprolol" model-id="Metoprolol_Kir2025_reference" status="rejected" stale="true" population="malnourished rats" measured-compound="metoprolol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Kp1 | `Q410` · Kp | 4.033 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4 | — | not captured |
| CLint (mL/min/kg) | `Q3` · CLint | 148 | mL/min/kg | not captured | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4 | — | not captured |
| k01 C (mg/min/kg) | `Q49` · kabs | 1.19 | mg/min/kg | not captured | [mg] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Tab3:row6:col1, Tab3:row6:col3, Tab3:row6:col4, Kir_2025_table_2:row5:col1, Kir_2025_table_2:row5:col2, Kir_2025_table_2:row5:col3, Kir_2025_table_2:row5:col4 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | 5.82 | L/kg | 0.40740000000000004 | [l] / [kg] | not captured | exact (1.0) | Tab3:row12:col2 | — | not captured |
| F M | `Q45` · fm | 0.839 | not captured | not captured | not captured | not captured | space_fold (0.95) | Tab3:row14:col1 | — | not captured |
| CL (mL/min/kg) | `Q22` · CL | 16.04 | mL/min/kg | 1.8713333333333333e-05 | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Kir_2025_table_2:row4:col2, Kir_2025_table_2:row4:col3, Kir_2025_table_2:row4:col4 | — | not captured |
| k03 Cc (mg/min/kg) | `Q303` · k13 | 0 | mg/min/kg | not captured | [mg] / [[min] · [kg]] | not captured | llm (0.6) | Kir_2025_table_2:row9:col1, Kir_2025_table_2:row9:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'linearization' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'fd1a' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4', 'Kir_2025_table_2:row2:col2', 'Kir_2025_table_2:row2:col3', 'Kir_2025_table_2:row2:col4'])
- unit_dimension_mismatch: 'CLint (mL/min/kg)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- unit_dimension_mismatch: 'k01 C (mg/min/kg)' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k01 M (mg/min/kg)' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('k01 M (mg/min/kg)', value '0.0633') — already have one for this compound
- dropped unlinked row (NIL): 'k02 C (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1', 'Tab3:row8:col2', 'Tab3:row8:col3', 'Tab3:row8:col4', 'Kir_2025_table_2:row7:col1', 'Kir_2025_table_2:row7:col3', 'Kir_2025_table_2:row7:col4'])
- dropped unlinked row (NIL): 'k02 M (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2', 'Tab3:row9:col3', 'Tab3:row9:col4', 'Kir_2025_table_2:row8:col1', 'Kir_2025_table_2:row8:col2', 'Kir_2025_table_2:row8:col3'])
- dropped unlinked row (NIL): 'fr C' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col2', 'Tab3:row10:col3', 'Tab3:row10:col4'])
- dropped unlinked row (NIL): 'fr M' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2', 'Tab3:row11:col3'])
- dropped unlinked row (NIL): 'F C' — extend the ontology if this is a real PK parameter (source ['Tab3:row13:col2'])
- dropped unlinked row (NIL): 'Kp1b' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_2:row3:col2', 'Kir_2025_table_2:row3:col3', 'Kir_2025_table_2:row3:col4'])
- unit_dimension_mismatch: 'k03 Cc (mg/min/kg)' → Q303 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k03 M (mg/min/kg)' → Q303 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q303 ('k03 M (mg/min/kg)', value '1.16') — already have one for this compound
- dropped duplicate Q65 ('Vss (L/kg)d', value '1.41') — already have one for this compound
- dropped unlinked row (NIL): 'F Ce' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_2:row12:col2'])
- dropped unlinked row (NIL): 'F Me' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_2:row13:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (mL/min/kg))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=metoprolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row3:col1 = 'Fractional distribution parameter for Tissue 1'
- unparsed cell Tab3:row4:col1 = 'Tissue-to-plasma partition coefficient for Tissue 1'
- unparsed cell Tab3:row6:col2 = '4.5*'
- unparsed cell Kir_2025_table_2:row2:col1 = 'Fractional distribution parameter for Tissue 1'
- unparsed cell Kir_2025_table_2:row3:col1 = 'Tissue-to-plasma partition coefficient for Tissue 1'
- unparsed cell Kir_2025_table_2:row6:col1 = '1.012*'
- unparsed cell Kir_2025_table_2:row7:col2 = '1.86**'
- companion parameter table 2 transcribed (30 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kir_2025_table_2:row4:col2', 'Kir_2025_table_2:row4:col3', 'Kir_2025_table_2:row4:col4'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | mL/min/kg | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4'] |
| C5_dimension_Q303 | fail | [mass] / [time] | mg/min/kg | not captured | not captured | ['Kir_2025_table_2:row9:col1', 'Kir_2025_table_2:row9:col2'] |
| C5_dimension_Q49 | fail | [mass] / [time] | mg/min/kg | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Kir_2025_table_2:row5:col1', 'Kir_2025_table_2:row5:col2', 'Kir_2025_table_2:row5:col3', 'Kir_2025_table_2:row5:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row12:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.04 | not captured | not captured | ['Kir_2025_table_2:row4:col2', 'Kir_2025_table_2:row4:col3', 'Kir_2025_table_2:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 67.4 L/h | not captured | not captured | ['Kir_2025_table_2:row4:col2', 'Kir_2025_table_2:row4:col3', 'Kir_2025_table_2:row4:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 407 L | not captured | not captured | ['Tab3:row12:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=atenolol and metoprolol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.025 | 0.04982117140128287 | 1.9928 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0228 | 0.04982117140128287 | 2.1851 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0143 | 0.04982117140128287 | 3.484 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0206 | 0.04982117140128287 | 2.4185 | µg/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 5.0 | 1.8062765240005605 | 0.3613 | min→SI vs simulated h |
| T1_tmax | reference | pass | 2.25 | 1.8062765240005605 | 0.8028 | min→SI vs simulated h |
| T1_tmax | reference | pass | 1.8333333333333333 | 1.8062765240005605 | 0.9852 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metoprolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kir_2025` / `Kir_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_metoprolol/models/modelica/Metoprolol_Kir2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_metoprolol/models/modelica/Metoprolol_Kir2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_metoprolol/models/modelica/Metoprolol_Kir2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:07 UTC</sub>
