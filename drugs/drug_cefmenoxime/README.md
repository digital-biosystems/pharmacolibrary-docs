<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefmenoxime&quot;}]"></div>

# cefmenoxime

- **generic name:** cefmenoxime
- **ATC codes:** `J01DD05`, `S01AA31`, `S02AA18`
- **DrugBank:** [DB00267](https://go.drugbank.com/drugs/DB00267) · **PubChem:** [CID 9570757](https://pubchem.ncbi.nlm.nih.gov/compound/9570757)
- **molar mass:** 511.558 g/mol (C16H17N9O5S3) — DrugBank
- **groups:** approved

## About

Cefmenoxime is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibiotic, available for systemic use as well as in eye and ear preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4921166](https://www.wikidata.org/wiki/Q4921166) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Granneman_1982_reference](drugs/drug_cefmenoxime/Cefmenoxime_Granneman1982_reference.md) | — | 1-compartment (no model) | 0 | Granneman GR et al., Intramuscular and intravenous pharmacok…, Antimicrobial agents and ch… (1982) | [10.1128/AAC.21.1.141](https://doi.org/10.1128/AAC.21.1.141) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sennello_1983_reference](drugs/drug_cefmenoxime/Cefmenoxime_Sennello1983_reference.md) | — | 1-compartment (no model) | 0 | Sennello LT et al., Effect of probenecid on the pharmacokin…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.6.803](https://doi.org/10.1128/AAC.23.6.803) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kurashige_1982_Clinical_efficacy](drugs/drug_cefmenoxime/pd_Kurashige_1982_Clinical_efficacy.md) | Clinical efficacy ← cefmenoxime · stimulation effect | — | Kurashige T et al., [Therapeutic effects of cefmenoxime in…, The Japanese journal of ant… (1982) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rabbit</span> | [Yamazaki_1981_CRf](drugs/drug_cefmenoxime/pd_Yamazaki_1981_CRf.md) | renal clearance ← cefmenoxime · inhibition effect | — | Yamazaki I et al., Comparison of the renal excretory mecha…, The Journal of antibiotics (1981) | [10.7164/antibiotics.34.1476](https://doi.org/10.7164/antibiotics.34.1476) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefmenoxime).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:06 | 2:48 | 0/2/0 | 2/0/0 | 0/0/0 | 122,026/3,639 | einfracz / qwen3.8-27b | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 56 matched, 52 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fourtillan_1984.pdf` | Fourtillan JB et al., Pharmacokinetic study of cefmenoxime (S…, The American journal of med… (1984) | popPK | 10 | [10.1016/s0002-9343(84)80071-6](https://doi.org/10.1016/s0002-9343(84)80071-6) | [6097120](https://pubmed.ncbi.nlm.nih.gov/6097120) | The evidence contains explicit quantitative PK parameters (Ka, Vd, t1/2, F, renal fraction) for cefmenoxime in human volunteers. |
| `Granneman_1982.pdf` | Granneman GR et al., Intramuscular and intravenous pharmacok…, Antimicrobial agents and ch… (1982) | popPK | 10 | [10.1128/AAC.21.1.141](https://doi.org/10.1128/AAC.21.1.141) | [6282203](https://pubmed.ncbi.nlm.nih.gov/6282203) | The abstract reports quantitative PK parameters including beta-phase half-life (0.91 h), plasma clearance (254 ml/min), and qualitative trends for volume of distribution, though specific mean V values are not listed. |
| `Höffler_1983.pdf` | Höffler D et al., Pharmacokinetics of Cefmenoxime in norm…, Arzneimittel-Forschung (1983) | popPK | 10 |  | [6303362](https://pubmed.ncbi.nlm.nih.gov/6303362) | The study is a pharmacokinetic investigation of cefmenoxime in humans using a two-compartment model, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Konishi_1986.pdf` | Konishi K, Pharmacokinetics of cefmenoxime in pati…, Antimicrobial agents and ch… (1986) | popPK | 10 | [10.1128/AAC.30.6.901](https://doi.org/10.1128/AAC.30.6.901) | [3468882](https://pubmed.ncbi.nlm.nih.gov/3468882) | The study reports quantitative compartmental pharmacokinetic parameters (Vd, t1/2) for cefmenoxime in humans with numeric values clearly visible in the abstract. |
| `Polk_1984.pdf` | Polk RE et al., Cefmenoxime pharmacokinetics in patient…, Antimicrobial agents and ch… (1984) | popPK | 10 | [10.1128/AAC.26.3.322](https://doi.org/10.1128/AAC.26.3.322) | [6095752](https://pubmed.ncbi.nlm.nih.gov/6095752) | The abstract provides quantitative disposition parameters including terminal half-lives for five renal function groups and qualitative descriptions of clearance and volume of distribution relationships, although specific numeric values for CL and Vd are not listed in the text. |
| `Sennello_1983.pdf` | Sennello LT et al., Effect of probenecid on the pharmacokin…, Antimicrobial agents and ch… (1983) | popPK | 10 | [10.1128/AAC.23.6.803](https://doi.org/10.1128/AAC.23.6.803) | [6311084](https://pubmed.ncbi.nlm.nih.gov/6311084) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, half-life, renal clearance) for cefmenoxime in humans, with specific numeric values provided in the text. |
| `Kataoka_1985.pdf` | Kataoka K et al., [Study on the prostatic tissue levels o…, Hinyokika kiyo. Acta urolog… (1985) | popPK | 9 |  | [2409786](https://pubmed.ncbi.nlm.nih.gov/2409786) | The study reports PK parameters (half-life, AUC ratio) for cefmenoxime in humans, but specific values for clearance (CL) and volume (V) are not explicitly stated, only half-life and tissue distribution data are provided. |

<sub>queue written 2026-10-07 11:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fukuda_2002 | irrelevant | 2 | 1 | Cefmenoxime is a comparator in a rabbit ocular study, and its specific pharmacokinetic parameters (AQC(max)) could not be calculated/reported, with raw data not provided. |
| popPK | Fukuda_2002_2 | irrelevant | 2 | 0 | Cefmenoxime is one of multiple drugs tested in an ocular study, and the abstract explicitly states its AQCmax could not be calculated by the one-compartment method, with no other quantitative PK parameters provided. |
| popPK | Höffler_1983 | relevant | 10 | 0 | The study is a pharmacokinetic investigation of cefmenoxime in humans using a two-compartment model, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefmenoxime%5D&body=Drug%3A%20cefmenoxime%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefmenoxime/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 11:05 UTC</sub>
