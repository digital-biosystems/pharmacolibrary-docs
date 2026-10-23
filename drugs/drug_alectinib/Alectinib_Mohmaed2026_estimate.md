<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alectinib&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/&quot;},{&quot;label&quot;:&quot;Mohmaed_2026 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fasted_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fasted_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fed_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fed_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alectinib — `Alectinib_Mohmaed2026_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Alectinib’s absorption lag time, tlag 1.51, had a structural-parameter dimension mismatch, so the record was rejected.

<div class="pk-model-meta" hidden drug="alectinib" model-id="Alectinib_Mohmaed2026_estimate" status="rejected" stale="false" population="patients with ALK-positive non-small cell lung cancer" measured-compound="2H6-alectinib" parameterization="apparent" topology="1C"></div>

## Citation
Mohmaed Ali MI, van der Heijden LT, Tibben M, Rosing H, Kalicharan R, Ruiter G et al. Reducing the Burden of Interaction Studies in Cancer Patients Using a Stable Isotopically Labeled Microtracer: A Proof-of-Concept Study with Alectinib. Clinical pharmacology and therapeutics 119(3):713–720 (2026).
  ·  DOI: [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141)

## Population and dosing

**Population:** patients with ALK-positive non-small cell lung cancer · condition ALK-positive non-small cell lung cancer · n = 10.

**Dosing:** 0.1 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed alectinib and 2H6-alectinib, measured 2H6-alectinib.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 84.2 | L/h | 41.9 (None% RSE) |
| VD/F (L) | V/F | 776 | L | 41.8 (None% RSE) |
| MTTfed (h) | MTT | 3.14 | h | 13.5 (None% RSE) |
| Ffed | Fab | 1 | unit | 73.7 (None% RSE) |
| Lag time (hours)c | tlag | 1.51 | unit |  |
| theta_q87_fed_ffasted_fraction_of_state | theta_q87_fed_ffasted_fraction_of_state | 0.65 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Alectinib’s absorption lag time, tlag 1.51, had a structural-parameter dimension mismatch, so the record was rejected.**

The parameter meaning identifies tlag as drug absorption lag time, but its reported unit is “unit” while the label specifies hours. That unit could not be converted to SI, leaving the structural parameter without an SI value. Extracted — alectinib: CL/F 84.2 L/h, V/F 776 L, MTT 3.14 h, Fab 1 unit, tlag 1.51 unit.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl/f].rse_percent`: this record has none, the second reading 31.2; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 84.2 | L/h | 2.339e-05 | m3/s | l/h | exact (1) | cpt70141-tbl-0002:row1:col1 | 41.9 (None% RSE) |
| VD/F (L) | `Q76` · V/F | 776 | L | 0.776 | m3 | l | exact (1) | cpt70141-tbl-0002:row2:col1 | 41.8 (None% RSE) |
| MTTfed (h) | `Q81` · MTT | 3.14 | h |  |  | h | llm (0.6) | cpt70141-tbl-0002:row3:col1 | 13.5 (None% RSE) |
| Ffed | `Q40` · Fab | 1 | unit |  |  | unit | llm (0.6) | cpt70141-tbl-0002:row5:col1 | 73.7 (None% RSE) |
| Lag time (hours)c | `Q83` · tlag | 1.51 | unit |  |  | unit | llm_confirmed (0.6) | cpt70141-tbl-0002:row7:col1 |  |
| theta_q87_fed_ffasted_fraction_of_state | `Q900` · theta_q87_fed_ffasted_fraction_of_state | 0.65 |  |  |  |  |  | cpt70141-tbl-0002:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'MTTfasted (fraction of fed state)' — extend the ontology if this is a real PK parameter (source ['cpt70141-tbl-0002:row4:col1'])
- unit_dimension_mismatch: 'Lag time (hours)c' → Q83 (unit '[luminosity] / [length] ** 2' vs ontology '[time]') — route to review
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=2H6-alectinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Mohmaed_2026 (paper reports 3 populations: estimate, fasted geometric mean (%cv), fed geometric mean (%cv))
- molar mass: no plausible PubChem entry for '2H6-alectinib' ('2H6-alectinib') — left in mass units
- molar mass: none found for '2H6-alectinib' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Mohmaed_2026_table_3:row0:col3 = '1.42 (1.16–1.76)'
- unparsed cell Mohmaed_2026_table_3:row1:col3 = '1.52 (1.25–1.89)'
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl/f].rse_percent` |  | 31.2 | mismatch |
| `qwen3.8-27b` | `parameters[ffed]` | 1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[lag time (hours)c].rse_percent` |  | 6.5 | mismatch |
| `qwen3.8-27b` | `parameters[mttfed].rse_percent` |  | 16.0 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q87_fed_ffasted_fraction_of_state]` | 0.65 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd/f].rse_percent` |  | 28.7 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt70141-tbl-0002:row1:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['cpt70141-tbl-0002:row2:col1'] |
| C5_dimension_Q83 | fail | [luminosity] / [length] ** 2 | unit | ['cpt70141-tbl-0002:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 84.2 L/h | ['cpt70141-tbl-0002:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 776 L | ['cpt70141-tbl-0002:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balectinib%5D%20Alectinib_Mohmaed2026_estimate&body=Drug%3A%20alectinib%0ARecord%3A%20Alectinib_Mohmaed2026_estimate%0APaper%3A%20Mohmaed_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alectinib/Alectinib_Mohmaed2026_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:15 UTC</sub>
