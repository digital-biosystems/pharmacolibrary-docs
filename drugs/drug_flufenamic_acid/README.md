<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flufenamic acid&quot;}]"></div>

# flufenamic acid

- **generic name:** flufenamic acid
- **ATC codes:** `M01AG03`
- **DrugBank:** [DB02266](https://go.drugbank.com/drugs/DB02266) · **PubChem:** [CID 3371](https://pubchem.ncbi.nlm.nih.gov/compound/3371)
- **molar mass:** 281.2299 g/mol (C14H10F3NO2) — DrugBank
- **groups:** approved

## About

Flufenamic acid is a non-steroidal anti-inflammatory drug of the fenamate group used to treat inflammatory and rheumatic conditions. It is an approved medicine, though it is not widely used today and is available only in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416341](https://www.wikidata.org/wiki/Q416341) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:50 | 0:36 | 0/0/0 | 1/1/0 | 0/0/0 | 105,071/1,815 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dai_2010_ISlo2_1](drugs/drug_flufenamic_acid/pd_Dai_2010_ISlo2_1.md) | ISlo2.1 ← flufenamic acid · direct sigmoid Emax (Hill) effect | — | Dai L et al., Activation of Slo2.1 channels by niflum…, The Journal of general phys… (2010) | [10.1085/jgp.200910316](https://doi.org/10.1085/jgp.200910316) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Waterloo_2023_TAS2R14_activation_IP1_accumulation](drugs/drug_flufenamic_acid/pd_Waterloo_2023_TAS2R14_activation_IP1_accumulation.md) | TAS2R14 activation (IP1 accumulation) ← flufenamic acid · direct Emax (saturable) effect | — | Waterloo L et al., Discovery of 2-Aminopyrimidines as Pote…, Journal of medicinal chemis… (2023) | [10.1021/acs.jmedchem.2c01997](https://doi.org/10.1021/acs.jmedchem.2c01997) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flufenamic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| — | prostate gland | `AR` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1C3 (inhibitor), PPARA (activator), PPARG (target), PTGS1 (inhibitor), PTGS2 (inhibitor), TTR (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beckermann_1990 | irrelevant | 2 | 0 | The study focuses on etofenamate as the subject drug, with flufenamic acid being only a metabolite/comparator measured, and no specific compartmental PK parameters (CL, V, Q, ka) are provided for flufenamic acid alone. |
| popPK | Dai_2010 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on ion channels (Slo2.1) using flufenamic acid as a pharmacological activator, not a pharmacokinetic study. |
| popPK | Garg_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of flufenamic acid as a Slo2.1 channel modulator, containing no pharmacokinetic parameters. |
| popPK | Hashiguchi_2017 | irrelevant | 0 | 0 | The study is an electrophysiology investigation of ghrelin's effects on NPY neurons in mice, where flufenamic acid is used solely as a pharmacological antagonist for Trpm4 channels, not as the subject drug for PK analysis. |
| popPK | Koivisto_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology study of ion channels in rat cells where flufenamic acid is used only as a non-selective channel blocker/comparator, not a subject for pharmacokinetic analysis. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology study focusing on channel and gap junction mechanisms in guinea pig arteriolar cells, not on the pharmacokinetic disposition of flufenamic acid. |
| popPK | Quarmby_1996 | irrelevant | 0 | 0 | The paper studies calcium ion channels in Chlamydomonas using flufenamic acid as a pharmacological tool (in vitro), not its pharmacokinetics. |
| popPK | Selzer_2015 | irrelevant | 2 | 0 | The study focuses on in-vitro and in-silico skin absorption/diffusion modeling rather than systemic population pharmacokinetic parameters (CL, V, ka). |
| popPK | Tsai_2025 | irrelevant | 0 | 0 | The study investigates the vasorelaxant pharmacodynamics and mechanism of flufenamic acid in isolated porcine coronary arteries, not its pharmacokinetic parameters. |
| popPK | Waterloo_2023 | irrelevant | 0 | 0 | The paper focuses on the medicinal chemistry of TAS2R14 agonists where flufenamic acid serves only as a lead structure and comparator, with no pharmacokinetic data reported. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | The paper is an in-vitro study on ionic channels and does not report any pharmacokinetic parameters. |
| popPK | Zwart_1995 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the pharmacological effects of flufenamic acid on nicotinic acetylcholine receptors in Xenopus oocytes, not its pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
