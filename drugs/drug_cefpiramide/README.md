<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefpiramide&quot;}]"></div>

# cefpiramide

- **generic name:** cefpiramide
- **ATC codes:** `J01DD11`
- **DrugBank:** [DB00430](https://go.drugbank.com/drugs/DB00430) · **PubChem:** [CID 636405](https://pubchem.ncbi.nlm.nih.gov/compound/636405)
- **molar mass:** 612.637 g/mol (C25H24N8O7S2) — DrugBank
- **groups:** approved

## About

Cefpiramide is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibacterial, but it does not appear to be authorised in the European Union and its current use seems limited to certain countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4921174](https://www.wikidata.org/wiki/Q4921174) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefpiramide | parent | 612.637 | C25H24N8O7S2 | DrugBank | [636405](https://pubchem.ncbi.nlm.nih.gov/compound/636405) | Conte_1987 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Conte_1987_reference](drugs/drug_cefpiramide/Cefpiramide_Conte1987_reference.md) | — | 1-compartment (no model) | 2 | Conte JE, Pharmacokinetics of cefpiramide in volu…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.10.1585](https://doi.org/10.1128/AAC.31.10.1585) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefpiramide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
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
| 2026-10-07 11:03 | 0:36 | 0/1/0 | 0/0/0 | 0/0/0 | 29,372/2,308 | einfracz / qwen3.8-27b | 2 | 1/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Conte_1987.pdf` | Conte JE, Pharmacokinetics of cefpiramide in volu…, Antimicrobial agents and ch… (1987) | popPK | 10 | [10.1128/AAC.31.10.1585](https://doi.org/10.1128/AAC.31.10.1585) | [3435107](https://pubmed.ncbi.nlm.nih.gov/3435107) | The paper reports specific quantitative pharmacokinetic parameters including elimination half-lives and serum clearances for cefpiramide in humans, directly available in the text. |
| `Ito_1985.pdf` | Ito K et al., [Fundamental and clinical studies on ce…, The Japanese journal of ant… (1985) | popPK | 9 | not captured | [4079008](https://pubmed.ncbi.nlm.nih.gov/4079008) | The study is a pharmacokinetic investigation of cefpiramide in humans using a three-compartment model, but the evidence only provides peak tissue concentrations and times, lacking explicit numerical values for clearance, volume of distribution, or rate constants. |

<sub>queue written 2026-10-07T11:03:16.659628+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Higashimori_2001 | irrelevant | 2 | 3 | The study is a perfusion experiment with isolated rat livers measuring hepatobiliary transport parameters (Vmax, Km) rather than systemic population pharmacokinetic parameters (CL, Vd) for cefpiramide. |
| popPK | Ito_1985 | relevant | 9 | 3 | The study is a pharmacokinetic investigation of cefpiramide in humans using a three-compartment model, but the evidence only provides peak tissue concentrations and times, lacking explicit numerical values for clearance, volume of distribution, or rate constants. |
| popPK | Yamaoka_1987 | relevant | 9 | 4 | The paper reports a population pharmacokinetic study of cefpiramide in rats, but the specific numeric parameter values are located in Table III, which is referenced in the text but not fully provided in the extracted evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:03 UTC</sub>
