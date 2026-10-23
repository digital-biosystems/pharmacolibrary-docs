<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;quinupramine&quot;}]"></div>

# quinupramine

- **generic name:** quinupramine
- **ATC codes:** `N06AA23`
- **DrugBank:** [DB13246](https://go.drugbank.com/drugs/DB13246) · **PubChem:** not captured
- **molar mass:** 304.437 g/mol (C21H24N2) — DrugBank
- **groups:** approved

## About

Quinupramine is a tricyclic antidepressant used to treat depression. It is an approved antidepressant, classified among non-selective monoamine reuptake inhibitors, though it is not widely used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7272541](https://www.wikidata.org/wiki/Q7272541) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Bouquet_1982_reference](drugs/drug_quinupramine/Quinupramine_Bouquet1982_reference.md) | — | 1-compartment (no model) | 5 | Bouquet S et al., [Crossover pharmacokinetic study of qui…, L'Encephale (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sakamoto_1987_3H_quinupramine_binding](drugs/drug_quinupramine/pd_Sakamoto_1987_3H_quinupramine_binding.md) | specific binding of [3H]quinupramine to rat brain membrane fractions ← [3H]quinupramine · direct sigmoid Emax (Hill) effect | — | Sakamoto H et al., Binding characteristics of [3H]quinupra…, Japanese journal of pharmac… (1987) | [10.1254/jjp.45.27](https://doi.org/10.1254/jjp.45.27) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:42 | 0:11 | 0/1/0 | 1/0/0 | 0/0/0 | 8,600/758 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouquet_1982.pdf` | Bouquet S et al., [Crossover pharmacokinetic study of qui…, L'Encephale (1982) | popPK | 10 | not captured | [7151737](https://pubmed.ncbi.nlm.nih.gov/7151737) | Human crossover PK study with numeric Vd, half-life, AUC, F, and CLr values directly reported in the abstract. |
| `Sakamoto_1987_2.pdf` | Sakamoto H et al., Effects of quinupramine on the central…, Japanese journal of pharmac… (1987) | popPK | 7 | [10.1254/jjp.45.169](https://doi.org/10.1254/jjp.45.169) | [3437586](https://pubmed.ncbi.nlm.nih.gov/3437586) | Rat PK study of quinupramine in plasma and brain after oral dosing, but the evidence contains no numeric disposition parameter values (only % radioactivity), so values are likely in figures/tables not provided. |
| `Shin_2007.pdf` | Shin SC et al., Development and biopharmaceutical evalu…, Pharmaceutical development… (2007) | popPK | 7 | [10.1080/10837450701555695](https://doi.org/10.1080/10837450701555695) | [17963142](https://pubmed.ncbi.nlm.nih.gov/17963142) | PK and bioavailability of quinupramine were studied in rats after IV/oral/transdermal dosing, but the numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-06T23:42:54.040002+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Sakamoto_1987 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain membranes; no PK disposition parameters for quinupramine. |
| PD | Sakamoto_1987 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (KD, Bmax) and competition data, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for drug effects in vivo or in a functional assay. |
| popPK | Sakamoto_1987_2 | relevant | 7 | 2 | Rat PK study of quinupramine in plasma and brain after oral dosing, but the evidence contains no numeric disposition parameter values (only % radioactivity), so values are likely in figures/tables not provided. |
| popPK | Shin_2007 | relevant | 7 | 3 | PK and bioavailability of quinupramine were studied in rats after IV/oral/transdermal dosing, but the numeric parameter values are not present in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:42 UTC</sub>
