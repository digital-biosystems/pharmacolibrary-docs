<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;metoprolol&quot;,&quot;href&quot;:&quot;drugs/drug_metoprolol/&quot;},{&quot;label&quot;:&quot;Kir_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metoprolol — `Metoprolol_Kir2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (CLint, kabs and equation variable), so that value has no SI equivalent. Extracted — metoprolol: Kp 4.03, CLint 148 mL/min/kg, kabs 1.19 mg/min/kg, Vss 5.82 L/kg, CL 16 mL/min/kg.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Kir F et al., Minimal Physiologically-Based Pharmacok…, European journal of drug me… (2025)
  ·  DOI: [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6)

<div class="pk-model-meta" hidden drug="metoprolol" model-id="Metoprolol_Kir2025_reference" status="rejected" stale="false" population="malnourished rats" measured-compound="metoprolol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Kp1 | `Q410` · Kp | 4.033 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4 | — | not captured |
| CLint (mL/min/kg) | `Q3` · CLint | 148 | mL/min/kg | not captured | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4 | — | not captured |
| k01 C (mg/min/kg) | `Q49` · kabs | 1.19 | mg/min/kg | not captured | [mg] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Tab3:row6:col2, Tab3:row6:col3, Tab3:row6:col4, Kir_2025_table_2:row5:col2, Kir_2025_table_2:row5:col3, Kir_2025_table_2:row5:col4 | — | not captured |
| k02 C (mg/min/kg) | `Q900` · equation variable | 1.86 | mg/min/kg | not captured | [mg] / [[min] · [kg]] | not captured | llm (0.6) | Tab3:row8:col2, Tab3:row8:col3, Tab3:row8:col4, Kir_2025_table_2:row7:col2, Kir_2025_table_2:row7:col3, Kir_2025_table_2:row7:col4 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | 5.82 | L/kg | 0.40740000000000004 | [l] / [kg] | not captured | exact (1.0) | Tab3:row12:col2 | — | not captured |
| CL (mL/min/kg) | `Q22` · CL | 16.04 | mL/min/kg | 1.8713333333333333e-05 | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Kir_2025_table_2:row4:col2, Kir_2025_table_2:row4:col3, Kir_2025_table_2:row4:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'fd1a'; source reconciliation required
- column 'linearization' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Kp1'; source reconciliation required
- table representations disagree for 'CLint (mL/min/kg)'; source reconciliation required
- table representations disagree for 'k01 C (mg/min/kg)'; source reconciliation required
- table representations disagree for 'k01 M (mg/min/kg)'; source reconciliation required
- table representations disagree for 'k02 C (mg/min/kg)'; source reconciliation required
- table representations disagree for 'k02 M (mg/min/kg)'; source reconciliation required
- table representations disagree for 'fr C'; source reconciliation required
- table representations disagree for 'fr M'; source reconciliation required
- table representations disagree for 'Vss (L/kg)'; source reconciliation required
- table representations disagree for 'F C'; source reconciliation required
- dropped unlinked row (NIL): 'fd1a' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4', 'Kir_2025_table_2:row2:col2', 'Kir_2025_table_2:row2:col3', 'Kir_2025_table_2:row2:col4'])
- unit_dimension_mismatch: 'CLint (mL/min/kg)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- unit_dimension_mismatch: 'k01 C (mg/min/kg)' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k01 M (mg/min/kg)' → Q49 (unit '[mass] / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('k01 M (mg/min/kg)', value '0.0633') — already have one for this compound
- dropped unlinked row (NIL): 'k02 M (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col2', 'Tab3:row9:col3', 'Tab3:row9:col4', 'Kir_2025_table_2:row8:col2', 'Kir_2025_table_2:row8:col3'])
- dropped unlinked row (NIL): 'fr C' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col2', 'Tab3:row10:col3', 'Tab3:row10:col4'])
- dropped unlinked row (NIL): 'fr M' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col2', 'Tab3:row11:col3'])
- dropped duplicate Q900 ('F C', value '0.422') — already have one for this compound
- dropped duplicate Q410 ('Kp1b', value '1.43') — already have one for this compound
- dropped unlinked row (NIL): 'k03 Cc (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_2:row9:col2'])
- dropped unlinked row (NIL): 'k03 M (mg/min/kg)' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_2:row10:col2', 'Kir_2025_table_2:row10:col3', 'Kir_2025_table_2:row10:col4'])
- dropped duplicate Q65 ('Vss (L/kg)d', value '1.41') — already have one for this compound
- dropped unlinked row (NIL): 'F Ce' — extend the ontology if this is a real PK parameter (source ['Kir_2025_table_2:row12:col2'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (mL/min/kg))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=metoprolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab3: unbound_uncertainty
- table Tab3: ragged_grid
- table Tab3: representations disagree; selected evidence retained, not merged
- table Kir_2025_table_2: unbound_uncertainty
- table Kir_2025_table_2: ragged_grid
- companion parameter table 2 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kir_2025_table_2:row4:col2', 'Kir_2025_table_2:row4:col3', 'Kir_2025_table_2:row4:col4'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | mL/min/kg | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4'] |
| C5_dimension_Q49 | fail | [mass] / [time] | mg/min/kg | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Kir_2025_table_2:row5:col2', 'Kir_2025_table_2:row5:col3', 'Kir_2025_table_2:row5:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row12:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.04 | not captured | not captured | ['Kir_2025_table_2:row4:col2', 'Kir_2025_table_2:row4:col3', 'Kir_2025_table_2:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 67.4 L/h | not captured | not captured | ['Kir_2025_table_2:row4:col2', 'Kir_2025_table_2:row4:col3', 'Kir_2025_table_2:row4:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 407 L | not captured | not captured | ['Tab3:row12:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_metoprolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kir_2025` / `Kir_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:29 UTC</sub>
