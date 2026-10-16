<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;imiglucerase&quot;}]"></div>

# imiglucerase

- **generic name:** imiglucerase
- **ATC codes:** `A16AB02`
- **DrugBank:** [DB00053](https://go.drugbank.com/drugs/DB00053) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Imiglucerase is an enzyme replacement medicine used to treat Gaucher's disease, a lipid storage disorder that can affect organs such as the liver and spleen. It is authorised in the European Union and is used mainly in specialist care for this rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2620206](https://www.wikidata.org/wiki/Q2620206) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:13 | 0:24 | 0/1/0 | 0/0/0 | 0/0/0 | 17,157/1,152 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Berger_2019_reference](drugs/drug_imiglucerase/Imiglucerase_Berger2019_reference.md) | — | 1-compartment (no model) | 2 | Berger J et al., Intra-monocyte Pharmacokinetics of Imig…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0708-8](https://doi.org/10.1007/s40262-018-0708-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=imiglucerase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Glucocerebroside (other/unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berger_2019.pdf` | Berger J et al., Intra-monocyte Pharmacokinetics of Imig…, Clinical pharmacokinetics (2019) | popPK | 9 | [10.1007/s40262-018-0708-8](https://doi.org/10.1007/s40262-018-0708-8) | [30128966](https://pubmed.ncbi.nlm.nih.gov/30128966) | The study reports a population PK model for imiglucerase in humans with quantitative half-lives (0.36 and 9.7 days), but specific clearance (CL) and volume (V) parameters are likely in figures or supplementary material not provided in the text. |
| `Grabowski_2009.pdf` | Grabowski GA et al., Dose-response relationships for enzyme…, Genetics in medicine : offi… (2009) | pd | 4 | [10.1097/GIM.0b013e31818e2c19](https://doi.org/10.1097/GIM.0b013e31818e2c19) | [19265748](https://www.ncbi.nlm.nih.gov/pubmed/19265748) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-15T03:13:00.160864+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abian_2011 | not_relevant | 0 | 0 | The paper studies the physicochemical stability of imiglucerase and the effect of miglustat on it in vitro, rather than reporting pharmacogenomic effects on PK or PD parameters in patients. |
| PGx | Basiri_2023 | not_relevant | 0 | 0 | The study examines GBA1 genotype as a risk factor for the clinical event avascular osteonecrosis (AVN) and compares biomarker levels between drugs, but does not report how a gene variant alters the pharmacokinetic or pharmacodynamic parameters (e.g., clearance, volume of distribution) of imiglucerase itself. |
| popPK | Berger_2019 | relevant | 9 | 2 | The study reports a population PK model for imiglucerase in humans with quantitative half-lives (0.36 and 9.7 days), but specific clearance (CL) and volume (V) parameters are likely in figures or supplementary material not provided in the text. |
| PGx | Darling_2021 | not_relevant | 2 | 5 | The paper describes a pharmacodynamic response of levodopa in a patient with a GBA gene mutation, rather than how a gene variant affects the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Dasgupta_2013 | not_relevant | 0 | 0 | The study compares transcriptomic effects of different drugs in a fixed genotype mouse model and does not investigate how human gene variants or patient genotypes influence the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Germain_2004 | not_relevant | 0 | 0 | The text is a general overview of Gaucher disease and its treatments, lacking specific pharmacogenomic or quantitative PK/PD effect data. |
| popPK | Grabowski_2009 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Higashi_2024 | not_relevant | 0 | 0 | The paper reports on the therapeutic efficacy of ambroxol as a chaperone therapy for Gaucher disease and mentions the use of imiglucerase in the context of a case study, but it does not measure or report any pharmacokinetic (e.g., clearance, half-life) or pharmacodynamic (e.g., enzyme activity, substrate reduction) parameters of imiglucerase being modified by a genetic variant. |
| PGx | Ibrahim_2016 | not_relevant | 0 | 0 | The paper compares clinical outcomes of two different drugs (eliglustat vs imiglucerase) but does not report pharmacokinetic or pharmacodynamic parameters modified by specific gene variants. |
| PGx | Pleat_2016 | not_relevant | 0 | 0 | The paper reports on clinical stability (hemoglobin, platelets, organ volumes) when switching enzyme therapies, not on how a specific pharmacogenomic variant (CYP2D6) affects the pharmacokinetic or pharmacodynamic parameters of imiglucerase. |
| PGx | Scott_2015 | not_relevant | 2 | 0 | The paper reviews eliglustat and mentions imiglucerase only as a comparator in non-inferiority trials, without reporting any pharmacogenomic effects on imiglucerase's PK or PD parameters. |
| PGx | Starosta_2025 | not_relevant | 1 | 0 | The study focuses on developing a liver fibrosis score for Gaucher disease and does not analyze the impact of gene variants on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Van_2016 | not_relevant | 1 | 2 | The paper is a review of Gaucher disease treatments and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| popPK | Vigan_2014 | irrelevant | 0 | 0 | The study is a simulation/methodological paper on discrete time-to-event models for bone events, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for imiglucerase. |
| PGx | Yassin_2008 | not_relevant | 2 | 0 | The paper describes a specific genotype in a single patient and notes the need for a high dose for imiglucerase, but it does not report a pharmacogenomic effect on a PK or PD parameter in a comparative or quantitative manner. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:12 UTC</sub>
