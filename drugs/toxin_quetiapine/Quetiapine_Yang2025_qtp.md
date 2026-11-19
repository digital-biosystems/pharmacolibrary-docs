<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Quetiapine&quot;,&quot;href&quot;:&quot;drugs/toxin_quetiapine/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 qtp&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quetiapine_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quetiapine/Quetiapine_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Chen2024v2_reference&quot;,&quot;label&quot;:&quot;Chen_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quetiapine/Quetiapine_Chen2024v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quetiapine/Quetiapine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Fukushi2020_reference&quot;,&quot;label&quot;:&quot;Fukushi_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quetiapine/Quetiapine_Fukushi2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Zheng2024_reference&quot;,&quot;label&quot;:&quot;Zheng_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quetiapine/Quetiapine_Zheng2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_quetiapine/Quetiapine_Li2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Quetiapine — `Quetiapine_Yang2025_qtp`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> The equilibrium dissociation constant for quetiapine binding was assigned a time-unit value of 0.148 per hour, conflicting with the required concentration units.

<div class="pk-model-meta" hidden drug="Quetiapine" model-id="Quetiapine_Yang2025_qtp" status="rejected" stale="false" population="Daphnia magna" measured-compound="Quetiapine" parameterization="mechanistic" topology="1C"></div>

## Citation
Yang H, Xing H, Chen Z, Kong L, Jiang H, Zhu T. Comparative Toxicokinetics and Biomarker Responses of Typical Psychiatric Pharmaceuticals in Daphnia magna. Toxics 13(6) (2025).
  ·  DOI: [10.3390/toxics13060481](https://doi.org/10.3390/toxics13060481)

## Population and dosing

**Population:** Daphnia magna · condition chronic dietary exposure.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Kd(h−1) | KD | 0.148 | h−1 |
| Creatinine clearance (mL/min) | CL | 129.0 | mL/min |
| Volume of distribution (clozapine/published) | V | 950.0 | L |
| Absorption rate constant ka (1/h) | kabs | 0.372 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The equilibrium dissociation constant for quetiapine binding was assigned a time-unit value of 0.148 per hour, conflicting with the required concentration units.**

The recorded equilibrium dissociation constant (KD) has a value of 0.148 with the unit inverse hours, which describes a rate rather than the concentration-based binding affinity expected for this parameter. Additionally, the paper's population is Daphnia magna, a crustacean lacking the renal system implied by the reported creatinine clearance of 129.0 mL/min. The model was rejected due to this dimensional mismatch and the biological implausibility of applying mammalian renal clearance metrics to the invertebrate species. Extracted — quetiapine: KD 0.148 h−1, CL 129 mL/min, V 950 L, kabs 0.372 1/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Kd(h−1) | `Q331` · KD | 0.148 | h−1 |  |  | 1/h | exact (1) | toxics-13-00481-t002:row7:col4 |
| Creatinine clearance (mL/min) | `Q22` · CL | 129.0 | mL/min | 2.15e-06 | m3/s | L/h | review_gapfill (0.7) | Adachi_2021:review |
| Volume of distribution (clozapine/published) | `Q61` · V | 950.0 | L | 0.95 | m3 | L | review_gapfill (0.7) | Li_2026:review |
| Absorption rate constant ka (1/h) | `Q49` · kabs | 0.372 | 1/h | 0.0001033 | 1/s | 1/h | review_gapfill (0.7) | Adachi_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'qtp' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'LC50(mg/L)' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row7:col1'])
- dropped unlinked row (NIL): 'Exposure Concentration (mg/L)' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row7:col2'])
- dropped 'Ku(L/kg/h)' → Q100: the uptake rate from the exposure medium (bioaccumulation), not a body toxicokinetic parameter
- unit_dimension_mismatch: 'Kd(h−1)' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'BCFk(L/kg ww)' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row7:col5'])
- dropped unlinked row (NIL): 'BCFss(L/kg ww)' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row7:col6'])
- dropped unlinked row (NIL): 'log BCF' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row7:col7'])
- dropped unlinked row (NIL): 'R2' — extend the ontology if this is a real PK parameter (source ['toxics-13-00481-t002:row7:col8'])
- dropped value-less row: 'Table 2. The exposure concentration, toxicokinetic parameters and BCFs of the selected chemicals in D. magna at pH 7.5.'
- table mostly unlinked (6/7 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Quetiapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'qtp' subgroup of Yang_2025 (paper reports 3 populations: qtp, ser, vlf)
- gap-filled Q22 (CL) from Adachi_2021's review values (primary lacked it)
- gap-filled Q61 (V) from Li_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Adachi_2021's review values (primary lacked it)

**Extraction notes:**
- transposed table toxics-13-00481-t002: logical view retains original source coordinates
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Adachi_2021:review'] |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | h−1 (1 / [time]) | ['toxics-13-00481-t002:row7:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adachi_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Li_2026:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 129 | ['Adachi_2021:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.74 L/h | ['Adachi_2021:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 950 L | ['Li_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquetiapine%5D%20Quetiapine_Yang2025_qtp&body=Drug%3A%20quetiapine%0ARecord%3A%20Quetiapine_Yang2025_qtp%0APaper%3A%20Yang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_quetiapine/Quetiapine_Yang2025_qtp%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 23:44 UTC</sub>
