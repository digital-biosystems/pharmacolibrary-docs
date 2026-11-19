<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mitomycin&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/&quot;},{&quot;label&quot;:&quot;Kuzuya_1994 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitomycin_Buice1984_reference&quot;,&quot;label&quot;:&quot;Buice_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Buice1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Dorr1988_reference&quot;,&quot;label&quot;:&quot;Dorr_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Dorr1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Erlichman1987_reference&quot;,&quot;label&quot;:&quot;Erlichman_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Erlichman1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Imai1982_reference&quot;,&quot;label&quot;:&quot;Imai_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Imai1982_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Sui2025_reference&quot;,&quot;label&quot;:&quot;Sui_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Sui2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Yang2019_reference&quot;,&quot;label&quot;:&quot;Yang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Yang2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Prasad2025_geometric_mean&quot;,&quot;label&quot;:&quot;Prasad_2025_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Prasad2025_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Prasad_2025_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mitomycin — `Mitomycin_Kuzuya1994_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Mitomycin elimination clearance lacks a value; the model was quarantined because a library placeholder replaced this critical parameter.

<div class="pk-model-meta" hidden drug="Mitomycin" model-id="Mitomycin_Kuzuya1994_reference" status="model_quarantined" stale="false" population="Eight patients with malignancies confined to the peritoneal space" measured-compound="Mitomycin C" parameterization="apparent" topology="general_linear"></div>

## Citation
Kuzuya T, Yamauchi M, Ito A, Hasegawa M, Hasegawa T, Nabeshima T. Pharmacokinetic characteristics of 5-fluorouracil and mitomycin C in intraperitoneal chemotherapy. The Journal of pharmacy and pharmacology 46(8):685–689 (1994).
  ·  DOI: [10.1111/j.2042-7158.1994.tb03883.x](https://doi.org/10.1111/j.2042-7158.1994.tb03883.x)

## Population and dosing

**Population:** Eight patients with malignancies confined to the peritoneal space · condition malignancies confined to the peritoneal space · age group adult · n = 8.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ratio of peritoneal fluid AUC to serum AUC | AUC ratio | 1400 |  |
| half-life in the peritoneal fluid (t1/2p) | t1/2z | 1.0 | h |
| rate constant from the peritoneal fluid to the systemic circulation (ka) | kabs | 0.71 | h-1 |
| apparent volume of distribution (Vds/F) | V/F | 78 | L |
| clearance in the peritoneal cavity (CLp) | CL_PD | 1.8 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Mitomycin elimination clearance lacks a value; the model was quarantined because a library placeholder replaced this critical parameter.**

The record contains no estimate for mitomycin elimination clearance, forcing the use of a default placeholder instead of a fitted value. Additionally, the model relies on abstract-reported statistics rather than fitted parameters, introducing uncertainty about bioavailability assumptions. Extracted — mitomycin: AUC ratio 1.4e+03, t1/2z 1 h, kabs 0.71 h-1, V/F 78 L, CL_PD 1.8 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ratio of peritoneal fluid AUC to serum AUC | `Q21` · AUC ratio | 1400 |  | 1400 |  |  | llm_corrected (0.6) | Kuzuya_1994:abstract, Kuzuya_1994:abstract |
| half-life in the peritoneal fluid (t1/2p) | `Q57` · t1/2z | 1.0 | h | 3600 | s | h | toxin_unit_relink (0.85) | Kuzuya_1994:abstract, Kuzuya_1994:abstract |
| rate constant from the peritoneal fluid to the systemic circulation (ka) | `Q49` · kabs | 0.71 | h-1 | 0.0001972 | 1/s | 1/h | llm (0.6) | Kuzuya_1994:abstract, Kuzuya_1994:abstract |
| apparent volume of distribution (Vds/F) | `Q76` · V/F | 78 | L | 0.078 | m3 | L | exact (1) | Kuzuya_1994:abstract, Kuzuya_1994:abstract |
| clearance in the peritoneal cavity (CLp) | `Q358` · CL_PD | 1.8 | L/h | 5e-07 | m3/s | L/h | llm_corrected (0.6) | Kuzuya_1994:abstract, Kuzuya_1994:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- relinked 'half-life in the peritoneal fluid (t1/2p)' Q100 → Q57: a half-life by its label (the unit decides, not the label)
- unit_dimension_unknown: 'L m-2' (V/F)
- unit_dimension_unknown: 'L h-1 m-2' (CL_PD)
- implicit units: 'apparent volume of distribution (Vds/F)' → L (from the popPK convention: 'No unit stated in the provided text. For population pharmacokinetics, apparent volume of distribution (V/F) is conventio')
- implicit units: 'clearance in the peritoneal cavity (CLp)' → L/h (from the popPK convention: 'No unit stated in the provided text. Clearance parameters (CL) in population PK are conventionally expressed in L/h. A v')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Mitomycin C
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kuzuya_1994_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q358 | pass | [length] ** 3 / [time] |  | ['Kuzuya_1994:abstract', 'Kuzuya_1994:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kuzuya_1994:abstract', 'Kuzuya_1994:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kuzuya_1994:abstract', 'Kuzuya_1994:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kuzuya_1994:abstract', 'Kuzuya_1994:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 78 L | ['Kuzuya_1994:abstract', 'Kuzuya_1994:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | ka 0.68 h-1 (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitomycin%5D%20Mitomycin_Kuzuya1994_reference&body=Drug%3A%20mitomycin%0ARecord%3A%20Mitomycin_Kuzuya1994_reference%0APaper%3A%20Kuzuya_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mitomycin/Mitomycin_Kuzuya1994_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 11:28 UTC</sub>
