<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;triazolam&quot;,&quot;href&quot;:&quot;drugs/drug_triazolam/&quot;},{&quot;label&quot;:&quot;Okada_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triazolam_Cha2024_reference&quot;,&quot;label&quot;:&quot;Cha_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triazolam/Triazolam_Cha2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Triazolam_van2011_reference&quot;,&quot;label&quot;:&quot;van_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triazolam/Triazolam_van2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triazolam — `Triazolam_Okada2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The triazolam model was rejected because its one-compartment structure contains a peripheral volume parameter (V2 = 119 L) with no linked peripheral compartment, leaving an orphan compartment unreachable from the dose.

<div class="pk-model-meta" hidden drug="triazolam" model-id="Triazolam_Okada2024_reference" status="rejected" stale="false" population="elderly patients (and young adults from literature data)" measured-compound="triazolam" parameterization="mechanistic" topology="1C"></div>

## Citation
Okada A, Sera S, Nagai N. Appropriate use of triazolam in elderly patients considering a quantitative benefit-risk assessment based on the pharmacokinetic-pharmacodynamic modeling and simulation approach supported by real-world data. BMC pharmacology & toxicology 25(1):60 (2024).
  ·  DOI: [10.1186/s40360-024-00777-z](https://doi.org/10.1186/s40360-024-00777-z)

## Population and dosing

**Population:** elderly patients (and young adults from literature data) · condition insomnia (elderly; adverse event risk assessment) · age group elderly.

**Dosing:** 0.0625, 0.15 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ1 (1/hr) | kel | 3.16 | 1/h | 5.27 |
| θ2 (L) | V2 | 119 | L | 1.86 |
| θ3 (L/hr/kg) | CLnorm | 0.47 | L/hr/kg | 1.92 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.409). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The triazolam model was rejected because its one-compartment structure contains a peripheral volume parameter (V2 = 119 L) with no linked peripheral compartment, leaving an orphan compartment unreachable from the dose.**

The record declares a one-compartment structure for triazolam, yet it carries V2 = 119 L, defined as the volume of distribution of the peripheral compartment; with no such compartment in the topology, that volume has no path from the dose and the check for unreachable or orphan compartments failed. The elimination parameters themselves are populated (kel = 3.16 1/h, CLnorm = 0.47 L/h/kg), but the absorption rate constant kabs has no extracted value, so it would have been left at a library placeholder. Extracted — triazolam: kel 3.16 1/h, V2 119 L, CLnorm 0.47 L/hr/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has none, the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θ1 (1/hr) | `Q47` · kel | 3.16 | 1/h | 0.0008778 | 1/s | 1/h | 5.27 | llm (0.6) | Tab3:row4:col1, Tab3:row4:col2 |
| θ2 (L) | `Q64` · V2 | 119 | L | 0.119 | m3 | l | 1.86 | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2 |
| θ3 (L/hr/kg) | `Q354` · CLnorm | 0.47 | L/hr/kg | 9.139e-06 | m3/s | l/(h·kg) | 1.92 | llm (0.6) | Tab3:row9:col1, Tab3:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Ka = θ1 | Q49 | llm_confirmed |
| theta_q61_age_power | Q900 |  |
| theta_q22_age_power | Q900 |  |
| Vd | Q61 | exact |
| CL | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ Sedation (mm)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ Cognitive function (%)' routed out of structural estimates ('Residual variability')
- routed 'θ4' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'θ5' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row10:col2'])
- dropped PD-category row 'Keo (1/hr)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row15:col1', 'Tab3:row15:col2'])
- dropped PD-category row 'Sedation constant' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row16:col1', 'Tab3:row16:col2'])
- dropped PD-category row 'Cognitive function constant' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row17:col1', 'Tab3:row17:col2'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 12.1 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number -11.0 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'θ1 (1/hr)' → 1/h (from the popPK convention: 'No unit stated in caption or text; kel is a first-order elimination rate constant, conventionally in 1/h, consistent wit')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (θ2 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=triazolam
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q61 (V): Vd = θ2* (age/30)^θ4
- bound model equation to Q22 (CL): CL = θ3 * (age/30)^θ5 * 1/AUCR
- Q61 (V) is equation-defined: value moved to equation-variable 'Vd'; equation kept verbatim
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3
- captured model equation Vd = θ2* (age/30)^θ4
- captured model equation CL = θ3 * (age/30)^θ5 * 1/AUCR

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.409 (9/22 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cognitive function constant]` |  | -11.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_age_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_age_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_age_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_age_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[θ2].parameter_id` | Q64 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[θ2].value` | 119 |  | mismatch |
| `gpt-oss-120b` | `parameters[θ3].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[θ3].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[θ3].value` | 0.47 |  | mismatch |

</details>

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
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tab3:row9:col1', 'Tab3:row9:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 119 L | ['Tab3:row6:col1', 'Tab3:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriazolam%5D%20Triazolam_Okada2024_reference&body=Drug%3A%20triazolam%0ARecord%3A%20Triazolam_Okada2024_reference%0APaper%3A%20Okada_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_triazolam/Triazolam_Okada2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:55 UTC</sub>
