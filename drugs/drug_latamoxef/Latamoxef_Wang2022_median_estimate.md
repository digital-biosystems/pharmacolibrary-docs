<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;latamoxef&quot;,&quot;href&quot;:&quot;drugs/drug_latamoxef/&quot;},{&quot;label&quot;:&quot;Wang_2022 \u00b7 median_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# latamoxef — `Latamoxef_Wang2022_median_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.6). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

None of the extracted parameters is latamoxef's own; they describe total latamoxef. Extracted — total latamoxef: V1 4.66 L, V2 16.5 L, CL 0.99 L/h, Q 0.98 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has latamoxef → latamoxef r-epimer (interconversion); latamoxef → latamoxef s-epimer (interconversion), the second reading latamoxef → r-epimer (interconversion); latamoxef → s-epimer (interconversion); it also differs on 1 more field. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `latamoxef`, measured `total latamoxef`.

## Citation
Wang Y et al., Population Pharmacokinetics and Dosing…, Pharmaceutics (2022)
  ·  DOI: [10.3390/pharmaceutics14051033](https://doi.org/10.3390/pharmaceutics14051033)

<div class="pk-model-meta" hidden drug="latamoxef" model-id="Latamoxef_Wang2022_median_estimate" status="rejected" stale="false" population="Chinese children with bacterial infections" measured-compound="total latamoxef" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θV1 (L) | `Q63` · V1 | 4.66 | L | 0.00466 | [l] | not captured | exact (1.0) | Wang_2022_table_p7_1:row0:col5 | — | 110.78 (None% RSE) |
| θV2 (L) | `Q64` · V2 | 16.54 | L | 0.01654 | [l] | not captured | exact (1.0) | Wang_2022_table_p7_1:row1:col5 | — | not captured |
| θCL (L/h) | `Q22` · CL | 0.99 | L/h | 2.75e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Wang_2022_table_p7_1:row2:col5 | — | 28.08 (None% RSE) |
| θQ (L/h) | `Q30` · Q | 0.98 | L/h | 2.722222222222222e-07 | [l] / [h] | not captured | llm (0.6) | Wang_2022_table_p7_1:row3:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωV1 (%)' routed out of structural estimates ('Inter-individual')
- table section iiv: 'ωCL (%)' routed out of structural estimates ('Inter-individual')
- table section residual_error: 'σ (mg/L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θV1/r (L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θV2/r (L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θCL/r (L/h)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θQ/r (L/h)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θ7' routed out of structural estimates ('Residual variability')
- table section iiv: 'ωV1/r (%)' routed out of structural estimates ('Inter-individual')
- table section iiv: 'ωCL/r (%)' routed out of structural estimates ('Inter-individual')
- table section residual_error: 'σR (mg/L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θV1/(1−r) (L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θV2/(1−r) (L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θCL/(1−r) (L/h)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θQ/(1−r) (L/h)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'θ11' routed out of structural estimates ('Residual variability')
- table section iiv: 'ωV1/(1−r) (%)' routed out of structural estimates ('Inter-individual')
- table section iiv: 'ωCL/(1−r) (%)' routed out of structural estimates ('Inter-individual')
- table section residual_error: 'σS (mg/L)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['Wang_2022_table_p7_1:row6:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=total latamoxef
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at route_to_review — not promoted
- population split: 'median estimate' subgroup of Wang_2022 (paper reports 2 populations: estimate, median estimate)
- row roles (LLM): model_class=compartmental; 33/33 row label(s) assigned, 60 linked by role; re-tagged parent→total latamoxef ×43, parent→R-latamoxef ×43, parent→S-latamoxef ×43
- molar mass: no plausible PubChem entry for 'R-latamoxef' ('R-latamoxef') — left in mass units
- molar mass: no plausible PubChem entry for 'S-latamoxef' ('S-latamoxef') — left in mass units
- molar mass: no plausible PubChem entry for 'total latamoxef' ('total latamoxef') — left in mass units
- molar mass: none found for 'R-latamoxef' — its concentrations stay mass-only
- molar mass: none found for 'S-latamoxef' — its concentrations stay mass-only
- molar mass: none found for 'total latamoxef' — its concentrations stay mass-only

**Extraction notes:**
- table Wang_2022_table_p7_1: ambiguous_uncertainty_binding
- table Wang_2022_table_p7_1: unbound_uncertainty
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.6 (3/5 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['latamoxef', 'latamoxef r-epimer', 'interconversion'], ['latamoxef', 'latamoxef s-epimer', 'interconversion']] | [['latamoxef', 'r-epimer', 'interconversion'], ['latamoxef', 's-epimer', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[r + s]` | not captured | 4.84 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2022_table_p7_1:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2022_table_p7_1:row3:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2022_table_p7_1:row0:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2022_table_p7_1:row1:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.99 | not captured | not captured | ['Wang_2022_table_p7_1:row2:col5'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.99 L/h | not captured | not captured | ['Wang_2022_table_p7_1:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.66 L | not captured | not captured | ['Wang_2022_table_p7_1:row0:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 16.5 L | not captured | not captured | ['Wang_2022_table_p7_1:row1:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_latamoxef/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2022` / `Wang_2022::median_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:21 UTC</sub>
