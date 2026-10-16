<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;salsalate&quot;}]"></div>

# salsalate

- **generic name:** salsalate
- **ATC codes:** `N02BA06`
- **DrugBank:** [DB01399](https://go.drugbank.com/drugs/DB01399) · **PubChem:** [CID 5161](https://pubchem.ncbi.nlm.nih.gov/compound/5161)
- **molar mass:** 258.2262 g/mol (C14H10O5) — DrugBank
- **groups:** approved, investigational

## About

Salsalate is a non-steroidal anti-inflammatory drug of the salicylic acid group used to treat pain, arthritis, and fever. It is an approved medicine, though it carries a boxed warning and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1320691](https://www.wikidata.org/wiki/Q1320691) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:12 | 0:37 | 0/0/0 | 0/0/1 | 0/0/0 | 68,436/2,070 | einfracz / qwen3.8-27b | 8 | 4/5 | 7/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Cao_2011_Glu](drugs/drug_salsalate/pd_Cao_2011_Glu.md) | Blood glucose ← salicylate · disease-progression model | — | Cao Y et al., Modeling diabetes disease progression a…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185686](https://doi.org/10.1124/jpet.111.185686) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=salsalate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 22 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2012.pdf` | Cao Y et al., Pharmacokinetics of salsalate and salic…, Biopharmaceutics & drug dis… (2012) | popPK | 10 | [10.1002/bdd.1797](https://doi.org/10.1002/bdd.1797) | [22782506](https://pubmed.ncbi.nlm.nih.gov/22782506) | The study models the PK of salsalate and salicylic acid in rats, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence text. |
| `Williams_1986.pdf` | Williams ME et al., Salsalate kinetics in patients with chr…, Clinical pharmacology and t… (1986) | popPK | 8 | [10.1038/clpt.1986.65](https://doi.org/10.1038/clpt.1986.65) | [3956057](https://pubmed.ncbi.nlm.nih.gov/3956057) | The study reports quantitative kinetic parameters (AUC, t1/2) for salsalate's active metabolite, salicylic acid, in humans, which qualifies as salsalate pharmacokinetics. |
| `Xu_2022.pdf` | Xu JH et al., Application of Computational Simulation…, Protein and peptide letters (2022) | pd | 4 | [10.2174/0929866529666220805145244](https://doi.org/10.2174/0929866529666220805145244) | [35929627](https://www.ncbi.nlm.nih.gov/pubmed/35929627) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T06:12:52.502010+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abraham_1987 | irrelevant | 1 | 0 | The paper is a case report on the nephrotoxicity and prostaglandin inhibition of salsalate, reporting a single serum concentration and creatinine clearance values for the patient, but no quantitative pharmacokinetic parameters (such as CL, Vd, ka, or half-life) for salsalate. |
| popPK | Aguilar_2016 | irrelevant | 0 | 0 | The paper is a physicochemical study on the thermal decomposition and solid-state structure of salsalate, reporting NMR and mass spectrometry data, but contains no pharmacokinetic parameters (CL, V, ka, etc.) or in vivo/clinical data. |
| popPK | Barzilay_2014 | irrelevant | 0 | 0 | The study investigates the effect of salsalate on advanced glycation end products (AGEs) and glycemic markers, but reports no pharmacokinetic parameters (CL, V, ka, etc.) for salsalate. |
| popPK | Bellucci_2017 | irrelevant | 0 | 0 | The paper is a review focusing on the metabolic and glucose-regulatory effects of NSAIDs in diabetes, not a pharmacokinetic study of salsalate. |
| popPK | Cao_2011 | irrelevant | 2 | 1 | The study focuses on the pharmacodynamic effects of salsalate (via salicylate) on diabetes progression and body weight in rats, using a simple empirical equation for salicylate concentration rather than reporting standard compartmental PK parameters (CL, V, ka) for salsalate. |
| popPK | Cao_2012 | relevant | 10 | 0 | The study models the PK of salsalate and salicylic acid in rats, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence text. |
| popPK | Content_2024 | irrelevant | 0 | 0 | The study investigates microvascular endothelial function and uses salsalate as a pharmacological agent to inhibit NF-κB, rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for salsalate. |
| PD | Content_2024 | not_relevant | 2 | 1 | The study reports a qualitative improvement in microvascular function following a fixed dose of salsalate, but it does not measure drug concentrations or fit a concentration-effect model, nor does it provide numeric PD parameters (e.g., Emax, EC50) for salsalate itself. |
| popPK | Fleischman_2008 | irrelevant | 0 | 0 | This is a clinical trial evaluating the metabolic efficacy (glycemia/inflammation) of salsalate, not a pharmacokinetic study, and reports no disposition parameters like clearance or volume. |
| popPK | Goldfine_2008 | irrelevant | 2 | 0 | This is a clinical efficacy study focused on glucose and lipid homeostasis in type 2 diabetes, not a pharmacokinetic study reporting disposition parameters like CL, V, or ka. |
| popPK | Goldfine_2013 | irrelevant | 0 | 0 | The study evaluates metabolic effects (insulin resistance, glucose disposal) of salsalate but does not report pharmacokinetic parameters (CL, V, ka) for salsalate itself. |
| popPK | Harrison_1981 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| popPK | Kaushal_2025 | irrelevant | 0 | 0 | The paper is a mechanistic and clinical review of herbal interventions for hyperuricemia that mentions salsalate only as a classical agent with uricosuric/anti-inflammatory activity, without providing any quantitative pharmacokinetic parameters. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The study evaluates the metabolic effects of salsalate on insulin action and clearance, but does not report pharmacokinetic parameters (CL, V, ka, t1/2) for salsalate itself. |
| popPK | Krishnan_2015 | irrelevant | 0 | 0 | The study investigates eNOS activity and vasorelaxation in diabetic mice using salsalate as an IKKβ inhibitor, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for salsalate. |
| popPK | Meex_2011 | irrelevant | 0 | 0 | The study investigates metabolic effects (energy expenditure, insulin sensitivity) rather than pharmacokinetic parameters (clearance, volume, half-life) for salsalate. |
| popPK | Patel_2017 | irrelevant | 2 | 0 | This is a review article discussing salsalate in rats, and no original quantitative pharmacokinetic parameter values are provided in the evidence. |
| popPK | Penesova_2015 | irrelevant | 0 | 0 | The study investigates the effect of salsalate on insulin pharmacokinetics (clearance), not the pharmacokinetic parameters of salsalate itself. |
| popPK | Walson_1989 | irrelevant | 0 | 0 | The paper is a review that explicitly states salsalate is not included in the survey of drugs. |
| popPK | Williams_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of salsalate on microvascular function (vasodilation) and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for salsalate. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
