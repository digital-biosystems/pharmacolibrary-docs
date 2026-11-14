<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ropivacaine&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/&quot;},{&quot;label&quot;:&quot;Ling_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ropivacaine_Butiulca2024v2_reference&quot;,&quot;label&quot;:&quot;Butiulca_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Butiulca2024v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Lu2022_reference&quot;,&quot;label&quot;:&quot;Lu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Lu2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Tang2026_3_oh_ropivacaine&quot;,&quot;label&quot;:&quot;Tang_2026_3_oh_ropivacaine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Tang2026_3_oh_ropivacaine.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Tang2026_ropivacaine&quot;,&quot;label&quot;:&quot;Tang_2026_ropivacaine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Tang2026_ropivacaine.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Butiulca2024_reference&quot;,&quot;label&quot;:&quot;Butiulca_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Butiulca2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Matsota2024_reference&quot;,&quot;label&quot;:&quot;Matsota_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Matsota2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ropivacaine — `Ropivacaine_Ling2025_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Ropivacaine" model-id="Ropivacaine_Ling2025_reference" status="extracted" stale="false" population="patients undergoing thoracoscopic pneumonectomy" measured-compound="Ropivacaine" parameterization="apparent" topology="2C"></div>

## Citation
Ling J, Xu C, Tang L, Qiu L, Hu N. Comparison of the pharmacokinetic variations of different concentrations of ropivacaine used for serratus anterior plane block in patients undergoing thoracoscopic lobectomy: a population pharmacokinetics analysis. Frontiers in pharmacology 16:1540606 (2025).
  ·  DOI: [10.3389/fphar.2025.1540606](https://doi.org/10.3389/fphar.2025.1540606)

## Population and dosing

**Population:** patients undergoing thoracoscopic pneumonectomy · condition clinical anesthesia/analgesia for surgery · age group adult · n = 41.

**Dosing:** 210 mg, other, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F1 (%) | Fab | 72.6 | % | 8.0 | 21.1 (33.4% RSE) |
| ALAG2 (h) | tlag | 0.49 | h | 0.4 |  |
| k (h-1) | kel | 0.0598 | h-1 | 13.4 | 68.3 (23.3% RSE) |
| Vc/F (L) | V1/F | 125 | L | 4.8 | 24.0 (27.2% RSE) |
| Q/F (L/h) | Q/F | 14.7 | L/h | 31.5 |  |
| Vp/F (L) | V2/F | 197 | L | 10.5 | 105.4 (29.2% RSE) |
| ka (h-1) 0.25% ropivacaine | kabs | 32.0 | h-1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F1 (%) | `Q40` · Fab | 72.6 | % | 0.726 |  | % | 8.0 | exact (1) | T3:row1:col2 | 21.1 (33.4% RSE) |
| ALAG2 (h) | `Q83` · tlag | 0.49 | h | 1764 | s | h | 0.4 | llm (0.6) | T3:row2:col2 |  |
| k (h-1) | `Q47` · kel | 0.0598 | h-1 | 1.661e-05 | 1/s | 1/h | 13.4 | exact (1) | T3:row8:col2 | 68.3 (23.3% RSE) |
| Vc/F (L) | `Q290` · V1/F | 125 | L | 0.125 | m3 | l | 4.8 | exact (1) | T3:row9:col2 | 24.0 (27.2% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 14.7 | L/h | 4.083e-06 | m3/s | l/h | 31.5 | exact (1) | T3:row10:col2 |  |
| Vp/F (L) | `Q82` · V2/F | 197 | L | 0.197 | m3 | l | 10.5 | exact (1) | T3:row11:col2 | 105.4 (29.2% RSE) |
| ka (h-1) 0.25% ropivacaine | `Q49` · kabs | 32.0 | h-1 | 0.008889 | 1/s | 1/h |  | review_gapfill (0.7) | Ling_2025:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'D2 (h)' — extend the ontology if this is a real PK parameter (source ['T3:row3:col2'])
- dropped unlinked row (NIL): '0.25% ropivacaine' — extend the ontology if this is a real PK parameter (source ['T3:row5:col2'])
- dropped unlinked row (NIL): '0.50% ropivacaine' — extend the ontology if this is a real PK parameter (source ['T3:row6:col2'])
- dropped unlinked row (NIL): '0.75% ropivacaine' — extend the ontology if this is a real PK parameter (source ['T3:row7:col2'])
- dropped 'θPLT-Vc/F (%)' → Q290 = -0.438: a volume of -0.438 is not a parameter value (source ['T3:row12:col2'])
- dropped unlinked row (NIL): 'δprop (%)' — extend the ontology if this is a real PK parameter (source ['T3:row18:col2'])
- dropped unlinked row (NIL): 'δadd (ng/mL)' — extend the ontology if this is a real PK parameter (source ['T3:row19:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Ropivacaine
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Ling_2025's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 3
- toxin: the located table(s) gave no kinetic value — 8 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T3:row9:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T3:row8:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ling_2025:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T3:row10:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T3:row11:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['T3:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 125 L | ['T3:row9:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 197 L | ['T3:row11:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bropivacaine%5D%20Ropivacaine_Ling2025_reference&body=Drug%3A%20ropivacaine%0ARecord%3A%20Ropivacaine_Ling2025_reference%0APaper%3A%20Ling_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ropivacaine/Ropivacaine_Ling2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:39 UTC</sub>
