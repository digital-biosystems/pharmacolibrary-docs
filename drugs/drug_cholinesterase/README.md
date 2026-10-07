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
| <span class="pk-badge pk-badge--red">rejected</span> | [Gobburu_2001_AChE_inhibition](drugs/drug_cholinesterase/pd_Gobburu_2001_AChE_inhibition.md) | acetylcholinesterase (AChE) activity inhibition ← ZNS 114-666 (NAP 226-90, rivastigmine metabolite) · direct sigmoid Emax (Hill) effect | — | Gobburu JV et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | [10.1177/00912700122012689](https://doi.org/10.1177/00912700122012689) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 137 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
