<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Citrinin&quot;,&quot;href&quot;:&quot;drugs/toxin_citrinin/&quot;},{&quot;label&quot;:&quot;Visintin_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citrinin_Meerpoel2020_reference&quot;,&quot;label&quot;:&quot;Meerpoel_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citrinin/Citrinin_Meerpoel2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Citrinin — `Citrinin_Visintin2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Citrinin" model-id="Citrinin_Visintin2025_reference" status="needs_review" stale="false" population="human volunteers" measured-compound="Citrinin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Visintin L, Martino C, De Saeger S, Alladio E, De Boevre M, Chiu WA. Derivation of Human Toxicokinetic Parameters and Chemical-Specific Adjustment Factor of Citrinin Through a Human Intervention Trial and Hierarchical Bayesian Population Modeling. Toxins 17(8) (2025).
  ·  DOI: [10.3390/toxins17080382](https://doi.org/10.3390/toxins17080382)

## Population and dosing

**Population:** human volunteers · condition healthy · age group adult · n = 10.

**Dosing:** 5 mg, other, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 | t1/2z | 9.33 | h |
| kel | kel | 0.074 | h−1 |
| Tmax * | tmax | 0.63 | h |
| Cmax * | Cmax | 0.28 | ng/mL |
| Cltot | CL | 0.025 | L/h/kg |
| Clmet | CLfm | 0.033 | h·kg bw |
| Vdist | V | 0.330 | L/kg bw |
| Vdistmet | V | 0.836 | L/kg bw |
| Fgutabs | FG | 0.246 | - |
| DON-3-GlcA Mean t R ± SD [min]c | tlag | 4.55 | min |

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
| t1/2 | `Q57` · t1/2z | 9.33 | h | 3.359e+04 | s | h | toxin_unit_relink (0.85) | toxins-17-00382-t003:row2:col3, toxins-17-00382-t003:row2:col4 |
| kel | `Q47` · kel | 0.074 | h−1 | 2.056e-05 | 1/s | 1/h | exact (1) | toxins-17-00382-t003:row3:col3, toxins-17-00382-t003:row3:col4 |
| Tmax * | `Q56` · tmax | 0.63 | h | 2268 | s | h | llm_confirmed (0.6) | toxins-17-00382-t003:row4:col3, toxins-17-00382-t003:row4:col4 |
| Cmax * | `Q32` · Cmax | 0.28 | ng/mL | 2.8e-07 | kg/m3 | ng/ml | llm_confirmed (0.6) | toxins-17-00382-t003:row5:col3, toxins-17-00382-t003:row5:col4 |
| Cltot | `Q22` · CL | 0.025 | L/h/kg | 4.861e-07 | m3/s | L/h | exact (1) | toxins-17-00382-t003:row7:col3, toxins-17-00382-t003:row7:col4 |
| Clmet | `Q370` · CLfm | 0.033 | h·kg bw |  |  | h·kg·bw | exact (1) | toxins-17-00382-t003:row8:col3, toxins-17-00382-t003:row8:col4 |
| Vdist | `Q61` · V | 0.330 | L/kg bw |  |  | l/(kg·bw) | llm (0.6) | toxins-17-00382-t003:row9:col3, toxins-17-00382-t003:row9:col4 |
| Vdistmet | `Q61` · V | 0.836 | L/kg bw |  |  | l/(kg·bw) | exact (1) | toxins-17-00382-t003:row10:col3, toxins-17-00382-t003:row10:col4 |
| Fgutabs | `Q41` · FG | 0.246 | - | 0.246 |  | - | llm (0.6) | toxins-17-00382-t003:row11:col3, toxins-17-00382-t003:row11:col4 |
| DON-3-GlcA Mean t R ± SD [min]c | `Q83` · tlag | 4.55 | min | 273 | s | h | review_gapfill (0.7) | Osteresch_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- relinked 't1/2' Q47 → Q57: a half-life by its label (the unit decides, not the label)
- dropped unlinked row (NIL): 'AUC **' — extend the ontology if this is a real PK parameter (source ['toxins-17-00382-t003:row6:col3', 'toxins-17-00382-t003:row6:col4'])
- unit_dimension_unknown: 'h·kg bw' (CL)
- unit_dimension_unknown: 'h·kg bw' (CLfm)
- unit_dimension_unknown: 'L/kg bw' (V)
- unit_dimension_unknown: 'L/kg bw' (V1)
- unit_dimension_unknown: '-' (FG)
- linked 'kgutelim' as 'kel' → Q47 (kel) for  — compound marker removed
- dropped duplicate Q47 ('kgutelim', value '4.141') — already have one for this compound
- dropped unlinked row (NIL): 'kufrac' — extend the ontology if this is a real PK parameter (source ['toxins-17-00382-t003:row13:col3', 'toxins-17-00382-t003:row13:col4'])
- implicit units: 'Cltot' → L/h/kg (from the paper text: "The text states: 'All elimination rates are expressed in h−1 and volume of distribution in L/kg.' While clearance units ")
- metabolite volume: 'Vdistmet' Q63→Q61 for dihydrocitrinin (HO-CIT) — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Citrinin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 14 linked by role; re-tagged parent→dihydrocitrinin (HO-CIT) ×4
- molar mass: no plausible PubChem entry for 'dihydrocitrinin (HO-CIT)' ('no full name in the paper') — left in mass units
- molar mass: none found for 'dihydrocitrinin (HO-CIT)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Osteresch_2017's review values (primary lacked it)

**Extraction notes:**
- table toxins-17-00382-t003: unbound_uncertainty
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['toxins-17-00382-t003:row7:col3', 'toxins-17-00382-t003:row7:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['toxins-17-00382-t003:row5:col3', 'toxins-17-00382-t003:row5:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['toxins-17-00382-t003:row3:col3', 'toxins-17-00382-t003:row3:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['toxins-17-00382-t003:row4:col3', 'toxins-17-00382-t003:row4:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['toxins-17-00382-t003:row2:col3', 'toxins-17-00382-t003:row2:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Osteresch_2017:review'] |
| C5_unit_missing_Q370 | fail | [length] ** 3 / [time] | h·kg bw | ['toxins-17-00382-t003:row8:col3', 'toxins-17-00382-t003:row8:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | L/kg bw | ['toxins-17-00382-t003:row9:col3', 'toxins-17-00382-t003:row9:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | L/kg bw | ['toxins-17-00382-t003:row10:col3', 'toxins-17-00382-t003:row10:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.025 | ['toxins-17-00382-t003:row7:col3', 'toxins-17-00382-t003:row7:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.75 L/h | ['toxins-17-00382-t003:row7:col3', 'toxins-17-00382-t003:row7:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitrinin%5D%20Citrinin_Visintin2025_reference&body=Drug%3A%20citrinin%0ARecord%3A%20Citrinin_Visintin2025_reference%0APaper%3A%20Visintin_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_citrinin/Citrinin_Visintin2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 19:10 UTC</sub>
