<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;escitalopram&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/&quot;},{&quot;label&quot;:&quot;Liu_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Escitalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Escitalopram_Poweleit2023_reference&quot;,&quot;label&quot;:&quot;Poweleit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Poweleit2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# escitalopram — `Escitalopram_Liu2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:37 UTC) predates the latest extraction (2026-10-06 22:57 UTC); the status shown comes from the current checks. No model parameters were extracted from this paper.

<div class="pk-model-meta" hidden drug="escitalopram" model-id="Escitalopram_Liu2023_reference" status="needs_review" stale="true" population="virtual adults (repository of published escitalopram PPK models)" measured-compound="escitalopram" parameterization="apparent" topology="2C"></div>

## Citation
Liu X, Ju G, Yang W, Chen L, Xu N, He Q et al. Escitalopram Personalized Dosing: A Population Pharmacokinetics Repository Method. Drug design, development and therapy 17:2955–2967 (2023).
  ·  DOI: [10.2147/DDDT.S425654](https://doi.org/10.2147/DDDT.S425654)

## Population and dosing

**Population:** virtual adults (repository of published escitalopram PPK models) · condition depression/anxiety (psychiatric patients) · age group adult.

**Dosing:** 10 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V/F=815 | V/F | 48.32 | L |
| CL/F=22.8 | CL/F | 43.9 | L/h |
| Vc/F=867*(BW/70)°.741 | V1/F | 19.9 | L |
| CLp,V | CL | 68.63 | L/h |
| theta_cl_f_im | theta_cl_f_im | 29.61 |  |
| theta_cl_f_pm | theta_cl_f_pm | 31.2 |  |
| theta_cl_f_age_power | theta_cl_f_age_power | 62.29 |  |
| theta_cl_f_age_power | theta_cl_f_age_power | 48.5 |  |
| theta_q352_bmi_power | theta_q352_bmi_power | 62 |  |
| V,Ka | V,Ka | 81.3 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.611). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has escitalopram, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V/F=815 | `Q76` · V/F | 48.32 | L | 0.04832 | m3 | L | llm_confirmed (0.6) | Liu_2023_table_2:row2:col1 |
| CL/F=22.8 | `Q27` · CL/F | 43.9 | L/h | 1.219e-05 | m3/s | L/h | llm_confirmed (0.6) | Liu_2023_table_2:row4:col1 |
| Vc/F=867*(BW/70)°.741 | `Q290` · V1/F | 19.9 | L | 0.0199 | m3 | L | llm_confirmed (0.6) | Liu_2023_table_2:row5:col1 |
| CLp,V | `Q22` · CL | 68.63 | L/h | 1.906e-05 | m3/s | L/h | llm_confirmed (0.6) | Liu_2023_table_2:row18:col1 |
| theta_cl_f_im | `Q900` · theta_cl_f_im | 29.61 |  |  |  |  |  | Liu_2023_table_2:row1:col1 |
| theta_cl_f_pm | `Q900` · theta_cl_f_pm | 31.2 |  |  |  |  |  | Liu_2023_table_2:row10:col1 |
| theta_cl_f_age_power | `Q900` · theta_cl_f_age_power | 62.29 |  |  |  |  |  | Liu_2023_table_2:row16:col1 |
| theta_cl_f_age_power | `Q900` · theta_cl_f_age_power | 48.5 |  |  |  |  |  | Liu_2023_table_2:row23:col1 |
| theta_q352_bmi_power | `Q900` · theta_q352_bmi_power | 62 |  |  |  |  |  | Liu_2023_table_2:row24:col1 |
| V,Ka | `Q900` · V,Ka | 81.3 | 1/h | 0.02258 | 1/s |  |  | Liu_2023_table_2:row27:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Van (2012)22 | Q61 | llm |
| V,Ka | Q49 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Kim (2021)20' routed out of structural estimates ('Between-Subject Variability (%)')
- table section iiv: 'Van (2012)22' routed out of structural estimates ('Between-Subject Variability (%)')
- table section iiv: 'Jin (2010)19' routed out of structural estimates ('Between-Subject Variability (%)')
- table section iiv: 'Jin (2009)18' routed out of structural estimates ('Between-Subject Variability (%)')
- column 'fixed effect parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'software/algorithm' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'residual unexplained variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'external validation (n)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Liu (2022)21' — extend the ontology if this is a real PK parameter (source ['Liu_2023_table_2:row0:col2'])
- dropped unlinked row (NIL): 'Kim (2021)20' — extend the ontology if this is a real PK parameter (source ['Liu_2023_table_2:row3:col2'])
- dropped unlinked row (NIL): 'Weisskopf (2020)23' — extend the ontology if this is a real PK parameter (source ['Liu_2023_table_2:row9:col2'])
- dropped unlinked row (NIL): 'Courlet (2019)17' — extend the ontology if this is a real PK parameter (source ['Liu_2023_table_2:row12:col2', 'Liu_2023_table_2:row12:col4', 'Liu_2023_table_2:row12:col6'])
- unit_dimension_unknown: 'IF inhibitor' (CL/F)
- dropped duplicate Q27 ('CL/F=23.1*e−0.19(IF inhibitor)', value '71.41') — already have one for this compound
- dropped unlinked row (NIL): 'Akil (2016)16' — extend the ontology if this is a real PK parameter (source ['Liu_2023_table_2:row15:col2'])
- dropped duplicate Q76 ('V/F=1390', value '86.81') — already have one for this compound
- dropped duplicate Q27 ('CL/F=33.5', value '74.4') — already have one for this compound
- dropped duplicate Q76 ('Vd/F=1285', value '63.2') — already have one for this compound
- dropped unlinked row (NIL): 'Jin (2010)19' — extend the ontology if this is a real PK parameter (source ['Liu_2023_table_2:row22:col2'])
- dropped duplicate Q22 ('CL,V', value '9.4') — already have one for this compound
- dropped duplicate Q22 ('CL,Ka', value '47.8') — already have one for this compound
- dropped unlinked row (NIL): 'Jin (2009)18' — extend the ontology if this is a real PK parameter (source ['Liu_2023_table_2:row28:col2'])
- dropped duplicate Q27 ('CL/F=25.5', value '53.5') — already have one for this compound
- dropped duplicate Q76 ('V/F=1000', value '64.3') — already have one for this compound
- covariate effect for Q352 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'V/F=815' → L (from the popPK convention: 'No unit stated for V/F in text or footnotes; apparent volumes of distribution in population PK are conventionally in L, ')
- implicit units: 'CL/F=22.8' → L/h (from the popPK convention: 'No unit stated for CL/F; apparent oral clearance is conventionally in L/h, consistent with value 22.8 L/h for SCIT.')
- implicit units: 'Vc/F=867*(BW/70)°.741' → L (from the popPK convention: 'No unit stated for Vc/F; central volume of distribution is conventionally in L, consistent with value 867 L (allometric ')
- implicit units: 'CLp,V' → L/h (from the popPK convention: 'No unit stated for CLp (intercompartmental/central clearance of two-compartment model); clearances are conventionally in')
- implicit units: 'V,Ka' → 1/h (from the popPK convention: 'No unit stated for Ka; first-order absorption rate constants are conventionally in 1/h, consistent with value 81.3 (per ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=escitalopram
- bound model equation to Q61 (V): V = 947*(BMI/27)^1.11
- bound model equation to Q49 (kabs): Ka = 5.46 CL/F=22.8 Vc/F=867*(BW/70)^0.741 Q/F=34.4 Vp/F=234 ALAG=0.98
- Q61 (V) is equation-defined: value moved to equation-variable 'Van (2012)22'; equation kept verbatim
- Q49 (kabs) is equation-defined: value moved to equation-variable 'V,Ka'; equation kept verbatim
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2
- unparsed cell Liu_2023_table_2:row0:col4 = '16.94%'
- unparsed cell Liu_2023_table_2:row3:col4 = '6.40%'
- unparsed cell Liu_2023_table_2:row3:col7 = 'Simulation the escitalopram (20mg) to predict the QTc prolongation'
- unparsed cell Liu_2023_table_2:row9:col4 = '33.50%'
- unparsed cell Liu_2023_table_2:row15:col4 = '46.49%'
- unparsed cell Liu_2023_table_2:row22:col4 = '28.90%'
- unparsed cell Liu_2023_table_2:row28:col4 = '15.2%3.61%'
- captured model equation V = 947*(BMI/27)^1.11
- captured model equation Ka = 5.46 CL/F=22.8 Vc/F=867*(BW/70)^0.741 Q/F=34.4 Vp/F=234 ALAG=0.98

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.611 (11/18 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[courlet (2019)17]` |  | 149 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q352_bmi_power]` | 62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_bmi_power]` |  | 62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[van (2012)22]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | escitalopram | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | escitalopram | unknown | mismatch |

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
| C2_center_consistency_age | fail |  | [40.0, 60.0] |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Liu_2023_table_2:row18:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Liu_2023_table_2:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Liu_2023_table_2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Liu_2023_table_2:row27:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Liu_2023_table_2:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 68.6 L/h | ['Liu_2023_table_2:row18:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 43.9 L/h | ['Liu_2023_table_2:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 19.9 L | ['Liu_2023_table_2:row5:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 48.3 L | ['Liu_2023_table_2:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bescitalopram%5D%20Escitalopram_Liu2023_reference&body=Drug%3A%20escitalopram%0ARecord%3A%20Escitalopram_Liu2023_reference%0APaper%3A%20Liu_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_escitalopram/Escitalopram_Liu2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:57 UTC</sub>
