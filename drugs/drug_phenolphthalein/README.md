<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;phenolphthalein&quot;}]"></div>

# phenolphthalein

- **generic name:** phenolphthalein
- **ATC codes:** `A06AB04`
- **DrugBank:** [DB04824](https://go.drugbank.com/drugs/DB04824) · **PubChem:** [CID 4764](https://pubchem.ncbi.nlm.nih.gov/compound/4764)
- **molar mass:** 318.3228 g/mol (C20H14O4) — DrugBank
- **groups:** approved, withdrawn

## About

Phenolphthalein was a contact laxative used to treat constipation. It has been withdrawn from use because it was found to be a carcinogen.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q187921](https://www.wikidata.org/wiki/Q187921) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenolphthalein di[35S]sulphate | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Powell_1975_reference](drugs/drug_phenolphthalein/Phenolphthalein_Powell1975_reference.md) | — | 1-compartment (no model) | 0 | Powell GM et al., A model system for investigating the bi…, The Biochemical journal (1975) | [10.1042/bj1480303](https://doi.org/10.1042/bj1480303) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenolphthalein).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT1A9` unknown | DrugBank actor |
| metabolism | liver | `UGT1A9` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), NR1I2 (unknown), NR1I3 (unknown), SHBG (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:42 | 2:27 | 0/1/0 | 0/0/0 | 0/0/0 | 38,709/6,187 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lewis_2007.pdf` | Lewis BC et al., Amino terminal domains of human UDP-glu…, Biochemical pharmacology (2007) | pd | 4 | [10.1016/j.bcp.2006.12.021](https://doi.org/10.1016/j.bcp.2006.12.021) | [17223084](https://www.ncbi.nlm.nih.gov/pubmed/17223084) | metadata signals extractable PD data (sigmoid) |
| `Ghosal_2011.pdf` | Ghosal A et al., Characterization of human liver enzymes…, Drug metabolism and disposi… (2011) | pgx | 7 | [10.1124/dmd.110.036996](https://doi.org/10.1124/dmd.110.036996) | [21123164](https://www.ncbi.nlm.nih.gov/pubmed/21123164) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04 17:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on the biotransformation of boceprevir, and phenolphthalein is only mentioned as an inhibitor used to characterize the enzyme AKR1C2, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Lewis_2007 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Lewis_2007 | not_relevant | 0 | 0 | The paper focuses on the structural and functional characterization of UGT enzymes (substrate selectivity and autoactivation) and does not report pharmacodynamic or exposure-response relationships for phenolphthalein. |
| PGx | Lewis_2007 | not_relevant | 0 | 0 | The paper focuses on the structural domains of UGT enzymes and their substrate selectivity/autoactivation, not on the pharmacokinetics or pharmacodynamics of phenolphthalein. |
| popPK | Rao_1976 | irrelevant | 0 | 0 | The study is an in-vitro enzyme kinetics investigation of estrone glucuronyltransferase in pig kidney, where phenolphthalein is used only as an inhibitor, not as the subject drug for PK parameter estimation. |
| PD | Rao_1976 | not_relevant | 0 | 0 | The paper investigates the enzyme kinetics of estrone glucuronyltransferase and mentions phenolphthalein only as a noncompetitive inhibitor without providing specific numeric PD parameters (e.g., Ki, IC50) or an exposure-response relationship for phenolphthalein. |
| popPK | Rosemond_2004 | irrelevant | 0 | 0 | Phenolphthalein is used only as a chemical inhibitor in an in-vitro enzymology study of S-1360, with no pharmacokinetic parameters reported for phenolphthalein itself. |
| PD | Rosemond_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzymology and inhibition kinetics for S-1360 metabolism; phenolphthalein is used only as a chemical inhibitor to identify the enzyme family, not as a drug with a pharmacodynamic exposure-response relationship. |
| PGx | Uesawa_2007 | not_relevant | 0 | 0 | The paper focuses on the metabolism of dulcin and does not report pharmacogenomic effects on the PK or PD parameters of phenolphthalein. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenolphthalein%5D&body=Drug%3A%20phenolphthalein%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenolphthalein/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 17:39 UTC</sub>
