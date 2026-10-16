<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;bismuth subnitrate&quot;}]"></div>

# bismuth subnitrate

- **generic name:** bismuth subnitrate
- **ATC codes:** `A02BX12`
- **DrugBank:** [DB13209](https://go.drugbank.com/drugs/DB13209) · **PubChem:** not captured
- **molar mass:** 1461.98 g/mol (Bi5H9N4O22) — DrugBank
- **groups:** approved, withdrawn

## About

Bismuth subnitrate is a bismuth compound that was used as an antacid and anti-ulcer medicine for acid-related stomach disorders such as peptic ulcer and reflux disease. It is no longer in use, as it is listed as a withdrawn drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q126605705](https://www.wikidata.org/wiki/Q126605705) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:29 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 11,101/650 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bismuth_subnitrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1987 | irrelevant | 0 | 0 | The study is a clinical trial investigating the reduction of cisplatin nephrotoxicity by bismuth subnitrate, with no pharmacokinetic parameters (CL, V, etc.) reported for bismuth subnitrate. |
| popPK | Hadžiabdić_2015 | irrelevant | 0 | 0 | The paper focuses on the physical stability and formulation of bismuth subnitrate suspensions, not pharmacokinetic parameters. |
| PD | Hadžiabdić_2015 | not_relevant | 0 | 0 | The paper discusses the physical stability and formulation of bismuth subnitrate suspensions (sedimentation, flocculation) and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Heckers_1994 | irrelevant | 2 | 0 | The study reports only peak concentrations and AUC values for bismuth subnitrate, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population pharmacokinetic modeling. |
| PD | Heckers_1994 | not_relevant | 0 | 0 | The paper reports PK parameters (serum concentrations, urinary excretion) and correlations between exposure metrics, but does not report any pharmacodynamic effect or dose-response relationship. |
| popPK | Jaggi_2005 | irrelevant | 1 | 0 | The study focuses on the biodistribution of radionuclides (Bi-213) from an actinium generator, using bismuth subnitrate only as a competitive antagonist to modify renal uptake, not as the subject drug for PK parameter estimation. |
| popPK | Morikawa_1989 | irrelevant | 2 | 0 | The study describes qualitative pharmacokinetic trends for bismuth (plateau/peak timing) without reporting quantitative compartmental parameters (CL, V, ka, t1/2) in the provided text. |
| popPK | Morikawa_1990 | irrelevant | 2 | 0 | The study reports the pharmacokinetics of bismuth subnitrate, but no specific quantitative parameter values (CL, V, Ka, etc.) are present in the provided evidence. |
| PGx | Nakajima_2012 | not_relevant | 0 | 0 | The paper reports a clinical case of H. pylori eradication using bismuth subnitrate and mentions CYP2C19 genotype only in the context of previous PPI therapy, without reporting any pharmacogenomic effect on the PK or PD of bismuth subnitrate. |
| popPK | Slikkerveer_1989 | irrelevant | 1 | 0 | The paper is a review discussing general bismuth pharmacokinetics and toxicity, mentioning multicompartment kinetics and extreme half-lives (3.5 min to 22 years) for bismuth in humans, but it does not report specific quantitative population-PK parameter values (CL, V, ka) for bismuth subnitrate, nor does it provide a model with extractable numeric coefficients. |
| popPK | Takahashi_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisplatin, with bismuth subnitrate used only as a co-administered agent to alleviate renal impairment, and no PK parameters for bismuth subnitrate are reported. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
