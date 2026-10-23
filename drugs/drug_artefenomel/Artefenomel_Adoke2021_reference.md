<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Artefenomel&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/&quot;},{&quot;label&quot;:&quot;Adoke_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artefenomel_AbdRahman2020_reference&quot;,&quot;label&quot;:&quot;Abd-Rahman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artefenomel_McCarthy2019_reference&quot;,&quot;label&quot;:&quot;McCarthy_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_McCarthy2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artefenomel_McCarthy2020_reference&quot;,&quot;label&quot;:&quot;McCarthy_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_McCarthy2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Artefenomel — `Artefenomel_Adoke2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The volume of distribution for artefenomel is 1.5 mL, a magnitude far outside physiological limits indicating an extraction error.

<div class="pk-model-meta" hidden drug="Artefenomel" model-id="Artefenomel_Adoke2021_reference" status="rejected" stale="false" population="adults and children with uncomplicated P. falciparum malaria" measured-compound="artefenomel" parameterization="mechanistic" topology="1C"></div>

## Citation
Adoke Y, Zoleko-Manego R, Ouoba S, Tiono AB, Kaguthi G, Bonzela JE et al. A randomized, double-blind, phase 2b study to investigate the efficacy, safety, tolerability and pharmacokinetics of a single-dose regimen of ferroquine with artefenomel in adults and children with uncomplicated Plasmodium falciparum malaria. Malaria journal 20(1):222 (2021).
  ·  DOI: [10.1186/s12936-021-03749-4](https://doi.org/10.1186/s12936-021-03749-4)

## Population and dosing

**Population:** adults and children with uncomplicated P. falciparum malaria · age group mixed · n = ,
  "condition": "uncomplicated Plasmodium falciparum malaria",
  "species": "human",
  "compounds": ["artefenomel | parent | yes | yes | yes", "ferroquine | co-administered | yes | yes | yes", "SSR97213 | metabolite | no | yes | yes"],
  "links": ["ferroquine | SSR97213 | metabolism | none"]
}.

**Dosing:** 400, 600, 900, 1200 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AE | Ae | 3 |  |
| criteria_met_for_established_anti_malarial_treatment_a | criteria_met_for_established_anti_malarial_treatment_a | 3 |  |
| estimated volume of distribution | V | 1.5 | mL |
| ka, hour−1 | kabs | 0.943 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The volume of distribution for artefenomel is 1.5 mL, a magnitude far outside physiological limits indicating an extraction error.**

The record specifies a volume of distribution of 1.5 mL for the drug. This value is physiologically implausible for a systemic volume, suggesting a unit or scale error during data extraction. The review rejected the model specifically because this parameter fell outside the physiological window. Extracted — artefenomel: Ae 3, V 1.5 mL, kabs 0.943 hour−1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AE | `Q91` · Ae | 3 |  |  |  |  | exact (1) | Adoke_2021_table_1:row10:col1, Adoke_2021_table_1:row10:col2, Adoke_2021_table_1:row10:col3, Adoke_2021_table_1:row10:col4, Adoke_2021_table_1:row10:col5, Adoke_2021_table_1:row23:col1, Adoke_2021_table_1:row23:col2, Adoke_2021_table_1:row23:col3, Adoke_2021_table_1:row23:col4, Adoke_2021_table_1:row23:col5 |
| criteria_met_for_established_anti_malarial_treatment_a | `Q900` · criteria_met_for_established_anti_malarial_treatment_a | 3 |  |  |  |  |  | Adoke_2021_table_1:row32:col1, Adoke_2021_table_1:row32:col2, Adoke_2021_table_1:row32:col3, Adoke_2021_table_1:row32:col4, Adoke_2021_table_1:row32:col5 |
| estimated volume of distribution | `Q61` · V | 1.5 | mL | 1.5e-06 | m3 | L | review_gapfill (0.7) | Demarta-Gatsi_2023:review |
| ka, hour−1 | `Q49` · kabs | 0.943 | hour−1 | 0.0002619 | 1/s | 1/h | review_gapfill (0.7) | Abd-Rahman_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Randomized' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row2:col1', 'Adoke_2021_table_1:row2:col2', 'Adoke_2021_table_1:row2:col3', 'Adoke_2021_table_1:row2:col4', 'Adoke_2021_table_1:row2:col5', 'Adoke_2021_table_1:row15:col1', 'Adoke_2021_table_1:row15:col2', 'Adoke_2021_table_1:row15:col3', 'Adoke_2021_table_1:row15:col4', 'Adoke_2021_table_1:row15:col5', 'Adoke_2021_table_1:row27:col1', 'Adoke_2021_table_1:row27:col2', 'Adoke_2021_table_1:row27:col3', 'Adoke_2021_table_1:row27:col4', 'Adoke_2021_table_1:row27:col5'])
- dropped unlinked row (NIL): 'Treated' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row3:col1', 'Adoke_2021_table_1:row3:col2', 'Adoke_2021_table_1:row3:col3', 'Adoke_2021_table_1:row3:col4', 'Adoke_2021_table_1:row3:col5', 'Adoke_2021_table_1:row16:col1', 'Adoke_2021_table_1:row16:col2', 'Adoke_2021_table_1:row16:col3', 'Adoke_2021_table_1:row16:col4', 'Adoke_2021_table_1:row16:col5', 'Adoke_2021_table_1:row28:col1', 'Adoke_2021_table_1:row28:col2', 'Adoke_2021_table_1:row28:col3', 'Adoke_2021_table_1:row28:col4', 'Adoke_2021_table_1:row28:col5'])
- dropped unlinked row (NIL): 'Discontinued prior to treatment' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row4:col1', 'Adoke_2021_table_1:row4:col2', 'Adoke_2021_table_1:row4:col4', 'Adoke_2021_table_1:row4:col5', 'Adoke_2021_table_1:row17:col1', 'Adoke_2021_table_1:row17:col2', 'Adoke_2021_table_1:row17:col3', 'Adoke_2021_table_1:row17:col4', 'Adoke_2021_table_1:row17:col5', 'Adoke_2021_table_1:row29:col1', 'Adoke_2021_table_1:row29:col2', 'Adoke_2021_table_1:row29:col3', 'Adoke_2021_table_1:row29:col4', 'Adoke_2021_table_1:row29:col5'])
- dropped unlinked row (NIL): 'Completed' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row5:col1', 'Adoke_2021_table_1:row5:col2', 'Adoke_2021_table_1:row5:col3', 'Adoke_2021_table_1:row5:col4', 'Adoke_2021_table_1:row5:col5', 'Adoke_2021_table_1:row18:col1', 'Adoke_2021_table_1:row18:col2', 'Adoke_2021_table_1:row18:col3', 'Adoke_2021_table_1:row18:col4', 'Adoke_2021_table_1:row18:col5', 'Adoke_2021_table_1:row30:col1', 'Adoke_2021_table_1:row30:col2', 'Adoke_2021_table_1:row30:col3', 'Adoke_2021_table_1:row30:col4', 'Adoke_2021_table_1:row30:col5'])
- dropped unlinked row (NIL): 'Discontinued prematurely:' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row6:col1', 'Adoke_2021_table_1:row6:col2', 'Adoke_2021_table_1:row6:col3', 'Adoke_2021_table_1:row6:col4', 'Adoke_2021_table_1:row6:col5', 'Adoke_2021_table_1:row19:col1', 'Adoke_2021_table_1:row19:col2', 'Adoke_2021_table_1:row19:col3', 'Adoke_2021_table_1:row19:col4', 'Adoke_2021_table_1:row19:col5', 'Adoke_2021_table_1:row31:col1', 'Adoke_2021_table_1:row31:col2', 'Adoke_2021_table_1:row31:col3', 'Adoke_2021_table_1:row31:col4', 'Adoke_2021_table_1:row31:col5'])
- dropped unlinked row (NIL): 'Criteria met for established anti-malarial treatmenta' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row7:col1', 'Adoke_2021_table_1:row7:col2', 'Adoke_2021_table_1:row7:col3', 'Adoke_2021_table_1:row7:col4', 'Adoke_2021_table_1:row7:col5', 'Adoke_2021_table_1:row20:col1', 'Adoke_2021_table_1:row20:col2', 'Adoke_2021_table_1:row20:col3', 'Adoke_2021_table_1:row20:col4', 'Adoke_2021_table_1:row20:col5'])
- dropped unlinked row (NIL): "Patient's request" — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row8:col1', 'Adoke_2021_table_1:row8:col2', 'Adoke_2021_table_1:row8:col3', 'Adoke_2021_table_1:row8:col4', 'Adoke_2021_table_1:row8:col5', 'Adoke_2021_table_1:row21:col1', 'Adoke_2021_table_1:row21:col2', 'Adoke_2021_table_1:row21:col3', 'Adoke_2021_table_1:row21:col4', 'Adoke_2021_table_1:row21:col5', 'Adoke_2021_table_1:row33:col1', 'Adoke_2021_table_1:row33:col2', 'Adoke_2021_table_1:row33:col3', 'Adoke_2021_table_1:row33:col4', 'Adoke_2021_table_1:row33:col5'])
- dropped unlinked row (NIL): "Investigator's judgement" — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row9:col1', 'Adoke_2021_table_1:row9:col2', 'Adoke_2021_table_1:row9:col3', 'Adoke_2021_table_1:row9:col4', 'Adoke_2021_table_1:row9:col5', 'Adoke_2021_table_1:row22:col1', 'Adoke_2021_table_1:row22:col2', 'Adoke_2021_table_1:row22:col3', 'Adoke_2021_table_1:row22:col4', 'Adoke_2021_table_1:row22:col5', 'Adoke_2021_table_1:row34:col1', 'Adoke_2021_table_1:row34:col2', 'Adoke_2021_table_1:row34:col3', 'Adoke_2021_table_1:row34:col4'])
- dropped unlinked row (NIL): 'Lost to follow-up' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row11:col1', 'Adoke_2021_table_1:row11:col2', 'Adoke_2021_table_1:row11:col3', 'Adoke_2021_table_1:row11:col4', 'Adoke_2021_table_1:row11:col5', 'Adoke_2021_table_1:row24:col1', 'Adoke_2021_table_1:row24:col2', 'Adoke_2021_table_1:row24:col3', 'Adoke_2021_table_1:row24:col4', 'Adoke_2021_table_1:row24:col5'])
- dropped unlinked row (NIL): 'Not eligibleb' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row12:col1', 'Adoke_2021_table_1:row12:col2', 'Adoke_2021_table_1:row12:col3', 'Adoke_2021_table_1:row12:col4', 'Adoke_2021_table_1:row12:col5'])
- dropped unlinked row (NIL): 'Other' — extend the ontology if this is a real PK parameter (source ['Adoke_2021_table_1:row13:col1', 'Adoke_2021_table_1:row13:col2', 'Adoke_2021_table_1:row13:col3', 'Adoke_2021_table_1:row13:col4', 'Adoke_2021_table_1:row13:col5', 'Adoke_2021_table_1:row25:col1', 'Adoke_2021_table_1:row25:col2', 'Adoke_2021_table_1:row25:col3', 'Adoke_2021_table_1:row25:col4', 'Adoke_2021_table_1:row25:col5'])
- covariate level 'Criteria met for established anti-malarial treatment a' → Q900:criteria_met_for_established_anti_malarial_treatment_a = 3 (additive_shift on Q91)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=artefenomel
- gap-filled Q61 (V) from Demarta-Gatsi_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Abd-Rahman_2020's review values (primary lacked it)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Abd-Rahman_2020:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Demarta-Gatsi_2023:review'] |
| C5_unit_missing_Q91 | fail | [mass] |  | ['Adoke_2021_table_1:row10:col1', 'Adoke_2021_table_1:row10:col2', 'Adoke_2021_table_1:row10:col3', 'Adoke_2021_table_1:row10:col4', 'Adoke_2021_table_1:row10:col5', 'Adoke_2021_table_1:row23:col1', 'Adoke_2021_table_1:row23:col2', 'Adoke_2021_table_1:row23:col3', 'Adoke_2021_table_1:row23:col4', 'Adoke_2021_table_1:row23:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0015 L | ['Demarta-Gatsi_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartefenomel%5D%20Artefenomel_Adoke2021_reference&body=Drug%3A%20artefenomel%0ARecord%3A%20Artefenomel_Adoke2021_reference%0APaper%3A%20Adoke_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artefenomel/Artefenomel_Adoke2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 10:44 UTC</sub>
