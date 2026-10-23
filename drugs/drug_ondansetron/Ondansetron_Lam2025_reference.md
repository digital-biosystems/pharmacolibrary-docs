<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;ondansetron&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/&quot;},{&quot;label&quot;:&quot;Lam_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Chiang2021_estimate&quot;,&quot;label&quot;:&quot;Chiang_2021_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021v2_reference&quot;,&quot;label&quot;:&quot;Chiang_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Landau2026_reference&quot;,&quot;label&quot;:&quot;Landau_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Landau2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ondansetron — `Ondansetron_Lam2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-04 14:07 UTC); the status shown comes from the current checks. The ondansetron record was rejected because the reported clearance (0.58 L/h) and central volume (0.29 L) fall outside physiological plausibility for neonates, suggesting a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="ondansetron" model-id="Ondansetron_Lam2025_reference" status="rejected" stale="true" population="neonates with neonatal opioid withdrawal syndrome" measured-compound="ondansetron" parameterization="mechanistic" topology="2C"></div>

## Citation
Lam K, Mondick JT, Peltz G, Wu M, Kraft WK. Bayesian Population Pharmacokinetic Modeling of Ondansetron for Neonatal Opioid Withdrawal Syndrome. Clinical and translational science 18(2):e70147 (2025).
  ·  DOI: [10.1111/cts.70147](https://doi.org/10.1111/cts.70147)

## Population and dosing

**Population:** neonates with neonatal opioid withdrawal syndrome · condition neonatal opioid withdrawal syndrome · age group neonate.

**Dosing:** 4.9 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 0.58 | L/h | 0.54 (84.2% RSE) |
| V (L) | V | 0.29 | L |  |
| V2 (L) | V2 | 0.91 | L |  |
| Q (L/h) | Q | 6.15 | L/h |  |
| KA (h−1) | kabs | 0.19 | h−1 |  |
| F | Fab | 0.62 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ondansetron record was rejected because the reported clearance (0.58 L/h) and central volume (0.29 L) fall outside physiological plausibility for neonates, suggesting a unit or scale extraction error.**

For ondansetron in neonates with neonatal opioid withdrawal syndrome, the two-compartment model reports total clearance of 0.58 L/h and a central volume of distribution of 0.29 L, magnitudes flagged as physiologically implausible and consistent with a unit or scale extraction error. The peripheral volume (0.91 L) and intercompartmental clearance (6.15 L/h) exceed the central volume, further straining the parameter set. The remaining parameters — absorption rate constant 0.19 h−1 and bioavailability 0.62 — were not themselves flagged. Extracted — ondansetron: CL 0.58 L/h, V 0.29 L, V2 0.91 L, Q 6.15 L/h, kabs 0.19 h−1, Fab 0.62.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 0.58, the second reading 33743; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.58 | L/h | 1.611e-07 | m3/s | l/h | exact (1) | cts70147-tbl-0003:row1:col1, cts70147-tbl-0003:row1:col3, cts70147-tbl-0003:row1:col4, cts70147-tbl-0003:row1:col5 | 0.54 (84.2% RSE) |
| V (L) | `Q61` · V | 0.29 | L | 0.00029 | m3 | l | exact (1) | cts70147-tbl-0003:row2:col1, cts70147-tbl-0003:row2:col3, cts70147-tbl-0003:row2:col4, cts70147-tbl-0003:row2:col5 |  |
| V2 (L) | `Q64` · V2 | 0.91 | L | 0.00091 | m3 | l | exact (1) | cts70147-tbl-0003:row3:col1, cts70147-tbl-0003:row3:col3, cts70147-tbl-0003:row3:col4, cts70147-tbl-0003:row3:col5 |  |
| Q (L/h) | `Q30` · Q | 6.15 | L/h | 1.708e-06 | m3/s | l/h | exact (1) | cts70147-tbl-0003:row4:col1, cts70147-tbl-0003:row4:col3, cts70147-tbl-0003:row4:col4, cts70147-tbl-0003:row4:col5 |  |
| KA (h−1) | `Q49` · kabs | 0.19 | h−1 | 5.278e-05 | 1/s | 1/h | exact (1) | cts70147-tbl-0003:row5:col1, cts70147-tbl-0003:row5:col3, cts70147-tbl-0003:row5:col4, cts70147-tbl-0003:row5:col5 |  |
| F | `Q40` · Fab | 0.62 |  |  |  |  | exact (1) | cts70147-tbl-0003:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Variability (% CV): CL' routed out of structural estimates ('Interindividual')
- table section iiv: 'Residual error: Additive error (SD)' routed out of structural estimates ('Interindividual')
- column 'r^' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bulk ess' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'tail ess' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'BCL' — extend the ontology if this is a real PK parameter (source ['cts70147-tbl-0003:row7:col1'])
- dropped unlinked row (NIL): 'TCL (months)' — extend the ontology if this is a real PK parameter (source ['cts70147-tbl-0003:row8:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ondansetron
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts70147-tbl-0003:row1:col2 = '(0.51, 0.67)'
- unparsed cell cts70147-tbl-0003:row2:col2 = '(0.26, 0.32)'
- unparsed cell cts70147-tbl-0003:row3:col2 = '(0.75, 1.11)'
- unparsed cell cts70147-tbl-0003:row4:col2 = '(5.63, 6.74)'
- unparsed cell cts70147-tbl-0003:row5:col2 = '(0.15, 0.23)'
- unparsed cell cts70147-tbl-0003:row10:col2 = '(0.32, 0.92)'
- unparsed cell cts70147-tbl-0003:row11:col2 = '(59.3, 114.6)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 0.58 | 33743 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.19 | 3101 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 6.15 | 6105 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 0.91 | 3864 | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 0.29 | 6080 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts70147-tbl-0003:row1:col1', 'cts70147-tbl-0003:row1:col3', 'cts70147-tbl-0003:row1:col4', 'cts70147-tbl-0003:row1:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts70147-tbl-0003:row4:col1', 'cts70147-tbl-0003:row4:col3', 'cts70147-tbl-0003:row4:col4', 'cts70147-tbl-0003:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70147-tbl-0003:row5:col1', 'cts70147-tbl-0003:row5:col3', 'cts70147-tbl-0003:row5:col4', 'cts70147-tbl-0003:row5:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cts70147-tbl-0003:row2:col1', 'cts70147-tbl-0003:row2:col3', 'cts70147-tbl-0003:row2:col4', 'cts70147-tbl-0003:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts70147-tbl-0003:row3:col1', 'cts70147-tbl-0003:row3:col3', 'cts70147-tbl-0003:row3:col4', 'cts70147-tbl-0003:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.58 | ['cts70147-tbl-0003:row1:col1', 'cts70147-tbl-0003:row1:col3', 'cts70147-tbl-0003:row1:col4', 'cts70147-tbl-0003:row1:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.58 L/h | ['cts70147-tbl-0003:row1:col1', 'cts70147-tbl-0003:row1:col3', 'cts70147-tbl-0003:row1:col4', 'cts70147-tbl-0003:row1:col5'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.29 L | ['cts70147-tbl-0003:row2:col1', 'cts70147-tbl-0003:row2:col3', 'cts70147-tbl-0003:row2:col4', 'cts70147-tbl-0003:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.91 L | ['cts70147-tbl-0003:row3:col1', 'cts70147-tbl-0003:row3:col3', 'cts70147-tbl-0003:row3:col4', 'cts70147-tbl-0003:row3:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bondansetron%5D%20Ondansetron_Lam2025_reference&body=Drug%3A%20ondansetron%0ARecord%3A%20Ondansetron_Lam2025_reference%0APaper%3A%20Lam_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ondansetron/Ondansetron_Lam2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 14:07 UTC</sub>
