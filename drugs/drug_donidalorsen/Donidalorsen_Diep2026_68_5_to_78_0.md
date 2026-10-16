<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;donidalorsen&quot;,&quot;href&quot;:&quot;drugs/drug_donidalorsen/&quot;},{&quot;label&quot;:&quot;Diep_2026 \u00b7 68_5_to_78_0&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donidalorsen — `Donidalorsen_Diep2026_68_5_to_78_0`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (AUCSS, Cmax, Ctrough and Cmin), so that value has no SI equivalent. Extracted — donidalorsen: AUCSS 5.9e+03 kg, Cmax 604 ng/mL, Ctrough 0.91 ng/mL, tmax 2 h, t1/2z 25.9 days, Cmin 18.2 mg/L.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Diep JK et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206)

<div class="pk-model-meta" hidden drug="donidalorsen" model-id="Donidalorsen_Diep2026_68_5_to_78_0" status="rejected" stale="false" population="healthy adults and adolescents with HAE" measured-compound="donidalorsen" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUCτ,ss(ng∙h/mL) | `Q18` · AUCSS | 5900 | kg | not captured | [kg] | not captured | llm_corrected (0.6) | Diep_2026_table_S3:row20:col2 | — | not captured |
| Cmax,ss(ng/mL) | `Q32` · Cmax | 604 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Diep_2026_table_S3:row20:col3 | — | not captured |
| Ctrough,ss(ng/mL) | `Q37` · Ctrough | 0.910 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Diep_2026_table_S3:row20:col4 | — | not captured |
| Tmax,ss(h) | `Q56` · tmax | 2 | h | 7200.0 | [h] | not captured | llm_confirmed (0.6) | Diep_2026_table_S3:row20:col5 | — | not captured |
| T1/2(days) | `Q57` · t1/2z | 25.9 | days | 2237760.0 | [d] | not captured | exact (1.0) | Diep_2026_table_S3:row20:col6 | — | not captured |
| Minimum PKK conc. (mg/L) | `Q36` · Cmin | 18.2 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Diep_2026_table_S4:row20:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '≥68.5 to &lt;78.0' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'AUCτ,ss(ng∙h/mL)' → Q18 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q37 ('PKK conc. at Ctrough,ss (mg/L)', value '21.2') — already have one for this compound
- unit_dimension_mismatch: 'CFB in PKK conc. at Ctrough,ss (%)' → Q37 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q37 ('CFB in PKK conc. at Ctrough,ss (%)', value '-84.0') — already have one for this compound
- unit_dimension_mismatch: 'Max CFB in PKK conc. at nadir (%)' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q32 ('Max CFB in PKK conc. at nadir (%)', value '-86.3') — already have one for this compound
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['psp470206-tbl-0001:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donidalorsen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: '≥68.5 to &lt;78.0' subgroup of Diep_2026 (paper reports 29 populations: abdomen, arm, asian, autoinjector, black/african american, estimate, europe, female, hae, hae-c1inh-type 1, hae-c1inh-type 2, hae-nc1inh, healthy volunteer, hispanic/latino, male, middle east, mild, multiple, normal, north america, not hispanic/latino, thigh, vial, white, ≥37 to &lt;68.5, ≥65, ≥68.5 to &lt;78.0, ≥78.0 to &lt;89.1, ≥89.1 to ≤151.9)
- molar mass: none found for 'donidalorsen' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Diep_2026_table_S3: ragged_grid
- table Diep_2026_table_S3: unparsed_numeric_cell
- transposed table Diep_2026_table_S3: logical view retains original source coordinates
- companion parameter table S3 transcribed (208 record(s))
- table Diep_2026_table_S4: ragged_grid
- table Diep_2026_table_S4: unparsed_numeric_cell
- transposed table Diep_2026_table_S4: logical view retains original source coordinates
- companion parameter table S4 transcribed (172 record(s))
- LLM selected parameter table(s) 1, S3, S4
- phenotype-stratified table(s) S3, S4 read with them

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q18 | fail | [mass] | kg | not captured | not captured | ['Diep_2026_table_S3:row20:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Diep_2026_table_S3:row20:col3'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Diep_2026_table_S4:row20:col4'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Diep_2026_table_S3:row20:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Diep_2026_table_S3:row20:col5'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Diep_2026_table_S3:row20:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_donidalorsen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diep_2026` / `Diep_2026::68_5_to_78_0`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:48 UTC</sub>
