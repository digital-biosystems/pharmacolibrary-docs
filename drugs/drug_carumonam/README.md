<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;carumonam&quot;}]"></div>

# carumonam

- **generic name:** carumonam
- **ATC codes:** `J01DF02`
- **DrugBank:** [DB13553](https://go.drugbank.com/drugs/DB13553) · **PubChem:** not captured
- **molar mass:** 466.4 g/mol (C12H14N6O10S2) — DrugBank
- **groups:** experimental

## About

Carumonam is a monobactam antibiotic intended to treat bacterial infections. It remains experimental and is not widely used or authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5047478](https://www.wikidata.org/wiki/Q5047478) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carumonam | parent | 466.4 | C12H14N6O10S2 | DrugBank | — | Konishi_1991 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Konishi_1991_reference](drugs/drug_carumonam/Carumonam_Konishi1991_reference.md) | — | 1-compartment (no model) | 0 | Konishi K et al., Pharmacokinetics of carumonam (AMA-1080…, Antimicrobial agents and ch… (1991) | [10.1128/AAC.35.6.1048](https://doi.org/10.1128/AAC.35.6.1048) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Whitby_1989_CP](drugs/drug_carumonam/pd_Whitby_1989_CP.md) | Prostatic tissue concentration biomarker turnover ← carumonam | — | Whitby M et al., Penetration of monobactam antibiotics (…, Chemotherapy (1989) | [10.1159/000238629](https://doi.org/10.1159/000238629) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Bérubé_1988_None](drugs/drug_carumonam/pd_B_rub_1988_None.md) | None ← None · model not identified | — | Bérubé D et al., Pharmacokinetics of carumonam after sin…, Antimicrobial agents and ch… (1988) | [10.1128/AAC.32.3.354](https://doi.org/10.1128/AAC.32.3.354) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:31 | 0:36 | 0/1/0 | 1/1/0 | 0/0/0 | 15,789/924 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Konishi_1991.pdf` | Konishi K et al., Pharmacokinetics of carumonam (AMA-1080…, Antimicrobial agents and ch… (1991) | popPK | 10 | [10.1128/AAC.35.6.1048](https://doi.org/10.1128/AAC.35.6.1048) | [1929242](https://pubmed.ncbi.nlm.nih.gov/1929242) | The paper reports specific quantitative pharmacokinetic parameters including volume of distribution (Varea), half-lives, and clearance trends for carumonam in human patients. |
| `Bulitta_2009.pdf` | Bulitta JB et al., Comparison of the pharmacokinetics and…, Diagnostic microbiology and… (2009) | popPK | 8 | [10.1016/j.diagmicrobio.2009.06.018](https://doi.org/10.1016/j.diagmicrobio.2009.06.018) | [19748423](https://pubmed.ncbi.nlm.nih.gov/19748423) | The paper reports population PK parameters (clearance, volume) for carumonam, but the specific numeric values for these parameters are not present in the provided abstract evidence, only relative changes and simulation outcomes. |

<sub>queue written 2026-10-07T10:31:07.618943+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bulitta_2009 | relevant | 8 | 3 | The paper reports population PK parameters (clearance, volume) for carumonam, but the specific numeric values for these parameters are not present in the provided abstract evidence, only relative changes and simulation outcomes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:31 UTC</sub>
