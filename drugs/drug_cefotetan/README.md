<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefotetan&quot;}]"></div>

# cefotetan

- **generic name:** cefotetan
- **ATC codes:** `J01DC05`
- **DrugBank:** [DB01330](https://go.drugbank.com/drugs/DB01330) · **PubChem:** [CID 53025](https://pubchem.ncbi.nlm.nih.gov/compound/53025)
- **molar mass:** 575.619 g/mol (C17H17N7O8S4) — DrugBank
- **groups:** approved, investigational

## About

Cefotetan is a cephalosporin antibiotic used to treat bacterial infections such as sepsis, abscesses, urinary tract infections, peritonitis, and gram-negative or staphylococcal infections. It is an approved antibiotic, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2602246](https://www.wikidata.org/wiki/Q2602246) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefotetan | parent | 575.619 | C17H17N7O8S4 | DrugBank | [53025](https://pubchem.ncbi.nlm.nih.gov/compound/53025) | Sugiyama_1986 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V | 11.51 ‡ | L | 164.5 ml/kg | adult patients with excoriated skin wounds | Yes | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Sugiyama_1986_reference](drugs/drug_cefotetan/Cefotetan_Sugiyama1986_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub> | [Sugiyama_1986_reference](drugs/drug_cefotetan/Cefotetan_Sugiyama1986_reference.md) | — | 1-compartment (no model) | 5 | Sugiyama H et al., [Transfer of cefotetan into exudates fr…, The Japanese journal of ant… (1986) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ohkawa_1983_reference](drugs/drug_cefotetan/Cefotetan_Ohkawa1983_reference.md) | — | 1-compartment (no model) | 0 | Ohkawa M et al., Pharmacokinetics of cefotetan in normal…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.1.31](https://doi.org/10.1128/AAC.23.1.31) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Smith_1986_reference](drugs/drug_cefotetan/Cefotetan_Smith1986_reference.md) | — | 1-compartment (no model) | 0 | Smith BR et al., Cefotetan pharmacokinetics in volunteer…, Antimicrobial agents and ch… (1986) | [10.1128/AAC.29.5.887](https://doi.org/10.1128/AAC.29.5.887) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefotetan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:27 | 3:25 | 1/2/0 | 0/0/0 | 0/0/0 | 58,385/34,707 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sugiyama_1986.pdf` | Sugiyama H et al., [Transfer of cefotetan into exudates fr…, The Japanese journal of ant… (1986) | popPK | 10 |  | [3463777](https://pubmed.ncbi.nlm.nih.gov/3463777) | The study reports quantitative PK parameters (Vd, T1/2, AUC) for cefotetan in humans derived from a two-compartment model analysis. |

<sub>queue written 2026-10-07 10:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Moine_2013 | irrelevant | 1 | 0 | The study is a pharmacodynamic modeling simulation that uses PK parameters obtained from published literature rather than measuring them, and no specific numeric PK values for cefotetan are provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefotetan%5D&body=Drug%3A%20cefotetan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefotetan/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 10:26 UTC</sub>
