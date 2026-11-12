<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Testosterone&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/&quot;},{&quot;label&quot;:&quot;Bi_2018 \u00b7 PD sperm count&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Testosterone_Bi2018_bootstrapa_median&quot;,&quot;label&quot;:&quot;Bi_2018_bootstrapa_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Bi2018_bootstrapa_median.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Testosterone_Bi2018_final_model_estimate&quot;,&quot;label&quot;:&quot;Bi_2018_final_model_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Bi2018_final_model_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Testosterone_Torne2007_reference&quot;,&quot;label&quot;:&quot;Torn\u00f8e_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Torne2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# sperm count — PD  <span class="pk-badge pk-badge--red">Rejected</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Total testosterone (Cavg_18 weeks) (measured concentrations) drives sperm count: indirect response — drug inhibits the production of sperm count.

**Model:** Model available in **Models**; browser simulation unavailable.

> Total testosterone average concentration (Cavg) inhibits sperm count production via a direct sigmoid Emax model without an effect compartment, using a Hill coefficient (Lambda) of 11.3. The estimated Cavg50 is 8.68 ng/mL, with a turnover rate (Kin) of 6.17 /day and elimination rate (Kout) of 0.0696 /day.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Bi_2018`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Bi Y et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2018)
  ·  DOI: [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Kin | `Q327` ·  | 6.17 | /day | llm | Bi_2018:pdv3 |
| PD (effect) | Kout | `Q328` ·  | 0.0696 | /day | llm | Bi_2018:pdv3 |
| PD (effect) | Cavg50 | `Q322` ·  | 8.68 | ng/mL | llm | Bi_2018:pdv3 |
| PD (effect) | Lambda | `Q325` ·  | 11.3 |  | llm | Bi_2018:pdv3 |
| PD (effect) | Phi | `Q323` ·  | 4.65 |  | llm | Bi_2018:pdv3 |
| variability | IIV_Kin | `Q312` ·  | 46.8% |  | llm | Bi_2018:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Testosterone_Bi2018_PD_sperm_count` — turnover (indirect response type IV), `response = E0/(1 + Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 88.65 | — |
| Emax | 4.65 | — |
| EC50 | 8.68 ng/mL | 8.68e-06 kg/m3 |
| gamma | 11.3 | — |

Closed-form check points (response, SI): `at_0` = 88.65, `at_EC50` = 26.66, `at_inf` = 15.69

Deviations:

- `pd_binding_e0_from_kin_kout` — no baseline row; E0 = kin/kout (6.17/0.0696 = 88.65) — the paper's stated baseline may differ
- `pd_binding_emax_not_a_fraction` — type I needs Imax ≤ 1 but the record has 4.65; bound as the reciprocal stimulation form (IV) the paper fitted

## Review

Verdict <span class="pk-badge pk-badge--red">Rejected</span> · route to `human_review`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as IDR-IV predicts |
| `T3_plausibility` | fail | gamma 11.3 outside 0.1–10 |
| `T4_defaults` | pass | nothing defaulted |

Blocking:

- T3 gamma 11.3 outside 0.1–10


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone%5D%20pd_Bi_2018_sperm_count&body=Drug%3A%20testosterone%0ARecord%3A%20pd_Bi_2018_sperm_count%0APaper%3A%20Bi_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_testosterone/pd_Bi_2018_sperm_count%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [Testosterone](drugs/toxin_testosterone/)</sub>
