<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Yunivita_2024 \u00b7 delayed_culture_conversion&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Yunivita2024_delayed_culture_conversion`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Yunivita2024_delayed_culture_conversion" status="needs_review" stale="false" population="Indonesian adults aged 18-65 years treated for pulmonary RR/MDR-TB" measured-compound="Isoniazid" parameterization="mechanistic" topology="retention"></div>

## Citation
Yunivita V, Gafar F, Santoso P, Chaidir L, Soeroto AY, Meirina TN et al. Pharmacokinetics and pharmacodynamics of high-dose isoniazid for the treatment of rifampicin- or multidrug-resistant tuberculosis in Indonesia. The Journal of antimicrobial chemotherapy 79(5):977–986 (2024).
  ·  DOI: [10.1093/jac/dkae057](https://doi.org/10.1093/jac/dkae057)

## Population and dosing

**Population:** Indonesian adults aged 18-65 years treated for pulmonary RR/MDR-TB · condition pulmonary rifampicin-/multidrug-resistant tuberculosis · age group adult · n = 40.

**Dosing:** 700, 1050 mg, oral, multiple, every 24 h.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Log AUC0–24, h·mg/L | AUC | 3.0 | h·mg/L |
| Log Cmax, mg/L | Cmax | 1.9 | mg/L |
| overall estimates of isoniazid Cmax (Indonesian DS-TB patients) | t1/2z | 4.5 | mg/L |
| typical CL | CL | 8.82 | L/h |
| typical V | V | 56.8 | L |
| Ka reported among pediatric TB patients | kabs | 4.23 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Log AUC0–24, h·mg/L | `Q88` · AUC | 3.0 | h·mg/L | 10.8 | kg*s/m3 | (h·mg)/l | llm (0.6) | dkae057-T4:row2:col1 |
| Log Cmax, mg/L | `Q32` · Cmax | 1.9 | mg/L | 0.0019 | kg/m3 | mg/l | llm_confirmed (0.6) | dkae057-T4:row8:col1 |
| overall estimates of isoniazid Cmax (Indonesian DS-TB patients) | `Q57` · t1/2z | 4.5 | mg/L |  |  | mg/L | toxin_unit_relink (0.85) | Yunivita_2024:other_prose |
| typical CL | `Q22` · CL | 8.82 | L/h | 2.45e-06 | m3/s | L/h | review_gapfill (0.7) | Abdelgawad_2022:review |
| typical V | `Q61` · V | 56.8 | L | 0.0568 | m3 | L | review_gapfill (0.7) | Abdelgawad_2022:review |
| Ka reported among pediatric TB patients | `Q49` · kabs | 4.23 | h−1 | 0.001175 | 1/s | 1/h | review_gapfill (0.7) | Thomas_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Log AUC0–24, h·mg/L'; source reconciliation required
- table representations disagree for 'Age, years'; source reconciliation required
- table representations disagree for 'Bedaquiline-containing regimen'; source reconciliation required
- table representations disagree for 'Kanamycin-containing regimen'; source reconciliation required
- table representations disagree for 'Log Cmax, mg/L'; source reconciliation required
- dropped unlinked row (NIL): 'Age, years' — extend the ontology if this is a real PK parameter (source ['dkae057-T4:row3:col1', 'dkae057-T4:row9:col1'])
- dropped unlinked row (NIL): 'Bedaquiline-containing regimen' — extend the ontology if this is a real PK parameter (source ['dkae057-T4:row5:col1', 'dkae057-T4:row11:col1'])
- dropped unlinked row (NIL): 'Kanamycin-containing regimen' — extend the ontology if this is a real PK parameter (source ['dkae057-T4:row6:col1', 'dkae057-T4:row12:col1'])
- NIL: refused to back-fill base 'AUC' from footnote/prose loose number 0.117 (source ['dkae057-T4:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.546 (source ['dkae057-T4:footnote']); the table cell was unparseable — needs review
- 'Area under the receiver operating characteristic (ROC) curves: AUC0–24 model': unit 'AUC' is a parameter symbol — dropped
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.855 (source ['dkae057-T4:footnote']); the table cell was unparseable — needs review
- 'Area under the receiver operating characteristic (ROC) curves: Cmax model': unit 'AUC' is a parameter symbol — dropped
- NIL: refused to back-fill base 'Cmax' from footnote/prose loose number 0.789 (source ['dkae057-T4:footnote']); the table cell was unparseable — needs review
- salvaged Q57 ('overall estimates of isoniazid Cmax (Indonesian DS-TB patients)'=4.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Isoniazid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'delayed culture conversion (n = 11)' subgroup of Yunivita_2024 (paper reports 4 populations: acetylator phenotypea / non-slow (n = 25), acetylator phenotypea / slow (n = 14), delayed culture conversion (n = 11), no delayed culture conversion (n = 22))
- gap-filled Q22 (CL) from Abdelgawad_2022's review values (primary lacked it)
- gap-filled Q61 (V) from Abdelgawad_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Thomas_2022's review values (primary lacked it)

**Extraction notes:**
- table dkae057-T4: unparsed_numeric_cell
- table dkae057-T4: representations disagree; selected evidence retained, not merged
- table Yunivita_2024_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (18 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Abdelgawad_2022:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['dkae057-T4:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thomas_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Abdelgawad_2022:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['dkae057-T4:row2:col1'] |
| C5_unit_missing_Q57 | fail | [time] | mg/L | ['Yunivita_2024:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.82 | ['Abdelgawad_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.82 L/h | ['Abdelgawad_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 56.8 L | ['Abdelgawad_2022:review'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Yunivita2024_delayed_culture_conversion/Isoniazid_Yunivita2024_delayed_culture_conversion_matlab.zip" download>Isoniazid_Yunivita2024_delayed_culture_conversion_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Yunivita2024_delayed_culture_conversion/Isoniazid_Yunivita2024_delayed_culture_conversion_sbml.zip" download>Isoniazid_Yunivita2024_delayed_culture_conversion_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Yunivita2024_delayed_culture_conversion/Isoniazid_Yunivita2024_delayed_culture_conversion_cellml.zip" download>Isoniazid_Yunivita2024_delayed_culture_conversion_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Yunivita V, Gafar F, Santoso P, Chaidir L, Soeroto AY, Meirina TN et al. Pharmacokinetics and pharmacodynamics of high-dose isoniazid for the treatment of rifampicin- or multidrug-resistant tuberculosis in Indonesia. The Journal of antimicrobial chemotherapy 79(5):977–986 (2024). [doi:10.1093/jac/dkae057](https://doi.org/10.1093/jac/dkae057)

**This record:** Pharmacolibrary, model `Isoniazid_Yunivita2024_delayed_culture_conversion`. <https://pharmacolibrary.github.io/#/drugs/toxin_isoniazid/Isoniazid_Yunivita2024_delayed_culture_conversion>

```bibtex
@misc{pharmacolibrary_IsoniazidYunivita2024delayedcultureconversion,
  title  = {{Pharmacolibrary model Isoniazid_Yunivita2024_delayed_culture_conversion}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_isoniazid/Isoniazid_Yunivita2024_delayed_culture_conversion},
  note   = {Parameters from doi:10.1093/jac/dkae057},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Yunivita2024_delayed_culture_conversion&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Yunivita2024_delayed_culture_conversion%0APaper%3A%20Yunivita_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Yunivita2024_delayed_culture_conversion%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:04 UTC</sub>
