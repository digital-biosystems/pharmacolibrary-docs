<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Di(2-ethylhexyl)phthalate&quot;,&quot;href&quot;:&quot;drugs/toxin_di2_ethylhexylphthalate/&quot;},{&quot;label&quot;:&quot;Li_2022 \u00b7 values_contribution&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Di(2-ethylhexyl)phthalate — `Di2EthylhexylPhthalate_Li2022_values_contribution`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> A tissue partition coefficient labeled with concentration units prevents SI conversion, and a zero maximum metabolic rate for the parent drug halts metabolism.

<div class="pk-model-meta" hidden drug="Di(2-ethylhexyl)phthalate" model-id="Di2EthylhexylPhthalate_Li2022_values_contribution" status="rejected" stale="false" population="virtual human subjects simulated by PBPK model" measured-compound="Di(2-ethylhexyl)phthalate" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Li A, Kang L, Li R, Wu S, Liu K, Wang X. Modeling di (2-ethylhexyl) Phthalate (DEHP) and Its Metabolism in a Body's Organs and Tissues through Different Intake Pathways into Human Body. International journal of environmental research and public health 19(9) (2022).
  ·  DOI: [10.3390/ijerph19095742](https://doi.org/10.3390/ijerph19095742)

## Population and dosing

**Population:** virtual human subjects simulated by PBPK model · condition indoor environmental exposure · age group adult.

**Dosing:** 0.5, 0.53, 0.65, 0.68, 0.8, 48.1 mg, other, multiple.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW | MW | 311 | g/mole |
| fup | fu | 0.007 | N |
| vmaxgutM3 | Vmax | 0 | μg/min/mg MSP b |
| kmgutM1 | Km | 6956 | μg/L |
| kmgutM2 | Km | 22508 | μg/L |
| kmgutM3 | Km | 0 | μg/L |
| kmgutM4 | Km | 219076 | μg/L |
| kmliverM2 | Kp | 7980.4 | μg/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**A tissue partition coefficient labeled with concentration units prevents SI conversion, and a zero maximum metabolic rate for the parent drug halts metabolism.**

The tissue-to-plasma partition coefficient for mono(2-ethyl-5-hydroxyhexyl) phthalate is reported as 7980.4 μg/L, a concentration unit inconsistent with a dimensionless partition coefficient, which prevents SI conversion. Additionally, the maximum metabolic rate for the parent compound is set to 0 μg/min/mg MSP b, implying no formation of the first metabolite despite linked metabolic reactions. Extracted — di2 ethylhexylphthalate: MW 311 g/mole, fu 0.007 N, Vmax 0 μg/min/mg MSP b; mono(2-ethylhexyl) phthalate: Km 6.96e+03 μg/L; mono(2-ethyl-5-hydroxyhexyl) phthalate: Km 2.25e+04 μg/L, Kp 7.98e+03 μg/L; mono(2-ethyl-5-oxohexyl) phthalate: Km 0 μg/L; mono(2-ethyl-5-carboxypentyl) phthalate: Km 2.19e+05 μg/L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW | `Q374` · MW | 311 | g/mole | 0.311 |  | g/(m·ole) | exact (1) | Li_2022_table_1:row0:col3, Li_2022_table_1:row1:col3, Li_2022_table_1:row2:col3, Li_2022_table_1:row3:col3, Li_2022_table_1:row4:col3 |
| fup | `Q46` · fu | 0.007 | N |  |  | n | llm (0.6) | Li_2022_table_1:row17:col3 |
| vmaxgutM3 | `Q66` · Vmax | 0 | μg/min/mg MSP b |  |  | µg/(ms·min·mg·b·p) | llm (0.6) | Li_2022_table_1:row24:col3 |
| kmgutM1 | `Q1` · Km | 6956 | μg/L | 0.006956 | kg/m3 | µg/l | llm (0.6) | Li_2022_table_1:row27:col3 |
| kmgutM2 | `Q1` · Km | 22508 | μg/L | 0.02251 | kg/m3 | µg/l | llm (0.6) | Li_2022_table_1:row28:col3 |
| kmgutM3 | `Q1` · Km | 0 | μg/L | 0 | kg/m3 | µg/l | llm (0.6) | Li_2022_table_1:row29:col3 |
| kmgutM4 | `Q1` · Km | 219076 | μg/L | 0.2191 | kg/m3 | µg/l | llm (0.6) | Li_2022_table_1:row30:col3 |
| kmliverM2 | `Q410` · Kp | 7980.4 | μg/L |  |  | µg/l | llm (0.6) | Li_2022_table_1:row40:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'LogKo:w' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row5:col3'])
- unit_dimension_unknown: 'N' (fu)
- unit_dimension_unknown: 'μg/min/mg MSP b' (Vmax)
- dropped duplicate Q1 ('kmgutM5', value '187652') — already have one for this compound
- dropped duplicate Q1 ('kmgut_cytM1', value '7038') — already have one for this compound
- dropped duplicate Q1 ('kmliver_cytM1', value '2228.7') — already have one for this compound
- unit_dimension_mismatch: 'kmliverM2' → Q410 (unit '[mass] / [length] ** 3' vs ontology 'dimensionless') — route to review
- dropped duplicate Q1 ('kmliverM3', value '1124') — already have one for this compound
- dropped duplicate Q1 ('kmliverM4', value '23117.7') — already have one for this compound
- dropped unlinked row (NIL): 'kmliverM5' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row43:col3'])
- implicit units: 'vmaxgutM3' — the LLM proposed 'amount/h', whose dimension does not fit Q66; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Di(2-ethylhexyl)phthalate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'values/contribution' subgroup of Li_2022 (paper reports 2 populations: value, values/contribution)
- row roles (LLM): model_class=pbpk; 32/32 row label(s) assigned, 0 linked by role; re-tagged parent→mono(2-ethylhexyl) phthalate ×3, parent→mono(2-ethyl-5-hydroxyhexyl) phthalate ×2, parent→mono(2-ethyl-5-oxohexyl) phthalate ×2, parent→mono(2-ethyl-5-carboxypentyl) phthalate ×4
- molar mass: no plausible PubChem entry for 'Di(2-ethylhexyl)phthalate' ('Di(2-ethylhexyl)phthalate') — left in mass units
- molar mass: none found for 'Di(2-ethylhexyl)phthalate' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1, 2, 3
- table Li_2022_table_2: ambiguous_numeric_format

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Li_2022_table_1:row27:col3'] |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Li_2022_table_1:row28:col3'] |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Li_2022_table_1:row29:col3'] |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Li_2022_table_1:row30:col3'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Li_2022_table_1:row0:col3', 'Li_2022_table_1:row1:col3', 'Li_2022_table_1:row2:col3', 'Li_2022_table_1:row3:col3', 'Li_2022_table_1:row4:col3'] |
| C5_dimension_Q410 | fail | dimensionless | μg/L ([mass] / [length] ** 3) | ['Li_2022_table_1:row40:col3'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] | μg/min/mg MSP b | ['Li_2022_table_1:row24:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['hydrolysis rate', 'oxidation rate', 'oxidation rate', 'oxidation rate'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdi2_ethylhexylphthalate%5D%20Di2EthylhexylPhthalate_Li2022_values_contribution&body=Drug%3A%20di2_ethylhexylphthalate%0ARecord%3A%20Di2EthylhexylPhthalate_Li2022_values_contribution%0APaper%3A%20Li_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_di2_ethylhexylphthalate/Di2EthylhexylPhthalate_Li2022_values_contribution%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 22:37 UTC</sub>
