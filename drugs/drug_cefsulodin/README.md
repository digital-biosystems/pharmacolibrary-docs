<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefsulodin&quot;}]"></div>

# cefsulodin

- **generic name:** cefsulodin
- **ATC codes:** `J01DD03`
- **DrugBank:** [DB13499](https://go.drugbank.com/drugs/DB13499) · **PubChem:** none
- **molar mass:** 532.54 g/mol (C22H20N4O8S2) — DrugBank
- **groups:** experimental

## About

Cefsulodin is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is not an approved medicine in major markets and is currently regarded as experimental, so it is not widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2943815](https://www.wikidata.org/wiki/Q2943815) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefsulodin | parent | 532.54 | C22H20N4O8S2 | DrugBank | — | Gibson_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Gibson_1982_reference](drugs/drug_cefsulodin/Cefsulodin_Gibson1982_reference.md) | — | 1-compartment (no model) | 6 | Gibson TP et al., Cefsulodin kinetics in renal impairment, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.84](https://doi.org/10.1038/clpt.1982.84) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Gibson_1984_reference](drugs/drug_cefsulodin/Cefsulodin_Gibson1984_reference.md) | — | 1-compartment (no model) | 0 | Gibson TP et al., Kinetics of cefsulodin in patients with…, Reviews of infectious disea… (1984) | [10.1093/clinids/6.supplement_3.s689](https://doi.org/10.1093/clinids/6.supplement_3.s689) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Matzke_1983_reference](drugs/drug_cefsulodin/Cefsulodin_Matzke1983_reference.md) | — | 1-compartment (no model) | 0 | Matzke GR et al., Cefsulodin pharmacokinetics in patients…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.3.369](https://doi.org/10.1128/AAC.23.3.369) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Bakthavatsalam_2020_Syk_integrin_cytoplasmic_domain_interactions](drugs/drug_cefsulodin/pd_Bakthavatsalam_2020_Syk_integrin_cytoplasmic_domain_interact.md) | Syk-integrin cytoplasmic domain interactions ← cefsulodin · inhibition effect | — | Bakthavatsalam D et al., Identification of Inhibitors of Integri…, Frontiers in immunology (2020) | [10.3389/fimmu.2020.575085](https://doi.org/10.3389/fimmu.2020.575085) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Nishimura_1984_bacteriologic_response](drugs/drug_cefsulodin/pd_Nishimura_1984_bacteriologic_response.md) | bacteriologic response ← cefsulodin · categorical (graded) response model | — | Nishimura T et al., Clinical and pharmacokinetic study of p…, Reviews of infectious disea… (1984) | [10.1093/clinids/6.supplement_3.s751](https://doi.org/10.1093/clinids/6.supplement_3.s751) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Nishimura_1984_clinical_response](drugs/drug_cefsulodin/pd_Nishimura_1984_clinical_response.md) | clinical response ← cefsulodin · categorical (graded) response model | — | Nishimura T et al., Clinical and pharmacokinetic study of p…, Reviews of infectious disea… (1984) | [10.1093/clinids/6.supplement_3.s751](https://doi.org/10.1093/clinids/6.supplement_3.s751) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:22 | 3:53 | 0/3/0 | 2/0/0 | 0/0/0 | 119,593/4,894 | einfracz / qwen3.8-27b | 7 | 0/1 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 35 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibson_1982.pdf` | Gibson TP et al., Cefsulodin kinetics in renal impairment, Clinical pharmacology and t… (1982) | popPK | 10 | [10.1038/clpt.1982.84](https://doi.org/10.1038/clpt.1982.84) | [7075110](https://pubmed.ncbi.nlm.nih.gov/7075110) | The abstract explicitly reports quantitative PK parameters (Vd, CL, t1/2) for cefsulodin in humans with renal impairment. |
| `Gibson_1984.pdf` | Gibson TP et al., Kinetics of cefsulodin in patients with…, Reviews of infectious disea… (1984) | popPK | 10 | [10.1093/clinids/6.supplement_3.s689](https://doi.org/10.1093/clinids/6.supplement_3.s689) | [6571338](https://pubmed.ncbi.nlm.nih.gov/6571338) | The study reports quantitative PK parameters (Vd, t1/2, dialysis clearance) for cefsulodin in humans. |
| `Matzke_1983.pdf` | Matzke GR et al., Cefsulodin pharmacokinetics in patients…, Antimicrobial agents and ch… (1983) | popPK | 10 | [10.1128/AAC.23.3.369](https://doi.org/10.1128/AAC.23.3.369) | [6847169](https://pubmed.ncbi.nlm.nih.gov/6847169) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for cefsulodin in humans, and all values are explicitly present in the text. |
| `Washida_1988.pdf` | Washida H et al., [Pharmacokinetic study of cefsulodin in…, The Japanese journal of ant… (1988) | popPK | 10 |  | [3241325](https://pubmed.ncbi.nlm.nih.gov/3241325) | The paper is a PK study of cefsulodin in humans with kidney dysfunction, reporting specific half-lives, clearance equations, AUC relationships, and urinary excretion rates. |
| `Granneman_1982.pdf` | Granneman GR et al., Cefsulodin kinetics in healthy subjects…, Clinical pharmacology and t… (1982) | popPK | 5 | [10.1038/clpt.1982.15](https://doi.org/10.1038/clpt.1982.15) | [7053312](https://pubmed.ncbi.nlm.nih.gov/7053312) | The study reports PK parameters for cefsulodin in humans, but lacks specific values for clearance (CL) and volume of distribution (V), listing only half-life and urinary recovery. |
| `Momose_1982.pdf` | Momose A et al., [The studies on distributions of cefsul…, The Japanese journal of ant… (1982) | popPK | 5 |  | [6304364](https://pubmed.ncbi.nlm.nih.gov/6304364) | The study reports pharmacokinetic distribution data (aqueous humor/plasma ratios, half-life) for cefsulodin in humans but lacks explicit clearance (CL), volume (V), or intercompartmental clearance (Q) parameters required for standard population-PK model extraction. |
| `Heilesen_1983.pdf` | Heilesen AM et al., Treatment of chronic pseudomonas aerugi…, Scandinavian journal of inf… (1983) | pd | 4 | [10.3109/inf.1983.15.issue-3.07](https://doi.org/10.3109/inf.1983.15.issue-3.07) | [6417770](https://www.ncbi.nlm.nih.gov/pubmed/6417770) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 11:21 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of drug disposition in cystic fibrosis patients and does not report specific pharmacokinetic parameters for the drug cefsulodin. |
| popPK | Granneman_1982 | relevant | 5 | 3 | The study reports PK parameters for cefsulodin in humans, but lacks specific values for clearance (CL) and volume of distribution (V), listing only half-life and urinary recovery. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a retrospective clinical study of leptospirosis symptoms and lab findings, containing no pharmacokinetic data for cefsulodin. |
| popPK | Momose_1982 | relevant | 5 | 2 | The study reports pharmacokinetic distribution data (aqueous humor/plasma ratios, half-life) for cefsulodin in humans but lacks explicit clearance (CL), volume (V), or intercompartmental clearance (Q) parameters required for standard population-PK model extraction. |
| popPK | Yadav_2015 | irrelevant | 0 | 0 | The paper is an in vitro antimicrobial combination study involving imipenem and aminoglycosides; cefsulodin is not the subject drug and no PK parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefsulodin%5D&body=Drug%3A%20cefsulodin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefsulodin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 11:21 UTC</sub>
