<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;fleroxacin&quot;}]"></div>

# fleroxacin

- **generic name:** fleroxacin
- **ATC codes:** `J01MA08`
- **DrugBank:** [DB04576](https://go.drugbank.com/drugs/DB04576) · **PubChem:** [CID 3357](https://pubchem.ncbi.nlm.nih.gov/compound/3357)
- **molar mass:** 369.344 g/mol (C17H18F3N3O3) — DrugBank
- **groups:** experimental

## About

Fleroxacin is a fluoroquinolone antibiotic that was developed as an anti-infective agent to treat bacterial infections. It is considered an experimental drug and is not in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3746573](https://www.wikidata.org/wiki/Q3746573) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fleroxacin | parent | 369.344 | C17H18F3N3O3 | DrugBank | [3357](https://pubchem.ncbi.nlm.nih.gov/compound/3357) | Jiao_2018, Miller_1992, Uehlinger_1996 |
| N-demethylfleroxacin | metabolite | 355.316 | C16H16F3N3O3 | PubChem | [133249](https://pubchem.ncbi.nlm.nih.gov/compound/133249) | Jiao_2018 |
| N-oxide fleroxacin | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Uehlinger_1996_reference](drugs/drug_fleroxacin/Fleroxacin_Uehlinger1996_reference.md) | — | 1-compartment (no model) | 3 | Uehlinger DE et al., Pharmacokinetics of fleroxacin after mu…, Antimicrobial agents and ch… (1996) | [10.1128/AAC.40.8.1903](https://doi.org/10.1128/AAC.40.8.1903) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Jiao_2018_reference](drugs/drug_fleroxacin/Fleroxacin_Jiao2018_reference.md) | — | general linear (no model) | 2 | Jiao Y et al., First population pharmacokinetic analys…, European journal of pharmac… (2018) | [10.1016/j.ejps.2018.07.054](https://doi.org/10.1016/j.ejps.2018.07.054) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Miller_1992_aqueous_humor](drugs/drug_fleroxacin/Fleroxacin_Miller1992_aqueous_humor.md) | — | 1-compartment (no model) | 4 | Miller MH et al., Fleroxacin pharmacokinetics in aqueous…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.1.32](https://doi.org/10.1128/AAC.36.1.32) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ serum](drugs/drug_fleroxacin/Fleroxacin_Miller1992_serum.md) | — | 1-compartment (no model) | 7 |  |  |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ vitreous_humor](drugs/drug_fleroxacin/Fleroxacin_Miller1992_vitreous_humor.md) | — | 1-compartment (no model) | 4 |  |  |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fleroxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:55 | 1:39 | 1/4/0 | 0/0/0 | 0/0/0 | 61,191/6,062 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiao_2018.pdf` | Jiao Y et al., First population pharmacokinetic analys…, European journal of pharmac… (2018) | popPK | 10 | [10.1016/j.ejps.2018.07.054](https://doi.org/10.1016/j.ejps.2018.07.054) | [30076955](https://pubmed.ncbi.nlm.nih.gov/30076955) | The text reports specific population pharmacokinetic parameters (clearance ratios, formation clearances in L/h, and relative volume of distribution ratios) for fleroxacin and its metabolites in humans. |
| `Uehlinger_1996.pdf` | Uehlinger DE et al., Pharmacokinetics of fleroxacin after mu…, Antimicrobial agents and ch… (1996) | popPK | 10 | [10.1128/AAC.40.8.1903](https://doi.org/10.1128/AAC.40.8.1903) | [8843301](https://pubmed.ncbi.nlm.nih.gov/8843301) | The text explicitly reports quantitative PK parameters (clearance, volume of distribution) and model details for fleroxacin in hemodialysis patients. |
| `Delon_1999.pdf` | Delon A et al., Pharmacokinetic-pharmacodynamic contrib…, Antimicrobial agents and ch… (1999) | popPK | 5 | [10.1128/AAC.43.6.1511](https://doi.org/10.1128/AAC.43.6.1511) | [10348785](https://pubmed.ncbi.nlm.nih.gov/10348785) | The study reports PK-PD contributions and CSF/plasma concentration ratios for fleroxacin in rats, but specific numeric disposition parameters (CL, V, ka) are not explicitly provided in the text. |

<sub>queue written 2026-10-07 11:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delon_1999 | relevant | 5 | 0 | The study reports PK-PD contributions and CSF/plasma concentration ratios for fleroxacin in rats, but specific numeric disposition parameters (CL, V, ka) are not explicitly provided in the text. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA receptor binding and does not report pharmacokinetic parameters for fleroxacin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfleroxacin%5D&body=Drug%3A%20fleroxacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fleroxacin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 11:53 UTC</sub>
