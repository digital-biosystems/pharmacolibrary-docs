<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;parsaclisib&quot;}]"></div>

# parsaclisib

- **generic name:** parsaclisib
- **ATC codes:** `L01EM05`
- **DrugBank:** [DB14867](https://go.drugbank.com/drugs/DB14867) · **PubChem:** none
- **molar mass:** 432.88 g/mol (C20H22ClFN6O2) — DrugBank
- **groups:** investigational

## About

Parsaclisib is an investigational phosphatidylinositol-3-kinase inhibitor evaluated for treating B-cell malignancies. No specific administration route is stated in the facts. It is currently under investigation, with one application in the European Union having been withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q76802661](https://www.wikidata.org/wiki/Q76802661), [Wikipedia](https://en.wikipedia.org/wiki/Parsaclisib?oldid=1385114591) (CC BY-SA 4.0), the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">mouse</span> | [Kunieda_2025_NanoBRET](drugs/drug_parsaclisib/pd_Kunieda_2025_NanoBRET.md) | PI3Kδ residence time (NanoBRET) ← Parsaclisib · target-mediated drug disposition | — | Kunieda K et al., A long-lasting PI3Kδ inhibitor zandelis…, American journal of cancer… (2025) | [10.62347/JCGQ1004](https://doi.org/10.62347/JCGQ1004) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">mouse</span> | [Kunieda_2025_SPR](drugs/drug_parsaclisib/pd_Kunieda_2025_SPR.md) | PI3Kδ binding (SPR sensorgram) ← Parsaclisib · target-mediated drug disposition | — | Kunieda K et al., A long-lasting PI3Kδ inhibitor zandelis…, American journal of cancer… (2025) | [10.62347/JCGQ1004](https://doi.org/10.62347/JCGQ1004) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Hamadani_2023_QT_interval](drugs/drug_parsaclisib/pd_Hamadani_2023_QT_interval.md) | QT interval · stimulation effect | — | Hamadani M et al., Safety and efficacy of parsaclisib in c…, Hematological oncology (2023) | [10.1002/hon.3209](https://doi.org/10.1002/hon.3209) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:29 | 0:06 | 0/0/0 | 2/1/0 | 0/0/0 | 7,095/397 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hamadani_2023 | irrelevant | 0 | 0 | The paper reports safety and efficacy outcomes for a Phase 1 clinical trial and contains no pharmacokinetic parameter estimates (CL, V, t1/2, etc.). |
| PGx | Hamadani_2023 | not_relevant | 0 | 0 | The paper reports clinical safety and efficacy outcomes of a combination therapy but contains no data on gene variants, genotypes, or their influence on pharmacokinetics or pharmacodynamics. |
| popPK | Kunieda_2025 | irrelevant | 2 | 0 | Parsaclisib is used only as a comparator agent in binding kinetics and wash-out experiments, not as the subject of a pharmacokinetic parameter study; no PK disposition values (CL, V, ka) are reported for it. |
| PGx | Kunieda_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanisms and PK/PD of zandelisib, not the effect of gene variants on the PK or PD of parsaclisib. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bparsaclisib%5D&body=Drug%3A%20parsaclisib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_parsaclisib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
