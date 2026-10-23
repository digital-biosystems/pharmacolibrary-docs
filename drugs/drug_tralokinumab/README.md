<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tralokinumab&quot;}]"></div>

# tralokinumab

- **generic name:** tralokinumab
- **ATC codes:** `D11AH07`
- **DrugBank:** [DB12169](https://go.drugbank.com/drugs/DB12169) · **PubChem:** none
- **groups:** approved, investigational

## About

Tralokinumab is a monoclonal antibody used to treat dermatitis (atopic skin inflammation). It is an approved medicine, though its use appears limited to dermatological care rather than broad application.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7833105](https://www.wikidata.org/wiki/Q7833105) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.006208 | L/h | 0.149 L/day | adults with atopic dermatitis, asthma, and healthy subjects | &gt; | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Soehoel_2022_reference](drugs/drug_tralokinumab/Tralokinumab_Soehoel2022_reference.md) |
| ka | kabs | 0.007667 | 1/h | 0.184 1/day | adults with atopic dermatitis, asthma, and healthy subjects | &gt; | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Soehoel_2022_reference](drugs/drug_tralokinumab/Tralokinumab_Soehoel2022_reference.md) |
| F | Fab | 0.761 |  | 0.761 bioavailability | adults with atopic dermatitis, asthma, and healthy subjects | &gt; | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Soehoel_2022_reference](drugs/drug_tralokinumab/Tralokinumab_Soehoel2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub> | [Soehoel_2022_reference](drugs/drug_tralokinumab/Tralokinumab_Soehoel2022_reference.md) | held back | 1-compartment, oral | 6 | Soehoel A et al., Population Pharmacokinetics of Tralokin…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1113](https://doi.org/10.1002/cpdd.1113) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Baverel_2015_reference](drugs/drug_tralokinumab/Tralokinumab_Baverel2015_reference.md) | — | 1-compartment (no model) | 0 | Baverel PG et al., Pharmacokinetics of tralokinumab in ado…, British journal of clinical… (2015) | [10.1111/bcp.12725](https://doi.org/10.1111/bcp.12725) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tralokinumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL13 (antibody), IL13 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:03 | 0:42 | 1/1/0 | 0/0/0 | 0/0/0 | 35,778/1,707 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baverel_2015.pdf` | Baverel PG et al., Pharmacokinetics of tralokinumab in ado…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12725](https://doi.org/10.1111/bcp.12725) | [26182954](https://pubmed.ncbi.nlm.nih.gov/26182954) | The study reports a population PK model for tralokinumab and provides specific numeric clearance values for adolescents in the abstract. |
| `Baverel_2018.pdf` | Baverel PG et al., Dose-Exposure-Response Relationship of…, Clinical pharmacology and t… (2018) | popPK | 10 | [10.1002/cpt.803](https://doi.org/10.1002/cpt.803) | [28758192](https://pubmed.ncbi.nlm.nih.gov/28758192) | The study describes a population PK/PD model for tralokinumab but provides no numeric PK parameter values in the provided text. |
| `Baverel_2018_2.pdf` | Baverel P et al., A randomized, placebo-controlled, singl…, Drug metabolism and pharmac… (2018) | popPK | 8 | [10.1016/j.dmpk.2017.12.001](https://doi.org/10.1016/j.dmpk.2017.12.001) | [29622380](https://pubmed.ncbi.nlm.nih.gov/29622380) | The paper reports PK parameters for tralokinumab in humans, but only provides summary statistics (t1/2 range) in the text, with detailed numeric model parameters likely in figures or supplementary material not provided. |

<sub>queue written 2026-10-07 08:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baverel_2018 | relevant | 10 | 0 | The study describes a population PK/PD model for tralokinumab but provides no numeric PK parameter values in the provided text. |
| popPK | Baverel_2018_2 | relevant | 8 | 3 | The paper reports PK parameters for tralokinumab in humans, but only provides summary statistics (t1/2 range) in the text, with detailed numeric model parameters likely in figures or supplementary material not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btralokinumab%5D&body=Drug%3A%20tralokinumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tralokinumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 08:03 UTC</sub>
