<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;mecasermin&quot;}]"></div>

# mecasermin

- **generic name:** mecasermin
- **ATC codes:** `H01AC03`
- **DrugBank:** [DB01277](https://go.drugbank.com/drugs/DB01277) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Mecasermin, a recombinant growth factor, is used to treat Laron syndrome, a growth disorder. It is authorised in the European Union and is used only in specialised care, given its rare indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6804390](https://www.wikidata.org/wiki/Q6804390) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:15 | 1:39 | 0/0/0 | 0/0/0 | 0/0/0 | 83,048/1,157 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mecasermin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IGF1 (gene replacement), IGF1R (target), IGF2R (target), IGFALS (carrier), IGFBP1 (carrier), IGFBP2 (carrier), IGFBP3 (carrier), IGFBP3 (inhibitor), IGFBP4 (carrier), IGFBP5 (carrier), IGFBP6 (carrier), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 67 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashkenazi_2016 | irrelevant | 0 | 0 | The study investigates TV-1106 (an albumin-fused growth hormone), not mecasermin. |
| popPK | Burkhardt_2014 | irrelevant | 0 | 0 | The paper studies the mechanism of ethanol's effect on astroglial proliferation in rats and does not involve mecasermin or any pharmacokinetic parameters. |
| popPK | Germinario_1995 | irrelevant | 0 | 0 | The paper studies the effect of IGF-1 on HIV replication in vitro and does not involve mecasermin or its pharmacokinetics. |
| popPK | He_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of YPEG-rhGH, a different drug, not mecasermin. |
| popPK | Johansson_2025 | irrelevant | 0 | 0 | The paper focuses on low-dose tamoxifen and biomarkers (IGFBP-3, IGF-I) for breast cancer efficacy, containing no data on mecasermin pharmacokinetics. |
| popPK | Kaplan_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of veligrotug (an anti-IGF-1R antibody), not mecasermin. |
| popPK | Khaowroongrueng_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of R7072, a monoclonal antibody, in mice, not mecasermin. |
| popPK | Mizuno_2001 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of IGF-1, not mecasermin. |
| popPK | Motani_1996 | irrelevant | 0 | 0 | The study investigates the effect of IGF-1 (mecasermin) on platelet aggregation and calcium signaling, not its pharmacokinetics. |
| popPK | Murray_2025 | irrelevant | 0 | 0 | The study investigates the effects of exercise and protein supplementation on IGF-1 concentrations and is not a pharmacokinetic study of mecasermin. |
| popPK | Neumeyer_2026 | irrelevant | 1 | 1 | The study reports pharmacokinetic parameters for NNZ-2591 (an IGF-1 metabolite analog), not for the drug mecasermin. |
| popPK | Thorsted_2016 | irrelevant | 0 | 0 | The study focuses on recombinant human growth hormone (rhGH), not mecasermin. |
| popPK | Toffoletto_2016 | irrelevant | 0 | 0 | The study evaluates recombinant human growth hormone (r-hGH), not mecasermin. |
| popPK | Xing_2006 | irrelevant | 0 | 0 | The paper investigates the electrophysiological effects of IGF-1 on ion channels in rat neurons, not the pharmacokinetics of mecasermin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
