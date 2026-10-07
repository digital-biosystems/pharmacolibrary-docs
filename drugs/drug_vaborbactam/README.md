<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Vaborbactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vaborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Vaborbactam

- **generic name:** Vaborbactam
- **ATC codes:** `J01DH52`
- **DrugBank:** [DB12107](https://go.drugbank.com/drugs/DB12107) · **PubChem:** [CID 56649692](https://pubchem.ncbi.nlm.nih.gov/compound/56649692)
- **molar mass:** 297.13 g/mol (C12H16BNO5S) — DrugBank
- **groups:** approved, investigational

## About

Vaborbactam is a beta-lactamase inhibitor used in combination with a carbapenem antibiotic to treat urinary tract infections caused by resistant bacteria. It is an approved drug, used mainly in hospital settings for serious gram-negative infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27252228](https://www.wikidata.org/wiki/Q27252228) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vaborbactam | parent | 297.13 | C12H16BNO5S | DrugBank | [56649692](https://pubchem.ncbi.nlm.nih.gov/compound/56649692) | Fornari_2024, Reed_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:55 | 6:43 | 1/1/1 | 0/0/0 | 0/0/0 | 466,833/23,293 | einfracz / qwen3.8-27b | 12 | 1/11 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Principe_2022_reference](drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Principe L et al., Microbiological, Clinical, and PK/PD Fe…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15040463](https://doi.org/10.3390/ph15040463) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Reed_2025_reference](drugs/drug_vaborbactam/Vaborbactam_Reed2025_reference.md) | — | 1-compartment (no model) | 5 | Reed G et al., Population pharmacokinetics of meropene…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00108-25](https://doi.org/10.1128/aac.00108-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fornari_2024_reference](drugs/drug_vaborbactam/Vaborbactam_Fornari2024_reference.md) | — | general linear (no model) | 6 | Fornari C et al., Dose rationale for the use of meropenem…, British journal of clinical… (2024) | [10.1111/bcp.16145](https://doi.org/10.1111/bcp.16145) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vaborbactam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2020.pdf` | Zhuang L et al., Evaluation of Hemodialysis Effect on Ph…, Journal of clinical pharmac… (2020) | popPK | 5 | [10.1002/jcph.1595](https://doi.org/10.1002/jcph.1595) | [32149406](https://pubmed.ncbi.nlm.nih.gov/32149406) | The paper describes a population PK study for vaborbactam in ESRD patients, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-07T11:49:47.799432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assefa_2024 | irrelevant | 1 | 1 | The paper is a systematic review of PK/PD targets (fAUC/MIC) for beta-lactamase inhibitors, reporting exposure indices rather than quantitative disposition parameters (CL, V, Q, ka) for vaborbactam. |
| popPK | Bhavnani_2022 | irrelevant | 4 | 1 | The paper is a PK-PD target attainment analysis that uses existing population PK models (referenced in citations) and provides simulated exposure metrics (AUC distributions) rather than reporting the quantitative disposition parameters (CL, V, etc.) for vaborbactam itself. |
| popPK | Crass_2019 | irrelevant | 0 | 0 | The paper is a review of renal function estimation methodologies and does not report original quantitative pharmacokinetic parameters for vaborbactam. |
| popPK | Gatti_2021 | irrelevant | 0 | 0 | This is a narrative review of novel beta-lactams and does not report specific quantitative PK parameters for vaborbactam. |
| popPK | Gatti_2023 | irrelevant | 1 | 0 | This is a review article discussing PK/PD optimization concepts for beta-lactams without providing original quantitative PK parameter values for vaborbactam. |
| popPK | Gatti_2023_2 | irrelevant | 1 | 0 | The study reports PK/PD target attainment (ratios) and uses a dose/clearance formula but does not report quantitative PK parameters (CL, V, half-life) for vaborbactam. |
| popPK | Gatti_2024 | irrelevant | 3 | 2 | The paper is a biliary PK/PD case series reporting concentration ratios and MIC targets, not a population-PK study reporting standard quantitative disposition parameters like clearance, volume, or intercompartmental clearance. |
| popPK | Han_2021 | irrelevant | 2 | 0 | The paper is a Monte Carlo simulation study that does not report original population pharmacokinetic parameter values (clearance, volume, etc.) for vaborbactam, instead utilizing data from other sources. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a narrative review of antibiotics in liver transplantation and does not report specific quantitative population pharmacokinetic parameters (CL, V, etc.) for vaborbactam. |
| popPK | Lombardi_2026 | irrelevant | 1 | 0 | This is a narrative review discussing multiple new antibiotics including meropenem/vaborbactam, but it does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for vaborbactam. |
| popPK | OJeanson_2025 | irrelevant | 2 | 0 | The paper is a simulation study using previously published PopPK models to calculate probability of target attainment (PTA), and it does not report original numeric disposition parameters (CL, V, etc.) for vaborbactam in the provided evidence. |
| popPK | Principe_2022 | irrelevant | 1 | 0 | This is a review paper covering many beta-lactam/beta-lactamase inhibitor combinations, and while it mentions meropenem/vaborbactam, it does not provide specific quantitative PK parameters (CL, Vd, etc.) for vaborbactam itself in the provided text. |
| popPK | Rando_2024 | irrelevant | 2 | 0 | This is a systematic review of other studies and does not provide original quantitative PK parameter values for vaborbactam in the text. |
| popPK | Trang_2021 | relevant | 10 | 4 | This is a population PK study for vaborbactam, but the specific numeric parameter estimates (CL, V, etc.) are located in Tables 2/3 and Supplementary Tables S1/S2, which are not included in the provided evidence text. |
| popPK | Zhanel_2018 | relevant | 4 | 3 | The paper is a review that reports approximate population PK parameters (Vd, t1/2) for vaborbactam but lacks detailed clearance (CL) values or compartmental parameters required for robust extraction. |
| popPK | Zhuang_2020 | irrelevant | 5 | 0 | The paper describes a population PK study for vaborbactam in ESRD patients, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:49 UTC</sub>
