<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Kozielska_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Kozielska2012_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Risperidone bioavailability, clearance, and absorption lag time defaulted; paliperidone peripheral volumes were not emitted, causing a parameter coverage failure.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Kozielska2012_reference" status="model_quarantined" stale="false" population="Rats" measured-compound="Risperidone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kozielska M, Johnson M, Pilla Reddy V, Vermeulen A, Li C, Grimwood S et al. Pharmacokinetic-pharmacodynamic modeling of the D₂ and 5-HT (2A) receptor occupancy of risperidone and paliperidone in rats. Pharmaceutical research 29(7):1932-1948 (2012).
  ·  DOI: [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8)

## Population and dosing

**Population:** Rats · condition healthy · age group adult.

**Dosing:** 0.7, 2800 mg, other, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| FSC | Fab | 0.816 |  | 9 |
| FrFPM | fm | 0.268 |  | 12 |
| KaSC-RIS (1/h) | kabs | 2.84 | 1/h | 20 |
| KaSC-PALI (1/h) | kabs | 1.31 | 1/h | 22 |
| DRSC-RIS (h) | tlag | 0.161 | h | 55 |
| DRSC-PALI (h) | tlag | 0.162 | h | 54 |
| Vc-RIS (L/kg) | V1 | 1.29 | L/kg | 6 |
| CLRIS (L/h/kg) | CLnorm | 1.62 | L/h/kg | 9 |
| CLmet (L/h/kg) | CLfm | 0.775 | L/h/kg | 11 |
| Vp-RIS (L/kg) | V2 | 0.169 | L/kg | 16 |
| QRIS (L/h/kg) | Q | 0.0882 | L/h/kg | 25 |
| Vc-PALI (L/kg) | V1 | 1.27 | L/kg | 15 |
| CLPALI (L/h/kg) | CL | 1.06 | L/h/kg | 10 |
| Vp-PALI (L/kg) | V2 | 0.251 | L/kg | 54 |
| QPALI (L/h/kg) | Q | 0.269 | L/h/kg | 128 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Risperidone bioavailability, clearance, and absorption lag time defaulted; paliperidone peripheral volumes were not emitted, causing a parameter coverage failure.**

The model builder substituted library placeholders for risperidone's bioavailability, clearance, and absorption lag time instead of using extracted values. Additionally, the check for parameter coverage found only 9 of the expected 11 parameters, with two peripheral volumes of distribution for Paliperidone neither emitted nor explicitly defaulted. These missing or fabricated key parameters, combined with the failure to match the required parent-metabolite topology, prevented publication. Extracted — risperidone: Fab 0.816, kabs 2.84 1/h, tlag 0.161 h, V1 1.29 L/kg, CLnorm 1.62 L/h/kg, V2 0.169 L/kg, Q 0.0882 L/h/kg; Paliperidone: fm 0.268, kabs 1.31 1/h, tlag 0.162 h, CLfm 0.775 L/h/kg, V1 1.27 L/kg, CL 1.06 L/h/kg, V2 0.251 L/kg, Q 0.269 L/h/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| FSC | `Q40` · Fab | 0.816 |  | 0.816 |  |  | 9 | route_fold (0.9) | Tab2:row2:col1 |
| FrFPM | `Q45` · fm | 0.268 |  | 0.268 |  |  | 12 | exact (1) | Tab2:row3:col1 |
| KaSC-RIS (1/h) | `Q49` · kabs | 2.84 | 1/h | 0.0007889 | 1/s | 1/h | 20 | exact (1) | Tab2:row4:col1 |
| KaSC-PALI (1/h) | `Q49` · kabs | 1.31 | 1/h | 0.0003639 | 1/s | 1/h | 22 | exact (1) | Tab2:row5:col1 |
| DRSC-RIS (h) | `Q83` · tlag | 0.161 | h | 579.6 | s | h | 55 | exact (1) | Tab2:row6:col1 |
| DRSC-PALI (h) | `Q83` · tlag | 0.162 | h | 583.2 | s | h | 54 | exact (1) | Tab2:row7:col1 |
| Vc-RIS (L/kg) | `Q63` · V1 | 1.29 | L/kg | 0.0903 | m3 | l/kg | 6 | llm_confirmed (0.6) | Tab2:row8:col1 |
| CLRIS (L/h/kg) | `Q354` · CLnorm | 1.62 | L/h/kg | 3.15e-05 | m3/s | l/(h·kg) | 9 | llm (0.6) | Tab2:row9:col1 |
| CLmet (L/h/kg) | `Q370` · CLfm | 0.775 | L/h/kg | 1.507e-05 | m3/s | l/(h·kg) | 11 | exact (1) | Tab2:row10:col1 |
| Vp-RIS (L/kg) | `Q64` · V2 | 0.169 | L/kg | 0.01183 | m3 | l/kg | 16 | llm_confirmed (0.6) | Tab2:row11:col1 |
| QRIS (L/h/kg) | `Q30` · Q | 0.0882 | L/h/kg | 1.715e-06 | m3/s | l/(h·kg) | 25 | exact (1) | Tab2:row12:col1 |
| Vc-PALI (L/kg) | `Q63` · V1 | 1.27 | L/kg | 0.0889 | m3 | l/kg | 15 | exact (1) | Tab2:row13:col1 |
| CLPALI (L/h/kg) | `Q22` · CL | 1.06 | L/h/kg | 2.061e-05 | m3/s | l/(h·kg) | 10 | exact (1) | Tab2:row14:col1 |
| Vp-PALI (L/kg) | `Q64` · V2 | 0.251 | L/kg | 0.01757 | m3 | l/kg | 54 | exact (1) | Tab2:row15:col1 |
| QPALI (L/h/kg) | `Q30` · Q | 0.269 | L/h/kg | 5.231e-06 | m3/s | l/(h·kg) | 128 | exact (1) | Tab2:row16:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 21 row(s) → Paliperidone (m_suffix 3, name 18)
- table section iiv: 'IIV-FIP (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-KaSC-RIS (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-KaSC-PALI (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-DRSC-RIS (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-CLRIS (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-CLPALI (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'Risperidone' routed out of structural estimates ('Proportional residual error')
- table section residual_error: 'Paliperidone' routed out of structural estimates ('Proportional residual error')
- dropped unlinked row (NIL): 'FIP-RIS' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1'])
- linked 'DRSC-RIS (h)' as 'Tlag' → Q83 (tlag) for  — compound marker removed
- linked 'QRIS (L/h/kg)' as 'Q' → Q30 (Q) for  — compound marker removed
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Risperidone
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site presystemic: 'A fraction of the absorbed dose for IP RIS route of administration goes directly to the RIS central compartment and a fr')
- row roles (LLM): model_class=pbpk; 24/24 row label(s) assigned, 14 linked by role; re-tagged parent→Paliperidone ×9

**Extraction notes:**
- table Tab2: unbound_uncertainty
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 5 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row14:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row12:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row16:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tab2:row9:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tab2:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row13:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row11:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row15:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row6:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.06 | ['Tab2:row14:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 74.2 L/h | ['Tab2:row14:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 90.3 L | ['Tab2:row8:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 88.9 L | ['Tab2:row13:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 11.8 L | ['Tab2:row11:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 17.6 L | ['Tab2:row15:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | fail | 11 scholar param(s) emitted or defaulted | 9 covered | neither emitted nor in defaulted[]: ['V2', 'V2'] |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_matlab.zip" download>Risperidone_Kozielska2012_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_matlab_simbio.zip" download>Risperidone_Kozielska2012_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_sbml.zip" download>Risperidone_Kozielska2012_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_cellml.zip" download>Risperidone_Kozielska2012_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Kozielska M, Johnson M, Pilla Reddy V, Vermeulen A, Li C, Grimwood S et al. Pharmacokinetic-pharmacodynamic modeling of the D₂ and 5-HT (2A) receptor occupancy of risperidone and paliperidone in rats. Pharmaceutical research 29(7):1932-1948 (2012). [doi:10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8)

**This record:** Pharmacolibrary, model `Risperidone_Kozielska2012_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_risperidone/Risperidone_Kozielska2012_reference>

```bibtex
@misc{pharmacolibrary_RisperidoneKozielska2012reference,
  title  = {{Pharmacolibrary model Risperidone_Kozielska2012_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_risperidone/Risperidone_Kozielska2012_reference},
  note   = {Parameters from doi:10.1007/s11095-012-0722-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Kozielska2012_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Kozielska2012_reference%0APaper%3A%20Kozielska_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Kozielska2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
