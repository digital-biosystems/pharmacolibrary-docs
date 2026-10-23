<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;atazanavir&quot;,&quot;href&quot;:&quot;drugs/drug_atazanavir/&quot;},{&quot;label&quot;:&quot;Punyawudho_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atazanavir_Goutelle2013_reference&quot;,&quot;label&quot;:&quot;Goutelle_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atazanavir — `Atazanavir_Punyawudho2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The atazanavir model was quarantined because clearance, volume of distribution, absorption rate constant and absorption lag time had no extracted values, so library placeholder values stood in for them.

<div class="pk-model-meta" hidden drug="atazanavir" model-id="Atazanavir_Punyawudho2017_reference" status="model_quarantined" stale="false" population="Thai HIV-infected patients" measured-compound="atazanavir" parameterization="apparent" topology="1C"></div>

## Citation
BaraleePunyawudho baralee.p@cmu.ac.th Department of Pharmaceutical Care Faculty of Pharmacy Chiang Mai University Chiang Mai 50200 Thailand, NarukjapornThammajaruk HIV-NAT Thai Red Cross AIDS Research Centre Bangkok Thailand, KiatRuxrungtham HIV-NAT Thai Red Cross AIDS Research Centre Bangkok Thailand Department of Medicine Faculty of Medicine Chulalongkorn University Bangkok Brisbane Thailand Australia, AnchaleeAvihingsanon HIV-NAT Thai Red Cross AIDS Research Centre Bangkok Thailand Department of Medicine Faculty of Medicine Chulalongkorn University Bangkok Brisbane Thailand Australia, Department of Pharmaceutical Care Faculty of Pharmacy Chiang Mai University Chiang Mai 50200 Thailand. Population pharmacokinetics and dose optimisation of ritonavirboosted atazanavir in Thai HIV-infected patients ☆ (2017).
  ·  DOI: [10.1016/j.ijantimicag.2016.11.019](https://doi.org/10.1016/j.ijantimicag.2016.11.019)

## Population and dosing

**Population:** Thai HIV-infected patients · condition HIV infection · age group adult · n = 127.

**Dosing:** 200, 300 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 28.7 | % |
| mean absorption rate constant (k a ) | kabs | 0.41 | h Ϫ1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The atazanavir model was quarantined because clearance, volume of distribution, absorption rate constant and absorption lag time had no extracted values, so library placeholder values stood in for them.**

The record reports CL/F for atazanavir as 28.7 with unit '%', a unit that could not be converted to SI, so the parameter arrived without an SI value. No value was available for atazanavir's clearance, volume of distribution, absorption rate constant and absorption lag time; the absorption rate constant was not reported in the source at all, so a placeholder number was used instead. The model also assumed F=1 and Fm=1 with no molar correction (apparent parameterization) and used first-order depot input for extravascular dosing. Extracted — atazanavir: CL/F 28.7 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl/f: this record has 28.7, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 28.7 | % |  |  | % | exact (1) | Punyawudho_2017:results_prose |
| mean absorption rate constant (k a ) | `Q49` · kabs | 0.41 | h Ϫ1 | 0.0001139 | 1/s | 1/h | review_gapfill (0.7) | Goutelle_2013:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q27 ('CL/F'=28.7) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atazanavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Goutelle_2013's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row2:col1 = '4.93 (4.42-5.44)'
- unparsed cell tab_1:row2:col2 = '4.93 (4.41-5.52)'
- unparsed cell tab_1:row3:col1 = '0.287 (0.14-0.43)'
- unparsed cell tab_1:row3:col2 = '0.29 (0.14-0.45)'
- unparsed cell tab_1:row4:col1 = '64.5 (56.2-72.4)'
- unparsed cell tab_1:row4:col2 = '64.2 (56.3-78.3)'
- unparsed cell tab_1:row5:col1 = '0.39 (0.014-0.77) 0.39 (0.01-1.01)'
- unparsed cell tab_1:row6:col1 = '3.15 (1.52-4.78)'
- unparsed cell tab_1:row6:col2 = '3.54 (1.69-21.9)'
- unparsed cell tab_1:row7:col1 = '0.74 (0.73-0.75)'
- unparsed cell tab_1:row7:col2 = '0.74 (0.57-0.97)'
- unparsed cell tab_1:row8:col1 = '26.4 (20.9-30.9)'
- unparsed cell tab_1:row8:col2 = '26.1 (21-33.8)'
- unparsed cell tab_1:row9:col1 = '7.8 (1.18-16.12)'
- unparsed cell tab_1:row9:col2 = '6.6 (5.0-34.1)'
- unparsed cell tab_1:row10:col1 = '41.8 (37.54-45.73) 41.2 (37-45.5)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f of atv]` |  | 4.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 28.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean absorption rate constant]` | 0.41 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Goutelle_2013:review'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | % | ['Punyawudho_2017:results_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batazanavir%5D%20Atazanavir_Punyawudho2017_reference&body=Drug%3A%20atazanavir%0ARecord%3A%20Atazanavir_Punyawudho2017_reference%0APaper%3A%20Punyawudho_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atazanavir/Atazanavir_Punyawudho2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-07-22 11:46 UTC</sub>
