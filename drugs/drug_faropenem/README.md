<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;faropenem&quot;}]"></div>

# faropenem

- **generic name:** faropenem
- **ATC codes:** `J01DI03`
- **DrugBank:** [DB12190](https://go.drugbank.com/drugs/DB12190) · **PubChem:** [CID 65894](https://pubchem.ncbi.nlm.nih.gov/compound/65894)
- **molar mass:** 285.316 g/mol (C12H15NO5S) — DrugBank
- **groups:** investigational

## About

Faropenem is an investigational beta-lactam antibacterial drug, studied for treating bacterial infections. It is not an approved medicine in the European Union and remains in the investigational stage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1397045](https://www.wikidata.org/wiki/Q1397045) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gumbo_2020_Mab](drugs/drug_faropenem/pd_Gumbo_2020_Mab.md) | Mycobacterium abscessus subspecies abscessus (Mab) bacterial load ← faropenem · direct sigmoid Emax (Hill) effect | — | Gumbo T et al., Repurposing drugs for treatment of Myco…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkz523](https://doi.org/10.1093/jac/dkz523) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gill_2010_survival](drugs/drug_faropenem/pd_Gill_2010_survival.md) | survival ← faropenem · direct Emax (saturable) effect | — | Gill SC et al., Pharmacokinetic-pharmacodynamic assessm…, Antimicrobial agents and ch… (2010) | [10.1128/AAC.00737-08](https://doi.org/10.1128/AAC.00737-08) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:05 | 0:17 | 0/0/0 | 2/0/0 | 0/0/0 | 17,720/1,342 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gill_2010 | irrelevant | 2 | 0 | The study is a PK-PD efficacy trial in mice and the provided text reports efficacy metrics (ED50, %T&gt;MIC) but does not contain specific quantitative disposition parameters (CL, V, ka) or a PK model for faropenem. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro efficacy and MIC determination for Mycobacterium abscessus treatment, not a pharmacokinetic study of faropenem disposition. |
| popPK | Yamada_2022 | irrelevant | 1 | 0 | The study uses existing population PK models for faropenem in Monte Carlo simulations but does not report new quantitative PK parameter values for the drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
