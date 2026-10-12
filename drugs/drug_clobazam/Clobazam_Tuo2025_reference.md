<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;clobazam&quot;,&quot;href&quot;:&quot;drugs/drug_clobazam/&quot;},{&quot;label&quot;:&quot;Tuo_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clobazam — `Clobazam_Tuo2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because clobazam's clearance parameter CL/F is reported as 10.53 with unit L−1, a dimensionally wrong unit for clearance, which should be L/h.**

In the Tuo_2025 parent–metabolite model (clobazam to N-desmethylclobazam in Chinese children with refractory epilepsy), the parent clearance CL/F carries the verbatim unit L−1 instead of a flow unit such as L/h, so the value 10.53 cannot be converted to SI and fails the dimensional check on a structural parameter. The metabolite clearance CL/F is reported with the same unit L−1 (value 11.83), consistent with a unit error in the source. The other parameters (kabs 1.99 h−1, V/F 31.15 L, V1/F 29.66 L) carry dimensionally consistent units. Extracted — clobazam: kabs 1.99 h−1, V/F 31.1 L, CL/F 10.5 L−1; N-desmethylclobazam: V1/F 29.7 L, CL/F 11.8 L−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clobazam, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Tuo Y et al., Population Pharmacokinetics and Model-I…, Pharmaceutics (2025)
  ·  DOI: [10.3390/pharmaceutics17070813](https://doi.org/10.3390/pharmaceutics17070813)

## Model component
<dbs-pgx drug="clobazam" model-id="Clobazam_Tuo2025_reference" status="rejected" stale="false" population="Chinese children with refractory epilepsy" measured-compound="clobazam" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h−1) | `Q49` · kabs | 1.99 | h−1 | 0.0005527777777777778 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-17-00813-t002:row2:col1, pharmaceutics-17-00813-t002:row2:col3 | — | not captured |
| VCLB/F (L) | `Q76` · V/F | 31.15 | L | 0.03115 | [l] | not captured | llm (0.6) | pharmaceutics-17-00813-t002:row3:col1, pharmaceutics-17-00813-t002:row3:col2, pharmaceutics-17-00813-t002:row3:col3, pharmaceutics-17-00813-t002:row3:col4, pharmaceutics-17-00813-t002:row3:col5 | — | not captured |
| CLCLB/F (L−1) | `Q27` · CL/F | 10.53 | L−1 | not captured | [1] / [l] | not captured | exact (1.0) | pharmaceutics-17-00813-t002:row4:col1, pharmaceutics-17-00813-t002:row4:col2, pharmaceutics-17-00813-t002:row4:col3, pharmaceutics-17-00813-t002:row4:col4, pharmaceutics-17-00813-t002:row4:col5 | — | not captured |
| VN-CLB/Fm (L) | `Q290` · V1/F | 29.66 | L | 0.029660000000000002 | [l] | not captured | exact (1.0) | pharmaceutics-17-00813-t002:row5:col1, pharmaceutics-17-00813-t002:row5:col2, pharmaceutics-17-00813-t002:row5:col3, pharmaceutics-17-00813-t002:row5:col4, pharmaceutics-17-00813-t002:row5:col5 | — | not captured |
| CLN-CLB/Fm (L−1) | `Q27` · CL/F | 11.83 | L−1 | not captured | [1] / [l] | not captured | exact (1.0) | pharmaceutics-17-00813-t002:row6:col1, pharmaceutics-17-00813-t002:row6:col2, pharmaceutics-17-00813-t002:row6:col3, pharmaceutics-17-00813-t002:row6:col4, pharmaceutics-17-00813-t002:row6:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2CLCLB/F (%)' routed out of structural estimates ('Interindividual variation')
- table section iiv: 'ω2CLN-CLB/Fm (%)' routed out of structural estimates ('Interindividual variation')
- table section iiv: 'η-Shrinkage-CLCLB (%)' routed out of structural estimates ('Interindividual variation')
- table section iiv: 'η-Shrinkage-CLN-CLB (%)' routed out of structural estimates ('Interindividual variation')
- column 'bias (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'CLCLB/F (L−1)' → Q27 (unit '1 / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLN-CLB/Fm (L−1)' → Q27 (unit '1 / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'θCYP2C19,NM' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-00813-t002:row7:col1', 'pharmaceutics-17-00813-t002:row7:col3'])
- dropped diagnostic row 'ε-Shrinkage (%)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped value-less row: 'RSE'
- dropped value-less row: 'CI'
- dropped value-less row: 'Ka'
- dropped value-less row: 'VCLB/F'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'VN-CLB/Fm'
- dropped value-less row: 'CLN-CLB/Fm'
- dropped value-less row: 'θCYP2C19'
- dropped value-less row: '—'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clobazam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- row roles: per-genotype parameters — typical value from the reference group: θCYP2C19,NM
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 27 linked by role; re-tagged parent→N-desmethylclobazam ×23, clobazam→parent ×4, clobazam→N-desmethylclobazam ×4
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-17-00813-t002:row8:col4 = '−0.53–−0.02'
- unparsed cell pharmaceutics-17-00813-t002:row9:col4 = '−1.67–−0.89'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clclb/f]` | 10.53 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clclb/f]` | not captured | -0.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cln-clb/fm].value` | 11.83 | 0 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 1.99 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vclb/f]` | 31.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vclb/f]` | not captured | 1.10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vn-clb/fm].value` | 29.66 | 1.63 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | clobazam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clobazam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | fail | 1 / [length] ** 3 | L−1 | not captured | not captured | ['pharmaceutics-17-00813-t002:row4:col1', 'pharmaceutics-17-00813-t002:row4:col2', 'pharmaceutics-17-00813-t002:row4:col3', 'pharmaceutics-17-00813-t002:row4:col4', 'pharmaceutics-17-00813-t002:row4:col5'] |
| C5_dimension_Q27 | fail | 1 / [length] ** 3 | L−1 | not captured | not captured | ['pharmaceutics-17-00813-t002:row6:col1', 'pharmaceutics-17-00813-t002:row6:col2', 'pharmaceutics-17-00813-t002:row6:col3', 'pharmaceutics-17-00813-t002:row6:col4', 'pharmaceutics-17-00813-t002:row6:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-00813-t002:row5:col1', 'pharmaceutics-17-00813-t002:row5:col2', 'pharmaceutics-17-00813-t002:row5:col3', 'pharmaceutics-17-00813-t002:row5:col4', 'pharmaceutics-17-00813-t002:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-00813-t002:row2:col1', 'pharmaceutics-17-00813-t002:row2:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-00813-t002:row3:col1', 'pharmaceutics-17-00813-t002:row3:col2', 'pharmaceutics-17-00813-t002:row3:col3', 'pharmaceutics-17-00813-t002:row3:col4', 'pharmaceutics-17-00813-t002:row3:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 29.7 L | not captured | not captured | ['pharmaceutics-17-00813-t002:row5:col1', 'pharmaceutics-17-00813-t002:row5:col2', 'pharmaceutics-17-00813-t002:row5:col3', 'pharmaceutics-17-00813-t002:row5:col4', 'pharmaceutics-17-00813-t002:row5:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 31.2 L | not captured | not captured | ['pharmaceutics-17-00813-t002:row3:col1', 'pharmaceutics-17-00813-t002:row3:col2', 'pharmaceutics-17-00813-t002:row3:col3', 'pharmaceutics-17-00813-t002:row3:col4', 'pharmaceutics-17-00813-t002:row3:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clobazam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tuo_2025` / `Tuo_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 18:56 UTC</sub>
