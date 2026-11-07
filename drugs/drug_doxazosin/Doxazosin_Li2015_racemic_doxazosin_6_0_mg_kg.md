<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;doxazosin&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/&quot;},{&quot;label&quot;:&quot;Li_2015 \u00b7 racemic_doxazosin_6_0_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxazosin_Chrisp1990_reference&quot;,&quot;label&quot;:&quot;Chrisp_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Chrisp1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Young1988_reference&quot;,&quot;label&quot;:&quot;Young_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Young1988_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_unknown2023_reference&quot;,&quot;label&quot;:&quot;unknown_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_unknown2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# doxazosin — `Doxazosin_Li2015_racemic_doxazosin_6_0_mg_kg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The doxazosin clearance value of 0.027 ml/h is implausibly low, indicating a unit or scale error.

<div class="pk-model-meta" hidden drug="doxazosin" model-id="Doxazosin_Li2015_racemic_doxazosin_6_0_mg_kg" status="rejected" stale="false" population="rats" measured-compound="(-)-(R)-doxazosin, (+)-(S)-doxazosin" parameterization="mechanistic" topology="1C"></div>

## Citation
Li Q, Kong D, Du Q, Zhao J, Zhen Y, Li T et al. Enantioselective pharmacokinetics of doxazosin and pharmacokinetic interaction between the isomers in rats. Chirality 27(10):738–744 (2015).
  ·  DOI: [10.1002/chir.22483](https://doi.org/10.1002/chir.22483)

## Population and dosing

**Population:** rats · condition healthy · age group adult.

**Dosing:** 210, 420 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed doxazosin, measured (-)-(R)-doxazosin, (+)-(S)-doxazosin.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (min×ng/mL) | AUC | 59717 | min×ng/mL |
| CL (ml/h) | CL | 0.027 | ml/h |
| Doxazosin (I mgkg-') | V | 40.1 | l kg-1 |
| ka | kabs | 0.077 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The doxazosin clearance value of 0.027 ml/h is implausibly low, indicating a unit or scale error.**

The total clearance of 0.027 ml/h falls outside physiological limits for a small molecule. A reported unit for this parameter could not be converted to standard SI units. A second reader also identified a distinct clearance value of 17 for the (+)-(S)-isomer that was omitted. Extracted — doxazosin: AUC 5.97e+04 min×ng/mL; (-)-(R)-doxazosin, (+)-(S)-doxazosin: CL 0.027 ml/h, V 40.1 l kg-1, kabs 0.077 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has (-)-(R)-doxazosin, (+)-(S)-doxazosin, the second reading doxazosin; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (min×ng/mL) | `Q88` · AUC | 59717 | min×ng/mL |  |  | (min·ng)/ml | exact (1) | tab_1:row2:col1, tab_1:row2:col2 |
| CL (ml/h) | `Q22` · CL | 0.027 | ml/h | 7.5e-12 | m3/s | L/h | review_gapfill (0.7) | Aljaeid_2019:review |
| Doxazosin (I mgkg-') | `Q61` · V | 40.1 | l kg-1 | 2.807 | m3 | L | review_gapfill (0.7) | Hamilton_1985:review |
| ka | `Q49` · kabs | 0.077 | h-1 | 2.139e-05 | 1/s | 1/h | review_gapfill (0.7) | unknown_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'min×ng/mL' (AUC)
- dropped unlinked row (NIL): 'Data are expressed as mean ± SD, n = 6.' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col0'])
- implicit units: 'AUC (min×ng/mL)' — the LLM proposed 'min x ng/mL', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=(-)-(R)-doxazosin, (+)-(S)-doxazosin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'racemic doxazosin (6.0 mg/kg)' subgroup of Li_2015 (paper reports 3 populations: (+)-(s)-doxazosin, (-)-(r)-doxazosin, racemic doxazosin (6.0 mg/kg))
- molar mass: no plausible PubChem entry for '(-)-(R)-doxazosin, (+)-(S)-doxazosin' ('no full name in the paper') — left in mass units
- molar mass: none found for '(-)-(R)-doxazosin, (+)-(S)-doxazosin' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Aljaeid_2019's review values (primary lacked it)
- gap-filled Q61 (V) from Hamilton_1985's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from unknown_2023's review values (primary lacked it)

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- table Li_2015_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (40 record(s))
- table Li_2015_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (33 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl value of (+)-(s)-doxazosin]` |  | 17 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | (-)-(R)-doxazosin, (+)-(S)-doxazosin | doxazosin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Aljaeid_2019:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['unknown_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hamilton_1985:review'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | min×ng/mL | ['tab_1:row2:col1', 'tab_1:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.027 | ['Aljaeid_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 2.7e-05 L/h | ['Aljaeid_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.81e+03 L | ['Hamilton_1985:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxazosin%5D%20Doxazosin_Li2015_racemic_doxazosin_6_0_mg_kg&body=Drug%3A%20doxazosin%0ARecord%3A%20Doxazosin_Li2015_racemic_doxazosin_6_0_mg_kg%0APaper%3A%20Li_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doxazosin/Doxazosin_Li2015_racemic_doxazosin_6_0_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 14:16 UTC</sub>
