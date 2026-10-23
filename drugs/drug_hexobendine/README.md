<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;hexobendine&quot;}]"></div>

# hexobendine

- **generic name:** hexobendine
- **ATC codes:** `C01DX06`
- **DrugBank:** [DB13265](https://go.drugbank.com/drugs/DB13265) · **PubChem:** none
- **molar mass:** 592.686 g/mol (C30H44N2O10) — DrugBank
- **groups:** approved

## About

Hexobendine is a vasodilator used in cardiac therapy, acting on blood vessels to treat heart-related conditions. It is an approved drug, though it appears to be a niche cardiac vasodilator rather than a widely used medicine, and it is not authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q12745373](https://www.wikidata.org/wiki/Q12745373) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="" data-sim="no"></span><span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>stale — current check: </sub> | [Kolassa_1975_rats](drugs/drug_hexobendine/Hexobendine_Kolassa1975_rats.md) | — | — (no model) | 0 | Kolassa N et al., [Studies on the pharmacokinetics of hex…, Arzneimittel-Forschung (1975) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:13 | 1:36 | 0/0/1 | 0/0/0 | 0/0/0 | 43,210/1,102 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 4/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kolassa_1975.pdf` | Kolassa N et al., [Studies on the pharmacokinetics of hex…, Arzneimittel-Forschung (1975) | popPK | 9 |  | [1242664](https://pubmed.ncbi.nlm.nih.gov/1242664) | The study reports quantitative pharmacokinetic parameters (half-lives, serum concentrations, tissue/serum ratios) for hexobendine in rats. |
| `Wiemer_1982.pdf` | Wiemer G et al., Energy-dependent extrusion of cyclic 3'…, Naunyn-Schmiedeberg's archi… (1982) | pd | 5 | [10.1007/BF00498507](https://doi.org/10.1007/BF00498507) | [6300698](https://www.ncbi.nlm.nih.gov/pubmed/6300698) | metadata signals extractable PD data (EC50) |
| `Bender_1986.pdf` | Bender AS et al., Similarities of adenosine uptake system…, Neurochemical research (1986) | pd | 4 | [10.1007/BF00965770](https://doi.org/10.1007/BF00965770) | [2891057](https://www.ncbi.nlm.nih.gov/pubmed/2891057) | metadata signals extractable PD data (IC50) |
| `Striessnig_1985.pdf` | Striessnig J et al., Human red-blood-cell Ca2+-antagonist bi…, European journal of biochem… (1985) | pd | 4 | [10.1111/j.1432-1033.1985.tb08989.x](https://doi.org/10.1111/j.1432-1033.1985.tb08989.x) | [2990927](https://www.ncbi.nlm.nih.gov/pubmed/2990927) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06 10:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bender_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine uptake in rat synaptosomes where hexobendine is used only as an inhibitor/comparator, not as the subject drug for PK analysis. |
| PD | Bender_1986 | not_relevant | 0 | 0 | The paper discusses adenosine uptake systems in astrocytes and neurons and does not mention hexobendine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Bester_1971 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Deckert_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using hexobendine as a competitive inhibitor, not a pharmacokinetic study of hexobendine disposition. |
| PD | Deckert_1987 | not_relevant | 3 | 4 | The paper reports in vitro binding affinity (Ki) for hexobendine, which is a pharmacological parameter but not a pharmacodynamic (exposure-response) relationship in the context of drug effect modeling. |
| popPK | Hayashi_1978 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cholinergic nerve function in guinea pig ileum, not a pharmacokinetic study of hexobendine. |
| popPK | IJzerman_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transporter binding affinity and ionization, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Iwata_1978 | irrelevant | 0 | 0 | The study investigates the mechanism of action (adenosine uptake and enzyme inhibition) and myocardial metabolite levels, not pharmacokinetic disposition parameters like clearance or volume. |
| PD | Jiménez_2000 | not_relevant | 1 | 1 | The paper reports a qualitative ranking of inhibitors (including hexobendine) for adenosine uptake but provides no numeric IC50 or dose-response parameters for hexobendine. |
| popPK | Kolassa_1975_2 | irrelevant | 2 | 0 | The study discusses elimination and methodological shortcomings of radioactive tracers but does not report quantitative compartmental PK parameters (CL, V, t1/2) for hexobendine. |
| popPK | Kolassa_1977 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Kraupp_1969 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Królikowska-Prasał_1979 | irrelevant | 0 | 0 | The study is a histochemical investigation of enzyme activity in rat aortas, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Kukovetz_1976 | irrelevant | 0 | 0 | The study investigates the pharmacological properties of fendiline in isolated tissues, with hexobendine mentioned only as a comparator agent without any pharmacokinetic parameter reporting. |
| popPK | Maj_1980 | irrelevant | 0 | 0 | The study focuses on the pharmacological properties of Craviten (M-71), using hexobendine only as a comparator drug without reporting any pharmacokinetic parameters for it. |
| popPK | McInnes_1969 | irrelevant | 0 | 0 | The study reports hemodynamic and functional effects (blood flow, contractility) but contains no pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Meghji_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine transport in neonatal rat heart cells where hexobendine is used as a tool compound (transport inhibitor), not as the subject of pharmacokinetic analysis. |
| popPK | Meghji_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine transport in chick heart cells where hexobendine is used only as a transport inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Meyer_1970 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Meyer_1971 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Rothaul_1981 | irrelevant | 0 | 0 | The study is a mechanistic investigation of coronary vasodilation in guinea-pig hearts using hexobendine as a pharmacological tool, not a pharmacokinetic study reporting disposition parameters. |
| PD | Schmitt_1967 | not_relevant | 0 | 0 | The provided text is only a title and lacks the full content required to verify the presence of numeric PD parameters or an extractable exposure-response relationship. |
| popPK | Shibata_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hexobendine's effect on calcium influx and contractility in isolated rabbit tissues, reporting no pharmacokinetic parameters. |
| PD | Striessnig_1985 | not_relevant | 0 | 0 | The paper focuses on the characterization of Ca2+-antagonist binding sites on red blood cells and does not report pharmacodynamic or exposure-response relationships for hexobendine. |
| popPK | Wiemer_1982 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| PD | Wiemer_1982 | not_relevant | 0 | 0 | The paper focuses on the mechanism of cAMP extrusion in rat erythrocytes and does not report any pharmacodynamic or exposure-response data for hexobendine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhexobendine%5D&body=Drug%3A%20hexobendine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hexobendine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 10:13 UTC</sub>
