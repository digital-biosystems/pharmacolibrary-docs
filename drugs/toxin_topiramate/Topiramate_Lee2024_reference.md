<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Topiramate&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/&quot;},{&quot;label&quot;:&quot;Lee_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Donovan2016_reference&quot;,&quot;label&quot;:&quot;Donovan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Donovan2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_present_case_report&quot;,&quot;label&quot;:&quot;Hoebregts_2021_present_case_report&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Lynch2010_reference&quot;,&quot;label&quot;:&quot;Lynch_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Lynch2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Wei2023_reference&quot;,&quot;label&quot;:&quot;Wei_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Wei2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Elewa2023_reference&quot;,&quot;label&quot;:&quot;Elewa_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Elewa2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_general_population&quot;,&quot;label&quot;:&quot;Hoebregts_2021_general_population&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_general_population.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Topiramate — `Topiramate_Lee2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Cmax and CL have no unit.

<div class="pk-model-meta" hidden drug="Topiramate" model-id="Topiramate_Lee2024_reference" status="needs_review" stale="false" population="epilepsy patients" measured-compound="Topiramate" parameterization="apparent" topology="1C"></div>

## Citation
Lee S, Kim HC, Jang Y, Lee HS, Ahn SJ, Lee ST et al. Topiramate dosage optimization for effective antiseizure management via population pharmacokinetic modeling. Annals of clinical and translational neurology 11(2):424-435 (2024).
  ·  DOI: [10.1002/acn3.51962](https://doi.org/10.1002/acn3.51962)

## Population and dosing

**Population:** epilepsy patients · condition chronic therapeutic exposure · age group adult · n = 389.

**Dosing:** 178.4 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F, final parameter estimates for CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Estimated Cmax / Odds ratio | Cmax | 0.96 |  |
| final parameter estimates for Vd/F | V/F | 82.4 | L |
| clearance of topiramate elevated in polytherapy with EIASMs | CL | 1.5 | -fold |
| final parameter estimates for CL/F | final parameter estimates for CL/F | 2.1 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cmax and CL have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — topiramate: Cmax 0.96, V/F 82.4 L, CL 1.5 -fold.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Estimated Cmax / Odds ratio | `Q32` · Cmax | 0.96 |  |  |  |  | llm_confirmed (0.6) | acn351962-tbl-0003:row2:col4, acn351962-tbl-0003:row3:col4, acn351962-tbl-0003:row4:col4, acn351962-tbl-0003:row5:col4, acn351962-tbl-0003:row6:col4, acn351962-tbl-0003:row7:col4, acn351962-tbl-0003:row8:col4, acn351962-tbl-0003:row9:col4, acn351962-tbl-0003:row10:col4, acn351962-tbl-0003:row11:col4, acn351962-tbl-0003:row12:col4, acn351962-tbl-0003:row13:col4, acn351962-tbl-0003:row14:col4, acn351962-tbl-0003:row15:col4, acn351962-tbl-0003:row16:col4, acn351962-tbl-0003:row17:col4, acn351962-tbl-0003:row18:col4, acn351962-tbl-0003:row19:col4 |
| final parameter estimates for Vd/F | `Q76` · V/F | 82.4 | L | 0.0824 | m3 | L | boundary (0.8) | Lee_2024:other_prose |
| clearance of topiramate elevated in polytherapy with EIASMs | `Q22` · CL | 1.5 | -fold |  |  | -fold | boundary (0.8) | Lee_2024:discussion_prose |
| final parameter estimates for CL/F | `Q900` · final parameter estimates for CL/F | 2.1 | L/h | 5.833e-07 | m3/s |  |  | Lee_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| final parameter estimates for CL/F | Q27 | boundary |

## Departures & gaps

**Interpretation flags:**
- column 'asm response' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total adverse events' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'tpm‐induced adverse events' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'somnolence' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dizziness' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'diplopia, nystagmus' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'tremor' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ataxia' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dysarthria' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'psychic symptoms' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'fatigue' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'cognitive decline' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'headache' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'hyperammonemia' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'gi symptoms' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'body weight gain' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'body weight loss' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'hair loss' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'etc†' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Events' — extend the ontology if this is a real PK parameter (source ['acn351962-tbl-0003:row2:col1', 'acn351962-tbl-0003:row3:col1', 'acn351962-tbl-0003:row4:col1', 'acn351962-tbl-0003:row5:col1', 'acn351962-tbl-0003:row6:col1', 'acn351962-tbl-0003:row7:col1', 'acn351962-tbl-0003:row8:col1', 'acn351962-tbl-0003:row9:col1', 'acn351962-tbl-0003:row10:col1', 'acn351962-tbl-0003:row11:col1', 'acn351962-tbl-0003:row12:col1', 'acn351962-tbl-0003:row13:col1', 'acn351962-tbl-0003:row14:col1', 'acn351962-tbl-0003:row15:col1', 'acn351962-tbl-0003:row16:col1', 'acn351962-tbl-0003:row17:col1', 'acn351962-tbl-0003:row18:col1', 'acn351962-tbl-0003:row19:col1', 'acn351962-tbl-0003:row20:col1'])
- dropped unlinked row (NIL): 'Spot serum level / Odds ratio' — extend the ontology if this is a real PK parameter (source ['acn351962-tbl-0003:row2:col2', 'acn351962-tbl-0003:row3:col2', 'acn351962-tbl-0003:row4:col2', 'acn351962-tbl-0003:row5:col2', 'acn351962-tbl-0003:row6:col2', 'acn351962-tbl-0003:row7:col2', 'acn351962-tbl-0003:row8:col2', 'acn351962-tbl-0003:row9:col2', 'acn351962-tbl-0003:row10:col2', 'acn351962-tbl-0003:row11:col2', 'acn351962-tbl-0003:row12:col2', 'acn351962-tbl-0003:row13:col2', 'acn351962-tbl-0003:row14:col2', 'acn351962-tbl-0003:row15:col2', 'acn351962-tbl-0003:row16:col2', 'acn351962-tbl-0003:row17:col2', 'acn351962-tbl-0003:row18:col2', 'acn351962-tbl-0003:row19:col2'])
- dropped unlinked row (NIL): 'Spot serum level / p‐value' — extend the ontology if this is a real PK parameter (source ['acn351962-tbl-0003:row2:col3', 'acn351962-tbl-0003:row3:col3', 'acn351962-tbl-0003:row4:col3', 'acn351962-tbl-0003:row5:col3', 'acn351962-tbl-0003:row6:col3', 'acn351962-tbl-0003:row7:col3', 'acn351962-tbl-0003:row8:col3', 'acn351962-tbl-0003:row10:col3', 'acn351962-tbl-0003:row11:col3', 'acn351962-tbl-0003:row12:col3', 'acn351962-tbl-0003:row13:col3', 'acn351962-tbl-0003:row14:col3', 'acn351962-tbl-0003:row15:col3', 'acn351962-tbl-0003:row16:col3', 'acn351962-tbl-0003:row17:col3', 'acn351962-tbl-0003:row18:col3', 'acn351962-tbl-0003:row19:col3'])
- dropped duplicate Q32 ('Estimated Cmax / p‐value', value '0.57') — already have one for this compound
- dropped value-less row: 'Etc†'
- dropped value-less row: 'ASM'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'GI'
- dropped value-less row: 'TPM'
- salvaged Q27 ('final parameter estimates for CL/F'=2.1) from results prose — parameter table was unreadable
- salvaged Q76 ('final parameter estimates for Vd/F'=82.4) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance of topiramate elevated in polytherapy with EIASMs'=1.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Topiramate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q27 (CL/F): CL/F = (θ1+θ4*CBZ+θ5*OXC+θ6*PHT+θ7*PB)*(CLcr/90)^θ8*(DOSE/100)^θ9
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'final parameter estimates for CL/F'; equation kept verbatim
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table acn351962-tbl-0003: units_need_context
- transposed table acn351962-tbl-0003: logical view retains original source coordinates
- captured model equation CL/F = (θ1+θ4*CBZ+θ5*OXC+θ6*PHT+θ7*PB)*(CLcr/90)^θ8*(DOSE/100)^θ9

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | -fold | ['Lee_2024:discussion_prose'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['acn351962-tbl-0003:row2:col4', 'acn351962-tbl-0003:row3:col4', 'acn351962-tbl-0003:row4:col4', 'acn351962-tbl-0003:row5:col4', 'acn351962-tbl-0003:row6:col4', 'acn351962-tbl-0003:row7:col4', 'acn351962-tbl-0003:row8:col4', 'acn351962-tbl-0003:row9:col4', 'acn351962-tbl-0003:row10:col4', 'acn351962-tbl-0003:row11:col4', 'acn351962-tbl-0003:row12:col4', 'acn351962-tbl-0003:row13:col4', 'acn351962-tbl-0003:row14:col4', 'acn351962-tbl-0003:row15:col4', 'acn351962-tbl-0003:row16:col4', 'acn351962-tbl-0003:row17:col4', 'acn351962-tbl-0003:row18:col4', 'acn351962-tbl-0003:row19:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 82.4 L | ['Lee_2024:other_prose'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btopiramate%5D%20Topiramate_Lee2024_reference&body=Drug%3A%20topiramate%0ARecord%3A%20Topiramate_Lee2024_reference%0APaper%3A%20Lee_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_topiramate/Topiramate_Lee2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 13:59 UTC</sub>
