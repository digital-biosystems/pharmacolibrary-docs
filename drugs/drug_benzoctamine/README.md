<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;benzoctamine&quot;}]"></div>

# benzoctamine

- **generic name:** benzoctamine
- **ATC codes:** `N05BD01`
- **DrugBank:** [DB09021](https://go.drugbank.com/drugs/DB09021) · **PubChem:** [CID 28425](https://pubchem.ncbi.nlm.nih.gov/compound/28425)
- **molar mass:** 249.357 g/mol (C18H19N) — DrugBank
- **groups:** experimental

## About

Benzoctamine is an anxiolytic drug used to treat anxiety, aggression, and minor social maladjustment. It is an experimental drug that has not been widely authorized for clinical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4890786](https://www.wikidata.org/wiki/Q4890786), [Wikipedia](https://en.wikipedia.org/wiki/Benzoctamine?oldid=1333174286) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:38 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,619/147 | einfracz / qwen3.8-27b | 9 | 4/5 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 67 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Müller_1978.pdf` | Müller WE et al., Benzodiazepine receptor binding: the in…, Naunyn-Schmiedeberg's archi… (1978) | pd | 4 | [10.1007/BF00497002](https://doi.org/10.1007/BF00497002) | [723967](https://www.ncbi.nlm.nih.gov/pubmed/723967) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-23 18:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campanile_2026 | irrelevant | 0 | 0 | The paper is a PBPK modeling study for mRNA-encoded antibodies in mice and does not mention or report any pharmacokinetic parameters for benzoctamine. |
| PGx | Campanile_2026 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of mRNA-based antibody therapeutics and does not mention benzoctamine. |
| popPK | Dumont_2026 | irrelevant | 0 | 0 | This is a pharmacology education study on student exam performance, with no benzoctamine PK data or parameters present. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ciprofol, not benzoctamine. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of ciprofol (not benzoctamine) and examines physiological and clinical covariates (age, weight, race, sex) rather than genetic variants, genotypes, or phenotypes. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/cancer biology paper on ethanoanthracene compounds in CLL cell lines; benzoctamine is not mentioned and no PK parameters for it appear. |
| popPK | Müller_1978 | irrelevant | 0 | 0 | This is an in vitro receptor binding study investigating the interaction of benzoctamine with benzodiazepine receptors, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Müller_1978 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding assays for benzoctamine and other drugs in rat brain membranes and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Rodallec_2026 | irrelevant | 0 | 0 | The study is a PK/PD modeling study for paclitaxel in mice and does not mention benzoctamine. |
| PGx | Rodallec_2026 | not_relevant | 0 | 0 | The paper focuses on PK/PD modeling for paclitaxel nanocarriers in mice and does not mention benzoctamine or any pharmacogenomic effects. |
| popPK | Sethi_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/computational study of galectin-1 inhibitors; no benzoctamine PK parameters appear anywhere. |
| popPK | Silmore_2021 | irrelevant | 0 | 0 | The paper is a systematic review regarding the pharmacokinetics of cannabidiol (CBD), not benzoctamine. |
| PGx | Silmore_2021 | not_relevant | 0 | 0 | The paper discusses the food effects on the pharmacokinetics of cannabidiol (CBD), not benzoctamine, and does not report pharmacogenomic effects. |
| popPK | Tomasek_2025 | irrelevant | 0 | 0 | This is a UTI/OM-89 epithelial immunity study with no benzoctamine PK parameters; "clearance" refers to bacterial clearance, not drug disposition. |
| popPK | Tomasek_2026 | irrelevant | 0 | 0 | This is a UTI/OM-89 immunomodulation study with no benzoctamine PK parameters; "clearance" refers to bacterial clearance, not drug disposition. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper reports PK of procizumab (PCZ), a DPP3-inhibiting antibody; benzoctamine is never mentioned and no benzoctamine parameters appear. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoctamine%5D&body=Drug%3A%20benzoctamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_benzoctamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
