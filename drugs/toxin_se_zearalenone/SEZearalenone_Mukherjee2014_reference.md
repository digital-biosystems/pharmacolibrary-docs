<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;(S,E)-Zearalenone&quot;,&quot;href&quot;:&quot;drugs/toxin_se_zearalenone/&quot;},{&quot;label&quot;:&quot;Mukherjee_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# (S,E)-Zearalenone — `SEZearalenone_Mukherjee2014_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="(S,E)-Zearalenone" model-id="SEZearalenone_Mukherjee2014_reference" status="extracted" stale="false" population="rat; human" measured-compound="(S,E)-Zearalenone" parameterization="mechanistic" topology="retention"></div>

## Citation
Mukherjee D, Royce SG, Alexander JA, Buckley B, Isukapalli SS, Bandera EV et al. Physiologically-based toxicokinetic modeling of zearalenone and its metabolites: application to the Jersey girl study. PloS one 9(12):e113632 (2014).
  ·  DOI: [10.1371/journal.pone.0113632](https://doi.org/10.1371/journal.pone.0113632)

## Population and dosing

**Population:** rat; human · condition healthy · age group mixed.

**Dosing:** 12, 36 mg, other, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| K abs | kabs | 0.1545 | 1/h |
| K ex | kel | 0.0115 | 1/h |
| K f | kfm | 0.0016 | 1/h |
| K rel | koff | 0.0076 | 1/h |
| Vd | V | 6.4 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K abs | `Q49` · kabs | 0.1545 | 1/h | 4.292e-05 | 1/s | 1/h | space_fold (0.95) | pone-0113632-t001:row1:col2, pone-0113632-t001:row1:col3, pone-0113632-t001:row1:col4 |
| K ex | `Q47` · kel | 0.0115 | 1/h | 3.194e-06 | 1/s | 1/h | exact (1) | pone-0113632-t001:row2:col2, pone-0113632-t001:row2:col3, pone-0113632-t001:row2:col4 |
| K f | `Q305` · kfm | 0.0016 | 1/h | 4.444e-07 | 1/s | 1/h | space_fold (0.95) | pone-0113632-t001:row3:col2, pone-0113632-t001:row3:col3, pone-0113632-t001:row3:col4 |
| K rel | `Q330` · koff | 0.0076 | 1/h | 2.111e-06 | 1/s | 1/h | llm (0.6) | pone-0113632-t001:row4:col2, pone-0113632-t001:row4:col3, pone-0113632-t001:row4:col4 |
| Vd | `Q61` · V | 6.4 | L/kg | 0.448 | m3 | L | review_gapfill (0.7) | Buranatragool_2015:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- linked 'K ex' as 'kel' → Q47 (kel) for  — compound marker removed
- implicit units: 'K abs' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (K_abs). In population PK and PBTK modeling, first-order absorption rate co')
- implicit units: 'K ex' → 1/h (from the popPK convention: 'The parameter is an elimination rate constant (K_ex). First-order elimination rate constants are conventionally expresse')
- implicit units: 'K f' → 1/h (from the popPK convention: 'The parameter is a first-order rate constant governing metabolite formation. Such rate constants are conventionally expr')
- implicit units: 'K rel' → 1/h (from the popPK convention: 'The parameter is a first-order dissociation rate constant (k_off). Dissociation rate constants are conventionally expres')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=(S,E)-Zearalenone
- toxin: 11 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=pbpk; 4/4 row label(s) assigned, 9 linked by role
- molar mass: no plausible PubChem entry for 'Zearalanone' ('Zearalanone') — left in mass units
- molar mass: no plausible PubChem entry for 'beta-Zeranol' ('beta-Zeranol') — left in mass units
- molar mass: no plausible PubChem entry for 'Zearalenone glucuronide' ('Zearalenone glucuronide') — left in mass units
- molar mass: no plausible PubChem entry for 'alpha-Zearalenol glucuronide' ('alpha-Zearalenol glucuronide') — left in mass units
- molar mass: no plausible PubChem entry for 'beta-Zearalenol glucuronide' ('beta-Zearalenol glucuronide') — left in mass units
- molar mass: no plausible PubChem entry for 'Zeranol glucuronide' ('Zeranol glucuronide') — left in mass units
- molar mass: no plausible PubChem entry for 'Zearalanone glucuronide' ('Zearalanone glucuronide') — left in mass units
- molar mass: none found for 'Zearalanone' — its concentrations stay mass-only
- molar mass: none found for 'beta-Zeranol' — its concentrations stay mass-only
- molar mass: none found for 'Zearalenone glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'alpha-Zearalenol glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'beta-Zearalenol glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'Zeranol glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'Zearalanone glucuronide' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Buranatragool_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pone-0113632-t001: units_need_context

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['pone-0113632-t001:row3:col2', 'pone-0113632-t001:row3:col3', 'pone-0113632-t001:row3:col4'] |
| C5_dimension_Q330 | pass | 1 / [time] |  | ['pone-0113632-t001:row4:col2', 'pone-0113632-t001:row4:col3', 'pone-0113632-t001:row4:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pone-0113632-t001:row2:col2', 'pone-0113632-t001:row2:col3', 'pone-0113632-t001:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pone-0113632-t001:row1:col2', 'pone-0113632-t001:row1:col3', 'pone-0113632-t001:row1:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Buranatragool_2015:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 448 L | ['Buranatragool_2015:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bse_zearalenone%5D%20SEZearalenone_Mukherjee2014_reference&body=Drug%3A%20se_zearalenone%0ARecord%3A%20SEZearalenone_Mukherjee2014_reference%0APaper%3A%20Mukherjee_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_se_zearalenone/SEZearalenone_Mukherjee2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:01 UTC</sub>
