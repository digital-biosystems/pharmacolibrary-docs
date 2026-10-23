<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;isoxsuprine&quot;}]"></div>

# isoxsuprine

- **generic name:** isoxsuprine
- **ATC codes:** `C04AA01`
- **DrugBank:** [DB08941](https://go.drugbank.com/drugs/DB08941) · **PubChem:** [CID 11779629](https://pubchem.ncbi.nlm.nih.gov/compound/11779629)
- **molar mass:** 301.386 g/mol (C18H23NO3) — DrugBank
- **groups:** approved, withdrawn

## About

Isoxsuprine is a vasodilator that was used for peripheral vascular diseases such as arteriosclerosis, thromboangiitis obliterans, and Raynaud's disease, and also as a tocolytic to relax the uterus. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1117888](https://www.wikidata.org/wiki/Q1117888) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Sedrish_1999_percentage_maximal_relaxation](drugs/drug_isoxsuprine/pd_Sedrish_1999_percentage_maximal_relaxation.md) | percentage maximal relaxation ← isoxsuprine · direct sigmoid Emax (Hill) effect | — | Sedrish SA et al., In vitro response of large colon arteri…, American journal of veterin… (1999) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:19 | 0:52 | 0/0/0 | 0/1/0 | 0/0/0 | 18,137/809 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marzo_2009.pdf` | Marzo A et al., Pharmacokinetics of isoxsuprine hydroch…, Arzneimittel-Forschung (2009) | popPK | 10 | [10.1055/s-0031-1296425](https://doi.org/10.1055/s-0031-1296425) | [19856793](https://pubmed.ncbi.nlm.nih.gov/19856793) | The study reports quantitative PK parameters (half-life, absorption, Vd ratio) for isoxsuprine in humans, but specific numeric values for clearance and volume are not explicitly listed in the provided text. |
| `Belloli_2000.pdf` | Belloli C et al., Affinity of isoxsuprine for adrenorecep…, Equine veterinary journal (2000) | pd | 5 | [10.2746/042516400777591543](https://doi.org/10.2746/042516400777591543) | [10743967](https://www.ncbi.nlm.nih.gov/pubmed/10743967) | metadata signals extractable PD data (EC50) |
| `Baxter_1989.pdf` | Baxter GM et al., Reactivity of equine palmar digital art…, Veterinary surgery : VS (1989) | pd | 4 | [10.1111/j.1532-950x.1989.tb01075.x](https://doi.org/10.1111/j.1532-950x.1989.tb01075.x) | [2773284](https://www.ncbi.nlm.nih.gov/pubmed/2773284) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06 20:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shaer_2010 | irrelevant | 0 | 0 | The paper is an in silico/in vitro study on CDK1 inhibition where isoxsuprine is used only as a comparator hit, with no pharmacokinetic parameters reported. |
| PD | Al-Shaer_2010 | not_relevant | 3 | 5 | The paper reports a single IC50 value (2.9 µM) for isoxsuprine from an in vitro bioassay, which is a static potency metric rather than a dynamic pharmacodynamic (exposure-response) or dose-response curve analysis. |
| popPK | Baxter_1989 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Baxter_1989 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data regarding isoxsuprine or any other drug's pharmacodynamic parameters. |
| popPK | Belloli_2000 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Bentley_1986 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of antinociceptive activity in mice and does not report any pharmacokinetic parameters for isoxsuprine. |
| popPK | Calixto_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of myometrial contraction and does not report pharmacokinetic parameters for isoxsuprine. |
| popPK | Danyi_2007 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study using isoxsuprine as a ligand to characterize a recombinant receptor, not a pharmacokinetic study. |
| PD | Danyi_2007 | not_relevant | 0 | 0 | The paper reports binding affinity (IC50) in a radio-receptor assay, which is a pharmacological binding parameter, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper discusses post-mortem inspection delays in ungulates and does not contain any pharmacokinetic data for isoxsuprine. |
| PD | EFSA_2020 | not_relevant | 0 | 0 | The paper discusses post-mortem inspection delays and disease detection sensitivity, containing no pharmacodynamic or exposure-response data for isoxsuprine. |
| popPK | Elliott_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms and does not report any pharmacokinetic parameters for isoxsuprine. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper is a mechanistic antiviral study focusing on influenza inhibition and does not report any pharmacokinetic parameters for isoxsuprine. |
| popPK | Mercer_1993 | irrelevant | 0 | 0 | The paper is an in-vitro binding study of ifenprodil where isoxsuprine is used only as a comparator ligand, with no pharmacokinetic parameters reported. |
| PD | Mercer_1993 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding characteristics of 125I-ifenprodil and lists isoxsuprine only in a qualitative rank potency order without providing numeric IC50 or Ki values. |
| popPK | Neligan_1985 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (capillary blood flow and viability) in animal flaps and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sedrish_1999 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of vasomotor response (EC50 for relaxation) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Shelver_2004 | irrelevant | 0 | 0 | The paper describes the development of an ELISA for zilpaterol and mentions isoxsuprine only as a non-cross-reacting compound in specificity testing, containing no pharmacokinetic data. |
| PD | Shelver_2004 | not_relevant | 0 | 0 | The paper describes the development of an ELISA for zilpaterol and mentions isoxsuprine only as a non-cross-reacting compound; it contains no pharmacodynamic or exposure-response data for isoxsuprine. |
| popPK | Shelver_2005 | irrelevant | 0 | 0 | The paper describes the development of an ELISA assay for zilpaterol and mentions isoxsuprine only as a non-cross-reacting structural analogue in specificity testing, containing no pharmacokinetic data. |
| PD | Shelver_2005 | not_relevant | 0 | 0 | The paper describes the development of an ELISA assay for zilpaterol and mentions isoxsuprine only as a non-cross-reacting compound in specificity testing, providing no pharmacodynamic or exposure-response data for isoxsuprine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoxsuprine%5D&body=Drug%3A%20isoxsuprine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_isoxsuprine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
