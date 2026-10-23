<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;isocarboxazid&quot;}]"></div>

# isocarboxazid

- **generic name:** isocarboxazid
- **ATC codes:** `N06AF01`
- **DrugBank:** [DB01247](https://go.drugbank.com/drugs/DB01247) · **PubChem:** [CID 3759](https://pubchem.ncbi.nlm.nih.gov/compound/3759)
- **molar mass:** 231.2505 g/mol (C12H13N3O2) — DrugBank
- **groups:** approved

## About

Isocarboxazid is a non-selective monoamine oxidase inhibitor antidepressant used to treat depression and neurotic disorders. It remains an approved medicine but is rarely used, mainly when other antidepressants have failed, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409595](https://www.wikidata.org/wiki/Q409595) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | [Ahmad_2012_GUS](drugs/drug_isocarboxazid/pd_Ahmad_2012_GUS.md) | bacterial β-glucuronidase (GUS) activity ← isocarboxazid · inhibition effect | — | Ahmad S et al., Potential repurposing of known drugs as…, Journal of biomolecular scr… (2012) | [10.1177/1087057112444927](https://doi.org/10.1177/1087057112444927) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | [Ahmad_2012_GUS_2](drugs/drug_isocarboxazid/pd_Ahmad_2012_GUS_2.md) | endogenous GUS activity in living intact Escherichia coli ← isocarboxazid · inhibition effect | — | Ahmad S et al., Potential repurposing of known drugs as…, Journal of biomolecular scr… (2012) | [10.1177/1087057112444927](https://doi.org/10.1177/1087057112444927) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:23 | 0:22 | 0/0/0 | 1/0/0 | 0/0/0 | 7,151/708 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `el-Kommos_1988.pdf` | el-Kommos ME, Spectrophotometric determination of iso…, Journal - Association of Of… (1988) | pd | 4 | not captured | [3240968](https://www.ncbi.nlm.nih.gov/pubmed/3240968) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06T23:23:54.171070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition (IC50) values for isocarboxazid, not pharmacokinetic disposition parameters. |
| popPK | Das_2026 | irrelevant | 0 | 0 | The study is an in-vitro and computational investigation of a metabolite, using isocarboxazid only as a reference compound for molecular docking, with no pharmacokinetic parameters reported. |
| PD | Das_2026 | not_relevant | 0 | 0 | The paper focuses on D-(-)-ribofuranose; isocarboxazid is used only as a reference compound in molecular docking, with no PD or exposure-response data reported for it. |
| PGx | Larsen_2015 | not_relevant | 2 | 3 | Only a qualitative statement that isocarboxazid is not metabolized via CYP2D6; no gene variant effect on a PK/PD parameter is reported. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | This is a Cochrane review of ivermectin for COVID-19 efficacy/safety, with no isocarboxazid PK parameters reported. |
| PD | Popp_2022 | not_relevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and does not contain any pharmacodynamic or exposure-response data for isocarboxazid. |
| popPK | Preskorn_1993 | irrelevant | 0 | 0 | The paper is a clinical review discussing antidepressant classes in the elderly and does not report quantitative pharmacokinetic parameters for isocarboxazid. |
| PD | Preskorn_1993 | not_relevant | 1 | 0 | The text is a general review of antidepressants in the elderly that mentions isocarboxazid only as an example of an MAOI class, without providing any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for the drug. |
| popPK | Safferman_1992 | irrelevant | 0 | 0 | The paper is a case report on CNS toxicity following an MAOI switch and does not report any quantitative pharmacokinetic parameters for isocarboxazid. |
| PD | Safferman_1992 | not_relevant | 0 | 0 | The paper is a qualitative case report of adverse CNS toxicity following an MAOI switch and does not provide any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Tyacke_2018 | irrelevant | 1 | 1 | Isocarboxazid is only a blocking/pretreatment agent in a PET radioligand study of 11C-BU99008; no PK parameters of isocarboxazid itself are reported. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | This is a text-mining/NLP methods paper about DDI extraction, not a pharmacokinetic study of isocarboxazid; no PK parameters appear. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper describes a machine learning method for extracting drug-drug interactions from text and does not contain any pharmacodynamic data or analysis for isocarboxazid. |
| popPK | el-Kommos_1988 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | el-Kommos_1988 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying isocarboxazid, not a pharmacodynamic or exposure-response study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
