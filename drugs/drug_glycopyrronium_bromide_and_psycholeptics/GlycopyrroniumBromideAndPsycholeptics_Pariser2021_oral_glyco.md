<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03C&quot;,&quot;href&quot;:&quot;atc/A03C.md&quot;},{&quot;label&quot;:&quot;glycopyrronium bromide and psycholeptics&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium_bromide_and_psycholeptics/&quot;},{&quot;label&quot;:&quot;Pariser_2021 \u00b7 oral_glycopyrrolate_adult_3_mg_q8h&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;GlycopyrroniumBromideAndPsycholeptics_AliMelkkil1989_referen&quot;,&quot;label&quot;:&quot;Ali-Melkkil\u00e4_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium_bromide_and_psycholeptics/GlycopyrroniumBromideAndPsycholeptics_AliMelkkil1989_referen.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glycopyrronium bromide and psycholeptics — `GlycopyrroniumBromideAndPsycholeptics_Pariser2021_oral_glyco`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="glycopyrronium bromide and psycholeptics" model-id="GlycopyrroniumBromideAndPsycholeptics_Pariser2021_oral_glyco" status="rejected" stale="false" population="adults with primary axillary hyperhidrosis" measured-compound="glycopyrronium" parameterization="mechanistic" topology="1C"></div>

## Citation
Pariser DM, Lain EL, Mamelok RD, Drew J, Mould DR. Limited Systemic Exposure with Topical Glycopyrronium Tosylate in Primary Axillary Hyperhidrosis. Clinical pharmacokinetics 60(5):665–676 (2021).
  ·  DOI: [10.1007/s40262-020-00975-y](https://doi.org/10.1007/s40262-020-00975-y)

## Population and dosing

**Population:** adults with primary axillary hyperhidrosis · condition primary axillary hyperhidrosis · age group adult · n = 108.

**Dosed compound ≠ measured compound:** dosed glycopyrronium tosylate, measured glycopyrronium.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 18 | ng/mL |
| AUC0-6h (ng h/mL) | AUCt | 18 | ng h/mL |
| Tmax (h) | tmax | 18 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. None of the extracted parameters is glycopyrronium bromide and psycholeptics's own; they describe glycopyrronium.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has glycopyrronium tosylate, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 18 | ng/mL | 1.8e-05 | kg/m3 | ng/ml | exact (1) | Pariser_2021_table_2:row0:col5 |
| AUC0-6h (ng h/mL) | `Q19` · AUCt | 18 | ng h/mL | 0.0648 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Pariser_2021_table_2:row3:col5 |
| Tmax (h) | `Q56` · tmax | 18 | h | 6.48e+04 | s | h | exact (1) | Pariser_2021_table_2:row9:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean ± SD' — extend the ontology if this is a real PK parameter (source ['Pariser_2021_table_2:row1:col5', 'Pariser_2021_table_2:row4:col5', 'Pariser_2021_table_2:row7:col5', 'Pariser_2021_table_2:row10:col5', 'Pariser_2021_table_2:row13:col5'])
- dropped unlinked row (NIL): 'Median (min, max)' — extend the ontology if this is a real PK parameter (source ['Pariser_2021_table_2:row2:col5', 'Pariser_2021_table_2:row5:col5', 'Pariser_2021_table_2:row8:col5', 'Pariser_2021_table_2:row11:col5', 'Pariser_2021_table_2:row14:col5'])
- dropped duplicate Q19 ('AUC0-24h (ng h/mL)', value '18') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glycopyrronium
- population split: 'oral glycopyrrolate adult 3 mg/q8h' subgroup of Pariser_2021 (paper reports 5 populations: oral glycopyrrolate adult 1 mg/q8h, oral glycopyrrolate adult 2 mg/q8h, oral glycopyrrolate adult 3 mg/q8h, topical glycopyrronium tosylate adult 2.4%, topical glycopyrronium tosylate pediatric 2.4%)
- molar mass: none found for 'glycopyrronium_bromide_and_psycholeptics' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[median]` |  | 0.34 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | glycopyrronium tosylate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Pariser_2021_table_2:row3:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Pariser_2021_table_2:row0:col5'] |
| C5_dimension_Q56 | pass | [time] |  | ['Pariser_2021_table_2:row9:col5'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglycopyrronium_bromide_and_psycholeptics%5D%20GlycopyrroniumBromideAndPsycholeptics_Pariser2021_oral_glyco&body=Drug%3A%20glycopyrronium_bromide_and_psycholeptics%0ARecord%3A%20GlycopyrroniumBromideAndPsycholeptics_Pariser2021_oral_glyco%0APaper%3A%20Pariser_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glycopyrronium_bromide_and_psycholeptics/GlycopyrroniumBromideAndPsycholeptics_Pariser2021_oral_glyco%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 11:13 UTC</sub>
