<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;cortisone&quot;}]"></div>

# cortisone

- **generic name:** cortisone
- **ATC codes:** `H02AB10`, `S01BA03`
- **DrugBank:** [DB14681](https://go.drugbank.com/drugs/DB14681) · **PubChem:** not captured
- **molar mass:** 360.444 g/mol (C21H28O5) — DrugBank
- **groups:** investigational

## About

Cortisone is a glucocorticoid corticosteroid with anti-inflammatory effects, used for inflammatory conditions and eye inflammation. It is considered an investigational drug in DrugBank and is not authorised by the European Medicines Agency, so it is not in widespread approved medical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423185](https://www.wikidata.org/wiki/Q423185) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:30 | 1:19 | 0/0/0 | 1/0/0 | 0/0/0 | 118,924/4,181 | einfracz / qwen3.8-27b | 9 | 1/8 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Solntseva_2023_IGly_des](drugs/drug_cortisone/pd_Solntseva_2023_IGly_des.md) | τdes ← Cortisone · direct sigmoid Emax (Hill) effect | — | Solntseva EI et al., Corticosteroids as Selective and Effect…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00287](https://doi.org/10.1021/acschemneuro.3c00287) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Solntseva_2023_IGly_peak](drugs/drug_cortisone/pd_Solntseva_2023_IGly_peak.md) | Ipeak ← Cortisone · direct sigmoid Emax (Hill) effect | — | Solntseva EI et al., Corticosteroids as Selective and Effect…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00287](https://doi.org/10.1021/acschemneuro.3c00287) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhat_2008 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of the inhibitor PF-915275 in cynomolgus monkeys, using prednisone only as a substrate probe to measure enzyme inhibition, and does not report PK parameters for cortisone. |
| popPK | Bhatt_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the radiotracer [18F]AS2471907, not cortisone, which is only mentioned as the enzyme's substrate. |
| popPK | Elder_2018 | irrelevant | 2 | 1 | The study is a diagnostic biomarker correlation analysis of salivary cortisone vs serum cortisol after ACTH stimulation, not a pharmacokinetic disposition study of cortisone (no CL, V, ka, or compartmental model reported). |
| popPK | Gu_2015 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study on the secretion of cortisol (and aldosterone) from human adrenocortical cells, not a pharmacokinetic study of cortisone. |
| popPK | Harrison_2019 | irrelevant | 2 | 2 | The study uses salivary cortisone as a diagnostic biomarker to estimate cortisol exposure (AUC) but does not report cortisone-specific pharmacokinetic disposition parameters (CL, V, ka, half-life). |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic screening of mineralocorticoid receptor activity and does not report pharmacokinetic parameters for cortisone. |
| popPK | Martínez-Borba_2026 | irrelevant | 0 | 0 | The study is a clinical trial protocol for psychological intervention in long COVID-19 that uses hair cortisone only as a biomarker/correlate of stress, not to measure cortisone pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Möbus_1999 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme kinetics study of 11beta-hydroxysteroid dehydrogenase activity in renal cell lines, not a pharmacokinetic study of cortisone disposition. |
| popPK | NGankam_2002 | irrelevant | 1 | 0 | The study measures cortisol metabolites in endogenous circulation rather than characterizing the pharmacokinetics of exogenous cortisone dosing. |
| popPK | Pan_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of cortisone analogues on Kv1 ion channels in vitro, not on pharmacokinetic disposition parameters. |
| popPK | Ploeger_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glycyrrhetic acid, with cortisone serving only as a diagnostic biomarker (cortisol/cortisone ratio) for enzyme inhibition. |
| popPK | Ponzetto_2026 | irrelevant | 0 | 0 | This is an acute exercise endocrinology study measuring steroid concentrations, not a pharmacokinetic study of cortisone as a subject drug with disposition parameters. |
| popPK | Sanabria-Mazo_2020 | irrelevant | 0 | 0 | The study is a clinical trial protocol for psychological interventions for pain and depression, and cortisone is measured only as a physiological biomarker (hair/serum), not as a pharmacokinetic subject. |
| popPK | Solntseva_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cortisone's effect on glycine and GABA receptors, not a pharmacokinetic study of its disposition parameters. |
| popPK | Soma_2005 | irrelevant | 4 | 2 | The study reports pharmacokinetic parameters for the administered drug dexamethasone, while cortisone is only characterized as an endogenous biomarker affected by dexamethasone (PK/PD effect model), not as the subject drug for PK characterization. |
| popPK | Soma_2011 | irrelevant | 1 | 2 | The study measures cortisone levels only to assess the suppressive effect of triamcinolone acetonide on endogenous secretion, rather than characterizing the pharmacokinetic disposition parameters of cortisone as the subject drug. |
| popPK | Vincze_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperacillin and tazobactam, using cortisone only as a monitored biomarker, and reports no quantitative PK parameters for cortisone. |
| popPK | Wright_2013 | irrelevant | 1 | 0 | The study is a pharmacokinetic analysis of the drug MK-0916, while cortisone is used only as a stable-isotope probe to measure enzyme inhibition. |
| popPK | Xu_2014 | irrelevant | 1 | 0 | The study is a PBPK/PD model for Glycyrrhizin (GL) and its metabolite Glycyrrhetic acid (GA); cortisone is merely a downstream output in the pharmacodynamic module (cortisol-to-cortisone conversion) and not the subject of the PK study, with no specific quantitative PK parameters (CL, V) for cortisone provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
