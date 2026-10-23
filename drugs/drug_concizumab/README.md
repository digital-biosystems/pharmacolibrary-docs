<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;concizumab&quot;}]"></div>

# concizumab

- **generic name:** concizumab
- **ATC codes:** `B02BX10`
- **DrugBank:** [DB12820](https://go.drugbank.com/drugs/DB12820) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Concizumab, a monoclonal antibody, is used to treat hemophilia A and hemophilia B. It is authorised in the European Union and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q104153457](https://www.wikidata.org/wiki/Q104153457) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0098 ‡ | L/h | 0.14 ml/h/kg | Cynomolgus monkeys | &gt;=52 | monkey | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Agersø_2014_reference](drugs/drug_concizumab/Concizumab_Agers2014_reference.md) |
| F | Fab | 0.93 |  | 93 % | Cynomolgus monkeys | &gt;=52 | monkey | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Agersø_2014_reference](drugs/drug_concizumab/Concizumab_Agers2014_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Agersø_2014_reference](drugs/drug_concizumab/Concizumab_Agers2014_reference.md) | — | 1-compartment (no model) | 2 | Agersø H et al., Pharmacokinetics of an anti-TFPI monocl…, European journal of pharmac… (2014) | [10.1016/j.ejps.2014.02.009](https://doi.org/10.1016/j.ejps.2014.02.009) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Eichler_2019_TFPI](drugs/drug_concizumab/pd_Eichler_2019_TFPI.md) | free TFPI ← concizumab · direct sigmoid Emax (Hill) effect | — | Eichler H et al., Concizumab restores thrombin generation…, Haemophilia : the official… (2019) | [10.1111/hae.13627](https://doi.org/10.1111/hae.13627) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Eichler_2019_peak_TG](drugs/drug_concizumab/pd_Eichler_2019_peak_TG.md) | peak thrombin generation ← concizumab · direct sigmoid Emax (Hill) effect | — | Eichler H et al., Concizumab restores thrombin generation…, Haemophilia : the official… (2019) | [10.1111/hae.13627](https://doi.org/10.1111/hae.13627) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:33 | 2:32 | 0/0/1 | 1/0/0 | 0/0/0 | 39,583/4,956 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Agersø_2014.pdf` | Agersø H et al., Pharmacokinetics of an anti-TFPI monocl…, European journal of pharmac… (2014) | popPK | 10 | [10.1016/j.ejps.2014.02.009](https://doi.org/10.1016/j.ejps.2014.02.009) | [24568891](https://pubmed.ncbi.nlm.nih.gov/24568891) | The study reports quantitative PK parameters (CL, Km, CLsat, bioavailability) for concizumab in Cynomolgus monkeys, with key values explicitly stated in the abstract. |
| `Yuan_2019.pdf` | Yuan D et al., A systems pharmacokinetic/pharmacodynam…, European journal of pharmac… (2019) | popPK | 9 | [10.1016/j.ejps.2019.105032](https://doi.org/10.1016/j.ejps.2019.105032) | [31394258](https://pubmed.ncbi.nlm.nih.gov/31394258) | The paper describes a systems PK/PD model for concizumab in humans and animals, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-05T18:31:49.670543+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eichler_2019 | relevant | 8 | 2 | The paper describes a compartmental PK model for concizumab (CL, V1, V2, Q) but explicitly states that the detailed description and numeric parameter values are provided in a separate manuscript, leaving only qualitative descriptions and PD parameters (EC50) in the text. |
| popPK | Miyazawa_2025 | irrelevant | 2 | 0 | The paper is a mechanistic mathematical modeling study of coagulation that uses a fixed concizumab concentration (4 nM) as an input parameter, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| PGx | Shima_2016 | not_relevant | 0 | 0 | The paper is a general review of therapies for hemophilia inhibitors and mentions concizumab only as a novel therapeutic concept without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Yuan_2019 | relevant | 9 | 0 | The paper describes a systems PK/PD model for concizumab in humans and animals, but the specific numeric parameter values are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 18:31 UTC</sub>
