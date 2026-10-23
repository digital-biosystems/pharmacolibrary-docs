<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;dapivirine&quot;}]"></div>

# dapivirine

- **generic name:** dapivirine
- **ATC codes:** `G01AX17`
- **DrugBank:** [DB08639](https://go.drugbank.com/drugs/DB08639) · **PubChem:** [CID 214347](https://pubchem.ncbi.nlm.nih.gov/compound/214347)
- **molar mass:** 329.3984 g/mol (C20H19N5) — DrugBank
- **groups:** investigational

## About

Dapivirine is an investigational anti-HIV drug, a reverse-transcriptase inhibitor studied for preventing HIV infection. It is not an approved medicine; it remains investigational, though its ATC code places it among gynecological antiinfectives, consistent with topical vaginal use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27097831](https://www.wikidata.org/wiki/Q27097831) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Dezzutti_2016_p24](drugs/drug_dapivirine/pd_Dezzutti_2016_p24.md) | Cumulative p24 ← dapivirine · direct sigmoid Emax (Hill) effect | — | Dezzutti CS et al., Pharmacodynamic correlations using fres…, Medicine (2016) | [10.1097/MD.0000000000004174](https://doi.org/10.1097/MD.0000000000004174) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Romano_2009_inhibition_of_HIV_1_replication](drugs/drug_dapivirine/pd_Romano_2009_inhibition_of_HIV_1_replication.md) | inhibition of HIV-1 replication ← dapivirine · direct Emax (saturable) effect | — | Romano J et al., Safety and availability of dapivirine (…, AIDS research and human ret… (2009) | [10.1089/aid.2008.0184](https://doi.org/10.1089/aid.2008.0184) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:54 | 0:24 | 0/0/0 | 1/1/0 | 0/0/0 | 57,958/1,062 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dezzutti_2016 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic ex vivo challenge assays and drug levels, but does not report compartmental pharmacokinetic parameters (CL, V, Q, ka) for dapivirine. |
| popPK | Ho_2022 | irrelevant | 1 | 0 | The study reports only relative exposure ratios (AUC) rather than absolute quantitative pharmacokinetic parameters (CL, V, Q, ka). |
| popPK | Li_2022 | irrelevant | 2 | 3 | The paper is a narrative review of HIV RT inhibitors that mentions dapivirine's half-life and AUC in the context of its vaginal ring formulation, but it does not report detailed quantitative disposition parameters (CL, V, Q, ka) or a compartmental population PK model for dapivirine as the primary subject. |
| popPK | Nel_2009 | irrelevant | 2 | 0 | The abstract describes a pharmacokinetic study but only reports qualitative findings and concentration ranges (&lt;2 ng/mL) without specific numeric parameter values (CL, V, etc.) for dapivirine in the provided text. |
| popPK | Njai_2005 | irrelevant | 0 | 0 | The paper is an in-vitro virology study reporting EC50 values for viral inhibition, not pharmacokinetic parameters. |
| popPK | Romano_2009 | irrelevant | 1 | 0 | The study reports local tissue and fluid concentrations and plasma limits, but does not provide quantitative disposition parameters (CL, V, ka) or a compartmental/population PK model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
