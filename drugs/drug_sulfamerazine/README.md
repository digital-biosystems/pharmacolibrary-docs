<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;sulfamerazine&quot;}]"></div>

# sulfamerazine

- **generic name:** sulfamerazine
- **ATC codes:** `D06BA06`, `J01ED07`, `J01EE07`
- **DrugBank:** [DB01581](https://go.drugbank.com/drugs/DB01581) · **PubChem:** [CID 5325](https://pubchem.ncbi.nlm.nih.gov/compound/5325)
- **molar mass:** 264.304 g/mol (C11H12N4O2S) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Sulfamerazine is a long-acting sulfonamide antibiotic used to treat bacterial infections, including topical skin use and combination therapy with trimethoprim. It has been withdrawn from human use, though it remains approved for veterinary purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415196](https://www.wikidata.org/wiki/Q415196) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfamerazine | parent | 264.304 | C11H12N4O2S | DrugBank | [5325](https://pubchem.ncbi.nlm.nih.gov/compound/5325) | Hayashi_1979 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="sheep" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Hayashi_1979_reference](drugs/drug_sulfamerazine/Sulfamerazine_Hayashi1979_reference.md) | — | 1-compartment (no model) | 2 | Hayashi M et al., Disposition of sulfonamides in food-pro…, American journal of veterin… (1979) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sulfamerazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:58 | 0:35 | 0/1/0 | 0/0/0 | 0/0/0 | 52,425/2,670 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hayashi_1979.pdf` | Hayashi M et al., Disposition of sulfonamides in food-pro…, American journal of veterin… (1979) | popPK | 10 |  | [525876](https://pubmed.ncbi.nlm.nih.gov/525876) | The text explicitly reports quantitative parameters for sulfamerazine in ewe lambs, including half-life (6.6 h), absorption rate constant (0.433 h^-1), and bioavailability (81%). |
| `Roliński_1984.pdf` | Roliński Z et al., Pharmacokinetic analysis of the level o…, Polish journal of pharmacol… (1984) | popPK | 9 |  | [6611547](https://pubmed.ncbi.nlm.nih.gov/6611547) | The study reports quantitative PK parameters (half-life) for sulfamerazine in calves using a one-compartment model, though clearance and volume values are not explicitly listed in the evidence. |

<sub>queue written 2026-10-07 21:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartlett_2013 | irrelevant | 0 | 0 | The study assesses toxicity (LC50/EC50) in an aquatic invertebrate rather than pharmacokinetic parameters for sulfamerazine. |
| popPK | Losch_1980 | irrelevant | 2 | 0 | The paper describes the mathematical model structure for sulfamerazine in domestic mammals but does not provide specific quantitative parameter values (CL, V, Ka, etc.) for a single species. |
| popPK | Peiker_1982 | irrelevant | 2 | 0 | The abstract describes a pharmacokinetic study but does not provide any numeric parameter values in the extracted evidence. |
| popPK | Roliński_1984 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-life) for sulfamerazine in calves using a one-compartment model, though clearance and volume values are not explicitly listed in the evidence. |
| popPK | Wei_2018 | irrelevant | 0 | 0 | The paper is an ISO standard describing a bacterial luminescence test for water quality and does not study sulfamerazine or provide any pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfamerazine%5D&body=Drug%3A%20sulfamerazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfamerazine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 21:58 UTC</sub>
