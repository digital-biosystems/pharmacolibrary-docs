<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;beta-Zearalenol&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_zearalenol/&quot;},{&quot;label&quot;:&quot;Qin_2026 \u00b7 z14g&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BetaZearalenol_Qin2026_reference&quot;,&quot;label&quot;:&quot;Qin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_zearalenol/BetaZearalenol_Qin2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# beta-Zearalenol — `BetaZearalenol_Qin2026_z14g`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="beta-Zearalenol" model-id="BetaZearalenol_Qin2026_z14g" status="rejected" stale="false" population="male sheep" measured-compound="beta-Zearalenol (beta-ZOL)" parameterization="apparent" topology="general_linear"></div>

## Citation
Qin J, Zhang Q, Ren N, Su Z, Zheng Z, Yin T et al. Toxicokinetics, Biotransformation, Excretion, and Tissue Residue of Zearalenone-14-Glucoside in Male Sheep. Toxins 18(9) (2026).
  ·  DOI: [10.3390/toxins18090364](https://doi.org/10.3390/toxins18090364)

## Population and dosing

**Population:** male sheep · condition acute oral exposure · age group adult · n = 5.

**Dosing:** 140 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Zearalenone-14-glucoside (Z14G), measured beta-Zearalenol (beta-ZOL).

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax | tmax | 0.50 | h |
| Cmax | Cmax | 2.15 | ng·mL−1 |
| T1/2Elim | t1/2z | 0.94 | h |
| AUClast | AUClast | 3.10 | ng·mL−1·h |
| AUCINF | AUC∞ | 3.42 | ng·mL−1·h |
| AUC_%Extrap | AUC%ext | 12.20 |  |
| MRTINF | MRT | 2.68 | h |
| Cl_F | CLm/F | 412.12 | L·kg−1·h−1 |
| Vz/F | Vm/F | 1037.13 | L·kg−1 |
| AUC(0–72h) | AUC | 38.81 | ng·h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax | `Q56` · tmax | 0.50 | h | 1800 | s | h | exact (1) | toxins-18-00364-t002:row2:col4, Qin_2026_table_3:row0:col6, toxins-18-00364-t002:footnote |
| Cmax | `Q32` · Cmax | 2.15 | ng·mL−1 | 2.15e-06 | kg/m3 | ng/ml | exact (1) | toxins-18-00364-t002:row3:col4, Qin_2026_table_3:row1:col6, toxins-18-00364-t002:footnote |
| T1/2Elim | `Q57` · t1/2z | 0.94 | h | 3384 | s | h | half_life_rule (0.95) | toxins-18-00364-t002:row4:col4, toxins-18-00364-t002:footnote |
| AUClast | `Q74` · AUClast | 3.10 | ng·mL−1·h | 0.01116 | kg*s/m3 | ng/(h·ml) | exact (1) | toxins-18-00364-t002:row5:col4, toxins-18-00364-t002:footnote |
| AUCINF | `Q17` · AUC∞ | 3.42 | ng·mL−1·h | 0.01231 | kg*s/m3 | ng/(h·ml) | exact (1) | toxins-18-00364-t002:row6:col4, toxins-18-00364-t002:footnote |
| AUC_%Extrap | `Q84` · AUC%ext | 12.20 |  | 12.2 |  |  | llm (0.6) | toxins-18-00364-t002:row7:col4, toxins-18-00364-t002:footnote |
| MRTINF | `Q53` · MRT | 2.68 | h | 9648 | s | h | exact (1) | toxins-18-00364-t002:row8:col4, toxins-18-00364-t002:footnote |
| Cl_F | `Q351` · CLm/F | 412.12 | L·kg−1·h−1 | 0.008013 | m3/s | l/(h·kg) | llm (0.6) | toxins-18-00364-t002:row9:col4, toxins-18-00364-t002:footnote |
| Vz/F | `Q367` · Vm/F | 1037.13 | L·kg−1 | 72.6 | m3 | l/kg | exact (1) | toxins-18-00364-t002:row10:col4, toxins-18-00364-t002:footnote |
| AUC(0–72h) | `Q88` · AUC | 38.81 | ng·h/mL |  |  | ng·h/mL | exact (1) | Qin_2026_table_3:row2:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'AUC(0–72h)': [{'unit': 'ng·mL−1·h', 'source': 'Qin_2026_table_3:row2:col1', 'scope': 'unit_column'}, {'unit': '0–72h', 'source': 'Qin_2026_table_3:row2:col0', 'scope': 'label'}]
- dropped unlinked row (NIL): 'Oral dose of Z14G' — extend the ontology if this is a real PK parameter (source ['toxins-18-00364-t002:row1:col4'])
- implicit units: 'AUC(0–72h)' → ng·h/mL (from the popPK convention: "The paper defines AUC as 'area under the curve from time zero to the last measurable time point' but does not specify th")
- metabolite beta-zearalenol (beta-zol): Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite beta-zearalenol (beta-zol): Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=beta-Zearalenol (beta-ZOL)
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'z14g' subgroup of Qin_2026 (paper reports 3 populations: z14g, β-zal, β-zol)
- row roles (LLM): model_class=noncompartmental; 15/15 row label(s) assigned, 0 linked by role; re-tagged parent→beta-Zearalenol (beta-ZOL) ×37, parent→Zearalenone (ZEN) ×17
- molar mass: no plausible PubChem entry for 'Zearalenone-14-glucoside (Z14G)' ('Zearalenone-14-glucoside') — left in mass units
- molar mass: none found for 'Zearalenone-14-glucoside (Z14G)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table Qin_2026_table_3: conflicting_units
- companion parameter table 3 transcribed (27 record(s))
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['toxins-18-00364-t002:row6:col4', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['toxins-18-00364-t002:row3:col4', 'Qin_2026_table_3:row1:col6', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['toxins-18-00364-t002:row9:col4', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['toxins-18-00364-t002:row10:col4', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q53 | pass | [time] |  | ['toxins-18-00364-t002:row8:col4', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q56 | pass | [time] |  | ['toxins-18-00364-t002:row2:col4', 'Qin_2026_table_3:row0:col6', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q57 | pass | [time] |  | ['toxins-18-00364-t002:row4:col4', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['toxins-18-00364-t002:row5:col4', 'toxins-18-00364-t002:footnote'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Qin_2026_table_3:row2:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbeta_zearalenol%5D%20BetaZearalenol_Qin2026_z14g&body=Drug%3A%20beta_zearalenol%0ARecord%3A%20BetaZearalenol_Qin2026_z14g%0APaper%3A%20Qin_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_beta_zearalenol/BetaZearalenol_Qin2026_z14g%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 17:41 UTC</sub>
