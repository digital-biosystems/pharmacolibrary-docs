<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;melphalan flufenamide&quot;}]"></div>

# melphalan flufenamide

- **generic name:** melphalan flufenamide
- **ATC codes:** `L01AA10`
- **DrugBank:** [DB16627](https://go.drugbank.com/drugs/DB16627) · **PubChem:** not captured
- **molar mass:** 498.42 g/mol (C24H30Cl2FN3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Melphalan flufenamide (melflufen) is an alkylating anticancer drug that was authorised in the European Union for treating multiple myeloma. It was later withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27277739](https://www.wikidata.org/wiki/Q27277739) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| melphalan | metabolite | 305.199 | C13H18Cl2N2O2 | PubChem | [460612](https://pubchem.ncbi.nlm.nih.gov/compound/460612) | Huledal_2024 |
| melphalan_flufenamide | metabolite | 498.42 | C24H30Cl2FN3O3 | DrugBank | — | Huledal_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Huledal_2024_reference](drugs/drug_melphalan_flufenamide/MelphalanFlufenamide_Huledal2024_reference.md) | — | general linear (no model) | 4 | Huledal G et al., Pharmacokinetics and Metabolism of Melf…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2355](https://doi.org/10.1002/jcph.2355) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=melphalan_flufenamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ANPEP (substrate), DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:15 | 0:34 | 0/1/0 | 0/0/0 | 0/0/0 | 23,818/2,438 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huledal_2024.pdf` | Huledal G et al., Pharmacokinetics and Metabolism of Melf…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2355](https://doi.org/10.1002/jcph.2355) | [37752623](https://pubmed.ncbi.nlm.nih.gov/37752623) | The study reports quantitative PK parameters for melflufen (clearance, half-lives) and its active metabolite melphalan (clearance, volumes) derived from population analysis in human patients. |

<sub>queue written 2026-10-07T16:15:05.284337+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ducommun_2015 | not_relevant | 0 | 0 | The paper focuses on identifying AMPK substrates (specifically MFF) using proteomics and is unrelated to melphalan flufenamide or pharmacogenomics. |
| popPK | Guido_2012 | irrelevant | 0 | 0 | The paper describes a mechanistic study on cancer metabolism and does not contain any pharmacokinetic data for melphalan_flufenamide. |
| PGx | Koch_2016 | not_relevant | 0 | 0 | The paper describes a mitochondrial disease caused by MFF mutations and does not mention melphalan flufenamide or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Toyama_2016 | not_relevant | 0 | 0 | The paper is unrelated to pharmacogenomics or melphalan_flufenamide; it focuses on AMPK-mediated mitochondrial fission. |
| PGx | Xu_2024 | not_relevant | 0 | 0 | The paper studies cadmium toxicity in chickens and its effects on CYP450/mtUPR, not melphalan flufenamide or human pharmacogenomics. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper studies the neuroprotective effects of butyrolactone II in C. elegans and does not involve melphalan flufenamide or its pharmacokinetics. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper studies butyrolactone II, not melphalan flufenamide, and reports no pharmacodynamic parameters for the target drug. |
| PGx | Yu_2019 | not_relevant | 0 | 0 | The paper investigates mitochondrial fission and Drp1 phosphorylation, unrelated to melphalan_flufenamide pharmacogenomics. |
| PGx | Zou_2024 | not_relevant | 0 | 0 | The paper discusses the protective effects of astaxanthin on ochratoxin A-induced liver injury in broilers and does not involve melphalan_flufenamide or any pharmacogenomic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:15 UTC</sub>
