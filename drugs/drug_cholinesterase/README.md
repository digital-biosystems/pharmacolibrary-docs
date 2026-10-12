<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;cholinesterase&quot;}]"></div>

# cholinesterase

- **generic name:** cholinesterase
- **ATC codes:** `V03AB29`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Cholinesterase is an enzyme that breaks down choline-based esters, some of which act as neurotransmitters, and it is classified as an antidote. It is grouped under antidotes in the ATC system, suggesting use in poisoning situations, but no specific indication or usage details are given.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415635](https://www.wikidata.org/wiki/Q415635) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:36 | 1:30 | 0/0/0 | 0/1/0 | 0/0/0 | 99,285/4,320 | ollama / glm-5.3-flash | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span> | [Gobburu_2001_AChE_inhibition](drugs/drug_cholinesterase/pd_Gobburu_2001_AChE_inhibition.md) | acetylcholinesterase (AChE) activity inhibition ← ZNS 114-666 (NAP 226-90, rivastigmine metabolite) · direct sigmoid Emax (Hill) effect | — | Gobburu JV et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | [10.1177/00912700122012689](https://doi.org/10.1177/00912700122012689) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 137 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Somani_1991.pdf` | Somani SM et al., Physiological pharmacokinetic and pharm…, Drug metabolism and disposi… (1991) | popPK | 8 | not captured | [1680633](https://pubmed.ncbi.nlm.nih.gov/1680633) | Physiologic PK model of physostigmine in rat, but numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T18:36:12.138089+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Camargo-Ayala_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/in vitro enzyme inhibition study (IC50 values), not a pharmacokinetic study of cholinesterase disposition. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is an observational effectiveness study of cognitive trajectories (MMSE) with cholinesterase inhibitors, not a PK study; no disposition parameters are reported. |
| popPK | Girard_2022 | irrelevant | 0 | 0 | This is an in-vitro chemistry/enzyme-inhibition study of norbelladine derivatives; cholinesterase is only a drug target (IC50 values), with no PK disposition parameters for cholinesterase as a subject drug. |
| popPK | Gobburu_2001 | irrelevant | 1 | 8 | The subject drug is rivastigmine, a cholinesterase inhibitor, not cholinesterase itself; cholinesterase appears only as a pharmacodynamic target, though numeric PK values are present. |
| popPK | Hoffmann_2006 | irrelevant | 1 | 3 | Cholinesterase is only a biomarker of poisoning; the reported half-lives are for parathion and dimethoate, not for cholinesterase itself. |
| popPK | Kapustin_2026 | irrelevant | 0 | 0 | This is a neuropsychiatry/neuroimaging study of Alzheimer disease; cholinesterase inhibitors are only mentioned as a covariate, with no PK parameters reported. |
| popPK | Kennedy_2018 | irrelevant | 0 | 0 | This is a meta-analysis of cognitive decline outcomes in Alzheimer trials; no PK parameters (CL, V, ka, half-life) for cholinesterase inhibitors are reported. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | This is an observational clinical outcomes study of cholinesterase inhibitor efficacy in MCI, with no PK parameters (CL, V, ka, half-life, or PK model) for cholinesterase or any drug. |
| popPK | Mah_2017 | irrelevant | 0 | 0 | This is an in-vitro phytochemistry/pharmacology study of plant extracts; cholinesterase is only an assay enzyme target, with no PK parameters for cholinesterase as a drug. |
| popPK | Michael_2015 | irrelevant | 2 | 3 | The PK model and parameters (CL/V via two-compartment, half-lives) describe aldicarb, the ingested pesticide; cholinesterase is only a pharmacodynamic biomarker (IC50, activity), not the subject drug. |
| popPK | Nong_2008 | irrelevant | 1 | 2 | Cholinesterase is only the pharmacodynamic endpoint (inhibition target) for the insecticide carbaryl, not the subject drug; no cholinesterase disposition parameters are reported. |
| popPK | Petrov_2018 | irrelevant | 0 | 5 | The drug studied is C-547 (a cholinesterase inhibitor), not cholinesterase itself; cholinesterase is only the pharmacodynamic target, so this is a different drug's PK. |
| popPK | Poet_2004 | irrelevant | 0 | 0 | Cholinesterase is only the pharmacodynamic target/enzyme being inhibited; the PK model is for diazinon and its metabolite, not for cholinesterase as a subject drug. |
| popPK | Schneider_2015 | irrelevant | 0 | 0 | This is a clinical trial meta-analysis of cognitive decline in Alzheimer's disease; cholinesterase inhibitors are only mentioned as comparators, with no PK parameters for any drug. |
| popPK | Seng_2009 | irrelevant | 2 | 8 | The subject drug is pyridostigmine (a cholinesterase inhibitor); cholinesterase/AChE appears only as a pharmacodynamic biomarker, not as the drug whose disposition is modeled, though numeric PK values are present. |
| popPK | Smith_2014 | irrelevant | 0 | 0 | Cholinesterase is only the pharmacodynamic target; the subject compound is chlorpyrifos, a PBPK model with no cholinesterase disposition parameters, and no numeric PK values appear in the evidence. |
| popPK | Somani_1991 | relevant | 8 | 2 | Physiologic PK model of physostigmine in rat, but numeric parameter values are not present in the provided evidence. |
| popPK | Timchalk_2007 | irrelevant | 1 | 1 | Cholinesterase is only a pharmacodynamic target (B-esterase levels) in a PBPK model of chlorpyrifos, not the subject drug, and no ChE disposition parameters are given. |
| popPK | Yamamoto_1996 | irrelevant | 2 | 1 | Toxicodynamic (PD) study of cholinesterase inhibitors in rats; no PK disposition parameters (CL, V, ka) for cholinesterase itself are reported, only EC50 effect-compartment values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
