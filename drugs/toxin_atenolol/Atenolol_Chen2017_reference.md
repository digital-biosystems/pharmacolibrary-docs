<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Atenolol&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/&quot;},{&quot;label&quot;:&quot;Chen_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atenolol_Kir2025_reference&quot;,&quot;label&quot;:&quot;Kir_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atenolol/Atenolol_Kir2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Atenolol — `Atenolol_Chen2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Clarification of the rejection rationale for the atenolol model.

<div class="pk-model-meta" hidden drug="Atenolol" model-id="Atenolol_Chen2017_reference" status="rejected" stale="false" population="rats" measured-compound="S-atenolol" parameterization="mechanistic" topology="2C"></div>

## Citation
Chen X, Slättengren T, de Lange ECM, Smith DE, Hammarlund-Udenaes M. Revisiting atenolol as a low passive permeability marker. Fluids and barriers of the CNS 14(1):30 (2017).
  ·  DOI: [10.1186/s12987-017-0078-x](https://doi.org/10.1186/s12987-017-0078-x)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 0.167, 0.182, 0.4 mg/min/kg, iv, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL | CL | 10.2 | mL/min | 2.4 | 7.5 (None% RSE) |
| V1 | V1 | 215 | mL | 10.8 | 30.3 (None% RSE) |
| Q | Q | 5.56 | mL/min | 8.9 |  |
| V2 | V2 | 402 | mL | 4.8 |  |
| fu,p | fu | 1.0 |  |  |  |
| CLin | CLint | 17.0 | µL/min/gbrain | 48.8 |  |
| Kp,uu,brain | Kp | 0.040 |  | 11.3 | 35.5 (None% RSE) |
| Ka | kabs | 1.13 | h−1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Clarification of the rejection rationale for the atenolol model.**

The review identified that the reported clearance (CL) value of 10.2 mL/min and volume of distribution (V1) of 215 mL fell outside the physiological window, suggesting an extraction error. Additionally, the unit for intrinsic clearance (µL/min/gbrain) could not be converted to SI units. Extracted — S-atenolol: CL 10.2 mL/min, V1 215 mL, Q 5.56 mL/min, V2 402 mL, fu 1, CLint 17 µL/min/gbrain, Kp 0.04, kabs 1.13 h−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 10.2 | mL/min | 1.7e-07 | m3/s | ml/min | 2.4 | exact (1) | Tab1:row3:col2 | 7.5 (None% RSE) |
| V1 | `Q63` · V1 | 215 | mL | 0.000215 | m3 | ml | 10.8 | exact (1) | Tab1:row4:col2 | 30.3 (None% RSE) |
| Q | `Q30` · Q | 5.56 | mL/min | 9.267e-08 | m3/s | ml/min | 8.9 | exact (1) | Tab1:row5:col2 |  |
| V2 | `Q64` · V2 | 402 | mL | 0.000402 | m3 | ml | 4.8 | exact (1) | Tab1:row6:col2 |  |
| fu,p | `Q46` · fu | 1.0 |  | 1 |  |  |  | llm_confirmed (0.6) | Tab1:row7:col2 |  |
| CLin | `Q3` · CLint | 17.0 | µL/min/gbrain |  |  | µl/(min·g·brain) | 48.8 | llm (0.6) | Tab1:row9:col2 |  |
| Kp,uu,brain | `Q410` · Kp | 0.040 |  |  |  |  | 11.3 | llm_confirmed (0.6) | Tab1:row10:col2 | 35.5 (None% RSE) |
| Ka | `Q49` · kabs | 1.13 | h−1 | 0.0003139 | 1/s | 1/h |  | review_gapfill (0.7) | Fu_2022:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'RECblood' routed out of structural estimates ('IIV (%)')
- table section iiv: 'RECblood' routed out of structural estimates ('RSE IIV (%)')
- table section iiv: 'RECbrain' routed out of structural estimates ('IIV (%)')
- table section iiv: 'RECbrain' routed out of structural estimates ('RSE IIV (%)')
- table section iiv: 'CL' routed out of structural estimates ('IIV (%)')
- table section iiv: 'CL' routed out of structural estimates ('RSE IIV (%)')
- table section iiv: 'V1' routed out of structural estimates ('IIV (%)')
- table section iiv: 'V1' routed out of structural estimates ('RSE IIV (%)')
- table section iiv: 'CLin' routed out of structural estimates ('IIV (%)')
- table section iiv: 'CLin' routed out of structural estimates ('RSE IIV (%)')
- table section iiv: 'Kp,uu,brain' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Kp,uu,brain' routed out of structural estimates ('RSE IIV (%)')
- dropped unlinked row (NIL): 'RECblood' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col2'])
- dropped unlinked row (NIL): 'RECbrain' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col2'])
- dropped duplicate Q30 ('QAV', value '15.4') — already have one for this compound
- unit_dimension_unknown: 'µL/min/gbrain' (CLint)
- dropped unlinked row (NIL): 'Vu,brain' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col2'])
- implicit units: 'CLin' — the LLM proposed 'µL/min/g brain', whose dimension does not fit Q3; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- gap-filled Q49 (kabs) from Fu_2022's review values (primary lacked it)

**Extraction notes:**
- table Tab1: missing_unit_binding
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- toxin: the located table(s) gave no kinetic value — 8 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 82 | 83.25 | 1.015 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Tab1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Tab1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Fu_2022:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Tab1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Tab1:row6:col2'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | µL/min/gbrain |  |  | ['Tab1:row9:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.2 |  |  | ['Tab1:row3:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.612 L/h |  |  | ['Tab1:row3:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.215 L |  |  | ['Tab1:row4:col2'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.402 L |  |  | ['Tab1:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Chen2017_reference&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Chen2017_reference%0APaper%3A%20Chen_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_atenolol/Atenolol_Chen2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 19:26 UTC</sub>
