<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tivozanib&quot;}]"></div>

# tivozanib

- **generic name:** tivozanib
- **ATC codes:** `L01EK03`
- **DrugBank:** [DB11800](https://go.drugbank.com/drugs/DB11800) · **PubChem:** [CID 9911830](https://pubchem.ncbi.nlm.nih.gov/compound/9911830)
- **molar mass:** 454.863 g/mol (C22H19ClN4O5) — DrugBank
- **groups:** approved, investigational

## About

Tivozanib is a VEGFR tyrosine kinase inhibitor used to treat advanced renal cell carcinoma. It is authorised in the European Union, but its use is not widespread.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7810457](https://www.wikidata.org/wiki/Q7810457) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tivozanib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FLT1 (inhibitor), FLT3 (inhibitor), FLT4 (inhibitor), KDR (inhibitor), KIT (inhibitor), MET (inhibitor), PDGFRA (inhibitor), PDGFRB (inhibitor), PTK6 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:25 | 1:51 | 0/0/0 | 0/0/0 | 0/0/0 | 12,858/1,390 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cotreau_2015.pdf` | Cotreau MM et al., Effects of ketoconazole or rifampin on…, Clinical pharmacology in dr… (2015) | pgx | 7 | [10.1002/cpdd.145](https://doi.org/10.1002/cpdd.145) | [27128217](https://www.ncbi.nlm.nih.gov/pubmed/27128217) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wang_2020.pdf` | Wang J et al., Brain accumulation of tivozanib is rest…, International journal of ph… (2020) | pgx | 7 | [10.1016/j.ijpharm.2020.119277](https://doi.org/10.1016/j.ijpharm.2020.119277) | [32234426](https://www.ncbi.nlm.nih.gov/pubmed/32234426) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-07T08:25:20.232044+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Berge_2013 | not_relevant | 0 | 0 | The text discusses VHL in tumor biology but reports no gene variant, genotype, or phenotype effect on tivozanib PK or PD. |
| PGx | Cotreau_2015 | not_relevant | 0 | 0 | The paper reports drug–drug interactions with ketoconazole and rifampin, not effects of a gene variant, genotype, or phenotype on tivozanib PK/PD. |
| PGx | Gao_2025 | not_relevant | 0 | 0 | The paper reports predicted tivozanib–HTR1F docking affinity, not an effect of a gene variant, genotype, or phenotype on a tivozanib PK or PD parameter. |
| PGx | Henriksen_2025 | not_relevant | 0 | 0 | This protocol studies UGT1A1 polymorphisms in relation to pazopanib, not genetic effects on tivozanib pharmacokinetics or pharmacodynamics. |
| popPK | Proia_2015 | irrelevant | 0 | 0 | Tivozanib is only a combination-treatment agent, with no pharmacokinetic parameters reported. |
| PGx | Yan_2026 | not_relevant | 0 | 0 | C5orf34 expression is associated with predicted tivozanib resistance, but no gene variant/genotype/phenotype effect on a tivozanib PK or PD parameter is reported. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The study examines tivozanib’s inhibition of ABCB1/ABCG2 and effects on other drugs, not how a gene variant or phenotype changes tivozanib PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
