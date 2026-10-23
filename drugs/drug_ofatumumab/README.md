<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ofatumumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofatumumab_Struemper2014_reference&quot;,&quot;label&quot;:&quot;Struemper_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ofatumumab

- **generic name:** ofatumumab
- **ATC codes:** `L01FA02`, `L01XC10`, `L04AA52`, `L04AG12`
- **DrugBank:** [DB06650](https://go.drugbank.com/drugs/DB06650) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ofatumumab is a monoclonal antibody used to treat B-cell blood cancers such as chronic lymphocytic leukemia and lymphoma, and is also used for relapsing-remitting multiple sclerosis. It is authorised in the European Union, where one product remains on the market while another has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410656](https://www.wikidata.org/wiki/Q410656) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Struemper_2014_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> patients with chronic lymphocytic leukemia, follicular lymphoma, and rheumatoid arthritis, n = &gt;=477. [Run it in the simulator](drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md?tab=Simulation) · [record](drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0075 | L/h | 7.5 mL/h | patients with chronic lymphocytic leukemia, follicular lymphoma, and rheumatoid arthritis | &gt;=477 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Struemper_2014_reference](drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Struemper_2014_reference](drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Struemper H et al., Population pharmacokinetics of ofatumum…, Journal of clinical pharmac… (2014) | [10.1002/jcph.268](https://doi.org/10.1002/jcph.268) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Coiffier_2010_reference](drugs/drug_ofatumumab/Ofatumumab_Coiffier2010_reference.md) | — | 1-compartment (no model) | 2 | Coiffier B et al., Pharmacokinetics and pharmacokinetic/ph…, British journal of haematol… (2010) | [10.1111/j.1365-2141.2010.08193.x](https://doi.org/10.1111/j.1365-2141.2010.08193.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Yu_2022_reference](drugs/drug_ofatumumab/Ofatumumab_Yu2022_reference.md) | — | 2-compartment (no model) | 10 | Yu H et al., Population Pharmacokinetic-B Cell Model…, CNS drugs (2022) | [10.1007/s40263-021-00895-w](https://doi.org/10.1007/s40263-021-00895-w) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ofatumumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MS4A1 (antibody), MS4A1 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:56 | 20:57 | 1/2/0 | 0/0/0 | 0/0/0 | 302,915/58,158 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Struemper_2014.pdf` | Struemper H et al., Population pharmacokinetics of ofatumum…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.268](https://doi.org/10.1002/jcph.268) | [24443277](https://pubmed.ncbi.nlm.nih.gov/24443277) | The paper reports a population PK model for ofatumumab with specific numeric values for linear clearance (7.5 mL/h) and volume of distribution (5.3 L) provided in the text. |

<sub>queue written 2026-10-07T18:36:39.727562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Colucci_2023 | irrelevant | 0 | 0 | The study is a clinical observational analysis of relapse risk and B-cell recovery markers, not a pharmacokinetic study reporting quantitative disposition parameters for ofatumumab. |
| popPK | Greco_2026 | irrelevant | 0 | 0 | The study reports optical coherence tomography (OCT) retinal thickness data, not pharmacokinetic parameters. |
| popPK | Huck_2019 | irrelevant | 0 | 0 | The study investigates a mouse anti-CD20 antibody in mice, not the human drug ofatumumab, and reports immunological effects rather than pharmacokinetic parameters. |
| popPK | Yuan_2026 | irrelevant | 0 | 0 | The paper is a narrative review discussing the development roadmap and biological rationale for B-cell targeting therapies, including ofatumumab, but it does not report original quantitative pharmacokinetic parameter values. |
| popPK | Zanghì_2026 | irrelevant | 0 | 0 | The study is a longitudinal observational analysis of cognitive and structural brain changes in multiple sclerosis patients, reporting no pharmacokinetic parameters for ofatumumab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 18:37 UTC</sub>
