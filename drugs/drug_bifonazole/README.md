<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;bifonazole&quot;}]"></div>

# bifonazole

- **generic name:** bifonazole
- **ATC codes:** `D01AC10`
- **DrugBank:** [DB04794](https://go.drugbank.com/drugs/DB04794) · **PubChem:** [CID 2378](https://pubchem.ncbi.nlm.nih.gov/compound/2378)
- **molar mass:** 310.3917 g/mol (C22H18N2) — DrugBank
- **groups:** approved

## About

Bifonazole is an antifungal medicine applied to the skin to treat fungal skin infections. It is an approved topical antifungal, used mainly in dermatological care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421162](https://www.wikidata.org/wiki/Q421162) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Trösken_2004_CYP19_inhibition](drugs/drug_bifonazole/pd_Tr_sken_2004_CYP19_inhibition.md) | inhibition of recombinant human CYP19 (aromatase) ← bifonazole · direct sigmoid Emax (Hill) effect | — | Trösken ER et al., Comparative assessment of the inhibitio…, Endocrine research (2004) | [10.1081/erc-200035093](https://doi.org/10.1081/erc-200035093) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bifonazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2B6` unknown, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:35 | 2:39 | 0/0/0 | 0/1/0 | 0/0/0 | 76,356/1,413 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Milani_2020 | not_relevant | 2 | 0 | The paper identifies bifonazole as a UGT2B10 substrate using in vitro microsomes but does not report in vivo pharmacokinetic or pharmacodynamic data or specific effect sizes for gene variants. |
| PGx | Monostory_2004 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory effects of bifonazole on CYP enzymes, not the effect of genetic variants on bifonazole's pharmacokinetics or pharmacodynamics. |
| popPK | Trösken_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of CYP19 inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for bifonazole. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbifonazole%5D&body=Drug%3A%20bifonazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bifonazole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
