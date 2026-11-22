<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Guiastrennec_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Guiastrennec2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Guiastrennec2018_reference" status="needs_review" stale="false" population="Indian children aged 1-15 years with drug-sensitive tuberculosis" measured-compound="Isoniazid" parameterization="apparent" topology="1C"></div>

## Citation
Guiastrennec B, Ramachandran G, Karlsson MO, Kumar AKH, Bhavani PK, Gangadevi NP et al. Suboptimal Antituberculosis Drug Concentrations and Outcomes in Small and HIV-Coinfected Children in India: Recommendations for Dose Modifications. Clinical pharmacology and therapeutics 104(4):733–741 (2018).
  ·  DOI: [10.1002/cpt.987](https://doi.org/10.1002/cpt.987)

## Population and dosing

**Population:** Indian children aged 1-15 years with drug-sensitive tuberculosis · condition Tuberculosis monoinfection or TB-HIV coinfection · age group child · n = 161.

**Dosing:** 700, 1050 mg, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CLACE/F (L/h) | CL/F | 8.58 | L/h | 4.41 (None% RSE) |
| FREL–HIV (%) | Frel | 80.6 | % | 0.711 (None% RSE) |
| Ka reported among pediatric TB patients | kabs | 4.23 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — isoniazid: CL/F 8.58 L/h, Frel 80.6 %, kabs 4.23 h−1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CLACE/F (L/h) | `Q27` · CL/F | 8.58 | L/h | 2.383e-06 | m3/s | l/h | llm (0.6) | Guiastrennec_2018_table_S2:row20:col1 | 4.41 (None% RSE) |
| FREL–HIV (%) | `Q87` · Frel | 80.6 | % | 0.806 |  | % | llm_confirmed (0.6) | Guiastrennec_2018_table_S2:row21:col1 | 0.711 (None% RSE) |
| Ka reported among pediatric TB patients | `Q49` · kabs | 4.23 | h−1 | 0.001175 | 1/s | 1/h | review_gapfill (0.7) | Thomas_2022:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'KA (h-1)a' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'MTT (h)' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'NN' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'CL/F (L/h) b' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'VC/F (L) b' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'Correlation CL–VC (%)' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'Q/F (L/h) b' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'VP/F (L) b' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'Frel power' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'HIVFrel (%)' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'ACECL (%)' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'ACEFrel (%)' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'TM50 (weeks)c' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'Hillc' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'Add. Err (μg/mL)' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- table section iiv: 'Prop. Err (CV%)' routed out of structural estimates ('Parameters(units) Estimates (RSE%) BSV CV% (RSE%)')
- dropped duplicate Q87 ('FREL–ACE (%)', value '78.7') — already have one for this compound
- dropped value-less row: 'aDoses in mg/kg reported for the average total body weight of each weight band.'
- dropped value-less row: 'bDoses administered thrice‐weekly using single drug formulation.'
- dropped value-less row: 'cDoses administered once‐daily using fixed dose combination (FDC) tablets.'
- dropped value-less row: 'dReported as median and the 95% confidence interval (CI95) around the simulated medians (n = 1,000). Simulations performed using the developed population PK‐PD model.'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Isoniazid
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Thomas_2022's review values (primary lacked it)

**Extraction notes:**
- table Guiastrennec_2018_table_2: ambiguous_numeric_format
- table Guiastrennec_2018_table_2: units_need_context
- table Guiastrennec_2018_table_2: unparsed_numeric_cell
- table Guiastrennec_2018_table_S2: unknown_column_role
- table Guiastrennec_2018_table_S2: ragged_grid
- table Guiastrennec_2018_table_S2: unparsed_numeric_cell
- companion parameter table S2 transcribed (47 record(s))
- LLM selected parameter table(s) S2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Guiastrennec_2018_table_S2:row20:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thomas_2022:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.58 L/h | ['Guiastrennec_2018_table_S2:row20:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Guiastrennec2018_reference&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Guiastrennec2018_reference%0APaper%3A%20Guiastrennec_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Guiastrennec2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:04 UTC</sub>
