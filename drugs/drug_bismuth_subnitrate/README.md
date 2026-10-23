<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;bismuth subnitrate&quot;}]"></div>

# bismuth subnitrate

- **generic name:** bismuth subnitrate
- **ATC codes:** `A02BX12`
- **DrugBank:** [DB13209](https://go.drugbank.com/drugs/DB13209) · **PubChem:** none
- **molar mass:** 1461.98 g/mol (Bi5H9N4O22) — DrugBank
- **groups:** approved, withdrawn

## About

Bismuth subnitrate is a bismuth compound that was used as an antacid and anti-ulcer medicine for acid-related stomach disorders such as peptic ulcer and reflux disease. It is no longer in use, as it is listed as a withdrawn drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q126605705](https://www.wikidata.org/wiki/Q126605705) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bismuth_subnitrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 10:10 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 11,101/616 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morikawa_1990.pdf` | Morikawa T et al., [Alleviation of cisplatin toxicity by h…, Nihon Gan Chiryo Gakkai shi (1990) | popPK | 8 |  | [2398299](https://pubmed.ncbi.nlm.nih.gov/2398299) | The study reports pharmacokinetics of bismuth subnitrate in humans, but the specific numeric parameter values are not present in the provided abstract text. |

<sub>queue written 2026-10-04 10:10 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1987 | irrelevant | 0 | 0 | The study investigates the effect of bismuth subnitrate on cisplatin toxicity and reports clinical toxicity markers (creatinine clearance, NAG), not the pharmacokinetic disposition parameters (CL, V, ka) of bismuth subnitrate itself. |
| popPK | Hadžiabdić_2015 | irrelevant | 0 | 0 | The paper focuses on the physical stability and formulation of bismuth subnitrate suspensions, not pharmacokinetic parameters. |
| PD | Hadžiabdić_2015 | not_relevant | 0 | 0 | The paper discusses the physical stability and formulation of bismuth subnitrate suspensions (sedimentation, flocculation) and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Heckers_1994 | irrelevant | 2 | 0 | The study reports only peak concentrations and AUC values for bismuth subnitrate, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population pharmacokinetic modeling. |
| PD | Heckers_1994 | not_relevant | 0 | 0 | The paper reports PK parameters (serum concentrations, urinary excretion) and correlations between exposure metrics, but does not report any pharmacodynamic effect or dose-response relationship. |
| popPK | Jaggi_2005 | irrelevant | 0 | 0 | The study focuses on the biodistribution of radioactive isotope bismuth-213 (a daughter of actinium-225) in the context of cancer therapy, not the pharmacokinetics of the drug bismuth subnitrate, which is only mentioned as a competitive antagonist. |
| popPK | Morikawa_1989 | irrelevant | 2 | 0 | The study describes qualitative concentration trends (plateau/peak) for bismuth but does not report quantitative PK parameters (CL, V, ka, t1/2) or a compartmental model for bismuth subnitrate. |
| popPK | Morikawa_1990 | relevant | 8 | 2 | The study reports pharmacokinetics of bismuth subnitrate in humans, but the specific numeric parameter values are not present in the provided abstract text. |
| PGx | Nakajima_2012 | not_relevant | 0 | 0 | The paper reports a clinical case of H. pylori eradication using bismuth subnitrate and mentions CYP2C19 genotype, but it does not report any pharmacokinetic or pharmacodynamic parameters of bismuth subnitrate or how the genotype affects them. |
| popPK | Slikkerveer_1989 | irrelevant | 2 | 0 | The paper is a review discussing general bismuth pharmacokinetics and toxicity without reporting specific quantitative compartmental parameters (CL, V, Q) for bismuth subnitrate. |
| popPK | Takahashi_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin, with bismuth subnitrate used only as a co-administered agent to assess renal protection, and no PK parameters for bismuth are reported. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbismuth_subnitrate%5D&body=Drug%3A%20bismuth_subnitrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bismuth_subnitrate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
