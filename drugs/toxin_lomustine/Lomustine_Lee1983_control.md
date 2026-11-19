<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Lomustine&quot;,&quot;href&quot;:&quot;drugs/toxin_lomustine/&quot;},{&quot;label&quot;:&quot;Lee_1983 \u00b7 control&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lomustine_Lee1983_cis_3&quot;,&quot;label&quot;:&quot;Lee_1983_cis_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lomustine/Lomustine_Lee1983_cis_3.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lomustine_Lee1983_cis_4&quot;,&quot;label&quot;:&quot;Lee_1983_cis_4&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lomustine/Lomustine_Lee1983_cis_4.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lomustine_Lee1983_trans_3&quot;,&quot;label&quot;:&quot;Lee_1983_trans_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lomustine/Lomustine_Lee1983_trans_3.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lomustine_Lee1983_trans_4&quot;,&quot;label&quot;:&quot;Lee_1983_trans_4&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lomustine/Lomustine_Lee1983_trans_4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lomustine — `Lomustine_Lee1983_control`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The normalized volume of distribution for lomustine in mice carries a reciprocal mass unit incompatible with volume dimensions, preventing conversion.

<div class="pk-model-meta" hidden drug="Lomustine" model-id="Lomustine_Lee1983_control" status="rejected" stale="false" population="mice" measured-compound="Lomustine (CCNU)" parameterization="mechanistic" topology="retention"></div>

## Citation
Lee FY, Workman P. Modification of CCNU pharmacokinetics by misonidazole--a major mechanism of chemosensitization in mice. British journal of cancer 47(5):659–669 (1983).
  ·  DOI: [10.1038/bjc.1983.104](https://doi.org/10.1038/bjc.1983.104)

## Population and dosing

**Population:** mice.

**Dosing:** 0.5 mg/g, other, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (μgml⁻¹) | A1 | 7.55 | 20 mg kg⁻¹ |
| B (μgml⁻¹) | R1 | 0.190 | 20 mg kg⁻¹ |
| α (min⁻¹) | λ1 | 0.307 | min⁻¹ |
| β (min⁻¹) | kel | 0.013 | min⁻¹ |
| t½α (min) | t1/2α | 2.3 | min |
| t½β (min) | t1/2β | 53.0 | min |
| AUC₀₋∞ (μgml⁻¹ min) | AUC∞ | 43.0 | μg·min/ml |
| App. Vdarea (1 kg⁻¹) | Vnorm | 35.6 | 1 kg⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The normalized volume of distribution for lomustine in mice carries a reciprocal mass unit incompatible with volume dimensions, preventing conversion.**

The record assigns a unit of 1 kg⁻¹ to the volume of distribution, which represents a dimensionless reciprocal mass rather than a volume. This dimensional conflict prevents the software from deriving a valid SI volume value. Consequently, the parameter lacks a converted numeric input, resulting in rejection. Extracted — lomustine: A1 7.55 20 mg kg⁻¹, R1 0.19 20 mg kg⁻¹, λ1 0.307 min⁻¹, kel 0.013 min⁻¹, t1/2α 2.3 min, t1/2β 53 min, AUC∞ 43 μg·min/ml, Vnorm 35.6 1 kg⁻¹.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (μgml⁻¹) | `Q415` · A1 | 7.55 | 20 mg kg⁻¹ |  |  | 20mg/kg | llm (0.6) | Lee_1983_table_1:row0:col1 |
| B (μgml⁻¹) | `Q307` · R1 | 0.190 | 20 mg kg⁻¹ |  |  | 20mg/kg | llm (0.6) | Lee_1983_table_1:row1:col1 |
| α (min⁻¹) | `Q67` · λ1 | 0.307 | min⁻¹ | 0.005117 | 1/s | 1/min | exact (1) | Lee_1983_table_1:row2:col1 |
| β (min⁻¹) | `Q47` · kel | 0.013 | min⁻¹ | 0.0002167 | 1/s | 1/min | exact (1) | Lee_1983_table_1:row3:col1 |
| t½α (min) | `Q59` · t1/2α | 2.3 | min | 138 | s | min | half_life_rule (0.95) | Lee_1983_table_1:row4:col1 |
| t½β (min) | `Q60` · t1/2β | 53.0 | min | 3180 | s | min | half_life_rule (0.95) | Lee_1983_table_1:row5:col1 |
| AUC₀₋∞ (μgml⁻¹ min) | `Q17` · AUC∞ | 43.0 | μg·min/ml |  |  | μg·min/ml | exact (1) | Lee_1983_table_1:row6:col1 |
| App. Vdarea (1 kg⁻¹) | `Q352` · Vnorm | 35.6 | 1 kg⁻¹ |  |  | 1/kg | llm (0.6) | Lee_1983_table_1:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '20 mg kg⁻¹' (A1)
- unit_dimension_unknown: '20 mg kg⁻¹' (R1)
- unit_dimension_unknown: '20 mg kg⁻¹' (AUC∞)
- relinked 'App. Clearance (1 kg⁻¹ min⁻¹)' Q22 → Q47: a rate constant in '1 kg⁻¹ min⁻¹' (the unit decides, not the label)
- dropped duplicate Q47 ('App. Clearance (1 kg⁻¹ min⁻¹)', value '0.463') — already have one for this compound
- unit_dimension_mismatch: 'App. Vdarea (1 kg⁻¹)' → Q352 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- implicit units: 'B (μgml⁻¹)' — the LLM proposed 'μg/ml', whose dimension does not fit Q307; left unset
- implicit units: 'AUC₀₋∞ (μgml⁻¹ min)' → μg·min/ml (from the paper text: "The parameter description in the prompt explicitly includes the unit: 'AUC₀₋∞ (μgml⁻¹ min) = 43.0'. The text in the Abst")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Lomustine (CCNU)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'control*†' subgroup of Lee_1983 (paper reports 5 populations: cis-3, cis-4, control*†, trans-3, trans-4)
- row roles (LLM): model_class=noncompartmental; 11/11 row label(s) assigned, 6 linked by role; re-tagged Lomustine (CCNU)→parent ×18, Lomustine (CCNU)→Monohydroxylated metabolites of CCNU ×20
- molar mass: no plausible PubChem entry for 'Monohydroxylated metabolites of CCNU' ('monohydroxylated metabolites') — left in mass units
- molar mass: none found for 'Monohydroxylated metabolites of CCNU' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Lee_1983_table_1:row6:col1'] |
| C5_dimension_Q352 | fail | [length] ** 3 | 1 kg⁻¹ (dimensionless) | ['Lee_1983_table_1:row8:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lee_1983_table_1:row3:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['Lee_1983_table_1:row4:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['Lee_1983_table_1:row5:col1'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Lee_1983_table_1:row2:col1'] |
| C5_unit_missing_Q307 | fail | [mass] / [time] | 20 mg kg⁻¹ | ['Lee_1983_table_1:row1:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blomustine%5D%20Lomustine_Lee1983_control&body=Drug%3A%20lomustine%0ARecord%3A%20Lomustine_Lee1983_control%0APaper%3A%20Lee_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lomustine/Lomustine_Lee1983_control%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 11:15 UTC</sub>
