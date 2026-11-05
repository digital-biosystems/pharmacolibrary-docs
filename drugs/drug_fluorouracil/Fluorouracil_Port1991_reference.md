<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Port_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Port1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Port1991_reference" status="rejected" stale="false" population="adults with liver tumors" measured-compound="5-fluorouracil and catabolites (FUPA, FBAL)" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Port RE, Bachert P, Semmler W. Kinetic modeling of in vivo--nuclear magnetic resonance spectroscopy data: 5-fluorouracil in liver and liver tumors. Clinical pharmacology and therapeutics 49(5):497–505 (1991).
  ·  DOI: [10.1038/clpt.1991.60](https://doi.org/10.1038/clpt.1991.60)

## Population and dosing

**Population:** adults with liver tumors · condition liver tumors · age group adult · n = 7.

**Dosing:** 1500 mg, hepatic arterial infusion, single.

**Dosed compound ≠ measured compound:** dosed 5-fluorouracil, measured 5-fluorouracil and catabolites (FUPA, FBAL).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc/VSS | V1 | 0.22 |  |
| CLd/VSS (min⁻¹) | Km | 0.082 | min⁻¹ |
| Vmax (µmol/min) | Vmax | 445 | µmol/min |
| Vint/VSS | Km | 0.085 | min⁻¹ |
| CLc/VSS (min⁻¹) | CL | 0.0068 | min⁻¹ |
| t1/2 (min) | t1/2z | 15 | min |
| km ⋅ VSS (µmol) | equation variable | 520 | µmol |
| Ka, Absorption rate constant (h−1) | kabs | 0.757 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 5-fluorouracil and catabolites (FUPA, FBAL), the second reading 5-fluorouracil; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/VSS | `Q63` · V1 | 0.22 |  |  |  |  | exact (1) | Port_1991_table_2:row0:col1, Port_1991_table_2:row1:col1, Port_1991_table_2:row2:col1, Port_1991_table_2:row4:col1, Port_1991_table_2:row5:col1, Port_1991_table_2:row6:col1, Port_1991_table_2:row8:col1 |
| CLd/VSS (min⁻¹) | `Q1` · Km | 0.082 | min⁻¹ |  |  | 1/min | llm (0.6) | Port_1991_table_2:row0:col2, Port_1991_table_2:row1:col2, Port_1991_table_2:row2:col2, Port_1991_table_2:row4:col2, Port_1991_table_2:row5:col2, Port_1991_table_2:row6:col2, Port_1991_table_2:row8:col2 |
| Vmax (µmol/min) | `Q66` · Vmax | 445 | µmol/min |  |  | (µM·ol)/min | special_case (0.95) | Port_1991_table_2:row0:col3, Port_1991_table_2:row1:col3, Port_1991_table_2:row2:col3, Port_1991_table_2:row4:col3, Port_1991_table_2:row5:col3, Port_1991_table_2:row6:col3, Port_1991_table_2:row8:col3 |
| Vint/VSS | `Q1` · Km | 0.085 | min⁻¹ | 0.001417 | 1/s | 1/min | llm (0.6) | Port_1991_table_2:row0:col5, Port_1991_table_2:row1:col5, Port_1991_table_2:row2:col5, Port_1991_table_2:row3:col5, Port_1991_table_2:row4:col5, Port_1991_table_2:row5:col5, Port_1991_table_2:row6:col5, Port_1991_table_2:row8:col5 |
| CLc/VSS (min⁻¹) | `Q22` · CL | 0.0068 | min⁻¹ |  |  | 1/min | exact (1) | Port_1991_table_2:row0:col6, Port_1991_table_2:row1:col6, Port_1991_table_2:row2:col6, Port_1991_table_2:row5:col6, Port_1991_table_2:row6:col6, Port_1991_table_2:row8:col6 |
| t1/2 (min) | `Q57` · t1/2z | 15 | min | 900 | s | min | exact (1) | Port_1991_table_2:row0:col7, Port_1991_table_2:row1:col7, Port_1991_table_2:row2:col7, Port_1991_table_2:row3:col7, Port_1991_table_2:row4:col7, Port_1991_table_2:row6:col7, Port_1991_table_2:row8:col7 |
| km ⋅ VSS (µmol) | `Q900` · equation variable | 520 | µmol |  |  | µM·ol | llm_corrected (0.6) | Port_1991_table_2:row6:col4 |
| Ka, Absorption rate constant (h−1) | `Q49` · kabs | 0.757 | h−1 | 0.0002103 | 1/s | 1/h | review_gapfill (0.7) | Bae_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- linked 'Vc/VSS' as 'Vc' → Q63 (V1) for  — compound marker removed
- unit_dimension_mismatch: 'CLd/VSS (min⁻¹)' → Q1 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vmax (µmol/min)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- linked 'CLc/VSS (min⁻¹)' as 'CL' → Q22 (CL) for 5-fluorouracil and catabolites (FUPA, FBAL) — compound marker removed
- unit_dimension_mismatch: 'CLc/VSS (min⁻¹)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit inherited for Km (Q1): 'min⁻¹' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil and catabolites (FUPA, FBAL)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 20 linked by role; re-tagged parent→5-fluorouracil and catabolites (FUPA, FBAL) ×29
- molar mass: no plausible PubChem entry for 'a-fluoro-ß-ureido propanoic acid (FUPA)' ('a-fluoro-ß-ureido propanoic acid (FUPA)') — left in mass units
- molar mass: no plausible PubChem entry for 'a-fluoro-ß-alanine (FBAL)' ('a-fluoro-ß-alanine (FBAL)') — left in mass units
- molar mass: no plausible PubChem entry for '5-fluorouracil and catabolites (FUPA, FBAL)' ('5-fluorouracil and catabolites (FUPA, FBAL)') — left in mass units
- molar mass: none found for 'a-fluoro-ß-ureido propanoic acid (FUPA)' — its concentrations stay mass-only
- molar mass: none found for 'a-fluoro-ß-alanine (FBAL)' — its concentrations stay mass-only
- molar mass: none found for '5-fluorouracil and catabolites (FUPA, FBAL)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Port_1991_table_2: ambiguous_numeric_format
- table Port_1991_table_2: unbound_uncertainty
- transposed table Port_1991_table_2: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['5-fluorouracil', 'a-fluoro-β-ureido propanoic acid (fupa)', 'metabolism'], ['5-fluorouracil', 'a-fluoro-β-alanine (fbal)', 'metabolism']] | [['5-fluorouracil', 'alpha-fluoro-i3-ureido propanoic acid', 'metabolism'], ['5-fluorouracil', 'alpha-fluoro-b-alanine', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[clc/vss]` | 0.0068 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clc/vss]` |  | 0.0068 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cld/vss].parameter_id` | Q1 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[km ⋅ vss]` | 520 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vint/vss]` | 0.085 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vint/vss]` |  | 0.085 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` | 445 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` |  | 445 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 5-fluorouracil and catabolites (FUPA, FBAL) | 5-fluorouracil | mismatch |

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
| C5_dimension_Q1 | fail | 1 / [time] | min⁻¹ | ['Port_1991_table_2:row0:col2', 'Port_1991_table_2:row1:col2', 'Port_1991_table_2:row2:col2', 'Port_1991_table_2:row4:col2', 'Port_1991_table_2:row5:col2', 'Port_1991_table_2:row6:col2', 'Port_1991_table_2:row8:col2'] |
| C5_dimension_Q22 | fail | 1 / [time] | min⁻¹ | ['Port_1991_table_2:row0:col6', 'Port_1991_table_2:row1:col6', 'Port_1991_table_2:row2:col6', 'Port_1991_table_2:row5:col6', 'Port_1991_table_2:row6:col6', 'Port_1991_table_2:row8:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2026:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Port_1991_table_2:row0:col7', 'Port_1991_table_2:row1:col7', 'Port_1991_table_2:row2:col7', 'Port_1991_table_2:row3:col7', 'Port_1991_table_2:row4:col7', 'Port_1991_table_2:row6:col7', 'Port_1991_table_2:row8:col7'] |
| C5_dimension_Q66 | fail | [substance] / [time] | µmol/min | ['Port_1991_table_2:row0:col3', 'Port_1991_table_2:row1:col3', 'Port_1991_table_2:row2:col3', 'Port_1991_table_2:row4:col3', 'Port_1991_table_2:row5:col3', 'Port_1991_table_2:row6:col3', 'Port_1991_table_2:row8:col3'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['Port_1991_table_2:row0:col1', 'Port_1991_table_2:row1:col1', 'Port_1991_table_2:row2:col1', 'Port_1991_table_2:row4:col1', 'Port_1991_table_2:row5:col1', 'Port_1991_table_2:row6:col1', 'Port_1991_table_2:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0068 | ['Port_1991_table_2:row0:col6', 'Port_1991_table_2:row1:col6', 'Port_1991_table_2:row2:col6', 'Port_1991_table_2:row5:col6', 'Port_1991_table_2:row6:col6', 'Port_1991_table_2:row8:col6'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Port1991_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Port1991_reference%0APaper%3A%20Port_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_Port1991_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 21:29 UTC</sub>
