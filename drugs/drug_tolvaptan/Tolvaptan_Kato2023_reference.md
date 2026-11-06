<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;tolvaptan&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/&quot;},{&quot;label&quot;:&quot;Kato_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolvaptan_Plosker2010_reference&quot;,&quot;label&quot;:&quot;Plosker_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Plosker2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_base&quot;,&quot;label&quot;:&quot;Lanke_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_final&quot;,&quot;label&quot;:&quot;Lanke_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Shoaf2017_reference&quot;,&quot;label&quot;:&quot;Shoaf_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Shoaf2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Van2013_reference&quot;,&quot;label&quot;:&quot;Van_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Van2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolvaptan — `Tolvaptan_Kato2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="tolvaptan" model-id="Tolvaptan_Kato2023_reference" status="rejected" stale="false" population="acute worsening heart failure patients" measured-compound="tolvaptan" parameterization="mechanistic" topology="1C"></div>

## Citation
Kato T, Yasuda Y, Okamoto H, Saito Y, Nakano Y, Matsuura K et al. Total body fluid is the factor that affects the pharmacokinetics of tolvaptan, and its efficacy, in acute worsening heart failure patients. Pharmacology research & perspectives 11(3):e01088 (2023).
  ·  DOI: [10.1002/prp2.1088](https://doi.org/10.1002/prp2.1088)

## Population and dosing

**Population:** acute worsening heart failure patients · condition heart failure · age group adult.

**Dosing:** 7.5, 15 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Trough | Ctrough | .0005 | ng/mL |
| AUC0–∞ | AUC∞ | -2.881 | ng·h/mL |
| k a (h -1 ) | kabs | 1.34 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Ctrough and AUC∞), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Trough | `Q37` · Ctrough | .0005 | ng/mL |  |  | ng/mL | exact (1) | Kato_2023_table_2:row11:col1 |
| AUC0–∞ | `Q17` · AUC∞ | -2.881 | ng·h/mL |  |  | ng·h/mL | exact (1) | Kato_2023_table_2:row12:col1, Kato_2023_table_2:row12:col3 |
| k a (h -1 ) | `Q49` · kabs | 1.34 | h -1 | 0.0003722 | 1/s | 1/h | review_gapfill (0.7) | Van_2013_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row1:col1'])
- dropped unlinked row (NIL): 'Sex' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row2:col1'])
- dropped unlinked row (NIL): 'Height (cm)' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row3:col1'])
- dropped unlinked row (NIL): 'Body weight (kg)' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row4:col1'])
- dropped unlinked row (NIL): 'Body mass index' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row5:col1'])
- dropped unlinked row (NIL): 'LVEF' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row7:col1'])
- dropped unlinked row (NIL): 'TAPSE' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row9:col1'])
- dropped unlinked row (NIL): 'Serum albumin' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row14:col1'])
- dropped unlinked row (NIL): 'Serum Na' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row15:col1'])
- dropped unlinked row (NIL): 'Creatinine clearance' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row16:col1'])
- dropped unlinked row (NIL): 'MRA' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row20:col3'])
- dropped unlinked row (NIL): 'Loop diuretics (as the equivalent dose of Furosemide)' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row21:col1'])
- dropped unlinked row (NIL): 'Inotrope' — extend the ontology if this is a real PK parameter (source ['Kato_2023_table_2:row22:col1'])
- implicit units: 'Trough' → ng/mL (from the paper text: "The text states: 'In Japanese HF patients who received oral doses of tolvaptan 7.5 mg, at day 1 and day 7, C max were 92")
- implicit units: 'AUC0–∞' → ng·h/mL (from the paper text: "The text states: 'the median AUC0–∞ value (IQR) was 1097.5 (416.6–1963.4) ng·h/mL' and 'AUC0–∞ was 960 ng·h/mL or more w")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tolvaptan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of CL from Castro-Suárez_2020: its label names a different analyte ('nimotuzumab') — 'Clearance of nimotuzumab from the central compartment ... ADPKD'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Van_2013_2's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 0.17 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` |  | 1.63 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Kato_2023_table_2:row12:col1', 'Kato_2023_table_2:row12:col3'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Kato_2023_table_2:row11:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Van_2013_2:review'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btolvaptan%5D%20Tolvaptan_Kato2023_reference&body=Drug%3A%20tolvaptan%0ARecord%3A%20Tolvaptan_Kato2023_reference%0APaper%3A%20Kato_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tolvaptan/Tolvaptan_Kato2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 18:52 UTC</sub>
