<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;varenicline&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/&quot;},{&quot;label&quot;:&quot;Ravva_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Varenicline_Fediuk2021_reference&quot;,&quot;label&quot;:&quot;Fediuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Varenicline_Glatard2019_reference&quot;,&quot;label&quot;:&quot;Glatard_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Glatard2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# varenicline — `Varenicline_Ravva2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="varenicline" model-id="Varenicline_Ravva2009_reference" status="rejected" stale="false" population="adult smokers" measured-compound="varenicline" parameterization="mechanistic" topology="1C"></div>

## Citation
Ravva P, Gastonguay MR, Tensfeldt TG, Faessel HM. Population pharmacokinetic analysis of varenicline in adult smokers. British journal of clinical pharmacology 68(5):669–681 (2009).
  ·  DOI: [10.1111/j.1365-2125.2009.03520.x](https://doi.org/10.1111/j.1365-2125.2009.03520.x)

## Population and dosing

**Population:** adult smokers · condition smoking (healthy adult smokers, incl. renal impairment subgroups) · age group adult · n = 1878.

**Dosing:** 0.3, 3 mg/day, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| qCL | Q | 10.4 | L/h |  |
| qCRCL | CLR | 0.54 | l h -1 |  |
| qV2 | Q2 | 337 |  |  |
| qV3 | Q3 | 78.1 |  |  |
| qKa | kabs | 1.69 | 1/h | 38.9 (None% RSE) |
| qAlag | tlag | 0.43 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has varenicline, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| qCL | `Q30` · Q | 10.4 | L/h | 2.889e-06 | m3/s | L/h | llm (0.6) | tab_2:row4:col1, tab_2:row4:col2 |  |
| qCRCL | `Q26` · CLR | 0.54 | l h -1 | 1.5e-07 | m3/s | l/h | llm (0.6) | tab_2:row5:col1, tab_2:row5:col2 |  |
| qV2 | `Q99` · Q2 | 337 |  |  |  |  | llm (0.6) | tab_2:row9:col1, tab_2:row9:col2 |  |
| qV3 | `Q308` · Q3 | 78.1 |  |  |  |  | llm (0.6) | tab_2:row15:col1, tab_2:row15:col2 |  |
| qKa | `Q49` · kabs | 1.69 | 1/h | 0.0004694 | 1/s | 1/h | llm (0.6) | tab_2:row21:col1, tab_2:row21:col2 | 38.9 (None% RSE) |
| qAlag | `Q83` · tlag | 0.43 | h | 1548 | s | h | llm (0.6) | tab_2:row23:col1, tab_2:row23:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'w 2 CL' routed out of structural estimates ('Interindividual variance')
- table section iiv: 'w 2 V2' routed out of structural estimates ('Interindividual variance')
- table section iiv: 'w 2 Ka' routed out of structural estimates ('Interindividual variance')
- table section iiv: 'covKa-V2' routed out of structural estimates ('Interindividual variance')
- table section iiv: 'covCL-V2' routed out of structural estimates ('Interindividual variance')
- table section iiv: 'covKa-CL' routed out of structural estimates ('Interindividual variance')
- table section iiv: 'w 2 V3' routed out of structural estimates ('Interindividual variance')
- table section iiv: 'w 2 Q' routed out of structural estimates ('Interindividual variance')
- dropped duplicate Q30 ('qBlack', value '1.16') — already have one for this compound
- dropped duplicate Q30 ('qOther', value '1.11') — already have one for this compound
- dropped duplicate Q30 ('qWT', value '0.77') — already have one for this compound
- dropped unlinked row (NIL): 'qAGE' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col1', 'tab_2:row11:col2'])
- dropped duplicate Q30 ('qQ', value '2.08') — already have one for this compound
- routed 's 2 add, 1' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 's 2 prop, 1' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 's 2 add, 2' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 's 2 prop, 2' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'qCL' → L/h (from the paper text: "Text: 'apparent intercompartmental clearance (Q/F; l h -1)' and 'Q/F, 2.08 l h -1'.")
- implicit units: 'qV2' — the LLM proposed 'L', whose dimension does not fit Q99; left unset
- implicit units: 'qV3' — the LLM proposed 'L', whose dimension does not fit Q308; left unset
- implicit units: 'qKa' → 1/h (from the paper text: "Text: 'first-order absorption rate constant (Ka; h -1)' and 'Ka, 1.69 h -1'.")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (qCL); Q99 (qV2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=varenicline
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_2:row4:col3 = '(10.2, 10.6)'
- unparsed cell tab_2:row5:col3 = '(0.48, 0.59)'
- unparsed cell tab_2:row6:col3 = '(1.11, 1.21)'
- unparsed cell tab_2:row7:col3 = '(1.04, 1.18)'
- unparsed cell tab_2:row9:col3 = '(309, 364)'
- unparsed cell tab_2:row10:col3 = '(0.50, 1.05)'
- unparsed cell tab_2:row11:col3 = '(-0.01, 0.30)'
- unparsed cell tab_2:row12:col3 = '(0.83, 1.00)'
- unparsed cell tab_2:row13:col3 = '(0.58, 0.89)'
- unparsed cell tab_2:row15:col3 = '(61.9, 98.9)'
- unparsed cell tab_2:row18:col3 = '(1.39, 3.79)'
- unparsed cell tab_2:row21:col3 = '(1.27, 2.00)'
- unparsed cell tab_2:row23:col3 = '(0.37, 0.46)'
- unparsed cell tab_2:row25:col1 = '0.061 (24.7% CV)'
- unparsed cell tab_2:row25:col3 = '(0.054, 0.069)'
- unparsed cell tab_2:row26:col1 = '0.25 (50.0% CV)'
- unparsed cell tab_2:row26:col3 = '(0.15, 0.40)'
- unparsed cell tab_2:row27:col1 = '0.49 (70.1% CV)'
- unparsed cell tab_2:row27:col3 = '(0.23, 0.97)'
- unparsed cell tab_2:row28:col3 = '(-0.05, 0.53)'
- unparsed cell tab_2:row29:col3 = '(-0.013, 0.021)'
- unparsed cell tab_2:row30:col3 = '(-0.045, 0.040)'
- unparsed cell tab_2:row34:col3 = '(0.155, 0.358)'
- unparsed cell tab_2:row35:col1 = '0.030 (17.2% CV)'
- unparsed cell tab_2:row35:col3 = '(0.024, 0.036)'
- unparsed cell tab_2:row36:col3 = '(0.047, 5.89)'
- unparsed cell tab_2:row37:col1 = '0.046 (21.5% CV)'
- unparsed cell tab_2:row37:col3 = '(0.025, 0.128)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[qalag]` |  | 0.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qalag]` | 0.43 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qblack]` |  | 1.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qcl]` |  | 10.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qcl]` | 10.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qcrcl]` | 0.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qka]` |  | 1.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qka]` | 1.69 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qv2]` |  | 337 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qv2]` | 337 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qv3]` |  | 78.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qv3]` | 78.1 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | varenicline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | varenicline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['tab_2:row5:col1', 'tab_2:row5:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row21:col1', 'tab_2:row21:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_2:row23:col1', 'tab_2:row23:col2'] |
| C5_unit_missing_Q308 | fail | [length] ** 3 / [time] |  | ['tab_2:row15:col1', 'tab_2:row15:col2'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] |  | ['tab_2:row9:col1', 'tab_2:row9:col2'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvarenicline%5D%20Varenicline_Ravva2009_reference&body=Drug%3A%20varenicline%0ARecord%3A%20Varenicline_Ravva2009_reference%0APaper%3A%20Ravva_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_varenicline/Varenicline_Ravva2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:49 UTC</sub>
