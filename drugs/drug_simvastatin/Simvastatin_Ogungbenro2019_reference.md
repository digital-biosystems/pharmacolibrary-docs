<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;simvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/&quot;},{&quot;label&quot;:&quot;Ogungbenro_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Simvastatin_Corsini1999_reference&quot;,&quot;label&quot;:&quot;Corsini_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Corsini1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Mauro1993_reference&quot;,&quot;label&quot;:&quot;Mauro_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Mauro1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Sun2022_reference&quot;,&quot;label&quot;:&quot;Sun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Sun2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Friedrich2014_reference&quot;,&quot;label&quot;:&quot;Friedrich_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Friedrich2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Jadhav2023_reference&quot;,&quot;label&quot;:&quot;Jadhav_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Jadhav2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wei_2014_LDL_C&quot;,&quot;label&quot;:&quot;Wei_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/pd_Wei_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# simvastatin — `Simvastatin_Ogungbenro2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Simvastatin acid has a volume of 0.043 L, creating a dimension mismatch, and 6-hydroxymethyl simvastatin is an orphan compartment with no dose path.

<div class="pk-model-meta" hidden drug="simvastatin" model-id="Simvastatin_Ogungbenro2019_reference" status="rejected" stale="false" population="children and adolescents" measured-compound="simvastatin" parameterization="apparent" topology="general_linear"></div>

## Citation
Ogungbenro K, Wagner JB, Abdel-Rahman S, Leeder JS, Galetin A. A population pharmacokinetic model for simvastatin and its metabolites in children and adolescents. European journal of clinical pharmacology 75(9):1227–1235 (2019).
  ·  DOI: [10.1007/s00228-019-02697-y](https://doi.org/10.1007/s00228-019-02697-y)

## Population and dosing

**Population:** children and adolescents · condition hypercholesterolemia · age group mixed · n = ,.

**Dosing:** 10, 20 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| SV | tlag | 0.069 | h |
| D2 (h−1) | D1 | 0.39 | h−1 |
| ka1 (h−1) | kabs | 0.030 | h−1 |
| BA* | equation variable | 0.78 |  |
| CLSLe/F (L/h) | CL/F | 1300 | L/h |
| VSL/F (L) | V/F | 110 | L |
| SVA | V | 0.043 | L |
| CLSVAe/VSVA (h−1) | kel | 0.13 | h−1 |
| HMSV | equation variable | 16.1 |  |
| CLEmax/VHSV (nM/h) | CL/F | 660 | nM/h |
| γ | t1/2γ | 0.86 | h |
| HMSVA | equation variable | 0.48 |  |
| CLHSVAe/VHSVA (h−1) | kel | 4.91 | h−1 |
| CLHSVHSVA/VHSVA (h−1) | kfm | 0.55 | h−1 |
| age1_age_fra_on_clhsvae | age1_age_fra_on_clhsvae | 1 |  |
| CLDHSe/VDHSV (h−1) | kel | 12.9 | h−1 |
| theta_q354_age | theta_q354_age | 0.90 |  |
| theta_q335_age | theta_q335_age | 6.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simvastatin acid has a volume of 0.043 L, creating a dimension mismatch, and 6-hydroxymethyl simvastatin is an orphan compartment with no dose path.**

The simvastatin acid volume of 0.043 L causes a dimension mismatch in its associated structural parameters. Simvastatin acid has one compartment while 6-hydroxymethyl simvastatin has zero compartments, making the latter an orphan metabolite with no dose path. Additionally, a reported unit could not be converted to SI, so the parameter lacked a standard value. Extracted — simvastatin: tlag 0.069 h, D1 0.39 h−1, kabs 0.03 h−1, CL/F 1.3e+03 L/h, V/F 110 L; simvastatin acid: V 0.043 L, kel 0.13 h−1; 6-hydroxymethyl simvastatin: CL/F 660 nM/h, t1/2γ 0.86 h; 6-hydroxymethyl simvastatin acid: kel 4.91 h−1, kfm 0.55 h−1; 3,5 dihydrodiol simvastatin: kel 12.9 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has simvastatin → simvastatin acid (metabolism); simvastatin → 6-hydroxymethyl simvastatin (metabolism); simvastatin → 3,5-dihydrodiol simvastatin (metabolism) …, the second reading simvastatin → simvastatin acid (metabolism); simvastatin → 6-hydroxymethyl simvastatin (metabolism); simvastatin → 6-hydroxymethyl simvastatin acid (metabolism) …; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| SV | `Q83` · tlag | 0.069 | h | 248.4 | s | h | exact (1) | Tab1:row2:col2 |
| D2 (h−1) | `Q310` · D1 | 0.39 | h−1 |  |  | 1/h | llm (0.6) | Tab1:row3:col1 |
| ka1 (h−1) | `Q49` · kabs | 0.030 | h−1 | 8.333e-06 | 1/s | 1/h | exact (1) | Tab1:row4:col1 |
| BA* | `Q900` · equation variable | 0.78 |  |  |  |  | llm (0.6) | Tab1:row6:col1 |
| CLSLe/F (L/h) | `Q27` · CL/F | 1300 | L/h | 0.0003611 | m3/s | l/h | llm (0.6) | Tab1:row8:col1 |
| VSL/F (L) | `Q76` · V/F | 110 | L | 0.11 | m3 | l | llm (0.6) | Tab1:row9:col1 |
| SVA | `Q61` · V | 0.043 | L | 4.3e-05 | m3 | L | llm (0.6) | Tab1:row10:col1, Tab1:row10:col2 |
| CLSVAe/VSVA (h−1) | `Q47` · kel | 0.13 | h−1 | 3.611e-05 | 1/s | 1/h | exact (1) | Tab1:row11:col1 |
| HMSV | `Q900` · equation variable | 16.1 |  |  |  |  | llm (0.6) | Tab1:row14:col1, Tab1:row14:col2 |
| CLEmax/VHSV (nM/h) | `Q27` · CL/F | 660 | nM/h |  |  | nM/h | llm (0.6) | Tab1:row15:col1 |
| γ | `Q89` · t1/2γ | 0.86 | h | 3096 | s | h | llm (0.6) | Tab1:row17:col1 |
| HMSVA | `Q900` · equation variable | 0.48 |  |  |  |  | llm (0.6) | Tab1:row18:col1, Tab1:row18:col2 |
| CLHSVAe/VHSVA (h−1) | `Q47` · kel | 4.91 | h−1 | 0.001364 | 1/s | 1/h | exact (1) | Tab1:row19:col1 |
| CLHSVHSVA/VHSVA (h−1) | `Q305` · kfm | 0.55 | h−1 | 0.0001528 | 1/s | 1/h | exact (1) | Tab1:row20:col1 |
| age1_age_fra_on_clhsvae | `Q900` · age1_age_fra_on_clhsvae | 1 |  |  |  |  |  | Tab1:row21:col1 |
| CLDHSe/VDHSV (h−1) | `Q47` · kel | 12.9 | h−1 | 0.003583 | 1/s | 1/h | exact (1) | Tab1:row24:col1 |
| theta_q354_age | `Q900` · theta_q354_age | 0.90 |  |  |  |  |  | Tab1:row25:col1 |
| theta_q335_age | `Q900` · theta_q335_age | 6.3 |  |  |  |  |  | Tab1:row26:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'SV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps2SV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps3SV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'mSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'SVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps2SVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'mSVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'HMSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps2HMSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps3HMSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'mHMSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'HMSVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps2HMSVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'mHMSVA' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'DHSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps2 DHSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'eps3 DHSV' routed out of structural estimates ('Residual Variabilityc')
- table section residual_error: 'mDHSV' routed out of structural estimates ('Residual Variabilityc')
- table representations disagree for 'SV'; source reconciliation required
- column 'parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'D2 (h−1)'; source reconciliation required
- table representations disagree for 'ka1 (h−1)'; source reconciliation required
- table representations disagree for 'ka2 (h−1)'; source reconciliation required
- table representations disagree for 'BA*'; source reconciliation required
- table representations disagree for 'ALAG (h)'; source reconciliation required
- table representations disagree for 'CLSLe/F (L/h)'; source reconciliation required
- table representations disagree for 'VSL/F (L)'; source reconciliation required
- table representations disagree for 'SVA'; source reconciliation required
- table representations disagree for 'CLSVAe/VSVA (h−1)'; source reconciliation required
- table representations disagree for 'θ562: c.521T&gt;C on CLLA'; source reconciliation required
- table representations disagree for 'HMSV'; source reconciliation required
- table representations disagree for 'CLEmax/VHSV (nM/h)'; source reconciliation required
- table representations disagree for 'CLEC50 (nM)'; source reconciliation required
- table representations disagree for 'γ'; source reconciliation required
- table representations disagree for 'HMSVA'; source reconciliation required
- table representations disagree for 'CLHSVAe/VHSVA (h−1)'; source reconciliation required
- table representations disagree for 'CLHSVHSVA/VHSVA (h−1)'; source reconciliation required
- table representations disagree for 'θAGE1: age (Fra) on CLHSVAe'; source reconciliation required
- table representations disagree for 'θAGE2: age (50%) on CLHSVAe (year)'; source reconciliation required
- table representations disagree for 'DHSV'; source reconciliation required
- table representations disagree for 'CLDHSe/VDHSV (h−1)'; source reconciliation required
- table representations disagree for 'θAGE3: age (Fra) on CLDHSe'; source reconciliation required
- table representations disagree for 'θAGE4: age (50%) on CLDHSe (year)'; source reconciliation required
- linked 'SV' as 'Tlag' → Q83 (tlag) for  — compound marker removed
- unit_dimension_mismatch: 'D2 (h−1)' → Q310 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q49 ('ka2 (h−1)', value '0.41') — already have one for this compound
- dropped duplicate Q83 ('ALAG (h)', value '0.18') — already have one for this compound
- dropped unlinked row (NIL): 'θ562: c.521T&gt;C on CLLA' — extend the ontology if this is a real PK parameter (source ['Tab1:row13:col1'])
- unit_dimension_mismatch: 'CLEmax/VHSV (nM/h)' → Q27 (unit '[length] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'CLEC50 (nM)' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col1'])
- covariate level 'θAGE1: age (Fra) on CLHSVAe' → Q900:age1_age_fra_on_clhsvae = 1 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'θAGE2: age (50%) on CLHSVAe (year)' — extend the ontology if this is a real PK parameter (source ['Tab1:row22:col1'])
- dropped unlinked row (NIL): 'DHSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row23:col1', 'Tab1:row23:col2'])
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'SV' → h (from the popPK convention: 'The parameter is a lag time (tlag). In population pharmacokinetics, time-based parameters such as lag times are conventi')
- implicit units: 'SVA' → L (from the popPK convention: 'The parameter is a volume of distribution (V). In population pharmacokinetics, central or peripheral volumes of distribu')
- implicit units: 'γ' → h (from the popPK convention: 'The parameter is a half-life (t1/2γ). In population pharmacokinetics, half-lives are conventionally expressed in hours (')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=simvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 4 metabolites — the templates hold two
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 37/37 row label(s) assigned, 11 linked by role; re-tagged parent→simvastatin acid ×7, parent→6-hydroxymethyl simvastatin ×9, parent→6-hydroxymethyl simvastatin acid ×9, parent→3,5 dihydrodiol simvastatin ×9
- molar mass: no plausible PubChem entry for '6-hydroxymethyl simvastatin acid' ('6-hydroxymethyl simvastatin acid') — left in mass units
- molar mass: no plausible PubChem entry for '3,5 dihydrodiol simvastatin' ('no full name in the paper') — left in mass units
- molar mass: none found for '6-hydroxymethyl simvastatin acid' — its concentrations stay mass-only
- molar mass: none found for '3,5 dihydrodiol simvastatin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab1: unbound_uncertainty
- table Tab1: ragged_grid
- table Tab1: unparsed_numeric_cell
- table Tab1: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (12/24 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['simvastatin', 'simvastatin acid', 'metabolism'], ['simvastatin', '6-hydroxymethyl simvastatin', 'metabolism'], ['simvastatin', '3,5-dihydrodiol simvastatin', 'metabolism'], ['simvastatin acid', '6-hydroxymethyl simvastatin acid', 'metabolism'], ['6-hydroxymethyl simvastatin', '6-hydroxymethyl simvastatin acid', 'metabolism']] | [['simvastatin', 'simvastatin acid', 'metabolism'], ['simvastatin', '6-hydroxymethyl simvastatin', 'metabolism'], ['simvastatin', '6-hydroxymethyl simvastatin acid', 'metabolism'], ['simvastatin', '3,5-dihydrodiol simvastatin', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[age1_age_fra_on_clhsvae]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[age3_age_fra_on_cldhse]` | 0.90 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ba*].parameter_id` | Q900 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[clemax/vhsv]` |  | 660 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clhsvhsva/vhsva].parameter_id` | Q305 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[clsle/f].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[dhsv]` |  | 4.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[hmsv]` |  | 16.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_age]` |  | 6.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_age]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q356_age]` |  | 0.90 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab1:row8:col1'] |
| C5_dimension_Q27 | fail | [length] / [time] | nM/h | ['Tab1:row15:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Tab1:row20:col1'] |
| C5_dimension_Q310 | fail | 1 / [time] | h−1 | ['Tab1:row3:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab1:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab1:row19:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab1:row24:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab1:row4:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab1:row10:col1', 'Tab1:row10:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab1:row9:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab1:row2:col2'] |
| C5_dimension_Q89 | pass | [time] |  | ['Tab1:row17:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLLA', 'CLLH', 'CLLD'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.3e+03 L/h | ['Tab1:row8:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.043 L | ['Tab1:row10:col1', 'Tab1:row10:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 110 L | ['Tab1:row9:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsimvastatin%5D%20Simvastatin_Ogungbenro2019_reference&body=Drug%3A%20simvastatin%0ARecord%3A%20Simvastatin_Ogungbenro2019_reference%0APaper%3A%20Ogungbenro_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_simvastatin/Simvastatin_Ogungbenro2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 11:06 UTC</sub>
