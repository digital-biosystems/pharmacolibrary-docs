<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;acadesine&quot;}]"></div>

# acadesine

- **generic name:** acadesine
- **ATC codes:** `C01EB13`
- **DrugBank:** [DB04944](https://go.drugbank.com/drugs/DB04944) · **PubChem:** [CID 17513](https://pubchem.ncbi.nlm.nih.gov/compound/17513)
- **molar mass:** 258.2313 g/mol (C9H14N4O5) — DrugBank
- **groups:** investigational

## About

Acadesine is an investigational heart medication studied for cardiac conditions. It has not been approved and remains under investigation, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4671562](https://www.wikidata.org/wiki/Q4671562) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:46 | 1:06 | 0/0/0 | 1/0/0 | 0/0/0 | 1,670/164 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 1/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Galiñanes_1992_CK](drugs/drug_acadesine/pd_Gali_anes_1992_CK.md) | creatine kinase leakage ← acadesine · stimulation effect | — | Galiñanes M et al., Acadesine and myocardial protection. St…, Circulation (1992) | [10.1161/01.cir.86.2.598](https://doi.org/10.1161/01.cir.86.2.598) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Galiñanes_1992_IMP](drugs/drug_acadesine/pd_Gali_anes_1992_IMP.md) | tissue inosine monophosphate content ← acadesine · stimulation effect | — | Galiñanes M et al., Acadesine and myocardial protection. St…, Circulation (1992) | [10.1161/01.cir.86.2.598](https://doi.org/10.1161/01.cir.86.2.598) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Galiñanes_1992_postischemic_recovery_of_aortic_flow](drugs/drug_acadesine/pd_Gali_anes_1992_postischemic_recovery_of_aortic_flow.md) | postischemic recovery of aortic flow ← acadesine · stimulation effect | — | Galiñanes M et al., Acadesine and myocardial protection. St…, Circulation (1992) | [10.1161/01.cir.86.2.598](https://doi.org/10.1161/01.cir.86.2.598) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acadesine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PRKAA1 (modulator), PRKAB1 (modulator), PRKAG1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dixon_1993.pdf` | Dixon R et al., Acadesine (AICA-riboside): disposition…, Journal of clinical pharmac… (1993) | popPK | 9 | [10.1002/j.1552-4604.1993.tb01929.x](https://doi.org/10.1002/j.1552-4604.1993.tb01929.x) | [8227467](https://pubmed.ncbi.nlm.nih.gov/8227467) | The abstract reports quantitative disposition parameters for acadesine, including total plasma clearance (2.2 L/hour/kg) and terminal half-life (~1 week). |

<sub>queue written 2026-09-30T03:46:16.211748+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antonioli_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic efficacy of a novel compound (FA-5) compared to acadesine in a colitis model, without reporting any quantitative pharmacokinetic parameters for acadesine. |
| PD | Antonioli_2021 | not_relevant | 1 | 0 | The paper describes qualitative efficacy comparisons between FA-5 and acadesine in a colitis model but does not report any numeric concentration-effect or dose-response parameters for acadesine. |
| popPK | Bullough_1993 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro/isolated heart experiment assessing cardioprotective effects and radical scavenging, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bullough_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell adhesion and reports IC50 values for biological activity, not pharmacokinetic disposition parameters. |
| popPK | Campàs_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on apoptosis and AMPK activation, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Cheng_2013 | irrelevant | 0 | 0 | The study investigates AICA riboside (not acadesine) as the subject drug. |
| popPK | Cheng_2013_2 | irrelevant | 0 | 0 | The study investigates AICA riboside, not acadesine. |
| popPK | Cronstein_1991 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on adenosine release and neutrophil function, not a pharmacokinetic study, and acadesine is only mentioned as a precursor compound. |
| PGx | Deiman_2026 | not_relevant | 0 | 0 | The paper investigates the association between a genetic variant and disease progression markers, where acadesine is mentioned only as a metabolite, not as a drug subject to pharmacogenomic analysis. |
| popPK | Dixon_1989 | irrelevant | 0 | 0 | The paper concerns AICA-riboside, not acadesine, and is a method development study without PK parameters for the target drug. |
| popPK | Dixon_1991 | irrelevant | 0 | 0 | The study investigates AICA-riboside, not acadesine. |
| popPK | Galiñanes_1992 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cardioprotection and metabolic effects in an isolated rat heart model, reporting functional recovery and metabolite concentrations rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Gong_1993 | not_relevant | 0 | 0 | The paper studies the effect of AICA riboside on ddI metabolism and activity, not a pharmacogenomic effect on acadesine. |
| PGx | Park_2024 | not_relevant | 0 | 0 | The paper discusses a metabolic disorder (AICA ribosiduria) and dietary treatment, not the pharmacogenomics of the drug acadesine. |
| popPK | Wu_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and does not report any pharmacokinetic parameters for acadesine. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is a metabolomic and genetic study on purine metabolism in kidney disease and does not report pharmacokinetic parameters for acadesine. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on metabolomic signatures and genetic associations in kidney disease, not on the pharmacodynamics of acadesine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
