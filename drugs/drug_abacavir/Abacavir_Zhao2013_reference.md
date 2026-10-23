<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Zhao_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Ji2024_reference&quot;,&quot;label&quot;:&quot;Ji_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Ji2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_Zhao2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The peripheral compartment for abacavir is unreachable from the dose because the intercompartmental clearance parameter is missing.

<div class="pk-model-meta" hidden drug="abacavir" model-id="Abacavir_Zhao2013_reference" status="rejected" stale="false" population="infants, toddlers and children with HIV" measured-compound="abacavir" parameterization="apparent" topology="2C"></div>

## Citation
Zhao W, Piana C, Danhof M, Burger D, Della Pasqua O, Jacqz-Aigrain E. Population pharmacokinetics of abacavir in infants, toddlers and children. British journal of clinical pharmacology 75(6):1525–1535 (2013).
  ·  DOI: [10.1111/bcp.12024](https://doi.org/10.1111/bcp.12024)

## Population and dosing

**Population:** infants, toddlers and children with HIV · condition HIV infection · age group child · n = 69.

**Dosing:** 560, 1120 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Absorption rate constant, Ka (h–1) | kabs | 0.913 | h–1 |
| Apparent systemic clearance, CL/F (l h–1) CL/F = CL/Fref × (WTi/17.6)θ1 CL/Fref | CL/F | 20.1 | l h–1 |
| Apparent peripheral volume of distribution, V2/F (l) | V2/F | 13.5 | l |
| Intercompartment clearance, Q/F (l h–1) | Q/F | 2.0 | l h–1 |
| Apparent central volume of distribution, V1/F (l) V1/F = V1/Fref × (WTi/17.6)θ2 V1/Fref | Apparent central volume of distribution, V1/F (l) V1/F = V1/Fref × (WTi/17.6)θ2 V1/Fref | 13.0 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The peripheral compartment for abacavir is unreachable from the dose because the intercompartmental clearance parameter is missing.**

The two-compartment structure defines a peripheral volume of distribution (13.5 L) but lacks a valid value for the intercompartmental clearance Q/F. Although the intercompartmental clearance label is present, its value field is empty, leaving the peripheral compartment disconnected from the central compartment. Consequently, the model contains an orphan compartment with no path from the dose. Extracted — abacavir: kabs 0.913 h–1, CL/F 20.1 l h–1, V2/F 13.5 l, Q/F 2 l h–1.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, Ka (h–1) | `Q49` · kabs | 0.913 | h–1 | 0.0002536 | 1/s | 1/h | llm_confirmed (0.6) | Zhao_2013_table_p4_1:row0:col1 |
| Apparent systemic clearance, CL/F (l h–1) CL/F = CL/Fref × (WTi/17.6)θ1 CL/Fref | `Q27` · CL/F | 20.1 | l h–1 | 5.583e-06 | m3/s | l/h | llm_corrected (0.6) | Zhao_2013_table_p4_1:row1:col1 |
| Apparent peripheral volume of distribution, V2/F (l) | `Q82` · V2/F | 13.5 | l | 0.0135 | m3 | l | llm_confirmed (0.6) | Zhao_2013_table_p4_1:row5:col1 |
| Intercompartment clearance, Q/F (l h–1) | `Q69` · Q/F | 2.0 | l h–1 | 5.556e-07 | m3/s | l/h | llm_corrected (0.6) | Zhao_2013_table_p4_1:row6:col1 |
| Apparent central volume of distribution, V1/F (l) V1/F = V1/Fref × (WTi/17.6)θ2 V1/Fref | `Q900` · Apparent central volume of distribution, V1/F (l) V1/F = V1/Fref × (WTi/17.6)θ2 V1/Fref | 13.0 | l | 0.013 | m3 |  |  | Zhao_2013_table_p4_1:row3:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Apparent central volume of distribution, V1/F (l) V1/F = V1/Fref × (WTi/17.6)θ2 V1/Fref | Q290 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['Zhao_2013_table_p4_1:row2:col1'])
- dropped unlinked row (NIL): 'θ2' — extend the ontology if this is a real PK parameter (source ['Zhao_2013_table_p4_1:row4:col1'])
- routed 'Interindividual variability (%) Q/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q290 ('V1/F', value '47.7') — already have one for this compound
- dropped duplicate Q82 ('V2/F', value '57.5') — already have one for this compound
- dropped duplicate Q27 ('CL/F', value '21.9') — already have one for this compound
- dropped unlinked row (NIL): 'Intercorrelation variability (%) CL/F' — extend the ontology if this is a real PK parameter (source ['Zhao_2013_table_p4_1:row11:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir
- bound model equation to Q290 (V1/F): V1/F = 13.0 ¥ (BW/17.6)^0.810
- Q290 (V1/F) is equation-defined: value moved to equation-variable 'Apparent central volume of distribution, V1/F (l) V1/F = V1/Fref × (WTi/17.6)θ2 V1/Fref'; equation kept verbatim
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Zhao_2013_table_p4_1: unbound_uncertainty
- LLM selected parameter table(s) 2
- captured model equation V1/F = 13.0 ¥ (BW/17.6)^0.810

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Zhao_2013_table_p4_1:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Zhao_2013_table_p4_1:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Zhao_2013_table_p4_1:row0:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Zhao_2013_table_p4_1:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Zhao_2013_table_p4_1:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20.1 L/h | ['Zhao_2013_table_p4_1:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 13.5 L | ['Zhao_2013_table_p4_1:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babacavir%5D%20Abacavir_Zhao2013_reference&body=Drug%3A%20abacavir%0ARecord%3A%20Abacavir_Zhao2013_reference%0APaper%3A%20Zhao_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abacavir/Abacavir_Zhao2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:56 UTC</sub>
