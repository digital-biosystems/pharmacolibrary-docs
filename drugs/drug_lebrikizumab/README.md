<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;lebrikizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lebrikizumab_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lebrikizumab

- **generic name:** lebrikizumab
- **ATC codes:** `D11AH10`
- **DrugBank:** [DB11914](https://go.drugbank.com/drugs/DB11914) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lebrikizumab is a monoclonal antibody used to treat atopic dermatitis. It is authorised in the European Union as a dermatological treatment for dermatitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3829321](https://www.wikidata.org/wiki/Q3829321) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Zhu_2017_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> patients with moderate-to-severe asthma, n = &gt;$-1912. [Run it in the simulator](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md?tab=Simulation) · [record](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0065 | L/h | 0.156 L/day | patients with moderate-to-severe asthma | &gt;$-1912 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhu_2017_reference](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md) |
| V | V | 4.1 | L | 4.1 L | patients with moderate-to-severe asthma | &gt;$-1912 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhu_2017_reference](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md) |
| ka | kabs | 0.009958 | 1/h | 0.239 day-1 | patients with moderate-to-severe asthma | &gt;$-1912 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhu_2017_reference](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md) |
| t½ | t1/2z | 616.8 | h | 25.7 days | patients with moderate-to-severe asthma | &gt;$-1912 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhu_2017_reference](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md) |
| F | Fab | 0.856 |  | 85.6 % | patients with moderate-to-severe asthma | &gt;$-1912 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhu_2017_reference](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhu_2017_reference](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Zhu R et al., Model-based clinical pharmacology profi…, Pulmonary pharmacology & th… (2017) | [10.1016/j.pupt.2017.08.010](https://doi.org/10.1016/j.pupt.2017.08.010) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lebrikizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL13 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:34 | 0:18 | 1/0/0 | 0/0/0 | 0/0/0 | 15,281/924 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhu_2017.pdf` | Zhu R et al., Model-based clinical pharmacology profi…, Pulmonary pharmacology & th… (2017) | popPK | 10 | [10.1016/j.pupt.2017.08.010](https://doi.org/10.1016/j.pupt.2017.08.010) | [28843617](https://pubmed.ncbi.nlm.nih.gov/28843617) | The paper reports quantitative population PK parameters (CL, Vc, ka, half-life) for lebrikizumab in humans. |

<sub>queue written 2026-10-07T08:34:00.641087+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Szefler_2024 | irrelevant | 0 | 0 | The paper reports pharmacodynamic biomarker changes (IgE, periostin, CCL13, CCL17) rather than quantitative pharmacokinetic parameters (CL, V, ka) for lebrikizumab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 08:34 UTC</sub>
