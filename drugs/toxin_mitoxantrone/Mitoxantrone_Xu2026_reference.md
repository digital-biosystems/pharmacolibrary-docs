<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mitoxantrone&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/&quot;},{&quot;label&quot;:&quot;Xu_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitoxantrone_Fang1990_reference&quot;,&quot;label&quot;:&quot;Fang_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Fang1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Gokhale2001_reference&quot;,&quot;label&quot;:&quot;Gokhale_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Gokhale2001_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Launay1989_reference&quot;,&quot;label&quot;:&quot;Launay_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Launay1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Czejka1990_reference&quot;,&quot;label&quot;:&quot;Czejka_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Czejka1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Hu1992_reference&quot;,&quot;label&quot;:&quot;Hu_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Hu1992_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitoxantrone/Mitoxantrone_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mitoxantrone — `Mitoxantrone_Xu2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">rat</span>

> Record rejected because spleen partition coefficient has incorrect unit μM, incompatible with dimensionless requirement, and unconvertible to SI.

<div class="pk-model-meta" hidden drug="Mitoxantrone" model-id="Mitoxantrone_Xu2026_reference" status="rejected" stale="false" population="Rats and Humans (lymphoma patients)" measured-compound="Mitoxantrone (free and total)" parameterization="mechanistic" topology="retention"></div>

## Citation
Xu Y, Li S, Yang Z, Qiu Y, Dong J, Gao X et al. A Dual Mechanism-Based Physiologically Based Pharmacokinetic Model for Predicting Mitoxantrone and Liposomal Mitoxantrone Disposition: Preclinical Validation in Rats and Human Extrapolation with Clinical Evaluation. International journal of nanomedicine 21:638932 (2026).
  ·  DOI: [10.2147/IJN.S638932](https://doi.org/10.2147/IJN.S638932)

## Population and dosing

**Population:** Rats and Humans (lymphoma patients) · age group adult.

**Dosing:** 0.5, 2, 5, 12, 18, 20, 30, 40 mixed (mg/kg, mg/m2, mg), iv, multiple, every 672 h.

**Dosed compound ≠ measured compound:** dosed Mitoxantrone (free and liposomal), measured Mitoxantrone (free and total).

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.95).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Spleen | Kp | 22.4 | μM |
| terminal half-life | t1/2z | 1.38 | hours |
| CL | CL | 16.4 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because spleen partition coefficient has incorrect unit μM, incompatible with dimensionless requirement, and unconvertible to SI.**

The spleen partition coefficient is listed with unit μM, which has dimension of concentration and conflicts with the dimensionless nature of tissue-to-plasma ratios. This unit cannot be converted to SI units, preventing correct parameter assignment. The record also contains an empty body burden parameter without a value. Extracted — mitoxantrone: Kp 22.4 μM; Mitoxantrone (free and total): t1/2z 1.38 hours, CL 16.4 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Spleen | `Q410` · Kp | 22.4 | μM |  |  | µM | llm (0.6) | Xu_2026_table_2:row5:col1 |
| terminal half-life | `Q57` · t1/2z | 1.38 | hours | 4968 | s | h | half_life_rule (0.95) | Xu_2026:results_prose |
| CL | `Q22` · CL | 16.4 | L/h | 4.556e-06 | m3/s | L/h | review_gapfill (0.7) | Brandon_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CT_2 | Q414 | llm |
| K_{up_MPS} | Q349 | llm |
| K_{deg_MPS} | Q334 | llm |
| K_{rel_MPS} | Q372 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Lung' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_2:row1:col1', 'Xu_2026_table_2:row1:col3', 'Xu_2026_table_2:row1:col4', 'Xu_2026_table_2:row1:col6', 'Xu_2026_table_2:row1:col8'])
- dropped unlinked row (NIL): 'Heart' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_2:row2:col1', 'Xu_2026_table_2:row2:col3'])
- dropped unlinked row (NIL): 'Brain' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_2:row3:col1', 'Xu_2026_table_2:row3:col3'])
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_2:row4:col1', 'Xu_2026_table_2:row4:col3'])
- unit_dimension_mismatch: 'Spleen' → Q410 (unit '[length]' vs ontology 'dimensionless') — route to review
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_2:row6:col1', 'Xu_2026_table_2:row6:col3'])
- dropped unlinked row (NIL): 'Other' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_2:row7:col1', 'Xu_2026_table_2:row7:col5'])
- dropped duplicate Q410 ('Kp_1', value None) — already have one for this compound
- dropped unlinked row (NIL): 'Kp_2' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_3:row1:col2'])
- dropped unlinked row (NIL): 'CT_1' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_3:row2:col2'])
- dropped unlinked row (NIL): 'CT_3' — extend the ontology if this is a real PK parameter (source ['Xu_2026_table_3:row4:col2'])
- salvaged Q57 ('terminal half-life'=1.38) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Mitoxantrone (free and total)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: none of 1 PubChem candidate(s) is 'Mitoxantrone (free and total)' (LLM) — left in mass units
- molar mass: none found for 'Mitoxantrone (free and total)' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Brandon_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Xu_2026_table_2: unparsed_numeric_cell
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Brandon_2026:review'] |
| C5_dimension_Q410 | fail | dimensionless | μM ([length]) | ['Xu_2026_table_2:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.4 | ['Brandon_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.4 L/h | ['Brandon_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitoxantrone%5D%20Mitoxantrone_Xu2026_reference&body=Drug%3A%20mitoxantrone%0ARecord%3A%20Mitoxantrone_Xu2026_reference%0APaper%3A%20Xu_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mitoxantrone/Mitoxantrone_Xu2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 12:10 UTC</sub>
