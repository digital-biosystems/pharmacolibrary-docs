<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dostarlimab&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/&quot;},{&quot;label&quot;:&quot;Melhem_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dostarlimab — `Dostarlimab_Melhem2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

Extracted — dostarlimab: CL 0.179 L d −1, V1 2.98 L, Q 0.547 L d −1, V2 2.1 L, V -0.153.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022)
  ·  DOI: [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339)

<div class="pk-model-meta" hidden drug="dostarlimab" model-id="Dostarlimab_Melhem2022_reference" status="rejected" stale="false" population="adults with advanced solid tumours" measured-compound="dostarlimab" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L d −1 ) a | `Q22` · CL | 0.179 | L d −1 | 2.0717592592592592e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | bcp15339-tbl-0003:row1:col1 | — | 0.0551 (None% RSE) |
| V c (L) a | `Q63` · V1 | 2.98 | L | 0.00298 | [l] | not captured | llm (0.6) | bcp15339-tbl-0003:row2:col1 | — | not captured |
| Q (L d −1 ) | `Q30` · Q | 0.547 | L d −1 | 6.331018518518519e-09 | [l] / [d] | not captured | exact (1.0) | bcp15339-tbl-0003:row3:col1 | — | not captured |
| V p (L) | `Q64` · V2 | 2.10 | L | 0.0021000000000000003 | [l] | not captured | space_fold (0.95) | bcp15339-tbl-0003:row4:col1 | — | not captured |
| effect_of_wt_on_v_c_and_v_p | `Q900` · effect_of_wt_on_v_c_and_v_p | 0.419 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp15339-tbl-0003:row9:col1 | — | not captured |
| Effect of ALB on V c | `Q61` · V | -0.153 | not captured | not captured | not captured | not captured | llm (0.6) | bcp15339-tbl-0003:row14:col1 | — | not captured |
| theta_cl_wt | `Q900` · theta_cl_wt | 0.470 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp15339-tbl-0003:row8:col1 | — | not captured |
| theta_cl_age | `Q900` · theta_cl_age | -0.227 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp15339-tbl-0003:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'I max a' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp15339-tbl-0003:row5:col1'])
- dropped unlinked row (NIL): 'T50 (d)' — extend the ontology if this is a real PK parameter (source ['bcp15339-tbl-0003:row6:col1'])
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp15339-tbl-0003:row7:col1'])
- covariate level 'Effect of WT on V c and V p' → Q900:effect_of_wt_on_v_c_and_v_p = 0.419 (linear_fractional on Q22)
- dropped duplicate Q22 ('Effect of ALB on CL', value '-1.01') — already have one for this compound
- dropped duplicate Q22 ('Effect of ALT on CL', value '-0.0585') — already have one for this compound
- dropped duplicate Q22 ('Effect of male on CL', value '0.165') — already have one for this compound
- dropped duplicate Q61 ('Effect of male on V c', value '0.162') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dostarlimab
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- molar mass: none found for 'dostarlimab' — its concentrations stay mass-only

**Extraction notes:**
- table bcp15339-tbl-0003: unbound_uncertainty
- table bcp15339-tbl-0003: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q61 | fail | not captured | -0.153 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15339-tbl-0003:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15339-tbl-0003:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15339-tbl-0003:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15339-tbl-0003:row4:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['bcp15339-tbl-0003:row14:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.179 | not captured | not captured | ['bcp15339-tbl-0003:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00746 L/h | not captured | not captured | ['bcp15339-tbl-0003:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.98 L | not captured | not captured | ['bcp15339-tbl-0003:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.1 L | not captured | not captured | ['bcp15339-tbl-0003:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_dostarlimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Melhem_2022` / `Melhem_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 19:17 UTC</sub>
