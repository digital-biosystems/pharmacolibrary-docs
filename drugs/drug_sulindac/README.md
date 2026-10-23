<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;sulindac&quot;}]"></div>

# sulindac

- **generic name:** sulindac
- **ATC codes:** `M01AB02`
- **DrugBank:** [DB00605](https://go.drugbank.com/drugs/DB00605) · **PubChem:** [CID 1548887](https://pubchem.ncbi.nlm.nih.gov/compound/1548887)
- **molar mass:** 356.411 g/mol (C20H17FO3S) — DrugBank
- **groups:** approved, investigational

## About

Sulindac is a non-steroidal anti-inflammatory drug used to treat painful inflammatory joint conditions such as osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, gout attacks, and enthesopathy. It is an approved medicine and remains in use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q963093](https://www.wikidata.org/wiki/Q963093) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Marshall_1991_SF_PLA2_activity](drugs/drug_sulindac/pd_Marshall_1991_SF_PLA2_activity.md) | synovial fluid phospholipase A2 activity ← sulindac sulfide · direct Emax (saturable) effect | — | Marshall LA et al., Evaluation of antirheumatic drugs for t…, The Journal of rheumatology (1991) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sulindac).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AKR1B1 (inhibitor), AKR1B10 (inhibitor), MAPK3 (inhibitor), PPARD (negative modulator), PTGDR2 (target), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:21 | 0:27 | 0/0/0 | 0/1/0 | 0/0/0 | 56,746/1,454 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berg_2013.pdf` | Berg AK et al., Population pharmacokinetic model for ca…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.26](https://doi.org/10.1002/jcph.26) | [23436338](https://pubmed.ncbi.nlm.nih.gov/23436338) | The paper reports a population pharmacokinetic model for sulindac, but no numeric parameter values are present in the provided evidence. |
| `Sung_2020.pdf` | Sung JW et al., Population Pharmacokinetics of Sulindac…, Pharmaceutical research (2020) | popPK | 10 | [10.1007/s11095-020-2765-6](https://doi.org/10.1007/s11095-020-2765-6) | [31993760](https://pubmed.ncbi.nlm.nih.gov/31993760) | The study is a population PK analysis of sulindac in humans, but the specific numeric parameter values (CL, V, etc.) are not included in the provided evidence. |

<sub>queue written 2026-10-07 01:21 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berg_2013 | relevant | 10 | 0 | The paper reports a population pharmacokinetic model for sulindac, but no numeric parameter values are present in the provided evidence. |
| popPK | Felts_2008 | irrelevant | 0 | 0 | The study is an in-vitro structure-activity relationship (SAR) and mechanistic study of sulindac derivatives as PPARγ agonists, reporting no pharmacokinetic parameters. |
| popPK | Fogli_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of a sulindac derivative on cancer cells, containing no pharmacokinetic data. |
| popPK | Hirai_2002 | irrelevant | 0 | 0 | The paper studies the receptor-binding mechanism of indomethacin and uses sulindac only as a negative control, containing no pharmacokinetic parameters. |
| popPK | Marshall_1991 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating enzyme inhibition (phospholipase A2) and does not report pharmacokinetic parameters like clearance or volume for sulindac. |
| popPK | Martinez_2022 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of sulindac for musculoskeletal symptoms and quality of life, not its pharmacokinetics, and no PK parameters are reported. |
| popPK | Monasterolo_2002 | irrelevant | 0 | 0 | The study is a renal physiology investigation in rats where sulindac is used as a co-administered agent to assess renal effects, not a study of sulindac's pharmacokinetic disposition parameters. |
| popPK | Moon_2002 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of sulindac analogues on cell viability and microtubules, reporting no pharmacokinetic parameters (CL, V, ka, t1/2) for sulindac. |
| popPK | Sharma_2001 | irrelevant | 0 | 0 | The study is an in vitro/in ovo angiogenesis assay measuring efficacy (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume for sulindac. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating the interaction of sulindac with GABA receptors, not a pharmacokinetic study. |
| popPK | Sun_2002 | irrelevant | 0 | 0 | The study investigates CP-461, a different drug (a sulindac analog), not sulindac itself. |
| popPK | Sung_2020 | relevant | 10 | 0 | The study is a population PK analysis of sulindac in humans, but the specific numeric parameter values (CL, V, etc.) are not included in the provided evidence. |
| popPK | Thomas_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of cancer cell signaling where sulindac is used as a signaling inhibitor, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulindac%5D&body=Drug%3A%20sulindac%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulindac/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
