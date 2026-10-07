<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;tavaborole&quot;}]"></div>

# tavaborole

- **generic name:** tavaborole
- **ATC codes:** `D01AE24`
- **DrugBank:** [DB09041](https://go.drugbank.com/drugs/DB09041) · **PubChem:** [CID 11499245](https://pubchem.ncbi.nlm.nih.gov/compound/11499245)
- **molar mass:** 151.93 g/mol (C7H6BFO2) — DrugBank
- **groups:** approved

## About

Tavaborole is a topical antifungal drug used to treat fungal infections of the skin, notably onychomycosis (fungal nail infections). It is an approved medicine, applied topically, and is used mainly in the United States; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011226](https://www.wikidata.org/wiki/Q21011226) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:40 | 9:37 | 0/0/0 | 0/0/0 | 0/0/0 | 275,845/6,546 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/10 | 11/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tavaborole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 531 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Behringer_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review of boron-based bioisosteres and does not report any quantitative pharmacokinetic parameters for tavaborole. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics for antibody-drug conjugates (ADCs) and does not mention tavaborole or provide any PK parameters for it. |
| popPK | Del_2014 | irrelevant | 0 | 0 | The paper is a review of topical antifungal therapies for onychomycosis and contains no pharmacokinetic data or quantitative disposition parameters for tavaborole. |
| popPK | Elewski_2014 | irrelevant | 2 | 0 | This is a review article that discusses the pharmacokinetic properties of tavaborole but does not provide original quantitative disposition parameters or numeric values in the provided text. |
| popPK | Esmaeili_2024 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of nirmatrelvir, not tavaborole. |
| popPK | Gupta_2016 | irrelevant | 2 | 0 | The paper is a review article discussing the efficacy and safety of tavaborole, and the provided evidence contains no quantitative pharmacokinetic parameter values. |
| popPK | Gupta_2020 | irrelevant | 0 | 0 | The paper is a review of efinaconazole in children, and tavaborole is only mentioned as a comparator agent without any pharmacokinetic data. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a general automated pipeline for generating initial PK estimates and uses other drugs (e.g., cefaclor, ceftriaxone) for validation, with no data or parameters for tavaborole. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and antifungal activity of tavaborole derivatives, not on the pharmacokinetic disposition of tavaborole itself. |
| popPK | Jinna_2015 | irrelevant | 2 | 0 | The paper is a review that discusses tavaborole's pharmacokinetics qualitatively (e.g., low systemic absorption, no accumulation) but does not report quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Ju_2024 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model repository for isoniazid, not tavaborole. |
| popPK | Kharouba_2025 | irrelevant | 0 | 0 | The paper is a review of levetiracetam pharmacokinetics in critically ill patients and does not contain any data for tavaborole. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a systematic review of the pharmacokinetics of anakinra, not tavaborole. |
| popPK | Mi_2026 | irrelevant | 0 | 0 | The paper is a review/database of nanoparticle PK-PD in mice and does not mention tavaborole. |
| popPK | Mukker_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug tuvusertib, not tavaborole. |
| popPK | Rich_2019 | irrelevant | 2 | 0 | The abstract mentions that PK parameters were determined and steady state was achieved, but no specific quantitative values (CL, V, Cmax, etc.) are provided in the text. |
| popPK | Rodallec_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel (Ptx) and its polymer prodrug (Ptx-PAAm) in mice, not tavaborole. |
| popPK | Saunders_2017 | irrelevant | 2 | 0 | This is a review article discussing mechanism and clinical data, and the provided evidence contains no quantitative pharmacokinetic parameter values for tavaborole. |
| popPK | Vuong_2026 | irrelevant | 0 | 0 | This is a review article discussing boron-containing drugs in clinical trials and does not report original quantitative pharmacokinetic parameters for tavaborole. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for linezolid, not tavaborole. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
