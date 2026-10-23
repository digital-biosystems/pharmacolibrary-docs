<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;brodalumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brodalumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# brodalumab

- **generic name:** brodalumab
- **ATC codes:** `L04AC12`
- **DrugBank:** [DB11776](https://go.drugbank.com/drugs/DB11776) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Brodalumab is a monoclonal antibody used to treat psoriasis. It is authorised in the European Union for psoriasis and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4972934](https://www.wikidata.org/wiki/Q4972934) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Rodríguez-Fernández_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md?tab=Simulation) · [record](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.007917 | L/h | 0.19 L/day | patients with moderate to severe plaque psoriasis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Timmermann_2019_mean](drugs/drug_brodalumab/Brodalumab_Timmermann2019_mean.md) |
| CL | CL | 0.007917 | L/h | 0.19 L/day | patients with moderate to severe plaque psoriasis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Timmermann_2019_median](drugs/drug_brodalumab/Brodalumab_Timmermann2019_median.md) |
| CL | CL/F | 0.0575 | L/h | 1.38 L/d | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md) |
| V | V/F | 24.9 | L | 24.9 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md) |
| ka | kabs | 0.03783 | 1/h | 0.908 day−1 | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md) |
| ka | kabs | 0.03783 | 1/h | 0.908 day−1 | patients with moderate to severe plaque psoriasis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Timmermann_2019_mean](drugs/drug_brodalumab/Brodalumab_Timmermann2019_mean.md) |
| ka | kabs | 0.03783 | 1/h | 0.908 day−1 | patients with moderate to severe plaque psoriasis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Timmermann_2019_median](drugs/drug_brodalumab/Brodalumab_Timmermann2019_median.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">0.001</text><line x1="365.0" y1="18" x2="365.0" y2="74" stroke="#ddd"/><text x="365.0" y="88" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Timmermann_2019 · CL</text><circle cx="347.2" cy="30.0" r="4" fill="#ef6c00"><title>Timmermann_2019 · CL: 0.007917 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Timmermann_2019 · CL</text><circle cx="347.2" cy="46.0" r="4" fill="#ef6c00"><title>Timmermann_2019 · CL: 0.007917 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Rodríguez-Fernández_2022 · CL/F</text><circle cx="497.9" cy="62.0" r="4" fill="#2e7d32"><title>Rodríguez-Fernández_2022 · CL/F: 0.0575 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub> | [Timmermann_2019_mean](drugs/drug_brodalumab/Brodalumab_Timmermann2019_mean.md) | — | 1-compartment (no model) | 4 | Timmermann S et al., Population pharmacokinetics of brodalum…, Basic & clinical pharmacolo… (2019) | [10.1111/bcpt.13202](https://doi.org/10.1111/bcpt.13202) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub> | [↳ median](drugs/drug_brodalumab/Brodalumab_Timmermann2019_median.md) | — | 1-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ value_rse](drugs/drug_brodalumab/Brodalumab_Timmermann2019_value_rse.md) | — | 2-compartment (no model) | 8 (+3 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Salinger_2014_PASI](drugs/drug_brodalumab/pd_Salinger_2014_PASI.md) | Psoriasis Area and Severity Index ← brodalumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | model (no simulator) | Salinger DH et al., A semi-mechanistic model to characteriz…, Clinical pharmacology in dr… (2014) | [10.1002/cpdd.103](https://doi.org/10.1002/cpdd.103) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:36 | 0:31 | 1/1/2 | 0/0/1 | 0/0/0 | 51,104/3,086 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Endres_2014.pdf` | Endres CJ et al., Population pharmacokinetics of brodalum…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.334](https://doi.org/10.1002/jcph.334) | [24846347](https://pubmed.ncbi.nlm.nih.gov/24846347) | The abstract provides specific numeric population PK parameter values (CL, V, Vmax, CV, covariate exponents) for brodalumab. |
| `Salinger_2014.pdf` | Salinger DH et al., A semi-mechanistic model to characteriz…, Clinical pharmacology in dr… (2014) | popPK | 5 | [10.1002/cpdd.103](https://doi.org/10.1002/cpdd.103) | [27128833](https://pubmed.ncbi.nlm.nih.gov/27128833) | The paper reports a semi-mechanistic PK-PD model for brodalumab, but the abstract only provides pharmacodynamic parameters (IC50, plaque formation rate) and lacks specific numeric PK disposition values like clearance (CL) or volume (V) which are likely in the main text or supplementary material not provided. |

<sub>queue written 2026-10-06T23:36:10.083935+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Rodríguez-Fernández_2022 | irrelevant | 3 | 1 | The paper is a review of mAbs in psoriasis that mentions brodalumab, but it does not provide specific quantitative population PK parameters (CL, V, etc.) for brodalumab in the provided text; the detailed values are likely in Table 3 which is not included in the evidence. |
| popPK | Salinger_2014 | relevant | 5 | 0 | The paper reports a semi-mechanistic PK-PD model for brodalumab, but the abstract only provides pharmacodynamic parameters (IC50, plaque formation rate) and lacks specific numeric PK disposition values like clearance (CL) or volume (V) which are likely in the main text or supplementary material not provided. |
| popPK | Schwagerle_2026 | irrelevant | 3 | 0 | This is a preclinical study in pigs using brodalumab to validate a model for predicting human bioavailability, rather than a report of quantitative population PK parameters (CL, V, t1/2) for brodalumab in a target species. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:36 UTC</sub>
