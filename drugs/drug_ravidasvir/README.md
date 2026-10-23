<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ravidasvir&quot;}]"></div>

# ravidasvir

- **generic name:** ravidasvir
- **ATC codes:** `J05AP13`
- **DrugBank:** [DB15652](https://go.drugbank.com/drugs/DB15652) · **PubChem:** none
- **molar mass:** 762.912 g/mol (C42H50N8O6) — DrugBank
- **groups:** investigational

## About

Ravidasvir is an investigational antiviral drug studied for the treatment of hepatitis C virus infections. It is not an approved medicine and remains under investigation, with no marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25101668](https://www.wikidata.org/wiki/Q25101668) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ravidasvir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Genome polyprotein (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:31 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 12,638/660 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Panjasawatwong_2024.pdf` | Panjasawatwong N et al., Population pharmacokinetics of ravidasv…, Antimicrobial agents and ch… (2024) | popPK | 10 | [10.1128/aac.00008-24](https://doi.org/10.1128/aac.00008-24) | [38767383](https://pubmed.ncbi.nlm.nih.gov/38767383) | Population PK of ravidasvir in humans with a two-compartment model, but numeric parameter values (CL/F, Vd/F, Q) are not present in the evidence, likely in tables/supplement not provided. |

<sub>queue written 2026-10-07 16:31 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abu_2026 | not_relevant | 0 | 0 | Trial of treatment duration vs SVR12; no gene variant or PK/PD parameter reported. |
| PGx | Andrieux-Meyer_2021 | not_relevant | 0 | 0 | Trial reports efficacy/safety and lists PK objectives, but no gene variant/genotype effect on ravidasvir PK or PD parameters is reported. |
| PGx | Esmat_2017 | not_relevant | 0 | 0 | Clinical efficacy/safety trial of ravidasvir+sofosbuvir with no genetic variant or PK/PD parameter data reported. |
| PGx | Gomaa_2021 | not_relevant | 0 | 0 | Abstract only mentions HCV genotype (viral) and efficacy/safety, no host gene variant effect on ravidasvir PK/PD parameters. |
| PGx | Hafez_2018 | not_relevant | 0 | 0 | Narrative review with no gene variant/genotype effects on ravidasvir PK or PD parameters reported. |
| PGx | Hefnawy_2020 | not_relevant | 0 | 0 | Paper reports an analytical method and rat PK of ravidasvir with no gene variant/genotype/phenotype effects on PK or PD parameters. |
| PGx | Kao_2018 | not_relevant | 2 | 3 | Reports viral NS5A resistance variants and SVR12 outcomes only, with no host pharmacogenomic effect on ravidasvir PK or PD parameters. |
| PGx | Muhamad_2026 | not_relevant | 0 | 0 | The paper examines treatment duration and viral load as predictors of time to HCV RNA suppression; no gene variant/genotype/phenotype effect on ravidasvir PK/PD is reported (HCV genotype is viral, not host pharmacogenomics). |
| popPK | Panjasawatwong_2024 | relevant | 10 | 3 | Population PK of ravidasvir in humans with a two-compartment model, but numeric parameter values (CL/F, Vd/F, Q) are not present in the evidence, likely in tables/supplement not provided. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | Study reports efficacy/safety and cytokine changes for ravidasvir therapy, with no gene variant/genotype effects on PK or PD parameters. |
| PGx | Xu_2019 | not_relevant | 3 | 3 | IL28B genotype and NS5A polymorphisms are analyzed only as subgroups for SVR12 efficacy, not as modifiers of ravidasvir PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bravidasvir%5D&body=Drug%3A%20ravidasvir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ravidasvir/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
