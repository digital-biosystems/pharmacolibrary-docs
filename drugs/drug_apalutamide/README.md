<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;apalutamide&quot;}]"></div>

# apalutamide

- **generic name:** apalutamide
- **ATC codes:** `L02BB05`
- **DrugBank:** [DB11901](https://go.drugbank.com/drugs/DB11901) · **PubChem:** [CID 24872560](https://pubchem.ncbi.nlm.nih.gov/compound/24872560)
- **molar mass:** 477.44 g/mol (C21H15F4N5O2S) — DrugBank
- **groups:** approved, investigational

## About

Apalutamide is an anti-androgen cancer medicine used to treat prostate cancer. It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098975](https://www.wikidata.org/wiki/Q21098975) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| N-desmethyl-apalutamide | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pérez-Ruixo_2020_reference](drugs/drug_apalutamide/Apalutamide_PrezRuixo2020_reference.md) | — | parent + metabolite (no model) | 0 | Pérez-Ruixo C et al., Population Pharmacokinetics of Apalutam…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00808-7](https://doi.org/10.1007/s40262-019-00808-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=apalutamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer, `ABCG2` inducer | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer, `ABCG2` inducer | DrugBank actor |
| distribution | mammary gland | `ABCG2` inducer | DrugBank actor |
| distribution | placenta | `ABCB1` inducer | DrugBank actor |
| distribution | testis | `ABCB1` inducer, `ABCG2` inducer | DrugBank actor |
| metabolism | liver | `CYP2C19` inducer, `CYP2C8` substrate, `CYP2C9` inducer, `CYP3A4` inducer/substrate, `SLCO1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inducer, `SLC22A2` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inducer, `ABCG2` inducer, `SLC47A1` inhibitor | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:13 | 3:20 | 0/1/0 | 0/0/0 | 0/0/0 | 400,615/43,879 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pérez-Ruixo_2020.pdf` | Pérez-Ruixo C et al., Population Pharmacokinetics of Apalutam…, Clinical pharmacokinetics (2020) | popPK | 10 | [10.1007/s40262-019-00808-7](https://doi.org/10.1007/s40262-019-00808-7) | [31432469](https://pubmed.ncbi.nlm.nih.gov/31432469) | The abstract provides key quantitative population PK parameters (apparent clearance and volume of distribution) for apalutamide in human subjects. |

<sub>queue written 2026-10-06 22:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Myint_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis evaluating the safety outcomes (falls and fractures) of androgen receptor inhibitors, not a pharmacokinetic study, and contains no PK parameters for apalutamide. |
| popPK | Perez-Ruixo_2020 | irrelevant | 0 | 0 | The study is an exposure-response analysis of efficacy and safety, reporting AUC ranges and dose reductions rather than quantitative compartmental pharmacokinetic parameters (CL, V, Ka, etc.). |
| popPK | Shen_2024 | irrelevant | 0 | 0 | The paper is a post-hoc analysis of efficacy and safety outcomes (OS, PFS, HRQoL) in Phase 3 trials and does not report pharmacokinetic parameters for apalutamide. |
| popPK | Tjollyn_2022 | irrelevant | 4 | 0 | The study applies a previously developed population PK model to explore exposure-response relationships but does not report new quantitative PK parameter values (CL, V, etc.) in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bapalutamide%5D&body=Drug%3A%20apalutamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_apalutamide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 22:10 UTC</sub>
