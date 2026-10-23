<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tinzaparin&quot;}]"></div>

# tinzaparin

- **generic name:** tinzaparin
- **ATC codes:** `B01AB10`
- **DrugBank:** [DB06822](https://go.drugbank.com/drugs/DB06822) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tinzaparin is a low molecular weight heparin used as an anticoagulant, including in the treatment of pulmonary embolism. It is an approved medication and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817252](https://www.wikidata.org/wiki/Q20817252) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.891 | L/h | 891 mL/h | patients with severe and end-stage renal impairment | 623 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Gouin-Thibault_2024_reference](drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference.md) |
| V | V | 3.661 | L | 3661 mL | patients with severe and end-stage renal impairment | 623 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Gouin-Thibault_2024_reference](drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference.md) |
| ka | kabs | 0.079 | 1/h | 0.079 h -1 | patients with severe and end-stage renal impairment | 623 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Gouin-Thibault_2024_reference](drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Gouin-Thibault_2024_reference](drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference.md) | — | 1-compartment (no model) | 4 | Gouin-Thibault I et al., Tinzaparin, an alternative to subcutane…, Journal of thrombosis and h… (2024) | [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Johansen_1994_reference](drugs/drug_tinzaparin/Tinzaparin_Johansen1994_reference.md) | — | 1-compartment (no model) | 0 | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Brindley_1993_E](drugs/drug_tinzaparin/pd_Brindley_1993_E.md) | anticoagulant effect ← tinzaparin · direct sigmoid Emax (Hill) effect | — | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:51 | 5:33 | 0/1/1 | 1/0/0 | 0/0/0 | 59,351/17,540 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barrett_2001.pdf` | Barrett JS et al., Population pharmacodynamics in patients…, International journal of cl… (2001) | popPK | 10 | not captured | [11680668](https://pubmed.ncbi.nlm.nih.gov/11680668) | The paper reports quantitative population pharmacokinetic parameters (CL, Vc, half-life) for tinzaparin in humans with specific numeric values and confidence intervals. |
| `Delavenne_2025.pdf` | Delavenne X et al., Tinzaparin Pharmacokinetics in Patients…, Thrombosis and haemostasis (2025) | popPK | 10 | [10.1055/a-2740-1841](https://doi.org/10.1055/a-2740-1841) | [41290197](https://pubmed.ncbi.nlm.nih.gov/41290197) | The paper describes a population PK model for tinzaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Kuhle_2005.pdf` | Kuhle S et al., Dose-finding and pharmacokinetics of th…, Thrombosis and haemostasis (2005) | popPK | 10 | [10.1160/TH05-03-0215](https://doi.org/10.1160/TH05-03-0215) | [16411388](https://pubmed.ncbi.nlm.nih.gov/16411388) | The study is a population PK analysis of tinzaparin in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Johansen_1994.pdf` | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | popPK | 9 | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) | [7997983](https://pubmed.ncbi.nlm.nih.gov/7997983) | The study reports quantitative PK parameters (half-lives, accumulation ratios, excretion percentages) for tinzaparin in rats, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| `Brindley_1993.pdf` | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | popPK | 8 | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) | [8212732](https://pubmed.ncbi.nlm.nih.gov/8212732) | The study reports PK/PD modeling of tinzaparin in dogs, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters (EC50). |
| `Hainer_2002.pdf` | Hainer JW et al., Intravenous and subcutaneous weight-bas…, American journal of kidney… (2002) | popPK | 8 | [10.1053/ajkd.2002.34911](https://doi.org/10.1053/ajkd.2002.34911) | [12200805](https://pubmed.ncbi.nlm.nih.gov/12200805) | The study reports quantitative pharmacokinetic parameters (half-life, clearance reduction) for tinzaparin in humans. |

<sub>queue written 2026-10-05T16:46:33.033847+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brindley_1993 | relevant | 8 | 2 | The study reports PK/PD modeling of tinzaparin in dogs, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters (EC50). |
| popPK | Delavenne_2025 | relevant | 10 | 0 | The paper describes a population PK model for tinzaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Kuhle_2005 | relevant | 10 | 2 | The study is a population PK analysis of tinzaparin in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 16:46 UTC</sub>
