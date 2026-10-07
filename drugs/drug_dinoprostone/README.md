<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;dinoprostone&quot;}]"></div>

# dinoprostone

- **generic name:** dinoprostone
- **ATC codes:** `G02AD02`
- **DrugBank:** [DB00917](https://go.drugbank.com/drugs/DB00917) · **PubChem:** [CID 5280360](https://pubchem.ncbi.nlm.nih.gov/compound/5280360)
- **molar mass:** 352.4651 g/mol (C20H32O5) — DrugBank
- **groups:** approved, investigational

## About

Dinoprostone, a prostaglandin, is used as a uterotonic in gynecological care, including for uterine conditions. It is an approved medicine and is included on the WHO list of essential medicines, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416554](https://www.wikidata.org/wiki/Q416554) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:11 | 3:29 | 0/0/0 | 0/0/0 | 0/0/0 | 219,976/2,190 | einfracz / qwen3.8-27b | 13 | 0/8 | 13/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dinoprostone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLCO1A2` substrate, `SLCO2B1` substrate | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `SLC22A7` inhibitor/substrate, `SLCO1B1` substrate | DrugBank actor |
| metabolism | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC4` substrate, `SLC22A2` inhibitor, `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (inhibitor), PTGDR2 (target), PTGER1 (target), PTGER2 (target), PTGER3 (target), PTGER4 (target), PTGFR (target), SLC22A11 (inhibitor), SLC51A (substrate), SLC51B (substrate), SLCO1C1 (substrate), SLCO2A1 (substrate), SLCO3A1 (substrate), SLCO4A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balki_2012 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of contractile efficacy and does not report any pharmacokinetic parameters for dinoprostone. |
| PGx | Candappa_2014 | not_relevant | 0 | 0 | The paper evaluates the pharmacodynamic effect of dinoprostone on cervical dilation in ewes but does not report any association between gene variants/genotypes and PK or PD parameters. |
| popPK | Huntjens_2006 | irrelevant | 0 | 0 | The study focuses on the PK/PD modeling of naproxen, not dinoprostone. |
| popPK | Huntjens_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of diclofenac and rofecoxib, not dinoprostone. |
| popPK | Huntjens_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of naproxen, not dinoprostone. |
| popPK | Jiang_2021 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of KH176m (a metabolite of sonlicromanol) as an mPGES-1 inhibitor and does not report pharmacokinetic parameters for dinoprostone. |
| popPK | Sahota_2015 | irrelevant | 0 | 0 | The study focuses on naproxen pharmacokinetics and toxicity in rats, with no data on dinoprostone. |
| PGx | Sheibani_2018 | not_relevant | 0 | 0 | The paper is a general safety review of labour induction agents and only mentions pharmacogenomics as a future possibility, without reporting any specific genetic effects on dinoprostone PK/PD. |
| popPK | Singhai_2024 | irrelevant | 0 | 0 | The study is a clinical trial comparing aescin and diclofenac for postoperative pain and inflammatory markers, and does not report pharmacokinetic parameters for dinoprostone. |
| popPK | Sobrino_2023 | irrelevant | 0 | 0 | The paper is a clinical trial for gene therapy in Chronic Granulomatous Disease and does not study the pharmacokinetics of dinoprostone. |
| popPK | Sobrino_2025 | irrelevant | 0 | 0 | The paper is a clinical trial report on gene therapy for sickle cell disease and contains no pharmacokinetic data for dinoprostone. |
| popPK | Tonduru_2022 | irrelevant | 0 | 0 | The paper is a structural modeling study of OATP transporters and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for dinoprostone, which is only mentioned as a substrate. |
| popPK | Tunc_2026 | irrelevant | 0 | 0 | The study evaluates clinical outcomes and predictive factors (abdominal fat thickness) for labor induction success, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for dinoprostone. |
| popPK | Unmanatakoon_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on human periodontal ligament cells investigating Endothelin-1 and COX-2/PGE2 expression, with no pharmacokinetic parameters for dinoprostone reported. |
| PGx | Wing_2015 | not_relevant | 0 | 0 | The text is a general review stating that there are currently no pharmacogenomic findings affecting the dosing of prostaglandins or oxytocin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
