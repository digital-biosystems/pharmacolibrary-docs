<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Arketamine&quot;,&quot;href&quot;:&quot;drugs/drug_arketamine/&quot;},{&quot;label&quot;:&quot;Stojanova_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arketamine_Fux2022_reference&quot;,&quot;label&quot;:&quot;Fux_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arketamine/Arketamine_Fux2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Arketamine — `Arketamine_Stojanova2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q48 unit L/h/70 kg ([length] ** 3 / [time]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="Arketamine" model-id="Arketamine_Stojanova2026_reference" status="rejected" stale="false" population="heart transplant recipient" measured-compound="tacrolimus" parameterization="mechanistic" topology="2C"></div>

## Citation
Stojanova J, Murnion B, Burrows F, Carlos L, Mizuno T, Nadai T et al. Continuous Subcutaneous Ketamine Infusion May Induce Tacrolimus and Sirolimus Clearance: A Case Report. Pharmacotherapy 46(6):e70150 (2026).
  ·  DOI: [10.1002/phar.70150](https://doi.org/10.1002/phar.70150)

## Population and dosing

**Population:** heart transplant recipient · condition heart transplant · age group adult.

**Dosing:** 5.2, 10.4 mg/h, sc, multiple.

**Dosed compound ≠ measured compound:** dosed ketamine, measured tacrolimus.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h/70 kg) | CL | 8.39 | L/h/70 kg |
| V1 (L/70 kg) | V1 | 104.1 | L/70 kg |
| Ktr (1/h) | ktr | 3.3 |  |
| K56 (L/h/70 kg) | kcomp | 0.129 | L/h/70 kg |
| V2 (L/70 kg) | V2 | 416.9 | L/70 kg |
| Ka (1/h) | kabs | 2.18 |  |
| Q (L/h/70 kg) | Q | 23.7 | L/h/70 kg |
| Lag time (h) | tlag | 0.24 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q48 unit L/h/70 kg ([length] ** 3 / [time]) vs 1 / [time].**

A reported unit could not be converted (kcomp), so that value has no SI equivalent. Extracted — arketamine: CL 8.39 L/h/70 kg, V1 104 L/70 kg, ktr 3.3, kcomp 0.129 L/h/70 kg, V2 417 L/70 kg, kabs 2.18, Q 23.7 L/h/70 kg, tlag 0.24 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 8.39, the second reading 5.10; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h/70 kg) | `Q22` · CL | 8.39 | L/h/70 kg | 2.331e-06 | m3/s | l/(h·70kg) | exact (1) | phar70150-tbl-0001:row2:col1, phar70150-tbl-0001:row2:col2, phar70150-tbl-0001:row8:col1, phar70150-tbl-0001:row8:col2 |
| V1 (L/70 kg) | `Q63` · V1 | 104.1 | L/70 kg | 0.1041 | m3 | l/70kg | exact (1) | phar70150-tbl-0001:row3:col1, phar70150-tbl-0001:row3:col2, phar70150-tbl-0001:row9:col1, phar70150-tbl-0001:row9:col2 |
| Ktr (1/h) | `Q306` · ktr | 3.3 |  |  |  |  | exact (1) | phar70150-tbl-0001:row4:col1, phar70150-tbl-0001:row4:col2 |
| K56 (L/h/70 kg) | `Q48` · kcomp | 0.129 | L/h/70 kg |  |  | l/(h·70kg) | exact (1) | phar70150-tbl-0001:row5:col1, phar70150-tbl-0001:row5:col2 |
| V2 (L/70 kg) | `Q64` · V2 | 416.9 | L/70 kg | 0.4169 | m3 | l/70kg | exact (1) | phar70150-tbl-0001:row10:col1, phar70150-tbl-0001:row10:col2 |
| Ka (1/h) | `Q49` · kabs | 2.18 |  |  |  |  | exact (1) | phar70150-tbl-0001:row11:col1, phar70150-tbl-0001:row11:col2 |
| Q (L/h/70 kg) | `Q30` · Q | 23.7 | L/h/70 kg | 6.583e-06 | m3/s | l/(h·70kg) | exact (1) | phar70150-tbl-0001:row12:col1, phar70150-tbl-0001:row12:col2 |
| Lag time (h) | `Q83` · tlag | 0.24 | h | 864 | s | h | exact (1) | phar70150-tbl-0001:row13:col1, phar70150-tbl-0001:row13:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'K56 (L/h/70 kg)' → Q48 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'K65 (L/h/70 kg)' → Q48 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q48 ('K65 (L/h/70 kg)', value '0.089') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h/70 kg)); Q63 (V1 (L/70 kg)); Q64 (V2 (L/70 kg)); Q30 (Q (L/h/70 kg))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tacrolimus
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'tacrolimus' ('tacrolimus') — left in mass units
- molar mass: none found for 'tacrolimus' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'tacrolimus', not arketamine — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 8.39 | 5.10 | mismatch |
| `gpt-oss-120b` | `parameters[k56].value` | 0.129 | 0.094 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 2.18 | 3.86 | mismatch |
| `gpt-oss-120b` | `parameters[ktr].value` | 3.3 | 2.09 | mismatch |
| `gpt-oss-120b` | `parameters[lag time].value` | 0.24 | 0.98 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 23.7 | 8.9 | mismatch |
| `gpt-oss-120b` | `parameters[v1].value` | 104.1 | 228.7 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 416.9 | 791.9 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['phar70150-tbl-0001:row2:col1', 'phar70150-tbl-0001:row2:col2', 'phar70150-tbl-0001:row8:col1', 'phar70150-tbl-0001:row8:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['phar70150-tbl-0001:row12:col1', 'phar70150-tbl-0001:row12:col2'] |
| C5_dimension_Q48 | fail | 1 / [time] | L/h/70 kg ([length] ** 3 / [time]) | ['phar70150-tbl-0001:row5:col1', 'phar70150-tbl-0001:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['phar70150-tbl-0001:row3:col1', 'phar70150-tbl-0001:row3:col2', 'phar70150-tbl-0001:row9:col1', 'phar70150-tbl-0001:row9:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['phar70150-tbl-0001:row10:col1', 'phar70150-tbl-0001:row10:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['phar70150-tbl-0001:row13:col1', 'phar70150-tbl-0001:row13:col2'] |
| C5_unit_missing_Q306 | fail | 1 / [time] |  | ['phar70150-tbl-0001:row4:col1', 'phar70150-tbl-0001:row4:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['phar70150-tbl-0001:row11:col1', 'phar70150-tbl-0001:row11:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.39 | ['phar70150-tbl-0001:row2:col1', 'phar70150-tbl-0001:row2:col2', 'phar70150-tbl-0001:row8:col1', 'phar70150-tbl-0001:row8:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.39 L/h | ['phar70150-tbl-0001:row2:col1', 'phar70150-tbl-0001:row2:col2', 'phar70150-tbl-0001:row8:col1', 'phar70150-tbl-0001:row8:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 104 L | ['phar70150-tbl-0001:row3:col1', 'phar70150-tbl-0001:row3:col2', 'phar70150-tbl-0001:row9:col1', 'phar70150-tbl-0001:row9:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 417 L | ['phar70150-tbl-0001:row10:col1', 'phar70150-tbl-0001:row10:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barketamine%5D%20Arketamine_Stojanova2026_reference&body=Drug%3A%20arketamine%0ARecord%3A%20Arketamine_Stojanova2026_reference%0APaper%3A%20Stojanova_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_arketamine/Arketamine_Stojanova2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-09 09:11 UTC</sub>
