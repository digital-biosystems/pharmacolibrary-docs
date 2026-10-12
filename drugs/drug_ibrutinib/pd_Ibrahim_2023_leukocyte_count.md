<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ibrutinib&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/&quot;},{&quot;label&quot;:&quot;Ibrahim_2023 \u00b7 PD leukocyte count&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_final_updated_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_final_updated_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_previous_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_previous_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_previous_population_pk_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# leukocyte count — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Ibrutinib (concentrations from the PK model of Gisleskog_2025::final_updated_population_pk_model) drives leukocyte count (in cells∙L−1): indirect response — drug inhibits the production of leukocyte count.

**Model:** No model was generated from this record.

> Daily ibrutinib AUC0–24 inhibits pBtk production via an inhibitory Emax model, suppressing CLL-cell proliferation and promoting apoptosis and redistribution that affect leukocyte count; the excerpt gives no numerical Imax or AUC50. Reported half-lives are 3.92 days for apoptosis of CLLsubpop,3, 90.8 days for CLL-cell death in systemic circulation, and 761 days for the decline in drug effect with resistance.
>
> <sub>in the paper's terms — summarised by gpt-6-luna from the paper's text; not checked by a person</sub>

- **paper:** `Ibrahim_2023`
- **model family:** `indirect_response_i`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Ibrahim EIK et al., Assessment of ibrutinib scheduling on l…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13010](https://doi.org/10.1002/psp4.13010)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | CLLbld,0 | `Q324` · not captured | 64.1 | ×109 cells | not captured | llm (not captured) | Ibrahim_2023:pdv3 |
| — | NRMbld,TN | `Q100` · not captured | 32.9 | ×109 cells | not captured | nil (not captured) | Ibrahim_2023:pdv3 |
| — | NRMbld,RR | `Q100` · not captured | 17.3 | ×109 cells | not captured | nil (not captured) | Ibrahim_2023:pdv3 |
| — | VBld | `Q100` · not captured | 5 | L | not captured | nil (not captured) | Ibrahim_2023:pdv3 |
| — | frc1 | `Q100` · not captured | 0.471 | not captured | not captured | nil (not captured) | Ibrahim_2023:pdv3 |
| — | frc2 | `Q100` · not captured | 0.208 | not captured | not captured | nil (not captured) | Ibrahim_2023:pdv3 |
| — | kh | `Q100` · not captured | 0.469 | day−1 | not captured | nil (not captured) | Ibrahim_2023:pdv3 |
| PD (effect) | kd,bld | `Q331` · not captured | 0.00763 | day−1 | not captured | boundary (not captured) | Ibrahim_2023:pdv3 |
| PD (effect) | kd,tiss | `Q331` · not captured | 0.177 | day−1 | not captured | boundary (not captured) | Ibrahim_2023:pdv3 |
| PD (effect) | slp2 | `Q335` · not captured | 11.3 | not captured | not captured | llm (not captured) | Ibrahim_2023:pdv3 |
| PD (effect) | slp3 | `Q335` · not captured | 0.0983 | not captured | not captured | llm (not captured) | Ibrahim_2023:pdv3 |
| — | λdec | `Q100` · not captured | 0.000911 | day−1 | not captured | nil (not captured) | Ibrahim_2023:pdv3 |
| variability | RUV leukocyte count | `Q315` · not captured | 22 | % | not captured | llm (not captured) | Ibrahim_2023:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `openai:gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:qwen3.8-27b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:qwen3.8-27b` | `driver_compound` | ibrutinib | ibrutinib AUC0-24 | mismatch |
| `einfracz:qwen3.8-27b` | `model_family` | indirect_response_i | disease_progression | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q324].value` | 64.1 | 17.3 | mismatch |
| `einfracz:qwen3.8-27b` | `parameters[Q327]` | not captured | 0.00416 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q328]` | not captured | 0.00763 | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q331]` | 0.177 | not captured | only_one_extracted |
| `einfracz:qwen3.8-27b` | `parameters[Q338]` | not captured | 0.469 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [ibrutinib](drugs/drug_ibrutinib/)</sub>
